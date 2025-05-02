
//  mobile menu toggle part
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });
  
// navbar part 
  const navbar = document.querySelector("#nav")
  window.addEventListener("scroll", (e)=>{
    let scrolly = window.scrollY
    if(scrolly>100){
      navbar.classList.add("fixed", "top-0", "header-animation")
      navbar.classList.remove("absolute");
      navbar.classList.add("bg-[#B9B9B9]");
      navbar.classList.remove("mt-[30px]")

    }else{
      navbar.classList.remove("fixed", "top-0", "header-animation")
      navbar.classList.add("absolute");
      navbar.classList.remove("bg-[#B9B9B9]")
      navbar.classList.add("mt-[30px]")
    }
    
  })


  // chat part

  const input = document.querySelector("input")
  const submitBtn =document.querySelector(".submit_btn")
  const output = document.querySelector("#output")

  




  //  slider part
  const sliderWrapper = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const currentSlideText = document.querySelector(".prevText");

  let currentIndex = 0;

  function updateSlider(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
    currentSlideText.textContent = String(index + 1).padStart(2, "0");
  }

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    updateSlider(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = totalSlides - 1;
    }
    updateSlider(currentIndex);
  });


  updateSlider(currentIndex);







