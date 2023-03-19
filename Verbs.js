const prompts = [
  [ "arbeiten", "Present", "ich", "arbeite" ],
  [ "arbeiten", "Present", "du", "arbeitest" ],
  [ "arbeiten", "Present", "er/sie/es", "arbeitet" ],
  [ "arbeiten", "Present", "wir", "arbeiten" ],
  [ "arbeiten", "Present", "ihr", "arbeitet" ],
  [ "arbeiten", "Present", "sie/Sie", "arbeiten" ],
  [ "sein", "Present", "ich", "bin" ],
  [ "sein", "Present", "du", "bist" ],
  [ "sein", "Present", "er/sie/es", "ist" ],
  [ "sein", "Present", "wir", "sind" ],
  [ "sein", "Present", "ihr", "seid" ],
  [ "sein", "Present", "sie/Sie", "sind" ],
  [ "kommen", "Present", "ich", "komme" ],
  [ "kommen", "Present", "du", "kommst" ],
  [ "kommen", "Present", "er/sie/es", "kommt" ],
  [ "kommen", "Present", "wir", "kommen" ],
  [ "kommen", "Present", "ihr", "kommt" ],
  [ "kommen", "Present", "sie/Sie", "kommen" ],
  [ "küssen", "Present", "ich", "küsse" ],
  [ "küssen", "Present", "du", "küsst" ],
  [ "küssen", "Present", "er/sie/es", "küsst" ],
  [ "küssen", "Present", "wir", "küssen" ],
  [ "küssen", "Present", "ihr", "küsst" ],
  [ "küssen", "Present", "sie/Sie", "küssen" ],
  [ "wohnen", "Present", "ich", "wohne" ],
  [ "wohnen", "Present", "du", "wohnst" ],
  [ "wohnen", "Present", "er/sie/es", "wohnt" ],
  [ "wohnen", "Present", "wir", "wohnen" ],
  [ "wohnen", "Present", "ihr", "wohnt" ],
  [ "wohnen", "Present", "sie/Sie", "wohnen" ],
  [ "mögen", "Present", "ich", "mag" ],
  [ "mögen", "Present", "du", "magst" ],
  [ "mögen", "Present", "er/sie/es", "mag" ],
  [ "mögen", "Present", "wir", "mögen" ],
  [ "mögen", "Present", "ihr", "mögt" ],
  [ "mögen", "Present", "sie/Sie", "mögen" ],
  [ "heissen", "Present", "ich", "heisse" ],
  [ "heissen", "Present", "du", "heisst" ],
  [ "heissen", "Present", "er/sie/es", "heisst" ],
  [ "heissen", "Present", "wir", "heissen" ],
  [ "heissen", "Present", "ihr", "heisst" ],
  [ "heissen", "Present", "sie/Sie", "heissen" ],
  [ "gehen", "Present", "ich", "gehe" ],
  [ "gehen", "Present", "du", "gehst" ],
  [ "gehen", "Present", "er/sie/es", "geht" ],
  [ "gehen", "Present", "wir", "gehen" ],
  [ "gehen", "Present", "ihr", "geht" ],
  [ "gehen", "Present", "sie/Sie", "gehen" ],
  [ "tanzen", "Present", "ich", "tanze" ],
  [ "tanzen", "Present", "du", "tanzst" ],
  [ "tanzen", "Present", "er/sie/es", "tanzt" ],
  [ "tanzen", "Present", "wir", "tanzen" ],
  [ "tanzen", "Present", "ihr", "tanzt" ],
  [ "tanzen", "Present", "sie/Sie", "tanzen" ],
  [ "trinken", "Present", "ich", "trinke" ],
  [ "trinken", "Present", "du", "trinkst" ],
  [ "trinken", "Present", "er/sie/es", "trinkt" ],
  [ "trinken", "Present", "wir", "trinken" ],
  [ "trinken", "Present", "ihr", "trinkt" ],
  [ "trinken", "Present", "sie/Sie", "trinken" ],
  [ "warten", "Present", "ich", "warte" ],
  [ "warten", "Present", "du", "wartest" ],
  [ "warten", "Present", "er/sie/es", "wartet" ],
  [ "warten", "Present", "wir", "warten" ],
  [ "warten", "Present", "ihr", "wartet" ],
  [ "warten", "Present", "sie/Sie", "warten" ],
  [ "fragen", "Present", "ich", "frage" ],
  [ "fragen", "Present", "du", "fragst" ],
  [ "fragen", "Present", "er/sie/es", "fragt" ],
  [ "fragen", "Present", "wir", "fragen" ],
  [ "fragen", "Present", "ihr", "fragt" ],
  [ "fragen", "Present", "sie/Sie", "fragen" ],
  [ "grüssen", "Present", "ich", "grüsse" ],
  [ "grüssen", "Present", "du", "grüsst" ],
  [ "grüssen", "Present", "er/sie/es", "grüsst" ],
  [ "grüssen", "Present", "wir", "grüssen" ],
  [ "grüssen", "Present", "ihr", "grüsst" ],
  [ "grüssen", "Present", "sie/Sie", "grüssen" ],
  [ "stehen", "Present", "ich", "stehe" ],
  [ "stehen", "Present", "du", "stehst" ],
  [ "stehen", "Present", "er/sie/es", "steht" ],
  [ "stehen", "Present", "wir", "stehen" ],
  [ "stehen", "Present", "ihr", "steht" ],
  [ "stehen", "Present", "sie/Sie", "stehen" ],
  [ "haben", "Present", "ich", "habe" ],
  [ "haben", "Present", "du", "hast" ],
  [ "haben", "Present", "er/sie/es", "hat" ],
  [ "haben", "Present", "wir", "haben" ],
  [ "haben", "Present", "ihr", "habt" ],
  [ "haben", "Present", "sie/Sie", "haben" ],
  [ "kaufen", "Present", "ich", "kaufe" ],
  [ "kaufen", "Present", "du", "kaufst" ],
  [ "kaufen", "Present", "er/sie/es", "kauft" ],
  [ "kaufen", "Present", "wir", "kaufen" ],
  [ "kaufen", "Present", "ihr", "kauft" ],
  [ "kaufen", "Present", "sie/Sie", "kaufen" ],
  [ "öffnen", "Present", "ich", "öffne" ],
  [ "öffnen", "Present", "du", "öffnest" ],
  [ "öffnen", "Present", "er/sie/es", "öffnet" ],
  [ "öffnen", "Present", "wir", "öffnen" ],
  [ "öffnen", "Present", "ihr", "öffnet" ],
  [ "öffnen", "Present", "sie/Sie", "öffnen" ],
  [ "möchten", "Present", "ich", "möchte" ],
  [ "möchten", "Present", "du", "möchtest" ],
  [ "möchten", "Present", "er/sie/es", "möchte" ],
  [ "möchten", "Present", "wir", "möchten" ],
  [ "möchten", "Present", "ihr", "möchtet" ],
  [ "möchten", "Present", "sie/Sie", "möchten" ],
  [ "brauchen", "Present", "ich", "brauche" ],
  [ "brauchen", "Present", "du", "brauchst" ],
  [ "brauchen", "Present", "er/sie/es", "braucht" ],
  [ "brauchen", "Present", "wir", "brauchen" ],
  [ "brauchen", "Present", "ihr", "braucht" ],
  [ "brauchen", "Present", "sie/Sie", "brauchen" ],
  [ "müssen", "Present", "ich", "muss" ],
  [ "müssen", "Present", "du", "musst" ],
  [ "müssen", "Present", "er/sie/es", "muss" ],
  [ "müssen", "Present", "wir", "müssen" ],
  [ "müssen", "Present", "ihr", "müsst" ],
  [ "müssen", "Present", "sie/Sie", "müssen" ]
];

