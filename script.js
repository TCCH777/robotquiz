let currentQuestionIndex = 0;
const questions = document.querySelectorAll(".question");

// Objeto para almacenar respuestas
let answers = {
  size: "",
  purpose: "",
};

// Función para avanzar a la siguiente pregunta
function nextQuestion(event, questionNumber) {
  // Obtiene el texto de la opción seleccionada
  console.log(event.currentTarget.querySelector("p").textContent);
  console.log(questionNumber);

  const selectedOption = event.currentTarget.querySelector("p").textContent;

  // Asigna la respuesta seleccionada al campo correspondiente
  if (questionNumber === 1) {
    answers.purpose = selectedOption.toLowerCase(); // Guarda la respuesta de "¿Por qué quieres un robot?"
  } else if (questionNumber === 2) {
    answers.purpose = selectedOption.toLowerCase(); // Guarda la respuesta de "¿Qué uso le darás a tu robot?"
  } else if (questionNumber === 3) {
    answers.size = selectedOption.toLowerCase(); // Guarda la respuesta de "Tamaño del robot"
  }

  // Oculta la pregunta actual
  questions[currentQuestionIndex].classList.remove("active");

  // Avanza al siguiente índice de pregunta
  currentQuestionIndex++;

  // Verifica si hay más preguntas
  if (currentQuestionIndex < questions.length) {
    // Muestra la nueva pregunta
    questions[currentQuestionIndex].classList.add("active");
  } else {
    showResult();
  }
}

// Inicializa mostrando solo la primera pregunta
questions[currentQuestionIndex].classList.add("active");

// Función para mostrar el resultado basado en las respuestas
function showResult() {
  let robotImage = "";
  console.log(answers);

  // Condiciones para seleccionar la imagen correcta del robot
  if (answers.size === "pequeño" && answers.purpose === "adorno") {
    robotImage = "./images/Robot Arte.png";
  } else if (answers.size === "grande" && answers.purpose === "adorno") {
    robotImage = "./images/Robot tiempo.png";
  } else if (answers.size === "grande" && answers.purpose === "un amigo") {
    robotImage = "./images/Robot Auroi.png";
  } else if (answers.size === "pequeño" && answers.purpose === "un amigo") {
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
