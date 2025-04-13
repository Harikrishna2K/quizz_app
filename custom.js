const questions = [

    {
        question: "Which is the largest animal in the world",
        answers : [

            {
                text: "rat", correct:"false"

            },
            { text: "cow", correct:"false"},
            { text: "Shark", correct:"true"},
            { text: "Buffalo", correct:"false"}
        ]

    },
    {
        question: "Who is the biggest player in IPL",
        answers:[
            {text: "Virat Kohli", correct: "false"},
            {text: "MSD", correct: "true"},
            {text: "Rohit Sharma", correct:"false"},
            {text: "Suresh Raina", correct:"false"}
        ]
    }


];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextElement = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;

    nextElement.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerElement.appendChild(button);

        if(answers.correct === "true"){
            button.dataset.correct = answers.correct;

        }

        button.addEventListener("click", selectAnswer);

        
    })
}

function resetState(){
    nextElement.style.display = "none";
    while(answerElement.firstChild){
            answerElement.removeChild(answerElement.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    console.log("The value", isCorrect)
    if(isCorrect){
            selectBtn.classList.add("answer-correct");
    }else{
        selectBtn.classList.add("answer-incorrect");
    }

    Array.from(answerElement.children).forEach(button =>{
        console.log("Entering inside the arrays code")
        if(button.dataset.correct === "true"){
                console.log("Found the true value")
                button.classList.add("answer-correct");
                console.log("Ended the true value")
        }

        button.disabled = true;
    });

    nextElement.style.display = "block";


    
}

startQuiz();

