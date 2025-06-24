const image = document.getElementById("room-image");
const name = document.getElementById("room-name");
const price = document.getElementById("room-price");

const form = document.getElementById("form");

const roomData = JSON.parse(localStorage.getItem("selectedRoom"));

if (roomData) {
  image.src = roomData.image;
  name.textContent = roomData.name;
  price.textContent = roomData.price;
}

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


