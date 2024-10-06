function input(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function showMessage() {
    // Chỉ hiển thị modal khi nhấn dấu =
    var modal = document.getElementById("customAlert");
    modal.style.display = "flex";
}

function closeAlert() {
    var modal = document.getElementById("customAlert");
    modal.style.display = "none";
    clearDisplay();
}
