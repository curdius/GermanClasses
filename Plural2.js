const prompts = [
  [ "der", "radiergummi", "3", "die", "radiergummis" ],
  [ "der", "block", "3", "die", "blocks" ],
  [ "der", "papierkorb", "2", "die", "papierkörbe" ],
  [ "der", "schrank", "5", "die", "schränke" ],
  [ "der", "stuhl", "5", "die", "stühle" ],
  [ "der", "rucksack", "5", "die", "rucksäcke" ],
  [ "der", "bleistift", "5", "die", "bleistifte" ],
  [ "der", "abfalleimer", "1", "die", "abfalleimer" ],
  [ "der", "locher", "1", "die", "locher" ],
  [ "der", "computer", "1", "die", "computer" ],
  [ "die", "schere", "4", "die", "scheren" ],
  [ "die", "uhr", "4", "die", "uhren" ],
  [ "die", "büroklammer", "4", "die", "büroklammern" ],
  [ "das", "buch", "2", "die", "Bücher" ],
  [ "das", "lineal", "5", "die", "lineale" ],
  [ "das", "regal", "5", "die", "regale" ],
  [ "das", "blatt", "2", "die", "blätter" ],
  [ "das", "heft", "5", "die", "hefte" ],
  [ "das", "papier", "5", "die", "papiere" ],
  [ "das", "fenster", "1", "die", "fenster" ],
  [ "das", "radio", "3", "die", "radios" ],
  [ "das", "handy", "3", "die", "handys" ],
  [ "der", "herr", "4", "die", "herren" ],
  [ "die", "frau", "3", "die", "frauen" ],
  [ "das", "land", "5", "die", "Länder" ],
  [ "der", "kaffee", "3", "die", "Kaffees" ],
  [ "die", "pizza", "3", "die", "pizzas" ],
  [ "der", "name", "4", "die", "namen" ],
  [ "die", "techknik", "4", "die", "techkniken" ],
  [ "die", "mode", "4", "die", "moden" ],
  [ "der", "familienname", "4", "die", "familiennamen" ],
  [ "der", "stift", "5", "die", "stifte" ],
  [ "der", "wohnort", "5", "die", "wohnorte" ],
  [ "die", "stadt", "5", "die", "städte" ],
  [ "die", "kunst", "5", "die", "künste" ],
  [ "der", "lehrer", "1", "die", "lehrer" ],
  [ "der", "verkäufer", "1", "die", "verkäufer" ],
  [ "der", "elektriker", "1", "die", "elektriker" ],
  [ "der", "musiker", "1", "die", "musiker" ],
  [ "der", "busfaher", "1", "die", "busfaher" ],
  [ "der", "programmierer", "1", "die", "programmierer" ],
  [ "der", "füller", "1", "die", "füller" ],
  [ "das", "bild", "2", "die", "bilder" ],
  [ "die", "e-mail", "3", "die", "e-mails" ],
  [ "das", "hobby", "3", "die", "hobbys" ],
  [ "der", "kuli", "3", "die", "kulis" ],
  [ "der", "kugelscreiber", "1", "die", "kugelscreiber" ],
  [ "das", "tablet", "3", "die", "tablets" ],
  [ "der", "laptop", "3", "die", "laptops" ],
  [ "das", "auto", "3", "die", "autos" ],
  [ "die", "kamera", "3", "die", "kameras" ],
  [ "der", "lehrer", "1", "die", "lehrer" ],
  [ "der", "vorname", "4", "die", "vornamen" ],
  [ "die", "lehrerin", "4", "die", "lehrerinnen" ],
  [ "die", "verkäuferin", "4", "die", "verkäuferinnen" ],
  [ "die", "elektrikerin", "4", "die", "elektrikerinnen" ],
  [ "die", "ingenieurin", "4", "die", "ingenieurinnen" ],
  [ "die", "musikerin", "4", "die", "musikerinnen" ],
  [ "die", "ärztin", "4", "die", "ärztinnen" ],
  [ "die", "busfahrerin", "4", "die", "busfahrerinnen" ],
  [ "der", "studen", "4", "die", "studenten" ],
  [ "die", "studentin", "4", "die", "studentinnen" ],
  [ "die", "programmiererin", "4", "die", "programmiererinnen" ],
  [ "die", "firma", "4", "die", "firmen" ],
  [ "der", "nachname", "4", "die", "nachnamen" ],
  [ "die", "e-mail adresse", "4", "die", "e-mail adressen" ],
  [ "die", "hausnummer", "4", "die", "hausnummern" ],
  [ "die", "postleitzahl", "4", "die", "postleitzahlen" ],
  [ "die", "strasse", "4", "die", "strassen" ],
  [ "die", "telefonenummer", "4", "die", "telefonenummern" ],
  [ "die", "nummer", "4", "die", "nummern" ],
  [ "die", "lampe", "4", "die", "lampen" ],
  [ "die", "tasche", "4", "die", "taschen" ],
  [ "die", "flasche", "4", "die", "flaschen" ],
  [ "die", "tafel", "4", "die", "tafeln" ],
  [ "die", "tasse", "4", "die", "tassen" ],
  [ "die", "jacke", "4", "die", "jacken" ],
  [ "die", "tür", "4", "die", "türen" ],
  [ "die", "brille", "4", "die", "brillen" ],
  [ "die", "uhr", "4", "die", "uhren" ],
  [ "die", "süssigkeit", "4", "die", "süssigkeiten" ],
  [ "die", "Maus", "5", "die", "Mäusse" ],
  [ "der", "Beamer", "1", "die", "Beamer" ],
  [ "der", "Beruf", "5", "die", "Berufe" ],
  [ "die", "Schokolade", "4", "die", "Schokoladen" ],
  [ "der", "Arzt", "5", "die", "Ärzte" ],
  [ "die", "Reinigungskraft", "5", "die", "Reinigungskräfte" ],
  [ "das", "Ding", "5", "die", "Dinge" ],
  [ "das", "Jahr", "5", "die", "Jahre" ],
  [ "das", "Kleid", "1", "die", "Kleider" ], //vestido
  [ "das", "Ladekabel", "1", "die", "Ladekabel" ],
  [ "das", "Schiff", "1", "die", "Schiffe" ], //Ship
  [ "das", "Foto", "1", "die", "Fotos" ], 
  [ "das", "Smartphone", "1", "die", "Smartphones"],
  [ "der", "Sport", "5", "die", "Sporte" ],
  [ "der", "USB-Stick", "1", "die", "USB-Sticks" ],
  [ "der", "Ring", "1", "die", "Ringe" ],
  [ "der", "Lippenstift", "1", "die", "Lippenstifte" ],
  [ "der", "Koffer", "1", "die", "Koffer" ], //mala viagem
  [ "der", "Schuh", "1", "die", "Schuhe" ],
  [ "der", "Hut", "1", "die", "Hüte" ], //chapeu
  [ "der", "Tipp", "1", "die", "Tipps" ], //Tip
  [ "der", "Traum", "1", "die", "Träume" ], //Sonho
  [ "der", "Hafen", "1", "die", "Häfen" ], //Porto
  [ "der", "Mann", "1", "die", "Männer" ],
  [ "die", "Batterie", "1", "die", "Batterien" ],
  [ "die", "Handyhülle", "1", "die", "Handyhüllen" ],
  [ "die", "Hose", "1", "die", "Hosen" ], //calças
  [ "die", "Kette", "1", "die", "Ketten" ], //colar
  [ "die", "Sonnenbrille", "1", "die", "Sonnenbrillen" ], 
  [ "die", "CD", "1", "die", "CDs" ],
  [ "das", "theater", "1", "die", "theater"],
  [ "der", "Film", "1", "die", "Filme" ],
  [ "der", "Freud", "1", "die", "Freude" ],
  [ "die", "Freudin", "1", "die", "Freudinnen" ],
  [ "der", "Frühling", "0", "", "" ],
  [ "der", "Sommer", "0", "", "" ],
  [ "der", "Herbst", "0", "", "" ],
  [ "der", "Winter", "0", "", "" ],
  [ "der", "Tag", "0", "die", "Tage" ],
  [ "die", "Woche", "0", "die", "Wochen" ],
  [ "der", "Sonntag", "0", "die", "Sonntage" ],
  [ "der", "Donnerstag", "0", "die", "Donnerstage" ],
  [ "der", "Freitag", "0", "die", "Freitage" ],
  [ "der", "Samstag", "0", "die", "Samstage" ],
  [ "der", "Dienstag", "0", "die", "Dienstage" ],
  [ "der", "Mittwoch", "0", "die", "Mittwoche" ],
  [ "der", "Montag", "0", "die", "Montage" ],
  [ "das", "Wochenende", "0", "die", "Wochenenden" ],
  [ "die", "Zeit", "0", "die", "Zeiten" ],
  [ "die", "Laute", "0", "", "" ],

  [ "der", "Ehepartner", "1", "die", "Ehepartner" ],
  [ "die", "Ehepartnerin", "1", "die", "Ehepartnerinnen" ],
  
  [ "die", "Geschwister", "1", "", "" ], //plural

  [ "der", "Bruder", "1", "die", "Brüder" ],
  [ "die", "Schwester", "1", "die", "Schwestern" ],

  [ "die", "Grosseltern", "1", "", "" ],

  [ "die", "Grossmutter", "1", "die", "Grossmütter" ],
  [ "der", "Grossvater", "1", "die", "Grossväter" ],

  [ "die", "Eltern", "1", "", "" ],
  [ "die", "Mutter", "1", "die", "Mütter" ],
  [ "der", "Vater", "1", "die", "Väter" ],

  [ "das", "Kind", "1", "die", "Kinder" ],
  [ "der", "Sohn", "1", "die", "Söhne" ],
  [ "die", "Tochter", "1", "die", "Töchter" ],
  [ "das", "Mädchen", "1", "die", "Mädchen" ], //girl
  [ "der", "Knabe", "1", "die", "Knaben" ], //boy
  
  [ "das", "Ausland", "1", "", "" ],
  [ "die", "Familie", "1", "die", "Familien" ],

  [ "der", "Schwager", "1", "die", "Schwäger" ], //cunhado
  [ "die", "Schwester", "1", "die", "Schwestern" ], //cunhada

  [ "der", "Onkel", "1", "die", "Onkel" ],
  [ "die", "Tante", "1", "die", "Tanten" ],

  [ "der", "Schwiegervater", "1", "die", "Schwiegerväter" ],
  [ "die", "Schwiegermutter", "1", "die", "Schwiegermütter" ],

  [ "der", "Enkel", "1", "die", "Enkel" ],
  [ "die", "Enkelin", "1", "die", "Enkelinnen" ],

  [ "der", "Neffe", "1", "die", "Neffen" ],
  [ "die", "Nichte", "1", "die", "Nichten" ]

];

