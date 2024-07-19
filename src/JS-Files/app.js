


//Header static while scrolling
var header = document.getElementById("myHeader");

window.addEventListener("scroll", function() {
  var sticky = header.offsetTop;
  var scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  header.style.backgroundColor = "rgba(0, 0, 128, 1" + scrollPosition + ")";
  header.style.zIndex = "999999999";
  header.style.boxShadow = "0 0 10px rgba(0, 0, 125, " + Math.max(1 - scrollPosition, 0) + ")";


  if (window.pageYOffset > sticky) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  if (window.pageYOffset === 0) {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
});



document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.hero__container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 8100, // Adjust the delay according to your preference (in milliseconds)
        },
        speed: 1200,
        breakpoints: {
            // when window width is <= 768px
            768: {
                slidesPerView: 1,
            }
        }
    });
});




//Opening and Closing Navbar List for smaller devices
document.querySelector('.menubutton').addEventListener('click', function() {
  var navMenu = document.querySelector('.nav__list');
  navMenu.classList.toggle('open');
});



const dropdownLinks = document.querySelectorAll('.nav__link');

function toggleDropdown(event) {
  event.preventDefault(); 
  const dropdownMenu = event.target.nextElementSibling; 
  const currentlyOpenMenu = document.querySelector('.dropdown__menu.active');
  if (currentlyOpenMenu && currentlyOpenMenu !== dropdownMenu) {
    currentlyOpenMenu.classList.remove('active'); 
  }
  dropdownMenu.classList.toggle('active'); 
}

function closeAllDropdowns() {
  const openMenus = document.querySelectorAll('.dropdown__menu.active');
  openMenus.forEach(menu => menu.classList.remove('active'));
}

dropdownLinks.forEach(link => link.addEventListener('click', toggleDropdown));

document.addEventListener('click', (event) => {
  if (!event.target.classList.contains('nav__link') && !event.target.closest('.dropdown__menu')) {
    closeAllDropdowns();
  }
});

const mediaQuery = window.matchMedia('(max-width: 768px)'); 
mediaQuery.addEventListener('change', () => {
  if (mediaQuery.matches) {
    dropdownLinks.forEach(link => link.removeEventListener('click', toggleDropdown));
  } else {
    dropdownLinks.forEach(link => link.addEventListener('click', toggleDropdown));
  }
});
















//Creating a dynamic counter using JavaScript to showcase statistics or metrics on a webpage.
let accomplishmentValues = document.querySelectorAll(".accomplishment__value");
let initialFigures = [100, 200, 300, 250];
let finalFigures = [1305, 1500, 2000, 1789];

let counters = initialFigures.slice();

let intervals = [];

for (let i = 0; i < accomplishmentValues.length; i++) {
    intervals[i] = setInterval(() => {
        if (counters[i] >= finalFigures[i]) {
            clearInterval(intervals[i]);
        } else {
            counters[i] += 1;
            accomplishmentValues[i].innerHTML = counters[i] + "+";
        }
    }, 10);
}


//Implementing a testimonial slider using Swiper.js for smooth and intuitive testimonial browsing.
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.client__review__conainer', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay:{
            delay: 5000
        },
        speed: 1000,
        breakpoints: {
            // when window width is <= 768px
            768: {
                slidesPerView: 3,
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
  const backToTopButton = document.getElementById('backToTopButton');

  backToTopButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
