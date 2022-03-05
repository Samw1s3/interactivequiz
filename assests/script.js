const buttonStart = document.getElementById('button-start');
const sectionQuestion = document.getElementById("section-questions");
const sectionLanding = document.getElementById("section-landing");
const sectionTimer = document.getElementById("section-timer");
const sectionInitials = document.getElementById("section-initials");
const spanTime = document.getElementById("span-time");
const questionTitle = document.getElementById("question-title");
const spanFinalHighscore = document.getElementById("span-final-highscore");
const questionChoices = document.getElementById("question-choices");

let timerId = null;
let timeRemaining = 60;

let currentQuestionIndex = 0;

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

function showQuestion(index){
    const question = questions[index];

    questionTitle.textContent = question.title;

    //loop through the choices

    // generate li for each

    for (let index = 0; index < question.choices.length; index++) {
        const choice = question.choices[index];

        const li = document.createElement('li');

        const button = document.createElement('button');
        button.textContent = choice.title;

        li.appendChild(button);

        questionChoices.appendChild(li);

    }
}

//high score page
//1. click on the play again btn
//redirect the user to the landing page

//Questions

// when Click on the choice
// should move to the next question

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

    // 3. show the high score in the end game screen
    //hs -- time remaining
    spanFinalHighscore.textContent = timeRemaining
}



//End Game Screen