const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hLink = document.querySelectorAll("#hLink")
const faSolid = document.querySelector(".fa-solid")
const closeMenu = document.querySelector("#close-menu")

hamburger.addEventListener("click", () => {
   menu.classList.toggle("hidden")
   faSolid.classList.toggle("fa-xmark")
})

closeMenu.addEventListener("click", () => {
   menu.classList.add("hidden")
   faSolid.classList.remove("fa-xmark")
})

hLink.forEach((link) => {
   link.addEventListener("click", () => {
      menu.classList.toggle("hidden")
      faSolid.classList.toggle("fa-xmark")
   })
})
