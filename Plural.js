const prompts = [
  [ "der", "radiergummi", "3", "die", "radiergummis",1],
  [ "der", "block", "3", "die", "blocks",1],
  [ "der", "papierkorb", "2", "die", "papierkörbe",3 ],
  [ "der", "schrank", "5", "die", "schränke" ,2],
  [ "der", "stuhl", "5", "die", "stühle" ,1],
  [ "der", "rucksack", "5", "die", "rucksäcke",2 ],
  [ "der", "bleistift", "5", "die", "bleistifte" ,1],
  [ "der", "abfalleimer", "1", "die", "abfalleimer" ,1],
  [ "der", "locher", "1", "die", "locher" ,1],
  [ "der", "computer", "1", "die", "computer" ,1],
  [ "die", "schere", "4", "die", "scheren" ,1],
  [ "die", "uhr", "4", "die", "uhren" ,1],
  [ "die", "büroklammer", "4", "die", "büroklammern" ,2],
  [ "das", "buch", "2", "die", "Bücher" ,1],
  [ "das", "lineal", "5", "die", "lineale" ,1],
  [ "das", "regal", "5", "die", "regale" ,1],
  [ "das", "blatt", "2", "die", "blätter" ,1],
  [ "das", "heft", "5", "die", "hefte" ,1],
  [ "das", "papier", "5", "die", "papiere" ,1],
  [ "das", "fenster", "1", "die", "fenster" ,1],
  [ "das", "radio", "3", "die", "radios" ,1],
  [ "das", "handy", "3", "die", "handys" ,1],
  [ "der", "herr", "4", "die", "herren" ,1],
  [ "die", "frau", "3", "die", "frauen" ,1],
  [ "das", "land", "5", "die", "Länder" ,2],
  [ "der", "kaffee", "3", "die", "Kaffees",1 ],
  [ "die", "pizza", "3", "die", "pizzas" ,1],
  [ "der", "name", "4", "die", "namen" ,1],
  [ "die", "techknik", "4", "die", "techkniken" ,1],
  [ "die", "mode", "4", "die", "moden" ,1],
  [ "der", "familienname", "4", "die", "familiennamen" ,1],
  [ "der", "stift", "5", "die", "stifte" ,1],
  [ "der", "wohnort", "5", "die", "wohnorte" ,1],
  [ "die", "stadt", "5", "die", "städte" ,2],
  [ "die", "kunst", "5", "die", "künste" ,2],
  [ "der", "lehrer", "1", "die", "lehrer" ,1],
  [ "der", "verkäufer", "1", "die", "verkäufer" ,1],
  [ "der", "elektriker", "1", "die", "elektriker" ,1],
  [ "der", "musiker", "1", "die", "musiker" ,1],
  [ "der", "busfaher", "1", "die", "busfaher" ,1],
  [ "der", "programmierer", "1", "die", "programmierer" ,1],
  [ "der", "füller", "1", "die", "füller" ,1],
  [ "das", "bild", "2", "die", "bilder" ,2],
  [ "die", "e-mail", "3", "die", "e-mails" ,1],
  [ "das", "hobby", "3", "die", "hobbys" ,1],
  [ "der", "kuli", "3", "die", "kulis" ,1],
  [ "der", "kugelscreiber", "1", "die", "kugelscreiber" ,1],
  [ "das", "tablet", "3", "die", "tablets" ,1],
  [ "der", "laptop", "3", "die", "laptops" ,1],
  [ "das", "auto", "3", "die", "autos" ,1],
  [ "die", "kamera", "3", "die", "kameras" ,1],
  [ "der", "lehrer", "1", "die", "lehrer" ,1],
  [ "der", "vorname", "4", "die", "vornamen" ,1],
  [ "die", "lehrerin", "4", "die", "lehrerinnen" ,1],
  [ "die", "verkäuferin", "4", "die", "verkäuferinnen" ,1],
  [ "die", "elektrikerin", "4", "die", "elektrikerinnen" ,1],
  [ "die", "ingenieurin", "4", "die", "ingenieurinnen" ,1],
  [ "die", "musikerin", "4", "die", "musikerinnen" ,1],
  [ "die", "ärztin", "4", "die", "ärztinnen" ,1],
  [ "die", "busfahrerin", "4", "die", "busfahrerinnen" ,1],
  [ "der", "studen", "4", "die", "studenten" ,2],
  [ "die", "studentin", "4", "die", "studentinnen" ,1],
  [ "die", "programmiererin", "4", "die", "programmiererinnen" ,1],
  [ "die", "firma", "4", "die", "firmen" ,2],
  [ "der", "nachname", "4", "die", "nachnamen" ,1],
  [ "die", "e-mail adresse", "4", "die", "e-mail adressen" ,1],
  [ "die", "hausnummer", "4", "die", "hausnummern" ,1],
  [ "die", "postleitzahl", "4", "die", "postleitzahlen" ,1],
  [ "die", "strasse", "4", "die", "strassen" ,1],
  [ "die", "telefonenummer", "4", "die", "telefonenummern" ,1],
  [ "die", "nummer", "4", "die", "nummern" ,1],
  [ "die", "lampe", "4", "die", "lampen" ,1],
  [ "die", "tasche", "4", "die", "taschen" ,1],
  [ "die", "flasche", "4", "die", "flaschen" ,1],
  [ "die", "tafel", "4", "die", "tafeln" ,1],
  [ "die", "tasse", "4", "die", "tassen" ,1],
  [ "die", "jacke", "4", "die", "jacken" ,1],
  [ "die", "tür", "4", "die", "türen" ,2],
  [ "die", "brille", "4", "die", "brillen" ,1],
  [ "die", "uhr", "4", "die", "uhren" ,1],
  [ "die", "süssigkeit", "4", "die", "süssigkeiten" ,1],
  [ "die", "Maus", "5", "die", "Mäusse" ,3],
  [ "der", "Beamer", "1", "die", "Beamer" ,1],
  [ "der", "Beruf", "5", "die", "Berufe" ,1],
  [ "die", "Schokolade", "4", "die", "Schokoladen" ,1],
  [ "der", "Arzt", "5", "die", "Ärzte" ,2],
  [ "die", "Reinigungskraft", "5", "die", "Reinigungskräfte" ,3],
  [ "das", "Ding", "5", "die", "Dinge" ,1],
  [ "das", "Jahr", "5", "die", "Jahre" ,1],
  [ "das", "Kleid", "1", "die", "Kleider" ,2], //vestido
  [ "das", "Ladekabel", "1", "die", "Ladekabel",1 ],
  [ "das", "Schiff", "1", "die", "Schiffe" ,1], //Ship
  [ "das", "Foto", "1", "die", "Fotos" ,1], 
  [ "das", "Smartphone", "1", "die", "Smartphones",1],
  [ "der", "Sport", "5", "die", "Sporte" ,1],
  [ "der", "USB-Stick", "1", "die", "USB-Sticks",1 ],
  [ "der", "Ring", "1", "die", "Ringe" ,1],
  [ "der", "Lippenstift", "1", "die", "Lippenstifte" ,1],
  [ "der", "Koffer", "1", "die", "Koffer" ,1], //mala viagem
  [ "der", "Schuh", "1", "die", "Schuhe" ,1],
  [ "der", "Hut", "1", "die", "Hüte" ,2], //chapeu
  [ "der", "Tipp", "1", "die", "Tipps",1 ], //Tip
  [ "der", "Traum", "1", "die", "Träume" ,2], //Sonho
  [ "der", "Hafen", "1", "die", "Häfen" ,2], //Porto
  [ "der", "Mann", "1", "die", "Männer" ,2],
  [ "die", "Batterie", "1", "die", "Batterien" ,1],
  [ "die", "Handyhülle", "1", "die", "Handyhüllen" ,2],
  [ "die", "Hose", "1", "die", "Hosen" ,1], //calças
  [ "die", "Kette", "1", "die", "Ketten" ,1], //colar
  [ "die", "Sonnenbrille", "1", "die", "Sonnenbrillen" ,1], 
  [ "die", "CD", "1", "die", "CDs" ,1],
  [ "das", "theater", "1", "die", "theater",1],
  [ "der", "Film", "1", "die", "Filme" ,1],
  [ "der", "Freud", "1", "die", "Freude" ,1],
  [ "die", "Freudin", "1", "die", "Freudinnen" ,1],
  [ "der", "Frühling", "0", "", "" ,2],
  [ "der", "Sommer", "0", "", "" ,2],
  [ "der", "Herbst", "0", "", "" ,2],
  [ "der", "Winter", "0", "", "" ,2],
  [ "der", "Tag", "0", "die", "Tage" ,1],
  [ "die", "Woche", "0", "die", "Wochen" ,1],
  [ "der", "Sonntag", "0", "die", "Sonntage",1 ],
  [ "der", "Donnerstag", "0", "die", "Donnerstage" ,1],
  [ "der", "Freitag", "0", "die", "Freitage" ,1],
  [ "der", "Samstag", "0", "die", "Samstage" ,1],
  [ "der", "Dienstag", "0", "die", "Dienstage" ,1],
  [ "der", "Mittwoch", "0", "die", "Mittwoche" ,1],
  [ "der", "Montag", "0", "die", "Montage" ,1],
  [ "das", "Wochenende", "0", "die", "Wochenenden" ,1],
  [ "die", "Zeit", "0", "die", "Zeiten" ,1],
  [ "die", "Laute", "0", "", "" ,2],

  [ "der", "Ehepartner", "1", "die", "Ehepartner" ,1],
  [ "die", "Ehepartnerin", "1", "die", "Ehepartnerinnen" ,1],
  
  [ "die", "Geschwister", "1", "", "" ,2], //plural

  [ "der", "Bruder", "1", "die", "Brüder" ,1],
  [ "die", "Schwester", "1", "die", "Schwestern" ,1],

  [ "die", "Grosseltern", "1", "", "" ,1],

  [ "die", "Grossmutter", "1", "die", "Grossmütter",1 ],
  [ "der", "Grossvater", "1", "die", "Grossväter" ,1],

  [ "die", "Eltern", "1", "", "" ,1],
  [ "die", "Mutter", "1", "die", "Mütter",1 ],
  [ "der", "Vater", "1", "die", "Väter" ,1],

  [ "das", "Kind", "1", "die", "Kinder" ,1],
  [ "der", "Sohn", "1", "die", "Söhne" ,2],
  [ "die", "Tochter", "1", "die", "Töchter" ,1],
  [ "das", "Mädchen", "1", "die", "Mädchen" ,1], //girl
  [ "der", "Knabe", "1", "die", "Knaben" ,1], //boy
  
  [ "das", "Ausland", "1", "", "" ,2],
  [ "die", "Familie", "1", "die", "Familien" ,1],

  [ "der", "Schwager", "1", "die", "Schwäger" ,2], //cunhado
  [ "die", "Schwester", "1", "die", "Schwestern" ,2], //cunhada

  [ "der", "Onkel", "1", "die", "Onkel" ,1],
  [ "die", "Tante", "1", "die", "Tanten" ,1],

  [ "der", "Schwiegervater", "1", "die", "Schwiegerväter" ,1],
  [ "die", "Schwiegermutter", "1", "die", "Schwiegermütter" ,1],

  [ "der", "Enkel", "1", "die", "Enkel" ,1],
  [ "die", "Enkelin", "1", "die", "Enkelinnen" ,1],

  [ "der", "Neffe", "1", "die", "Neffen" ,1],
  [ "die", "Nichte", "1", "die", "Nichten" ,1],

    [ "der", "Apfel", "1", "die", "Äpfel" ,2],
  [ "der", "Jogurt", "1", "die", "Jogurts" ,2] , 
  [ "der", "Käse", "1", "", "" ,2] , 
  [ "der", "Saft", "1", "die", "Säfte" ,2] , 
  [ "der", "Salat", "1", "die", "Salate" ,2] , 
  [ "der", "Wein", "1", "", "" ,2] , 
  [ "der", "Reis", "1", "", "" ,2] , 
  [ "der", "Becher", "1", "die", "Becher" ,2] , //cup of yogurt
  [ "der", "Kühlschank", "1", "die", "Kühlschänke" ,2] , 
  [ "der", "Mensch", "1", "die", "Menschen" ,2] , 

  [ "die", "Butter", "1", "", "" ,2],
  [ "die", "Gurke", "1", "die", "Gurken" ,2] , //pepino
  [ "die", "Milch", "1", "", "" ,2],
  [ "die", "Wurst", "1", "die", "Würste" ,3],
  [ "die", "Banane", "1", "die", "Bananen" ,2],
  [ "die", "Marmelade", "1", "die", "Marmeladen" ,2],
  [ "die", "Tomate", "1", "die", "Tomaten" ,2] , 
  [ "die", "Kartoffel", "1", "die", "Kartoffeln" ,2] , 
  [ "die", "Nudeln", "1", "", "" ,2] , //massa - so ha plural
  [ "die", "Dose", "1", "die", "Dosen" ,2] , //lata
  [ "die", "Orange", "1", "die", "Orangen" ,2] , //lata
  [ "die", "Packung", "1", "die", "Packungen" ,2] , //Pacote - Pacote de massa
  [ "die", "Tüte", "1", "die", "Tüten" ,2] , //saco papel - Pacote de batatas fritas
  [ "die", "Pflanze", "1", "die", "Pflanzen" ,2] , 
  
  [ "das", "Ei", "1", "die", "Eier" ,2],
  [ "das", "Fleisch", "1", "", "" ,2],
  [ "das", "Wasser", "1", "", "" ,2],
  [ "das", "Obst", "1", "", "" ,2] ,  //fruta
  [ "das", "Brot", "1", "die", "Brote" ,2] ,  
  [ "das", "Brötchen", "1", "die", "Brötchen" ,2] ,// pao pequeno
  [ "das", "Glas", "1", "die", "Gläser" ,2] ,  
  [ "das", "Netz", "1", "die", "Netze" ,2] , 
  [ "das", "Stück", "1", "die", "Stücke" ,2] , 
  [ "das", "Frühstück", "1", "die", "Frühstücke" ,2] ,
  [ "das", "tier", "1", "die", "tiere" ,2],


  [ "der", "Urlaub", "1", "die", "Urlaube" ,2], //Holidays
  [ "der", "Zug", "1", "die", "Züger" ,2],
  [ "der", "Bus", "1", "die", "Busser" ,2],

  [ "die", "U-Bahn", "1", "die", "U-Bahnen" ,2],
  [ "die", "S-Bahn", "1", "die", "S-Bahnen" ,2],
  [ "die", "Strassenbahn", "1", "die", "Strassenbahnen" ,2],
  [ "die", "Universität", "1", "die", "Universitäten" ,2],
  [ "die", "Uni", "1", "die", "Unis" ,2],
  [ "die", "Fahrt", "1", "die", "Fahrten" ,2],
  [ "die", "Richtung", "1", "die", "Richtungen" ,2], //direction
  [ "die", "Station", "1", "die", "Stationen" ,2], //direction

  [ "das", "Flugzeug", "1", "die", "Flugzeug" ,2],
  [ "das", "Schiff", "1", "die", "Schiffe" ,2],
  [ "das", "fahrrad", "1", "die", "fährrader" ,2],
  [ "das", "zimmer", "1", "die", "zimmer" ,2],
  [ "der", "Klassenraum", "1", "die", "Klassenräume" ,2],

       [ "der", "Flur", "1", "die", "Flure" ,2], //Holidays
     [ "der", "Balkon", "1", "die", "Balkone" ,2], //Valaranda
     [ "der", "Schlüssel", "1", "die", "Schlüssel" ,2], //Chave
     [ "der", "Schrank", "1", "die", "Schränke" ,2], //armario
     [ "der", "Herd", "1", "die", "Herde" ,2], //fogao
     [ "der", "Teller", "1", "die", "Teller" ,2], //pratos
     [ "der", "Regal", "1", "die", "Regale" ,2], //armario prateleiras
     [ "der", "Nachbar", "1", "die", "Nachbarn" ,2], //Vizinhos

     [ "die", "Matratze", "1", "die", "Matratzen" ,2], //Colchao
     [ "die", "WG", "1", "die", "WGS" ,2],
     [ "die", "Küche", "1", "die", "Küchen" ,2],
     [ "die", "Ankunft", "1", "die", "Ankünfte" ,2], //Arrival
     [ "die", "Wand", "1", "die", "Wände" ,2], //Wall
     [ "die", "Nachbarin", "1", "die", "Nachbarinnen" ,2], //vizinha

     [ "das", "Sofa", "1", "die", "Sofas" ,2],
     [ "das", "Zentrum", "1", "", "" ,2],
     [ "das", "Wohnzimmer", "1", "die", "Wohnzimmer" ,2],
     [ "das", "zimmer", "1", "die", "zimmer" ,2],
     [ "das", "Schlafzimmer", "1", "die", "Schlafzimmer" ,2],
     [ "das", "Kinderzimmer", "1", "die", "Kinderzimmer" ,2],
     [ "das", "Arbeitszimmer", "1", "die", "Arbeitszimmer" ,2],
     [ "das", "Bad", "1", "die", "Bäder" ,2],
     [ "das", "Badezimmer", "1", "die", "Badezimmer" ,2],
     [ "das", "Erdgeschoss", "1", "die", "Erdgeschosse" ,2], //gound floor
     [ "das", "Regal", "1", "die", "Regale" ,2], 
     [ "das", "Angebot", "1", "die", "Angebote" ,2],  //offer anuncio
     [ "das", "Leben", "1", "die", "Leben" ,2]  //Vida



];

