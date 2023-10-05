// Функція для генерації випадкового кольору
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функція для зміни кольору при кліку
function changeColorOnClick(event) {
    var cell = event.target;
    cell.style.backgroundColor = selectedColor;
}

// Функція для зміни кольору стовпців по подвійному кліку
function changeColumnColors(event) {
    var cell = event.target;
    var columnIndex = cell.cellIndex;
    var table = document.getElementById("myTable");
    var rows = table.rows;

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var cells = row.cells;
        for (var j = 0; j < cells.length; j++) {
            if (j % 2 === columnIndex % 2) {
                cells[j].style.backgroundColor = selectedColor;
            }
        }
    }
}

// Функція для зміни кольору на випадковий при наведенні
function changeColorOnMouseOver(event) {
    var cell = event.target;
    if (cell.style.backgroundColor !== selectedColor) {
        cell.style.backgroundColor = getRandomColor();
    }
}

// Створення таблиці та обробники подій
var table = document.getElementById("myTable");

for (var i = 0; i < 6; i++) {
    var row = table.insertRow();
    for (var j = 0; j < 6; j++) {
        var cell = row.insertCell();
        cell.textContent = i * 6 + j + 1;

        // Додавання обробників подій
        cell.addEventListener("click", changeColorOnClick);
        cell.addEventListener("dblclick", changeColumnColors);
        cell.addEventListener("mouseover", changeColorOnMouseOver);
    }
}

var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value;

// Обробник події для оновлення обраного кольору з інпута
colorPicker.addEventListener("input", function () {
    selectedColor = colorPicker.value;
});
