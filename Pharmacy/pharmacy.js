// لما تضغط على "Add to Cart"
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const card = this.closest(".card");
    const name = card.querySelector("h3").textContent;

    alert(`${name} added to cart ✅!`);
    // window.location.href = "./Cart/cart.html";
  });
});
