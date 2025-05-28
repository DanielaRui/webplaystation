
const preguntasRespuestas = [
  {
    pregunta: "¿Cuál fue la primera consola de videojuegos lanzada por Sony?",
    respuesta: "La PlayStation original, lanzada en 1994."
  },
  {
    pregunta: "¿Qué personaje es la mascota icónica de PlayStation?",
    respuesta: "Crash Bandicoot."
  },
  {
    pregunta: "¿En qué año se lanzó la PlayStation 2?",
    respuesta: "En el año 2000."
  },
  {
    pregunta: "¿Cuál es el nombre del servicio de suscripción de juegos de Sony?",
    respuesta: "PlayStation Plus."
  },
  {
    pregunta: "¿Qué exclusivo de PlayStation presenta a Kratos como protagonista?",
    respuesta: "God of War."
  },
  {
    pregunta: "¿Qué estudio desarrolló el juego 'The Last of Us'?",
    respuesta: "Naughty Dog."
  }
];


const preguntaEl = document.getElementById("pregunta");
const respuestaEl = document.getElementById("respuesta");
const mostrarBtn = document.getElementById("mostrarBtn");
const nuevaPreguntaBtn = document.getElementById("nuevaPreguntaBtn");

let indiceActual = 0;

// Función para mostrar una pregunta aleatoria
function mostrarPregunta() {
  indiceActual = Math.floor(Math.random() * preguntasRespuestas.length);
  const item = preguntasRespuestas[indiceActual];
  preguntaEl.textContent = item.pregunta;
  respuestaEl.textContent = item.respuesta;
  respuestaEl.style.display = "none";
}

// Mostrar la respuesta
mostrarBtn.addEventListener("click", () => {
  respuestaEl.style.display = "block";
});

// Cambiar a una nueva pregunta
nuevaPreguntaBtn.addEventListener("click", () => {
  mostrarPregunta();
});

// Inicializar con una pregunta al cargar
window.addEventListener("DOMContentLoaded", () => {
  mostrarPregunta();
});
