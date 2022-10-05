//burger menu starts
const menuBtn = document.querySelector('.burger-menu')
  const menu = document.querySelector(".layer")
  const cancelBtn = document.querySelector('.close-icon')

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle('is-active')
  })

  cancelBtn.addEventListener("click", function () {
    menu.classList.toggle('is-active')
  })
  //burger menu ends