const newprompts = [

     [ "der", "Flur", "1", "die", "Flure" ,2], //Holidays
     [ "der", "Balkon", "1", "die", "Balkone" ,2], //Valaranda
     [ "der", "Schlüssel", "1", "die", "Schlüssel" ,2], //Chave
     [ "der", "Schrank", "1", "die", "Schränke" ,2], //armario
     [ "der", "Herd", "1", "die", "Herde" ,2], //fogao
     [ "der", "Teller", "1", "die", "Teller" ,2], //pratos
     [ "der", "Regal", "1", "die", "Regale" ,2], //armario prateleiras
     [ "der", "Nachbar", "1", "die", "Nachbarn" ,2], //Vizinhos

     [ "die", "Matratze", "1", "die", "Matratzen" ,2], //Colchao
     [ "die", "WG", "1", "die", "WGS" ,2],
     [ "die", "Küche", "1", "die", "Küchen" ,2],
     [ "die", "Ankunft", "1", "die", "Ankünfte" ,2], //Arrival
     [ "die", "Wand", "1", "die", "Wände" ,2], //Wall
     [ "die", "Nachbarin", "1", "die", "Nachbarinnen" ,2], //vizinha

     [ "das", "Sofa", "1", "die", "Sofas" ,2],
     [ "das", "Zentrum", "1", "", "" ,2],
     [ "das", "Wohnzimmer", "1", "die", "Wohnzimmer" ,2],
     [ "das", "zimmer", "1", "die", "zimmer" ,2],
     [ "das", "Schlafzimmer", "1", "die", "Schlafzimmer" ,2],
     [ "das", "Kinderzimmer", "1", "die", "Kinderzimmer" ,2],
     [ "das", "Arbeitszimmer", "1", "die", "Arbeitszimmer" ,2],
     [ "das", "Bad", "1", "die", "Bäder" ,2],
     [ "das", "Badezimmer", "1", "die", "Badezimmer" ,2],
     [ "das", "Erdgeschoss", "1", "die", "Erdgeschosse" ,2], //gound floor
     [ "das", "Regal", "1", "die", "Regale" ,2], 
     [ "das", "Angebot", "1", "die", "Angebote" ,2],  //offer anuncio
     [ "das", "Leben", "1", "die", "Leben" ,2]  //Vida


];

