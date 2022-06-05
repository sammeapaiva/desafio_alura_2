document.getElementById("first").addEventListener("keydown", function(event) {
  event.preventDefault();
  console.log(`${event.type} hasbeen fired`);
  console.log(event.key);
});