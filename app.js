const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

/*
var pressedButton = document.getElementsByClassName("btn")[0];
pressedButton.addEventListener("click", function (event) {
  alert("Your Message is sent!..");
}); 
*/
/*
document.getElementById("btn").onclick = function () {
  location.href = "index.php";
};
*/