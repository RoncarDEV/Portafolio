const nav = document.querySelector(".navegador");
const modoDark = document.querySelector(".swich");
const btnFijo = document.querySelector(".btn__fijo");
const cardSkill = document.getElementsByClassName(".skill__card");

modoDark.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro");
  nav.classList.toggle("nav-dark");
  btnFijo.classList.toggle("boton-dark");
  modoDark.classList.toggle("active");

  // modo guardado en localstorage
  if (document.body.classList.contains("modo-oscuro")) {
    localStorage.setItem("oscuro", "true");
  } else {
    localStorage.setItem("oscuro", "false");
  }
});

// comprovacion del localstore
if (localStorage.getItem("oscuro") === "true") {
  document.body.classList.add("modo-oscuro");
  nav.classList.add("nav-dark");
  btnFijo.classList.add("boton-dark");
} else {
  document.body.classList.remove("modo-oscuro");
  nav.classList.remove("nav-dark");
  btnFijo.classList.remove("boton-dark");
  modoDark.classList.remove("active");
}

// libreria
window.sr = ScrollReveal();

// navegador
sr.reveal(".navegador", {
  duration: 3000,
  origin: "bottom",
  distance: "-100px",
});

// titulo del navegador

sr.reveal(".navagador__titulo", {
  duration: 4000,
  origin: "top",
  distance: "100px",
});
// titulo de bienvenida
sr.reveal(".bienvenida__titulo", {
  duration: 2000,
  origin: "left",
  distance: "100px",
});

// boton de contacto bienvenida
sr.reveal(".boton__contactar", {
  duration: 2000,
  origin: "bottom",
  distance: "50px",
});

// bienvenida texto 
sr.reveal(".bienvenida__texto", {
  duration: 2000,
  origin: "",
  distance: "150px",
});

// imagen principal
sr.reveal(".contenedor__foto", {
  duration: 2000,
  origin: "",
  distance: "-250px",
});

// redes sociales
sr.reveal(".redes__sociales", {
  duration: 2000,
  origin: "bottom",
  distance: "250px",
});

// imagen about
sr.reveal(".scroll__img", {
  duration: 3000,
  origin: "",
  distance: "100px",
});

// titulo about
sr.reveal(".scroll__titulo", {
  duration: 3000,
  origin: "top",
  distance: "50px",
});

// estadisticas about
sr.reveal(".scroll__stast", {
  duration: 3000,
  origin: "top",
  distance: "50px",
});

// btn about
sr.reveal(".about__btn", {
  duration: 3000,
  origin: "bottom",
  distance: "50px",
});

// skill__card

sr.reveal(".skill__card", {
  duration: 2000,
  origin: "bottom",
  distance: "-300px",
});
// proyectos
sr.reveal(".card", {
  duration: 3000,
  origin: "bottom",
  distance: "-300px",
});