let workingPrompts = prompts;

let currentPrompt;
let numCorrect = 0;
let rigthAnswers=0;
let wrongAnswers=0;
let percentage =0;
let difficultyIndex =0;
let biggestWinningSeries =0;


const rigthInARowField =document.getElementById('rightinarow');
const rigthAnswersField =document.getElementById('rigth');
const wrongAnswersField =document.getElementById('wrong');
const newornotnewlabel = document.getElementById('newornotnewlabel');
const percentageField = document.getElementById('percentage');
const difficultyField= document.getElementById('difficulty');


rigthInARowField.textContent = 0;
rigthAnswersField.textContent = 0;
wrongAnswersField.textContent = 0;
newornotnewlabel.textContent="All ";


let timeoutId;
let timerInterval;

let time2Answer = 30;
let MaxQuestions = 20;


function getRandonPrompt(pworkingPrompts)
{
      // Compute the weights for each element based on difficulty
  //We assign a weight of 1 for elements with a difficulty level of 1, a weight of 3 for elements with a
  //difficulty level of 2, and a weight of 5 for elements with a difficulty level of 3.
      const weights = pworkingPrompts.map(words => {
        return pworkingPrompts[5] === 1 ? 1 : (pworkingPrompts[5] === 2 ? 3 : 5);
      });

      // Choose a random index based on the computed weights
      const randomIndex = weightedRandom(weights);

      // Display the selected word
      return pworkingPrompts[randomIndex];
     // console.log(selectedWord);
}

 // Function to choose a random index based on weights
 function weightedRandom(weights) {
        const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
        let randomNum = Math.random() * totalWeight;
        for (let i = 0; i < weights.length; i++) {
          randomNum -= weights[i];
          if (randomNum < 0) {
            return i;
          }
        }
        return weights.length - 1;
      }

