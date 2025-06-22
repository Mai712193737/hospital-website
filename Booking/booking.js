const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach((input) => {
        if (!checkInput(input)) {
            valid = false;
        }
    });

    if (!valid) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }
    else {
        e.preventDefault();
        alert("booking finished successfully!");
        window.location.href = "../Home/home.html";
    }
    
});

function checkInput(input) {
    if (!input.disabled && input.value.trim() === "") {
        input.style.borderColor = "red";
        return false;
    } else {
        input.style.borderColor = "#fff";
        return true;
    }
}
