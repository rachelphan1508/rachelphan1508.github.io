let sIndex = 1;
showSlides2(sIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(sIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(sIndex = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("FND-slide");
  let dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {sIndex = 1}
  if (n < 1) {sIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sIndex-1].style.display = "block";
  dots[sIndex-1].className += " active";
}

