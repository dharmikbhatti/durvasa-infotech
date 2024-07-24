let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot-mobile");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot-tablet");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// accordion-page-12
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active2");
    var panell = this.nextElementSibling;
    if (panell.style.display === "block") {
      panell.style.display = "none";
    } else {
      panell.style.display = "block";
    }
  });
}

//accordation in laptop
var ac = document.getElementsByClassName("accordion1");
var j;

for (j = 0; j < ac.length; j++) {
  ac[j].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var pane = this.nextElementSibling;
    if (pane.style.display === "block") {
      pane.style.display = "none";
    } else {
      pane.style.display = "block";
    }
  });
}

var ac = document.getElementsByClassName("accordion1");
var j;

for (j = 0; j < ac.length; j++) {
  ac[j].addEventListener("click", function () {
    this.classList.toggle("active");
    var pane = this.nextElementSibling;
    if (pane.style.maxHeight) {
      pane.style.maxHeight = null;
    } else {
      pane.style.maxHeight = pane.scrollHeight + "px";
    }
  });
}

//accordation in tablet and mobile
// var ac = document.getElementsByClassName("accordion");
// var j;

// for (j = 0; j < ac.length; j++) {
//   ac[j].addEventListener("click", function () {
//     this.classList.toggle("active2");
//     var pane = this.nextElementSibling;
//     if (pane.style.maxHeight) {
//       pane.style.maxHeight = null;
//     } else {
//       pane.style.maxHeight = pane.scrollHeight + "px";
//     }
//   });
// }



//navbar accordation in tablet and mobile
var acc = document.getElementsByClassName("dropdownNav");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activeNav");

    /* Toggle between hiding and showing the active panel */
    var panelNav = this.nextElementSibling;
    if (panelNav.style.display === "block") {
      panelNav.style.display = "none";
    } else {
      panelNav.style.display = "block";
    }
  });
}

// var acc = document.getElementsByClassName("dropdownNav");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active9");
//     var panepanelNavl = this.nextElementSibling;
//     if (panelNav.style.Height) {
//       panelNav.style.Height = null;
//     } else {
//       panelNav.style.Height = panelNav.scrollHeight + "px";
//     }
//   });
// }
