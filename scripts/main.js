const myImage = document.getElementById("myPic");

myImage.addEventListener("click", () => {
  const currentSrc = myImage.getAttribute("src");
  if (currentSrc === "images/me.jpg") {
    myImage.setAttribute("src", "images/passportjulius.jpg");
  } else {
    myImage.setAttribute("src", "images/me.jpg");
  }
});
function goBack() {
  window.history.back();
}


