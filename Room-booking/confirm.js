console.log(localStorage.getItem("selectedRoom")); 
const roomData = JSON.parse(localStorage.getItem("selectedRoom"));
if (roomData) {
  console.log(roomData.image);
  console.log(roomData.name);
  console.log(roomData.price);
}