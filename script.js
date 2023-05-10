
// === Creating the Questions

const questions = [
    {
        question: "What is the best-selling video game of all time? ",
        answer: [
            {text: "Minecraft", correct: false},
            {text: "Pokemon Red", correct: false},
            {text: "Super Mario Bros.", correct: false},
            {text: "Tetris", correct: true}
        ]
    },
    {
        question: "What is the name of the gaming convention, held annually in Seattle?",
        answer: [
            {text: "PAX WEST", correct: true},
            {text: "E3", correct: false},
            {text: "Gamescom", correct: false},
            {text: "BlizzCon", correct: false}
        ]
    },
    {
        question: "Which gaming platform is owned by Microsoft",
        answer: [
            {text: "yeth", correct: true},
            {text: "not really", correct: false},
            {text: "yes", correct: false},
            {text: "no", correct: false}
        ]
    },
    {
        question: "In the board game Catan, how many victory points are required to win the game?",
        answer: [
            {text: "5", correct: false},
            {text: "7", correct: false},
            {text: "10", correct: true},
            {text: "15", correct: false}
        ]
    },
    {
        question: "In Valorant, what is the name of the map that features a large statue in the middle of the site?",
        answer: [
            {text: "Split", correct: false},
            {text: "Bind", correct: false},
            {text: "Haven", correct: false},
            {text: "Ascent", correct: true}
        ]
    },
    {
        question: "In the game Among Us, what is the maximum number of players allowed in a single game?",
        answer: [
            {text: "4", correct: false},
            {text: "10", correct: true},
            {text: "12", correct: false},
            {text: "15", correct: false}
        ]
    }
   
];

// Questions Array, each question is an object
// The object has 1 question and an answer array that has an object with a correct property



// === Selecting the elements / Setting Variables
const questionText = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let index = 0;
let score = 0;


function startQuiz() {
    index = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

startQuiz();


// === Create the showQuestion function
function showQuestion() {
    clearQuestions();
    let currentQuestion = questions[index];

    questionText.innerHTML = currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    
    
    if(answer.correct) {
        button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    })
}

function selectAnswer(e) {
    let selected = e.target;
    let isCorrect = selected.dataset.correct === "true";
    if (isCorrect) {
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
        nextButton.style.display = "block";
    })
}

function clearQuestions() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore() {
    clearQuestions();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    index++;
    if(index < questions.length) {
        showQuestion();
    } else {     
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(index < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();