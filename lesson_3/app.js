const nextBtn = document.querySelector(".arrow.right-arrow");
const backBtn = document.querySelector(".arrow.left-arrow");

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.nav-item');

let activeSlideIndex = 0;

function openSlide(index){
    const activeSlide = document.querySelector(".slide.active");
    activeSlide.classList.remove('active');
    const newSlide = slides[index];
    newSlide.classList.add('active');
    updateBackground();
}

function selectIndicator(index){
    const activeNav = document.querySelector('.nav-item.active');
    activeNav.classList.remove('active');
    const newNav = indicators[index];
    newNav.classList.add('active');
}

function updateBackground(){
    const activeSlide = document.querySelector(".slide.active");
    const bgImg = activeSlide.style.backgroundImage;
    document.body.style["background-image"] = bgImg;

    // camelCase backgroundImage
    // kebabCase background-image
    // snakeCase background_image
    // pascalCase BackgroundImage

}

nextBtn.onclick = () => {
  activeSlideIndex++;

  if(activeSlideIndex >= slides.length) {
    activeSlideIndex = 0;
  }
  
  openSlide(activeSlideIndex);
  selectIndicator(activeSlideIndex);
};

backBtn.onclick = () => {
  activeSlideIndex--;

  if(activeSlideIndex < 0){
    activeSlideIndex = slides.length - 1;
  }

  openSlide(activeSlideIndex);
  selectIndicator(activeSlideIndex);
};

for(let i = 0; i < indicators.length; i++){
    const nav = indicators[i];
    nav.onclick = () => {
        activeSlideIndex = i;
        openSlide(activeSlideIndex);
        selectIndicator(activeSlideIndex);
    }
}

updateBackground();

// refactoring



// nextBtn.addEventListener("click", function () {
//   console.log("next");
// });

// backBtn.addEventListener("click", function () {
//   console.log("back");
// });