const newprompts = [
 /* [ "der", "Film", "1", "die", "Filme" ],
  [ "der", "Frühling", "0", "", "" ],
  [ "der", "Sommer", "0", "", "" ],
  [ "der", "Herbst", "0", "", "" ],
  [ "der", "Winter", "0", "", "" ],
  [ "der", "Tag", "1", "die", "Tage" ],
  [ "der", "Sonntag", "1", "die", "Sonntage" ],
  [ "der", "Donnerstag", "1", "die", "Donnerstage" ],
  [ "der", "Freitag", "1", "die", "Freitage" ],
  [ "der", "Samstag", "1", "die", "Samstage" ],
  [ "der", "Dienstag", "1", "die", "Dienstage" ],
  [ "der", "Mittwoch", "1", "die", "Mittwoche" ],
  [ "der", "Montag", "1", "die", "Montage" ],
  [ "der", "Freund", "1", "die", "Freunde" ],

  [ "die", "Freundin", "1", "die", "Freundinnen" ],
  [ "die", "Woche", "1", "die", "Wochen" ],
  [ "die", "Zeit", "1", "die", "Zeiten" ],
  [ "die", "Laute", "0", "", "" ],

  [ "das", "Wochenende", "1", "die", "Wochenenden" ], */


  [ "der", "Ehepartner", "1", "die", "Ehepartner" ],
  [ "die", "Ehepartnerin", "1", "die", "Ehepartnerinnen" ],
  
  [ "die", "Geschwister", "1", "", "" ], //plural

  [ "der", "Bruder", "1", "die", "Brüder" ],
  [ "die", "Schwester", "1", "die", "Schwestern" ],

  [ "die", "Grosseltern", "1", "", "" ],

  [ "die", "Grossmutter", "1", "die", "Grossmütter" ],
  [ "der", "Grossvater", "1", "die", "Grossväter" ],

  [ "die", "Eltern", "1", "", "" ],
  [ "die", "Mutter", "1", "die", "Mütter" ],
  [ "der", "Vater", "1", "die", "Väter" ],

  [ "das", "Kind", "1", "die", "Kinder" ],
  [ "der", "Sohn", "1", "die", "Söhne" ],
  [ "die", "Tochter", "1", "die", "Töchter" ],
  [ "das", "Mädchen", "1", "die", "Mädchen" ], //girl
  [ "der", "Knabe", "1", "die", "Knaben" ], //boy
  
  [ "das", "Ausland", "1", "", "" ],
  [ "die", "Familie", "1", "die", "Familien" ],

  [ "der", "Schwager", "1", "die", "Schwäger" ], //cunhado
  [ "die", "Schwester", "1", "die", "Schwestern" ], //cunhada

  [ "der", "Onkel", "1", "die", "Onkel" ],
  [ "die", "Tante", "1", "die", "Tanten" ],

  [ "der", "Schwiegervater", "1", "die", "Schwiegerväter" ],
  [ "die", "Schwiegermutter", "1", "die", "Schwiegermütter" ],

  [ "der", "Enkel", "1", "die", "Enkel" ],
  [ "die", "Enkelin", "1", "die", "Enkelinnen" ],

  [ "der", "Neffe", "1", "die", "Neffen" ],
  [ "die", "Nichte", "1", "die", "Nichten" ]





];

