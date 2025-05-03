//  mobile menu toggle part
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

// navbar part
const navbar = document.querySelector("#nav");
window.addEventListener("scroll", (e) => {
  let scrolly = window.scrollY;
  if (scrolly > 100) {
    navbar.classList.add("fixed", "top-0", "header-animation");
    navbar.classList.remove("absolute");
    navbar.classList.add("bg-[#B9B9B9]");
    navbar.classList.remove("mt-[30px]");
  } else {
    navbar.classList.remove("fixed", "top-0", "header-animation");
    navbar.classList.add("absolute");
    navbar.classList.remove("bg-[#B9B9B9]");
    navbar.classList.add("mt-[30px]");
  }
});

// chat part

const input = document.querySelector("input");
const submitBtn = document.querySelector("#submit_btn");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (inputValue !== "") {
    const messageWrapper = document.createElement("div");
    messageWrapper.className = "flex items-start gap-6 mt-4";

    const avatar = document.createElement("div");
    avatar.className = "w-10 h-10 bg-blue-300 rounded-full";

    const messageBox = document.createElement("div");
    messageBox.className =
      "bg-white px-4 py-2 rounded-lg text-base md:text-lg font_lato leading-8 max-w-[70%] md:max-w-[85%]";
    messageBox.textContent = inputValue;

    messageWrapper.appendChild(avatar);
    messageWrapper.appendChild(messageBox);

    output.appendChild(messageWrapper);

    input.value = "";
  }
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


// collapse part

const collapseBtn = document.querySelectorAll(".collapse_Icon")

let collapse = false
collapseBtn.forEach(btn =>{
  btn.addEventListener("click", ()=>{
    const collapseItem = btn.closest(".flex").querySelector(".collapse_Item")
    const icon = btn.querySelector("i")
    if(!collapse){
      collapseItem.classList.add("hidden")
      icon.classList.add("fa-minus")
      icon.classList.remove("fa-plus")

      collapse = true
    }else{
      collapseItem.classList.remove("hidden")
      icon.classList.add("fa-plus")
      icon.classList.remove("fa-minus")
      collapse= false
    }
  })
})


