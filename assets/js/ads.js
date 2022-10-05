//author slides start
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
//author slides end

//range slider color fill by value starts
  class Slider {
    constructor (rangeElement, valueElement, options) {
        this.rangeElement = rangeElement
        this.valueElement = valueElement
        this.options = options

        // Attach a listener to "change" event
        this.rangeElement.addEventListener('input', this.updateSlider.bind(this))
    }

    // Initialize the slider
    init() {
        this.rangeElement.setAttribute('min', options.min)
        this.rangeElement.setAttribute('max', options.max)
        this.rangeElement.value = options.cur

        this.updateSlider()
    }

    // Format the money
    asMoney(value) {
        return parseFloat(value) + 'km'
            .toLocaleString('en-US', { maximumFractionDigits: 2 })
    }

    generateBackground(rangeElement) {
        if (this.rangeElement.value === this.options.min) {
            return
        }

        let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
        return 'background: linear-gradient(to right, rgb(48, 227, 202), rgb(48, 227, 202) ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
    }

    updateSlider (newValue) {
        this.valueElement.innerHTML = this.asMoney(this.rangeElement.value)
        this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
}


let rangeElement = document.querySelector('.range [type="range"]')
let valueElement = document.querySelector('.range .range__value span')

let options = {
    min: 0,
    max: 100,
    cur: 100
}

if (rangeElement) {
    let slider = new Slider(rangeElement, valueElement, options)

    slider.init()
}
//range slider color fill by value ends


//filter by category starts
  let selectedCategory = document.querySelector("#category-span")
  let allUls = document.querySelectorAll(".more-filters ul")


  document.getElementById("search-select").addEventListener('change', function(){
      const n = this.value;

      if(n === "books-magazines"){
        selectedCategory.innerText = "Books & Magazines"
        for(let i = 0; i<allUls.length;i++){
          allUls[i].style.display = "none"
        }
        document.getElementById("books-magazines-ul").style.display = "block"
      }else if(n === "all-categories"){
        selectedCategory.innerText = "All Categories"
        for(let i = 0; i<allUls.length;i++){
          allUls[i].style.display = "none"
        }
      }else if(n === "furniture"){
        selectedCategory.innerText = "Furniture"
        for(let i = 0; i<allUls.length;i++){
          allUls[i].style.display = "none"
        }
        document.getElementById("furniture-ul").style.display = "block"
      }else if(n === "real-estate"){
        selectedCategory.innerText = "Real Estate"
        for(let i = 0; i<allUls.length;i++){
          allUls[i].style.display = "none"
        }
        document.getElementById("real-estate-ul").style.display = "block"
      }else if(n === "electronics"){
        selectedCategory.innerText = "Electronics"
        for(let i = 0; i<allUls.length;i++){
          allUls[i].style.display = "none"
        }
        document.getElementById("electronics-ul").style.display = "block"
      }else if(n === "cars-vehicles"){
        selectedCategory.innerText = "Cars & Vehicles"
        for(let i = 0; i<allUls.length;i++){
          allUls[i].style.display = "none"
        }
        document.getElementById("cars-vehicles-ul").style.display = "block"
      }else if(n === "others"){
        selectedCategory.innerText = "Others"
        for(let i = 0; i<allUls.length;i++){
          allUls[i].style.display = "none"
        }
        document.getElementById("others-ul").style.display = "block"
      }
  })
  //filter by category ends

  
  //like button activation starts
  let likeButton = document.querySelectorAll("#favorite")
  
  for(let i = 0; i<likeButton.length; i++){
    likeButton[i].addEventListener("click", () => {
      likeButton[i].classList.toggle('is-active')
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