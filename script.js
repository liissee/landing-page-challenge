// // const navBarColor = () => {
// //   const menuButton = document.getElementById("headerId")
// //   menuButton.style.background = "hsla(229, 31%, 21%, 0.952)"
// // }

// const navBarColor = () => {
//   const headerBackground = document.getElementById("headerId");
//   headerBackground.classList.toggle("open");



//   const svgText = document.getElementById("text");
//   svgText.classList.toggle("text");

// }

// if (window.innerWidth < 760) {
//   const navButton = document.getElementById("navButton")
//   navButton.style = 'background-color: inherit; color: white; width: 80%; margin-top: 40px;';
// }

const acc = document.getElementsByClassName("question");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}