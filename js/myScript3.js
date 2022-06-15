let sI = 1;
showSlides3(sI);

// Next/previous controls
function plusSlides3(n) {
  showSlides3(sI += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(sI = n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("AFU-slide");
  let dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {sI = 1}
  if (n < 1) {sI = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sI-1].style.display = "block";
  dots[sI-1].className += " active";
}

