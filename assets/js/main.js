//1st infinite slider starts
var swiper = new Swiper(".catalog-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });
//1st infinite slider ends

//2nd infinite slider starts
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
//2nd infinite slider ends

//like button activation starts 
  let likeButton = document.querySelectorAll("#favorite")
  let likeIcon = document.querySelectorAll("#favorite i")
  
  for(let i = 0; i<likeButton.length; i++){
    likeButton[i].addEventListener("click", () => {
      likeButton[i].style.backgroundColor = "red"
      likeIcon[i].style.color = "white"
    })
  }
//like button activation ends 


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
  