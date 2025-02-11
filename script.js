const quizData = [
    {
        question: "How often do you drink coffee?",
        answers: ["Once a day", "Few times a day", "Only on weekends"],
        result: ["Basic machine", "Espresso machine", "Capsule machine"]
    },
    {
        question: "Do you prefer speed or quality?",
        answers: ["Speed", "Quality"],
        result: ["Capsule machine", "Manual espresso machine"]
    }
];

let currentQuestion = 0;
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
let selectedAnswer = null;

function loadQuestion() {
    questionEl.innerText = quizData[currentQuestion].question;
    answersEl.innerHTML = "";
    
    quizData[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => {
            selectedAnswer = quizData[currentQuestion].result[index];
            nextBtn.disabled = false;
        };
        answersEl.appendChild(button);
    });
}

nextBtn.onclick = () => {
    if (selectedAnswer) {
        alert("Recommended machine: " + selectedAnswer);
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
            nextBtn.disabled = true;
        } else {
            questionEl.innerText = "Quiz Completed!";
            answersEl.innerHTML = "";
            nextBtn.style.display = "none";
        }
    }
};

loadQuestion();