const newprompts = [
  [ "trinken", "Present", "ich", "trinke" ],
  [ "trinken", "Present", "du", "trinkst" ],
  [ "trinken", "Present", "er/sie/es", "trinkt" ],
  [ "trinken", "Present", "wir", "trinken" ],
  [ "trinken", "Present", "ihr", "trinkt" ],
  [ "trinken", "Present", "sie/Sie", "trinken" ],
  [ "warten", "Present", "ich", "warte" ],
  [ "warten", "Present", "du", "wartest" ],
  [ "warten", "Present", "er/sie/es", "wartet" ],
  [ "warten", "Present", "wir", "warten" ],
  [ "warten", "Present", "ihr", "wartet" ],
  [ "warten", "Present", "sie/Sie", "warten" ],
  [ "fragen", "Present", "ich", "frage" ],
  [ "fragen", "Present", "du", "fragst" ],
  [ "fragen", "Present", "er/sie/es", "fragt" ],
  [ "fragen", "Present", "wir", "fragen" ],
  [ "fragen", "Present", "ihr", "fragt" ],
  [ "fragen", "Present", "sie/Sie", "fragen" ],
  [ "grüssen", "Present", "ich", "grüsse" ],
  [ "grüssen", "Present", "du", "grüsst" ],
  [ "grüssen", "Present", "er/sie/es", "grüsst" ],
  [ "grüssen", "Present", "wir", "grüssen" ],
  [ "grüssen", "Present", "ihr", "grüsst" ],
  [ "grüssen", "Present", "sie/Sie", "grüssen" ],
  [ "stehen", "Present", "ich", "stehe" ],
  [ "stehen", "Present", "du", "stehst" ],
  [ "stehen", "Present", "er/sie/es", "steht" ],
  [ "stehen", "Present", "wir", "stehen" ],
  [ "stehen", "Present", "ihr", "steht" ],
  [ "stehen", "Present", "sie/Sie", "stehen" ],
  [ "haben", "Present", "ich", "habe" ],
  [ "haben", "Present", "du", "hast" ],
  [ "haben", "Present", "er/sie/es", "hat" ],
  [ "haben", "Present", "wir", "haben" ],
  [ "haben", "Present", "ihr", "habt" ],
  [ "haben", "Present", "sie/Sie", "haben" ],
  [ "kaufen", "Present", "ich", "kaufe" ],
  [ "kaufen", "Present", "du", "kaufst" ],
  [ "kaufen", "Present", "er/sie/es", "kauft" ],
  [ "kaufen", "Present", "wir", "kaufen" ],
  [ "kaufen", "Present", "ihr", "kauft" ],
  [ "kaufen", "Present", "sie/Sie", "kaufen" ],
  [ "öffnen", "Present", "ich", "öffne" ],
  [ "öffnen", "Present", "du", "öffnest" ],
  [ "öffnen", "Present", "er/sie/es", "öffnet" ],
  [ "öffnen", "Present", "wir", "öffnen" ],
  [ "öffnen", "Present", "ihr", "öffnet" ],
  [ "öffnen", "Present", "sie/Sie", "öffnen" ],
  [ "möchten", "Present", "ich", "möchte" ],
  [ "möchten", "Present", "du", "möchtest" ],
  [ "möchten", "Present", "er/sie/es", "möchte" ],
  [ "möchten", "Present", "wir", "möchten" ],
  [ "möchten", "Present", "ihr", "möchtet" ],
  [ "möchten", "Present", "sie/Sie", "möchten" ],
  [ "brauchen", "Present", "ich", "brauche" ],
  [ "brauchen", "Present", "du", "brauchst" ],
  [ "brauchen", "Present", "er/sie/es", "braucht" ],
  [ "brauchen", "Present", "wir", "brauchen" ],
  [ "brauchen", "Present", "ihr", "braucht" ],
  [ "brauchen", "Present", "sie/Sie", "brauchen" ],
  [ "müssen", "Present", "ich", "muss" ],
  [ "müssen", "Present", "du", "musst" ],
  [ "müssen", "Present", "er/sie/es", "muss" ],
  [ "müssen", "Present", "wir", "müssen" ],
  [ "müssen", "Present", "ihr", "müsst" ],
  [ "müssen", "Present", "sie/Sie", "müssen" ]
];

