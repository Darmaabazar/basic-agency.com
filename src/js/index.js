import LocomotiveScroll from 'locomotive-scroll';
import '../css/style.css';
import '../css/locomotive-scroll.css';
import '../css/services.css';
import '../css/careers.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


