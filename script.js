function input(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function showMessage() {
    alert("Hello world");
    clearDisplay();
}
