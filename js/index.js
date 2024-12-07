const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
function myFunction() {
  alert("Message Reçu");
}
//Question bank
var questionBank = [
  {
    question:
      "Quelle balise HTML est utilisée pour définir un titre de niveau 1 ?",
    option: ["header", "h1", "title", "head"],
    answer: "h1",
  },
  {
    question:
      "Quel attribut est utilisé pour ajouter une classe à un élément HTML ?",
    option: ["id", "class", "style", "name"],
    answer: "class",
  },
  {
    question: "Quelle est la balise correcte pour insérer une image en HTML ?",
    option: ["img", "image", "picture", "photo"],
    answer: "img",
  },
  {
    question: "Comment commente-t-on une ligne en HTML ?",
    option: [
      "// Ceci est un commentaire",
      "/* Ceci est un commentaire */",
      "<!-- Ceci est un commentaire -->",
      "comment(Ceci est un commentaire)",
    ],
    answer: "<!-- Ceci est un commentaire -->",
  },
  {
    question: "Que signifie HTTP ?",
    option: [
      "HyperText Transfer Protocol",
      "Hypermedia Text Trading Protocol",
      "High Transfer Text Protocol",
      "HomeTab Text Processing",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    question: "Quel est le rôle de la balise `<head>` ?",
    option: [
      "Afficher du texte en gras",
      "Contenir des métadonnées sur la page",
      "Définir le contenu principal de la page",
      "Créer une section de navigation",
    ],
    answer: "Contenir des métadonnées sur la page",
  },
  {
    question:
      "Quel mot-clé est utilisé pour déclarer une variable en JavaScript ?",
    option: ["var", "let", "const", "Toutes les réponses"],
    answer: "Toutes les réponses",
  },
  {
    question: "Comment écrire un commentaire en JavaScript ?",
    option: [
      "<!-- Ceci est un commentaire -->",
      "comment(Ceci est un commentaire)",
      "// Ceci est un commentaire",
      "# Ceci est un commentaire",
    ],
    answer: "// Ceci est un commentaire",
  },
  {
    question:
      "Quelle méthode JavaScript est utilisée pour sélectionner un élément par son ID ?",
    option: [
      "getElementById()",
      "querySelector()",
      "getElementByClass()",
      "selectById()",
    ],
    answer: "getElementById()",
  },
  {
    question:
      "Comment peut-on ajouter un événement clic sur un bouton en JavaScript ?",
    option: [
      "button.addEventListener('click', function() { ... })",
      "button.onClick = function() { ... }",
      "button.click = function() { ... }",
      "Les deux premières options sont correctes",
    ],
    answer: "Les deux premières options sont correctes",
  },
];

var i = 0;
var score = 0;

// Function to display questions
function displayQuestion() {
  var spans = document.querySelectorAll("span");
  for (var a = 0; a < spans.length; a++) {
    spans[a].style.background = "none";
  }
  document.getElementById("question").innerHTML =
    "Q." + (i + 1) + " " + questionBank[i].question;
  document.getElementById("option0").innerHTML = questionBank[i].option[0];
  document.getElementById("option1").innerHTML = questionBank[i].option[1];
  document.getElementById("option2").innerHTML = questionBank[i].option[2];
  document.getElementById("option3").innerHTML = questionBank[i].option[3];
  document.getElementById("stat").innerHTML =
    "Question" + " " + (i + 1) + " " + "of" + " " + questionBank.length;
}

// Function to calculate scores
function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300);
}

// Function to display next question
function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
  } else {
    document.getElementById("result").innerHTML =
      score + "/" + questionBank.length;
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    displayResult();
  }
}

// Function to display the final result
function displayResult() {
  document.getElementById("result").innerHTML =
    "Your final score is: " + score + " out of " + questionBank.length;
}

// Function to go back to the quiz
function backToQuiz() {
  location.reload();
}

// Function to check answers
function checkAnswer() {
  var answerBank = document.getElementById("answerBank");
  var answers = document.getElementById("answers");

  // Clear the answers list to avoid duplicates
  answers.innerHTML = "";

  // Display the answer section
  answerBank.style.display = "block";
  document.getElementById("scoreboard").style.display = "none";

  questionBank.forEach((item, index) => {
    var list = document.createElement("li");
    list.classList.add("answer-item"); // Add a class for styling
    list.innerHTML = `<strong>Q${index + 1}:</strong> ${item.question} <br> <strong>Answer:</strong> ${item.answer}`;

    // Append the list item to the answers section
    answers.appendChild(list);
  });
}


// Event listener for the "Next" button
document.querySelector(".next").addEventListener("click", nextQuestion);

// Event listener for the "Check Answers" button
document.getElementById("check-answer").addEventListener("click", checkAnswer);

// Display the first question on page load
document.addEventListener("DOMContentLoaded", function () {
  displayQuestion();
});



function openLightbox(imageElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');

  // Set the lightbox image source to the clicked image source
  lightboxImage.src = imageElement.src;

  // Show the lightbox
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');

  // Hide the lightbox
  lightbox.style.display = 'none';
}
