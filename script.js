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
}

// Inicializa mostrando solo la primera pregunta
questions[currentQuestionIndex].classList.add("active");