let workingPrompts = prompts;


let currentPrompt;
let numCorrect = 0;
let rigthAnswers=0;
let wrongAnswers=0;

const rigthInARowField =document.getElementById('rightinarow');
const rigthAnswersField =document.getElementById('rigth');
const wrongAnswersField =document.getElementById('wrong');
const newornotnewlabel = document.getElementById('newornotnewlabel');

rigthInARowField.textContent = 0;
rigthAnswersField.textContent = 0;
wrongAnswersField.textContent = 0;
newornotnewlabel.textContent="All ";

let timeoutId;
let timerInterval;

let time2Answer = 30;
let MaxQuestions = 20;

function showPrompt() {
        if (numCorrect === MaxQuestions) {
          alert("Congratulations! You got " + MaxQuestions + " questions in a row right!");
          document.location.URL ="google.com"
          return;
        }

        const randomIndex = Math.floor(Math.random() * workingPrompts.length);
        currentPrompt = workingPrompts[randomIndex];
       // prompts.splice(randomIndex, 1);

        const promptElement = document.getElementById("prompt");
        promptElement.innerHTML = "Give me the <B> " + currentPrompt[1] + "</B> of the Verb: <B>" + currentPrompt[0] +  "</B> for the pronoun <B>" + currentPrompt[2] + "</B>" ;

        // set a timeout of 5 seconds
        const endTime = Date.now() + (time2Answer *1000);

       timeoutId = setTimeout(() => {
        // do something when the timeout expires
          numCorrect = 0;
         showMessage("error", `Too slow! Time's up! You only have 15 secs`);
          showPrompt();
      }, time2Answer *1000);

      // display the time remaining
      let timerElement = document.getElementById('timer'); // replace 'timer' with the ID of your timer element
       timerInterval = setInterval(() => {
        const remainingTime = Math.max(0, endTime - Date.now());
        const seconds = Math.floor(remainingTime / 1000);
        timerElement.textContent = `${seconds} second${seconds === 1 ? '' : 's'} left`;
      }, 1000);

}

