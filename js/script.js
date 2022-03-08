const buttonStart = document.getElementById("button-start");
const sectionQuestion = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");
const sectionInitials = document.getElementById("section-initials");
const spanTime = document.getElementById("span-time");
const questionTitle = document.getElementById("question-title");
const spanFinalHighscore = document.getElementById("span-final-highscore");
const questionChoices = document.getElementById("question-choices");
const correctAnswer = document.getElementById("correct-answer");
const wrongAnswer = document.getElementById("wrong-answer");
const isAns = document.querySelector("questions.choices.isAns");
const sectionHighscores = document.getElementById("highscore-rankings");
const submitButton = document.getElementById("submit-button");

const initialsInput = document.getElementById("input-initials");
const ScoreHistoy = document.getElementById("highscore-history");
const playAgainButton = document.getElementById("play-again-button");

// const userInitials = document.getElementById("input-initials");

var initials = [];
var score = [];

let timerId = null;
let timeRemaining = 60;

let currentQuestionIndex = 0;
let acceptingAnswers = true;


spanTime.textContent = timeRemaining;

// When user click in the start btn
buttonStart.addEventListener('click', function (event) {
    // show the qs section
    sectionQuestion.classList.remove('hide')

    // hide landing page
    sectionLanding.classList.add('hide')

    // start timer
    startTimer();

    showQuestion(0);

    //    nextQuestion();
})

//time
// update the span-time for every passing second

function startTimer() {
    // show section - timer
    sectionTimer.classList.remove('hide');
    // update the span-time every passing second
    timerId = setInterval(function () {
        timeRemaining = timeRemaining - 1
        spanTime.textContent = timeRemaining

        // if time remain = 0
        if (timeRemaining <= 0) {
            // end game
            endGame();

        }
    }, 1000)

}

function showQuestion(index) {
    const question = questions[index];

    questionTitle.textContent = question.title;


    //loop through the choices

    // generate li for each
    questionChoices.textContent = "";

    for (var index = 0; index < question.choices.length; index++) {
        const choice = question.choices[index]

        const li = document.createElement('li');

        const button = document.createElement('button');
        button.textContent = choice.title;
        button.setAttribute("data-set", choice.isAns)

        li.appendChild(button);

        questionChoices.appendChild(li);
    }
    questionChoices.addEventListener("click", e => {
        
        let responses = e.target.getAttribute('data-set')

       if (responses === "true") {
            console.log(true)
            correctAnswer.classList.remove('hide');

       } else { 
        console.log(false)
        wrongAnswer.classList.remove('hide');
       timeRemaining += -5 
       }
       
    index++;
        // nextQuestion ();
    
    })
}

//function nextQuestion() {

//    button.addEventListener('click', function(event){
//      if (choice.inAns == true) {
//        index = ++;


//question = questions[index]

//questionTitle.textContent = question.title;

//questionChoices.textContent = "";

//for (let index = 0; index < question.choices.length; index++) {
//    const choice = question.choices[index]

//    const li = document.createElement('li');

//    const button = document.createElement('button');
//     button.textContent = choice.title;

//    li.appendChild(button);
//
//     questionChoices.appendChild(li);
//  }

//      })
//} 
//   if (choice.inAns.true) {
//  }
//        button.addEventListener('click', true)
//       index = ++




// if (choice.isAns.true) {

//}

//help!!
//questionChoices.forEach(choice => {
//  questionChoices.addEventListener('click')
//if (inAns === true) {
//       correctAnswer.classList.remove('hide')
//      index++
//  }     
//   nextQuestion()

//Questions

// when Click on the choice
// should move to the next questio
//function nextQuestion() {
//   index++
//}

//high score page
//1. click on the play again btn
//redirect the user to the landing page



// If user clicks on correct choice
// give feedback to say it was the correct choice

//If users clicks on the wrong choice
// give feed back to says its wrong
// reduce time by 5 seconds

// if the user click on the final choice of the final q
// end game


//end game
function endGame() {
    //1. timer should stop
    clearInterval(timerId);



    //2. show the end game screen
    sectionInitials.classList.remove('hide')

    //Hide question screen
    sectionQuestion.classList.add('hide')

    // 3. show the current score in the end game screen
    //hs -- time remaining
    spanFinalHighscore.textContent = timeRemaining

    submitButton.addEventListener('click', saveScore())

    //showHighScores();
}

//const initials = document.querySelector("input-initials")

//const submitButton = document.getElementById("submit-button")

//initials.addEventListener('keyup', () => {
//    submitButton.disabled = !initials.value
//})

// Save High Scores

function saveScore() {
    var score = timeRemaining;
    localStorage.setItem("Initials" + "Score", JSON.stringify(initials))


    initialsInput.addEventListener("submit", function (event) {

        event.preventDefault();

        initials.addEventListener('keyup', () => {
            submitButton.disabled = !initials.value

        }) 
    }
    )

    submitButton.addEventListener('click', function(){
        sectionInitials.classList.add('hide')
    sectionHighscores.classList.remove('hide')
    })
}

playAgainButton.addEventListener('click', function (event) {

        timeRemaining = 61
        sectionHighscores.classList.add('hide')

        sectionLanding.classList.remove('hide')

        
    })
//saveHighScore = timeRemaining => {
//    timeRemaining.preventDefault()

//    const score = {
//        score: 
//    }
//} 
// end game screen 

function showHighScores() {
    // Clear todoList element and update todoCountSpan
    sectionInitials.classList.add('hide')
    sectionHighscores.classList.remove('hide')

    var storedScores = JSON.parse(localStorage.getItem("initials" + "Score"));

    if (storedScores !== null) {
        rankings = storedScores;
    }

    ScoreHistoy.innerHTML = "";

    // Render a new li for each todo
    for (var i = 0; i < 6; i++) {
        var rankings = rankings[i];

        var li = document.createElement("li");
        ol.textContent = initials + score;
        ol.setAttribute("data-index", i);

        ScoreHistoy.appendChild(li);
    }

    
}