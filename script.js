let currentQuestionIndex = 0;
const questions = document.querySelectorAll(".question");

function nextQuestion() {
  // Oculta la pregunta actual
  questions[currentQuestionIndex].classList.remove("active");

  // Avanza al siguiente índice de pregunta
  currentQuestionIndex++;

  // Verifica si hay más preguntas
  if (currentQuestionIndex < questions.length) {
    // Muestra la nueva pregunta
    questions[currentQuestionIndex].classList.add("active");
  }
  if (currentQuestionIndex == 3) {
    showResult();
  }
}

// Inicializa mostrando solo la primera pregunta
questions[currentQuestionIndex].classList.add("active");

let answers = {
  size: "",
  purpose: "",
};

// Función para mostrar el resultado basado en las respuestas
function showResult() {
  let robotImage = "";

  // Condiciones para seleccionar la imagen correcta del robot
  if (answers.size === "pequeño" && answers.purpose === "decoracion") {
    robotImage = "./images/Robot Arte.png";
  } else if (answers.size === "grande" && answers.purpose === "decoracion") {
    robotImage = "./images/Robot tiempo.png";
  } else if (answers.size === "grande" && answers.purpose === "amigo") {
    robotImage = "./images/Robot Auroi.png";
  } else if (answers.size === "pequeño" && answers.purpose === "amigo") {
    robotImage = "./images/Robot Coram.png";
  } else if (answers.size === "grande" && answers.purpose === "asistente") {
    robotImage = "./images/Robot elisa.png";
  } else if (
    answers.size === "pequeño" &&
    answers.purpose === "arma de guerra"
  ) {
    robotImage = "./images/Robot milagro.png";
  } else if (
    answers.size === "grande" &&
    answers.purpose === "arma de guerra"
  ) {
    robotImage = "./images/Robot samurai.png";
  } else if (answers.size === "pequeño" && answers.purpose === "asistente") {
    robotImage = "./images/Robot sumaqui.png";
  }

  // Mostrar el contenedor de respuesta y establecer la imagen del robot seleccionado
  document.getElementById("answer-container").style.display = "block";
  document.getElementById("answer-img").src = robotImage;
}
