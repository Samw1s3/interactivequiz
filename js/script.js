const buttonStart = document.getElementById("button-start");
const sectionQuestion = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");
const sectionInitials = document.getElementById("section-initials");
const sectionHighscores = document.getElementById("highscore-rankings");

const spanTime = document.getElementById("span-time");
const questionTitle = document.getElementById("question-title");
const spanFinalHighscore = document.getElementById("span-final-highscore");
const questionChoices = document.getElementById("question-choices");
const questionFeedback = document.getElementById('question-feedback');
const isAns = document.querySelector("questions.choices.isAns");

const formHighscore = document.getElementById("form-highscore");
const submitButton = document.getElementById("submit-button");
const inputInitials = document.getElementById("input-initials");

const listHighscoore = document.getElementById("list-highscore");
const playAgainButton = document.getElementById("play-again-button");
const clearButton = document.getElementById("button-clear");


// const userInitials = document.getElementById("input-initials");

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
function showFeedback(message, timeOut = 1000) {

    questionFeedback.textContent = message;
    questionFeedback.classList.remove('hide')

    setTimeout(function () {
        questionFeedback.classList.add('hide')
    }, timeOut)

}
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
    if (index === questions.length) {
        return endGame();
    }

    const question = questions[index];

    questionTitle.textContent = question.title;
    //loop through the choices

    // generate li for each
    questionChoices.textContent = "";

    for (var i = 0; i < question.choices.length; i++) {
        const choice = question.choices[i]

        const li = document.createElement('li');

        const button = document.createElement('button');
        button.textContent = choice.title;
        button.setAttribute("data-set", choice.isAns)

        li.appendChild(button);

        questionChoices.appendChild(li);
    }

    questionChoices.addEventListener("click", e => {

        let responses = e.target.getAttribute('data-set')

        // If user clicks on correct choice
        // give feedback to say it was the correct choice
        if (responses === "true") {
            console.log(true)
            showFeedback('correct!');
            //If users clicks on the wrong choice
            // give feed back to says its wrong
            // reduce time by 5 seconds
        } else {
            console.log(false)
            showFeedback('wrong!');
            timeRemaining = timeRemaining - 5;
        }
        showQuestion(index + 1);
    })


}





//end game
function endGame() {
    //1. timer should stop
    clearInterval(timerId);

    //2. show the end game screen
    sectionInitials.classList.remove('hide')

    //Hide question screen
    sectionQuestion.classList.add('hide')

    sectionTimer.classList.add('hide')

    // 3. show the current score in the end game screen
    //hs -- time remaining
    spanFinalHighscore.textContent = timeRemaining

    //showHighScores();
}

formHighscore.addEventListener('submit', function (event) {
    event.preventDefault();
    // user can hit enter in the input box
    // submit 
    // add name and score to local storate
    const userInput = inputInitials.value;

    const highscore = {
        name: userInput,
        score: timeRemaining,
    }

    
    const existingHighscores = getHighscoresFromLocalStorage();
    // add new highscore 
    existingHighscores.push(highscore);
    // save it to local storage
    localStorage.setItem('highscores', JSON.stringify(existingHighscores));

    showHighScores();
});
/**
 * 
 * @returns {Array}
 */
function getHighscoresFromLocalStorage(){
    return JSON.parse(
        localStorage.getItem('highscores') || "[]"
    )
}

//high score page
//1. click on the play again btn
//redirect the user to the landing page

function showHighScores() {
    
    sectionInitials.classList.add('hide')

    sectionHighscores.classList.remove('hide')

    renderHighscoreList();
}


function renderHighscoreList(){
    const highscores = getHighscoresFromLocalStorage();

    highscores.sort(function(a, b){
        if(b.score > a.score){
            return 1;
        }else {
            return -1;
        }
    }
    );

    console.log(highscores);

    listHighscoore.textContent = ""; 

    // create li for each item 
    for (let index = 0; index < highscores.length; index++) {
        const highscore = highscores[index];

        // add to list
        const li = document.createElement('li');

        li.textContent = highscore.name + ' score:' + highscore.score 

        listHighscoore.appendChild(li);
        
    }
}

playAgainButton.addEventListener('click', function (event) {
        window.location.reload();


    })
    clearButton.addEventListener('click', function(event){

        localStorage.setItem('highscores', "[]");

        listHighscoore.textContent = ""
    })