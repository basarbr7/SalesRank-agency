// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  });
  

//   const navbar = document.querySelector("#nav")
//   window.addEventListener("scroll", (e)=>{
//     let scrolly = window.scrollY
//     if(scrolly>100){
//       navbar.classList.add("fixed", "top-0", "header-animation")
//       navbar.classList.remove("absolute");
//     }else{
//       navbar.classList.remove("fixed", "top-0", "header-animation")
//       navbar.classList.add("absolute");
//     }
    
//   })

   // Smooth scroll 
   const anchorsAll = document.querySelectorAll('a[href^="#"]')

   anchorsAll.forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       e.preventDefault();
       const target = document.querySelector(this.getAttribute('href'));
       const navbarHeight = 60;
       const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
       
       window.scrollTo({
         top,
         behavior: 'smooth'
       });
     });
   });


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



