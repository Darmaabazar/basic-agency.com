import LocomotiveScroll from 'locomotive-scroll';
import '../css/style.css';
import '../css/locomotive-scroll.css';
import '../css/services.css';
import '../css/careers.css';
import '../css/contact.css';
import '../css/about.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});



// var cursor = document.querySelector(".cursor");

// var mouseX = 0, mouseY = 0;

// document.querySelector(".hero").on("mousemove", function(e) {
//   mouseX = e.pageX;
//   mouseY = e.pageY;

// });

// cursor.style.left = mouseX;
// cursor.style.top = mouseY;
  




