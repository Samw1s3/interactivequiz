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
const ScoreHistoy = document.getElementById("highscore-history")
const highScores = JSON.parse(localStorage.getItem('HighScores')) || []
const playAgainButton = document.getElementById("play-again-button");

const userInitials = document.getElementById("input-initials");


let timerId = null;
let timeRemaining = 6;


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
    console.log(question.title)

    //loop through the choices

    // generate li for each
    questionChoices.textContent = "";
    console.log(question.choices)

    for (var index = 0; index < question.length; index++) {
        const choice = question.choices[index]

        const li = document.createElement('li');

        const button = document.createElement('button');
        button.textContent = choice.title;

        console.log(choice.tile)
        li.appendChild(button);

        questionChoices.appendChild(li);
    }
    questionChoices.addEventListener("click", function (event) {
        console.log(e.target);
       

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
    
    initialsInput.addEventListener('submit', function (event) {

       event.preventDefault();

        /* initials.addEventListener('keyup', () => {
            submitButton.disabled = !initialsInput.value

        })  */
    })
    submitButton.addEventListener('click', saveScore())
 }   
    
        
    //showHighScores();


//const initials = document.querySelector("input-initials")

//const submitButton = document.getElementById("submit-button")

//initials.addEventListener('keyup', () => {
//    submitButton.disabled = !initials.value
//})

// Save High Scores

function saveScore() {
    /* const score = {
        score: timeRemaining,
        username: initialsInput.value
    } */

/*     highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign('/') */
    
    submitButton.addEventListener('click', function(){
        sectionInitials.classList.add('hide')
        sectionHighscores.classList.remove('hide')
    
    })
    
    }



//saveHighScore = timeRemaining => {
//    timeRemaining.preventDefault()

//    const score = {
//        score: 
//    }
//} 

// end game screen 
//high score page
//1. click on the play again btn , redirect the user to the landing page

playAgainButton.addEventListener('click', function (event) {

        sectionHighscores.classList.add('hide')

        sectionLanding.classList.remove('hide')

        setInterval
    })


function showHighScores() {
    // Clear todoList element and update todoCountSpan
    sectionInitials.classList.add('hide')
    sectionHighscores.classList.remove('hide')

  /*   var storedScores = JSON.parse(localStorage.getItem("initials" + "Score"));

    if (storedScores !== null) {
        rankings = storedScores;
    }

    ScoreHistoy.innerHTML = "";

    // Render a new li for each person
    for (var i = 0; i < 6; i++) {
        var rankings = rankings[i];

        var li = document.createElement("li");
        li.textContent = initials + score;
        li.setAttribute("data-index", i);

        ScoreHistoy.appendChild(li);
    }
 */
    
}