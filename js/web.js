document.addEventListener("mousemove",pallarax);

function pallarax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')
    
    const x =(window.innerWidth - e.pageX*speed)/100
    const y =(window.innerHeight - e.pageY*speed)/100

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
// modo oscuro 
const modoDark = document.querySelector(".swich");

modoDark.addEventListener("click", () => {
  modoDark.classList.toggle("active");
  document.body.classList.toggle("modo__oscuro");

  // modo guardado en localstorage
  if (document.body.classList.contains("modo__oscuro")) {
    localStorage.setItem("oscuro", "true");
  } else {
    localStorage.setItem("oscuro", "false");
  }
});

// comprovacion del localstore
if (localStorage.getItem("oscuro") === "true") {
  document.body.classList.add("modo__oscuro");
  modoDark.classList.add("active");

} else {
  document.body.classList.remove("modo__oscuro");
  modoDark.classList.remove("active");
}


// libreria
window.sr = ScrollReveal();

// navegador
sr.reveal(".nombre", {
  duration: 2000,
  origin: "left",
  distance: "1000px",
});

