var source = $("#list-items").html();
var template = Handlebars.compile(source);

var addButton = $("#add");
var removeButton = $(".remove-item");
var listContainer = $("#todo-list-container");
var todoInput = $("#item-input");

var items = [];

addButton.click(function (e) {
    handleAdd();
});

todoInput.keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault();
        handleAdd();
    }
});

listContainer.click(function (e) {
    var el = $(e.target);
    if (el.hasClass("remove-item")) {
        removeItem(el.data("index"));
        updateView();
    } else if (el.hasClass("toggle-done")) {
        toggleDone(el.data("index"));
        updateView();
    }
});

function updateView() {
    var html = template({ items: items });
    listContainer.html(html);
}

function handleAdd() {
    var itemText = todoInput.val();
    if (!itemText)
        return;
    addItem(itemText);
    todoInput.val(null);
    updateView();
}

function addItem(itemText) {
    items.push({
        text: itemText,
        color: "danger",
        checked: false
    });
}

function removeItem(index) {
    items.splice(index, 1);
}

function toggleDone(index) {
    var item = items[index];
    items.splice(index, 1, {
        text: item.text,
        color: !item.checked ? "success" : "danger",
        checked: !item.checked
    });
}