function showPrompt(newQuestion) {
  if (numCorrect === MaxQuestions) {
    alert("Congratulations! You got " + MaxQuestions + " questions in a row right!");
    document.location.URL ="google.com"
    return;
  }

 if (newQuestion) {
    currentPrompt = getRandonPrompt(workingPrompts);
  }


  const promptElement = document.getElementById("prompt");
  promptElement.innerHTML = "Give me the singular and plural (with articles) of <B> " + currentPrompt[1] + "</B> for example:<I> der computer die computer</I>";

  difficulty.textContent = currentPrompt[5] + "/3";
  difficultyIndex += currentPrompt[5];
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

        showPrompt(true);
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
      updatePercentage();
      showPrompt(true);
      } else {
        if (numCorrect>biggestWinningSeries) 
            biggestWinningSeries = numCorrect;
        answerInput.value = "";
        answerInput.focus();

        numCorrect = 0;
        rigthInARowField.textContent = numCorrect;

        wrongAnswers++;
        wrongAnswersField.textContent=wrongAnswers;


        showMessage("error", `Sorry, that's incorrect. The correct answer is <B>"${currentPrompt[0]} ${currentPrompt[1]} ${currentPrompt[3]} ${currentPrompt[4]}"</B>.`);
        updatePercentage();
        showPrompt(false);

      }
     
}

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", submitAnswer);
  const newWordsButtons = document.getElementById('newWordsButton');
  newWordsButtons.addEventListener("click", tooglenewWordsButton);


  showPrompt(true);
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
  
  percentage = Math.round((rigthAnswers / (rigthAnswers+wrongAnswers)) * 100);
  difficultyIndex = (difficultyIndex /(rigthAnswers+wrongAnswers));

  if (numCorrect>biggestWinningSeries) 
          biggestWinningSeries = numCorrect;

  if ((rigthAnswers+wrongAnswers)>0) {
      logtail.info("Plural game finished", {
        rigthAnswers: rigthAnswers,
        wrongAnswers: wrongAnswers,
        percentageSuccess: percentage,
        difficultyIndex: difficultyIndex,
        biggestWinningSeries: biggestWinningSeries
        });
      // Ensure that all logs are sent to Logtail
      logtail.flush()
  }
});

textBox.focus();