function showMessage(type, message) {
      const messageElement = document.getElementById("message");
      messageElement.innerHTML = message;
      messageElement.className = type;
      setTimeout(() => {
        messageElement.innerHTML = "";
        messageElement.className = "";
      }, 2000);
}

function tooglenewWordsButton()
{
  if (newWordsButton.textContent=="Only New Verbs")
  {
      newornotnewlabel.textContent="Only new ";
      newWordsButton.textContent = "All Verbs";
      workingPrompts = newprompts;
  } else 
  {
      newornotnewlabel.textContent="All ";
      newWordsButton.textContent = "Only New Verbs";
      workingPrompts = prompts;
  }
}

function submitAnswer() {
      clearInterval(timerInterval);
      clearTimeout(timeoutId);

      const answerInput = document.getElementById("answerInput");
      const userAnswer = answerInput.value.trim().toLowerCase();

      if (userAnswer === currentPrompt[3].toLowerCase())  {

        numCorrect++;
        rigthInARowField.textContent = numCorrect;

        answerInput.value = "";
        answerInput.focus();


          if (numCorrect === MaxQuestions) {
              alert("Congratulations! You got " + MaxQuestions + " questions in a row right!");
          } else {
            answerInput.value = "";
            answerInput.focus();
            showMessage("success", "Correct! Keep going...");
            showPrompt();

          }
          rigthAnswers++;
          rigthAnswersField.textContent=rigthAnswers;


        } else {
          answerInput.value = "";
          answerInput.focus();

          numCorrect = 0;
          rigthInARowField.textContent = numCorrect;

          wrongAnswers++;
          wrongAnswersField.textContent=wrongAnswers;


          showMessage("error", `Sorry, that's incorrect. The correct answer is <B> "${currentPrompt[3]} "</B>.`);
          showPrompt();
        }

}

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", submitAnswer);
   const newWordsButtons = document.getElementById('newWordsButton');
  newWordsButtons.addEventListener("click", tooglenewWordsButton);

  showPrompt();
});

const textBox = document.getElementById('answerInput');
const submitButton = document.getElementById('submitButton');
const newWordsButton = document.getElementById('newWordsButton');


textBox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitButton.click();
  }
});

textBox.focus();




