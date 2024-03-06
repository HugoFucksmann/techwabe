// Esperar a que la página cargue completamente
window.addEventListener("load", function () {
  var preLoder = document.querySelector(".loader-wrapper");
  setTimeout(function () {
    preLoder.style.display = "none";
  }, 700);
  document.body.classList.add("loaded");
});

// Smooth Scrolling
document.querySelectorAll("a.page-scroll").forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Navegación y menús desplegables
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (window.pageYOffset >= 80) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
});

var dropdownTogglers = document.querySelectorAll(
  ".dropdown-menu a.dropdown-toggler"
);
dropdownTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();
    var subMenu = this.nextElementSibling;
    subMenu.classList.toggle("show");
    this.parentElement.classList.toggle("show");
  });
});

var navbarLinks = document.querySelectorAll(
  ".header_wrap .navbar-collapse ul li a.nav_item"
);
navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    var navbarCollapse = document.querySelector(
      ".header_wrap .navbar-collapse"
    );
    navbarCollapse.classList.remove("show");
    document.querySelector("header").classList.remove("active");
  });
});

var navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function () {
  document.querySelector("header").classList.toggle("active");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 991) {
    document.querySelector("header").classList.remove("active");
  }
});

// Inicializar componentes
/*  var languageSelects = document.querySelectorAll("#lng_select, #doc_select");
  languageSelects.forEach(function(select) {
    initDropdown(select);
  }); */

// Otros componentes y funcionalidades...
