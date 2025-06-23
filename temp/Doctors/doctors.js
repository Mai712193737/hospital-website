let btn = document.querySelectorAll(".book-btn");

btn.forEach((button) => {
  button.addEventListener("click", function (e) {
    alert("Appointment booked with the doctor ✅");
  });
});
