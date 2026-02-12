const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const answersE1 = document.getElementById("answer");
const result = document.getElementById("result");
const finalMessage = document.getElementById("finalMessage")

let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "arada gıcıklık yapıyor musun?",
    answers: ["evet", "hayır"],
    correct: "evet"
  },
  {
    question: "seni ne kadar seviyorum?",
    answers: ["çok", "çoooooook"],
    correct: "çoooooook"
  },
  {
    question: "beni ne kadar seviyosun?",
    answers: ["çok", "çoooook"],
    correct: "çok"
  }
];

startBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionE1.textContent = q.question;
  answersE1.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;

    // random başlangıç konumu
    btn.style.left = Math.random() * 200 + "px";
    btn.style.top = Math.random() * 150 + "px";

    if (answer === q.correct) {
      // doğruysa normal çalışır
      btn.onclick = () => selectAnswer(index);
    } else {
      // yanlışsa kaç
      btn.addEventListener("mouseenter", () => {
        moveButton(btn);
      });
      btn.addEventListener("click", () => {
        moveButton(btn);
      });
    }

    answersE1.appendChild(btn);
  });
}

function moveButton(button) {
  const maxX = answersE1.clientWidth - button.offsetWidth;
  const maxY = answersE1.clientHeight - button.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}

function selectAnswer(index) {
  if (questions[currentQuestion].answers[index] === questions[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    document.getElementById("current").textContent = currentQuestion + 1;
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  if (score === questions.length) {
    finalMessage.textContent = "fulledin aşkım ❤️";
  } else {
    finalMessage.textContent = "Yine de seni seviyorum 😌";
  }
}

function showLove() {
  result.classList.add("hidden");
  document.getElementById("love").classList.remove("hidden");
}