const form = document.getElementById("form");
const donation = document.getElementById("donation-type");
const date = document.getElementById("date");
const money = document.getElementById("money");

form.addEventListener("submit", (e) => {
  const inputs = form.querySelectorAll("input, select");
  let valid = true;

  inputs.forEach((input) => {
    if (!checkInput(input)) {
      valid = false;
    }
  });

  if (!valid) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else {
    e.preventDefault();
    alert("Donation finished successfully!");
    window.location.href = "../Home/home.html";
  }
});

donation.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "blood":
      date.hidden = false;
      money.hidden = true;
      break;
    case "money":
      money.hidden = false;
      date.hidden = true;
      break;
  }
});

function checkInput(input) {
  if (input.offsetParent === null || input.disabled) {
    return true;
  }

  if (input.value.trim() === "") {
    input.style.borderColor = "red";
    return false;
  } else {
    input.style.borderColor = "#fff";
    return true;
  }
}
