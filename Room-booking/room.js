const bookButtons = document.querySelectorAll(".add-to-cart");

bookButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const card = button.closest(".card");
    const image = card.querySelector("img").getAttribute("src");
    const name = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;

    const roomData = {
      image,
      name,
      price,
    };
    console.log("image:", image);
    console.log("name:", name);
    console.log("price:", price);

    localStorage.setItem("selectedRoom", JSON.stringify(roomData));

    window.location.href = "confirm.html";
  });
});