let workingPrompts = prompts;

let currentPrompt;
let numCorrect = 0;
let rigthAnswers=0;
let wrongAnswers=0;
let percentage =0;

const rigthInARowField =document.getElementById('rightinarow');
const rigthAnswersField =document.getElementById('rigth');
const wrongAnswersField =document.getElementById('wrong');
const newornotnewlabel = document.getElementById('newornotnewlabel');
const percentageField = document.getElementById('percentage');


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
  promptElement.innerHTML = "Give me the singular and plural (with articles) of <B> " + currentPrompt[1] + "</B> for example:<I> der computer die computer</I>";

   // set a timeout of 5 seconds
  const endTime = Date.now() + (time2Answer *1000);

   timeoutId = setTimeout(() => {
    // do something when the timeout expires
        numCorrect = 0;
        rigthInARowField.textContent = numCorrect;
      
        wrongAnswers++;
        wrongAnswersField.textContent=wrongAnswers;
        updatePercentage();

          clearInterval(timerInterval);
          clearTimeout(timeoutId);

        showMessage("error", `Too slow! Time's up! You only have ` + time2Answer + ` secs`);

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

function updatePercentage()
{
    percentage = Math.round((rigthAnswers / (rigthAnswers+wrongAnswers)) * 100);
    percentageField.textContent = percentage;

} 

function showMessage(type, message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  messageElement.className = type;
   setTimeout(() => {
    messageElement.textContent = "";
    messageElement.className = "";
  }, 2000);
}

function tooglenewWordsButton()
{
  if (newWordsButton.textContent=="Only New words")
  {
      newornotnewlabel.textContent="Only new ";
      newWordsButton.textContent = "All Words";
      workingPrompts = newprompts;
  } else 
  {
      newornotnewlabel.textContent="All ";
      newWordsButton.textContent = "Only New words";
      workingPrompts = prompts;
  }
}



        // Function to track user activity
        function logActivity(numCorrect, numIncorrect) {
            var logMessage = {
                numCorrect: numCorrect,
                numIncorrect: numIncorrect
            };
            logglyTracker.push(logMessage);
        }

       


function isAnswerCorrect(answer,prompt) 
{
   if (prompt[4] == "") //the word as no plural
   {
      return (answer === prompt[0].toLowerCase() + " " + prompt[1].toLowerCase()) 
   } else {
       return (answer === prompt[0].toLowerCase() + " " + prompt[1].toLowerCase() + " " + prompt[3].toLowerCase() + " " + prompt[4].toLowerCase()) 
   }
}

function submitAnswer() {
  clearInterval(timerInterval);
  clearTimeout(timeoutId);

  const answerInput = document.getElementById("answerInput");
  const userAnswer = answerInput.value.trim().toLowerCase();

  if (isAnswerCorrect(userAnswer,currentPrompt)) { //(userAnswer === currentPrompt[0].toLowerCase() + " " + currentPrompt[1].toLowerCase() + " " + currentPrompt[3].toLowerCase() + " " + currentPrompt[4].toLowerCase()) {
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


        showMessage("error", `Sorry, that's incorrect. The correct answer is <B>"${currentPrompt[0]} ${currentPrompt[1]} ${currentPrompt[3]} ${currentPrompt[4]}"</B>.`);
       
      }
      updatePercentage();
      showPrompt();
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

window.addEventListener('beforeunload', function (event) {
  clearInterval(timerInterval);
  clearTimeout(timeoutId);
  event.preventDefault();
  event.returnValue = '';
  percentage = Math.round((rigthAnswers / (rigthAnswers+wrongAnswers))) * 100;
  if ((rigthAnswers+wrongAnswers)>0) {
      logtail.info("Plural game finished", {
        rigthAnswers: rigthAnswers,
        wrongAnswers: wrongAnswers,
        percentageSuccess: percentage
        });
      // Ensure that all logs are sent to Logtail
      logtail.flush()
  }
});

textBox.focus();
