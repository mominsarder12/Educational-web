//  active class
const navlinks = document.querySelectorAll(".navigation ul li a");

// navlinks.forEach(function (links) {
//   links.addEventListener('click', () => {
//       navlinks.forEach(function (links) {
//         links.classList.remove('active');
//       })
//       links.classList.add('active');
//   })
// })

// toggle humbarger menu
const menuButton = document.getElementById("menu-btn");
const addedClass = document.getElementById("new");
const menuClose = document.getElementById("menu-close");

menuButton.addEventListener("click", () => {
  addedClass.classList.add("show");
});

menuClose.addEventListener("click", () => {
  addedClass.classList.remove("show")
});

// add event listener
const card = document.querySelectorAll("#course .course-pro");

card.forEach(function (card) {
  card.addEventListener("click", () => {
    window.location.href = "course-inner.html"
  })
})




