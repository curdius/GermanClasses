const prompts = [
  [ "arbeiten", "Present", "ich", "arbeite","to Work" ,1],
  [ "arbeiten", "Present", "du", "arbeitest","to Work"  ,2],
  [ "arbeiten", "Present", "er/sie/es", "arbeitet","to Work" ,2 ],
  [ "arbeiten", "Present", "wir", "arbeiten","to Work"  ,1],
  [ "arbeiten", "Present", "ihr", "arbeitet","to Work"  ,2],
  [ "arbeiten", "Present", "sie/Sie", "arbeiten","to Work" ,1 ],

  [ "sein", "Present", "ich", "bin","to Be"  ,3],
  [ "sein", "Present", "du", "bist","to Be" ,3],
  [ "sein", "Present", "er/sie/es", "ist","to Be" ,3],
  [ "sein", "Present", "wir", "sind","to Be" ,3],
  [ "sein", "Present", "ihr", "seid","to Be" ,3],
  [ "sein", "Present", "sie/Sie", "sind","to Be" ,3],

  [ "kommen", "Present", "ich", "komme","to Come" ,1],
  [ "kommen", "Present", "du", "kommst","to Come" ,2],
  [ "kommen", "Present", "er/sie/es", "kommt","to Come",2 ],
  [ "kommen", "Present", "wir", "kommen","to Come" ,1],
  [ "kommen", "Present", "ihr", "kommt","to Come" ,2],
  [ "kommen", "Present", "sie/Sie", "kommen","to Come",1 ],

  [ "küssen", "Present", "ich", "küsse","to Kiss" ,1],
  [ "küssen", "Present", "du", "küsst","to Kiss" ,2],
  [ "küssen", "Present", "er/sie/es", "küsst","to Kiss" ,2],
  [ "küssen", "Present", "wir", "küssen","to Kiss" ,1],
  [ "küssen", "Present", "ihr", "küsst","to Kiss" ,2],
  [ "küssen", "Present", "sie/Sie", "küssen","to Kiss" ,1],

  [ "wohnen", "Present", "ich", "wohne","to Live in" ,1],
  [ "wohnen", "Present", "du", "wohnst","to Live in" ,2],
  [ "wohnen", "Present", "er/sie/es", "wohnt","to Live in" ,2],
  [ "wohnen", "Present", "wir", "wohnen","to Live in" ,1],
  [ "wohnen", "Present", "ihr", "wohnt","to Live in" ,2],
  [ "wohnen", "Present", "sie/Sie", "wohnen","to Live in" ,1],

  [ "mögen", "Present", "ich", "mag","to Like" ,3],
  [ "mögen", "Present", "du", "magst","to Like" ,3],
  [ "mögen", "Present", "er/sie/es", "mag","to Like",3 ],
  [ "mögen", "Present", "wir", "mögen","to Like" ,1],
  [ "mögen", "Present", "ihr", "mögt","to Like" ,2],
  [ "mögen", "Present", "sie/Sie", "mögen","to Like" ,1],

  [ "heissen", "Present", "ich", "heisse","to Be Called" ,1],
  [ "heissen", "Present", "du", "heisst","to Be Called" ,2],
  [ "heissen", "Present", "er/sie/es", "heisst","to Be Called",2 ],
  [ "heissen", "Present", "wir", "heissen","to Be Called" ,1],
  [ "heissen", "Present", "ihr", "heisst","to Be Called" ,2],
  [ "heissen", "Present", "sie/Sie", "heissen","to Be Called",1 ],

  [ "gehen", "Present", "ich", "gehe","to Go" ,1],
  [ "gehen", "Present", "du", "gehst","to Go" ,2],
  [ "gehen", "Present", "er/sie/es", "geht","to Go" ,2],
  [ "gehen", "Present", "wir", "gehen","to Go" ,1],
  [ "gehen", "Present", "ihr", "geht","to Go" ,2],
  [ "gehen", "Present", "sie/Sie", "gehen","to Go" ,1],

  [ "tanzen", "Present", "ich", "tanze","to Dance" ,1],
  [ "tanzen", "Present", "du", "tanzst","to Dance" ,2],
  [ "tanzen", "Present", "er/sie/es", "tanzt","to Dance", 2],
  [ "tanzen", "Present", "wir", "tanzen","to Dance", 1],
  [ "tanzen", "Present", "ihr", "tanzt","to Dance", 2],
  [ "tanzen", "Present", "sie/Sie", "tanzen","to Dance" ,1],

  [ "trinken", "Present", "ich", "trinke","to Drink" ,1],
  [ "trinken", "Present", "du", "trinkst","to Drink" ,2],
  [ "trinken", "Present", "er/sie/es", "trinkt","to Drink" ,2],
  [ "trinken", "Present", "wir", "trinken","to Drink" ,1],
  [ "trinken", "Present", "ihr", "trinkt","to Drink" ,2],
  [ "trinken", "Present", "sie/Sie", "trinken","to Drink" ,1],

  [ "warten", "Present", "ich", "warte","to Wait" ,1],
  [ "warten", "Present", "du", "wartest","to Wait" ,2],
  [ "warten", "Present", "er/sie/es", "wartet","to Wait" ,2],
  [ "warten", "Present", "wir", "warten","to Wait" ,1],
  [ "warten", "Present", "ihr", "wartet","to Wait" ,2],
  [ "warten", "Present", "sie/Sie", "warten","to Wait" ,1],

  [ "fragen", "Present", "ich", "frage","to Ask" ,1],
  [ "fragen", "Present", "du", "fragst" ,"to Ask",2],
  [ "fragen", "Present", "er/sie/es", "fragt" ,"to Ask",2],
  [ "fragen", "Present", "wir", "fragen" ,"to Ask",1],
  [ "fragen", "Present", "ihr", "fragt" ,"to Ask",2],
  [ "fragen", "Present", "sie/Sie", "fragen" ,"to Ask",1],

  [ "grüssen", "Present", "ich", "grüsse" ,"to Greet",1],
  [ "grüssen", "Present", "du", "grüsst" ,"to Greet",2],
  [ "grüssen", "Present", "er/sie/es", "grüsst" ,"to Greet",2],
  [ "grüssen", "Present", "wir", "grüssen" ,"to Greet",1],
  [ "grüssen", "Present", "ihr", "grüsst" ,"to Greet",2],
  [ "grüssen", "Present", "sie/Sie", "grüssen" ,"to Greet",1],

  [ "stehen", "Present", "ich", "stehe" ,"to Stand",1],
  [ "stehen", "Present", "du", "stehst" ,"to Stand",2],
  [ "stehen", "Present", "er/sie/es", "steht" ,"to Stand",2],
  [ "stehen", "Present", "wir", "stehen" ,"to Stand",1],
  [ "stehen", "Present", "ihr", "steht" ,"to Stand",2],
  [ "stehen", "Present", "sie/Sie", "stehen" ,"to Stand",1],

  [ "haben", "Present", "ich", "habe" ,"to Have",1],
  [ "haben", "Present", "du", "hast" ,"to Have",2],
  [ "haben", "Present", "er/sie/es", "hat" ,"to Have",2],
  [ "haben", "Present", "wir", "haben" ,"to Have",1],
  [ "haben", "Present", "ihr", "habt" ,"to Have",2],
  [ "haben", "Present", "sie/Sie", "haben" ,"to Have",1],

  [ "kaufen", "Present", "ich", "kaufe" ,"to Buy",1],
  [ "kaufen", "Present", "du", "kaufst" ,"to Buy",2],
  [ "kaufen", "Present", "er/sie/es", "kauft" ,"to Buy",1],
  [ "kaufen", "Present", "wir", "kaufen" ,"to Buy",1],
  [ "kaufen", "Present", "ihr", "kauft" ,"to Buy",2],
  [ "kaufen", "Present", "sie/Sie", "kaufen" ,"to Buy",1],

  [ "öffnen", "Present", "ich", "öffne" ,"to Open",1],
  [ "öffnen", "Present", "du", "öffnest"  ,"to Open",2],
  [ "öffnen", "Present", "er/sie/es", "öffnet"  ,"to Open",2],
  [ "öffnen", "Present", "wir", "öffnen"  ,"to Open",1],
  [ "öffnen", "Present", "ihr", "öffnet"  ,"to Open",2],
  [ "öffnen", "Present", "sie/Sie", "öffnen"  ,"to Open",1],

  [ "möchten", "Present", "ich", "möchte" ,"to Want",1],
  [ "möchten", "Present", "du", "möchtest" ,"to Want",2],
  [ "möchten", "Present", "er/sie/es", "möchte" ,"to Want",3],
  [ "möchten", "Present", "wir", "möchten" ,"to Want",1],
  [ "möchten", "Present", "ihr", "möchtet" ,"to Want",2],
  [ "möchten", "Present", "sie/Sie", "möchten" ,"to Want",1],

  [ "brauchen", "Present", "ich", "brauche" ,"to Need",1],
  [ "brauchen", "Present", "du", "brauchst" ,"to Need",2],
  [ "brauchen", "Present", "er/sie/es", "braucht" ,"to Need",2],
  [ "brauchen", "Present", "wir", "brauchen" ,"to Need",1],
  [ "brauchen", "Present", "ihr", "braucht" ,"to Need",2],
  [ "brauchen", "Present", "sie/Sie", "brauchen" ,"to Need",1],

  [ "finden", "Present", "ich", "finde" ,"to Find",1],
  [ "finden", "Present", "du", "findest" ,"to Find",2],
  [ "finden", "Present", "er/sie/es", "findet" ,"to Find",2],
  [ "finden", "Present", "wir", "finden" ,"to Find",1],
  [ "finden", "Present", "ihr", "findet" ,"to Find",2],
  [ "finden", "Present", "sie/Sie", "finden" ,"to Find",1],

  [ "suchen", "Present", "ich", "suche" ,"to Search",1],
  [ "suchen", "Present", "du", "suchst" ,"to Search",2],
  [ "suchen", "Present", "er/sie/es", "sucht" ,"to Search",2],
  [ "suchen", "Present", "wir", "suchen" ,"to Search",1],
  [ "suchen", "Present", "ihr", "sucht" ,"to Search",2],
  [ "suchen", "Present", "sie/Sie", "suchen" ,"to Search",2],

  [ "kennen", "Present", "ich", "kenne" ,"to know",1],
  [ "kennen", "Present", "du", "kennst" ,"to know",2],
  [ "kennen", "Present", "er/sie/es", "kennt" ,"to know",2],
  [ "kennen", "Present", "wir", "kennen" ,"to know",1],
  [ "kennen", "Present", "ihr", "kennt" ,"to know",2],
  [ "kennen", "Present", "sie/Sie", "kennen" ,"to know",1],

  ["fahren", "Present", "ich", "fahre","to Drive",1],
  ["fahren", "Present", "du", "fährst","to Drive",3],
  ["fahren", "Present", "er/sie/es", "fährt","to Drive",3],
  ["fahren", "Present", "wir", "fahren","to Drive",1],
  ["fahren", "Present", "ihr", "fahrt","to Drive",1],
  ["fahren", "Present", "sie/Sie", "fahren","to Drive",1],

  ["waschen", "Present", "ich", "wasche","to Wash",1],
  ["waschen", "Present", "du", "wäschst","to Wash",3],
  ["waschen", "Present", "er/sie/es", "wäscht","to Wash",3],
  ["waschen", "Present", "wir", "waschen","to Wash",1],
  ["waschen", "Present", "ihr", "wascht","to Wash",1],
  ["waschen", "Present", "sie/Sie", "waschen","to Wash",1],

  ["schlafen", "Present", "ich", "schlafe","to Sleep",1],
  ["schlafen", "Present", "du", "schläfst","to Sleep",3],
  ["schlafen", "Present", "er/sie/es", "schläft","to Sleep",3],
  ["schlafen", "Present", "wir", "schlafen","to Sleep",1],
  ["schlafen", "Present", "ihr", "schlaft","to Sleep",1],
  ["schlafen", "Present", "sie/Sie", "schlafen","to Sleep",1],

  ["laufen", "Present", "ich", "laufe","to Run",1],
  ["laufen", "Present", "du", "läufst","to Run",3],
  ["laufen", "Present", "er/sie/es", "läuft","to Run",3],
  ["laufen", "Present", "wir", "laufen","to Run",1],
  ["laufen", "Present", "ihr", "lauft","to Run",1],
  ["laufen", "Present", "sie/Sie", "laufen","to Run",1],

  //e to ie


  ["lesen", "Present", "ich", "lese","to Read",1],
  ["lesen", "Present", "du", "liest","to Read",3],
  ["lesen", "Present", "er/sie/es", "liest","to Read",3],
  ["lesen", "Present", "wir", "lesen","to Read",1],
  ["lesen", "Present", "ihr", "lest","to Read",1],
  ["lesen", "Present", "sie/Sie", "lesen","to Read",1],

  ["sehen", "Present", "ich", "sehe","to See",1],
  ["sehen", "Present", "du", "siehst","to See",3],
  ["sehen", "Present", "er/sie/es", "sieht","to See",3],
  ["sehen", "Present", "wir", "sehen","to See",1],
  ["sehen", "Present", "ihr", "seht","to See",1],
  ["sehen", "Present", "sie/Sie", "sehen","to See",1],

  //e to i


  ["treffen", "Present", "ich", "treffe","to Meet",1],
  ["treffen", "Present", "du", "triffst","to Meet",3],
  ["treffen", "Present", "er/sie/es", "trifft","to Meet",3],
  ["treffen", "Present", "wir", "treffen","to Meet",1],
  ["treffen", "Present", "ihr", "trefft","to Meet",1],
  ["treffen", "Present", "sie/Sie", "treffen","to Meet",1],


  ["sprechen", "Present", "ich", "spreche","to Speak",1],
  ["sprechen", "Present", "du", "sprichst","to Speak",3],
  ["sprechen", "Present", "er/sie/es", "spricht","to Speak",3],
  ["sprechen", "Present", "wir", "sprechen","to Speak",1],
  ["sprechen", "Present", "ihr", "sprecht","to Speak",1],
  ["sprechen", "Present", "sie/Sie", "sprechen","to Speak",1],


  ["essen", "Present", "ich", "esse","to Eat",1],
  ["essen", "Present", "du", "isst","to Eat",3],
  ["essen", "Present", "er/sie/es", "isst","to Eat",3],
  ["essen", "Present", "wir", "essen","to Eat",1],
  ["essen", "Present", "ihr", "esst","to Eat",1],
  ["essen", "Present", "sie/Sie", "essen","to Eat",1],


  ["nehmen", "Present", "ich", "nehme","to Take",1],
  ["nehmen", "Present", "du", "nimmst","to Take",3],
  ["nehmen", "Present", "er/sie/es", "nimmt","to Take",3],
  ["nehmen", "Present", "wir", "nehmen","to Take",1],
  ["nehmen", "Present", "ihr", "nehmt","to Take",1],
  ["nehmen", "Present", "sie/Sie", "nehmen","to Take",1],

  ["geben", "Present", "ich", "gebe","to Give",1],
  ["geben", "Present", "du", "gibst","to Give",3],
  ["geben", "Present", "er/sie/es", "gibt","to Give",3],
  ["geben", "Present", "wir", "geben","to Give",1],
  ["geben", "Present", "ihr", "gebt","to Give",1],
  ["geben", "Present", "sie/Sie", "geben","to Give",1],


  //normal

  ["hören", "Present", "ich", "höre","to Hear",1],
  ["hören", "Present", "du", "hörst","to Hear",2],
  ["hören", "Present", "er/sie/es", "hört","to Hear",2],
  ["hören", "Present", "wir", "hören","to Hear",1],
  ["hören", "Present", "ihr", "hört","to Hear",2],
  ["hören", "Present", "sie/Sie", "hören","to Hear",1],


  ["wandern", "Present", "ich", "wandere","to Hike",1],
  ["wandern", "Present", "du", "wanderst","to Hike",2],
  ["wandern", "Present", "er/sie/es", "wandert","to Hike",2],
  ["wandern", "Present", "wir", "wandern","to Hike",1],
  ["wandern", "Present", "ihr", "wandert","to Hike",2],
  ["wandern", "Present", "sie/Sie", "wandern","to Hike",1],


  ["schwimmen", "Present", "ich", "schwimme","to Swim",1],
  ["schwimmen", "Present", "du", "schwimmst","to Swim",2],
  ["schwimmen", "Present", "er/sie/es", "schwimmt","to Swim",2],
  ["schwimmen", "Present", "wir", "schwimmen","to Swim",1],
  ["schwimmen", "Present", "ihr", "schwimmt","to Swim",2],
  ["schwimmen", "Present", "sie/Sie", "schwimmen","to Swim",1],


  ["kochen", "Present", "ich", "koche","to Cook",1],
  ["kochen", "Present", "du", "kochst","to Cook",2],
  ["kochen", "Present", "er/sie/es", "kocht","to Cook",2],
  ["kochen", "Present", "wir", "kochen","to Cook",1],
  ["kochen", "Present", "ihr", "kocht","to Cook",2],
  ["kochen", "Present", "sie/Sie", "kochen","to Cook",1],



  ["spielen", "Present", "ich", "spiele","to Play",1],
  ["spielen", "Present", "du", "spielst","to Play",2],
  ["spielen", "Present", "er/sie/es", "spielt","to Play",2],
  ["spielen", "Present", "wir", "spielen","to Play",1],
  ["spielen", "Present", "ihr", "spielt","to Play",2],
  ["spielen", "Present", "sie/Sie", "spielen","to Play",1],

//Trennbare Verben

  ["anfangen", "Present", "ich", "fange an", "to start",2],
  ["anfangen", "Present", "du", "fängst an", "to start",3],
  ["anfangen", "Present", "er/sie/es", "fängt an", "to start",3],
  ["anfangen", "Present", "wir", "fangen an", "to start",2],
  ["anfangen", "Present", "ihr", "fangt an", "to start",2],
  ["anfangen", "Present", "sie/Sie", "fangen an", "to start",2],

  ["aufhören", "Present", "ich", "höre auf", "to stop",2],
  ["aufhören", "Present", "du", "hörst auf", "to stop",3],
  ["aufhören", "Present", "er/sie/es", "hört auf", "to stop",3],
  ["aufhören", "Present", "wir", "hören auf", "to stop",2],
  ["aufhören", "Present", "ihr", "hört auf", "to stop",3],
  ["aufhören", "Present", "sie/Sie", "hören auf", "to stop",2],

  ["wegfahren", "Present", "ich", "fahre weg", "to leave",2],
  ["wegfahren", "Present", "du", "fährst weg", "to leave",3],
  ["wegfahren", "Present", "er/sie/es", "fährt weg", "to leave",3],
  ["wegfahren", "Present", "wir", "fahren weg", "to leave",2],
  ["wegfahren", "Present", "ihr", "fahrt weg", "to leave",3],
  ["wegfahren", "Present", "sie/Sie", "fahren weg", "to leave",2],

  ["einladen", "Present", "ich", "lade ein", "to invite",2],
  ["einladen", "Present", "du", "lädst ein", "to invite",3],
  ["einladen", "Present", "er/sie/es", "lädt ein", "to invite",3],
  ["einladen", "Present", "wir", "laden ein", "to invite",2],
  ["einladen", "Present", "ihr", "ladet ein", "to invite",3],
  ["einladen", "Present", "sie/Sie", "laden ein", "to invite",2],

  ["anrufen", "Present", "ich", "rufe an", "to call",2],
  ["anrufen", "Present", "du", "rufst an", "to call",3],
  ["anrufen", "Present", "er/sie/es", "ruft an", "to call",3],
  ["anrufen", "Present", "wir", "rufen an", "to call",2],
  ["anrufen", "Present", "ihr", "ruft an", "to call",3],
  ["anrufen", "Present", "sie/Sie", "rufen an", "to call",2],

  ["ausgehen", "Present", "ich", "gehe aus","to go out",2],
  ["ausgehen", "Present", "du", "gehst aus","to go out",3],
  ["ausgehen", "Present", "er/sie/es", "geht aus","to go out",3],
  ["ausgehen", "Present", "wir", "gehen aus","to go out",2],
  ["ausgehen", "Present", "ihr", "geht aus","to go out",3],
  ["ausgehen", "Present", "sie/Sie", "gehen aus","to go out",2],

  ["einkaufen", "Present", "ich", "kaufe ein","to shop",2],
  ["einkaufen", "Present", "du", "kaufst ein","to shop",3],
  ["einkaufen", "Present", "er/sie/es", "kauft ein","to shop",3],
  ["einkaufen", "Present", "wir", "kaufen ein","to shop",2],
  ["einkaufen", "Present", "ihr", "kauft ein","to shop",3],
  ["einkaufen", "Present", "sie/Sie", "kaufen ein","to shop",2],

  ["aufräumen", "Present", "ich", "räume auf", "to clean up",2],
  ["aufräumen", "Present", "du", "räumst auf", "to clean up",3],
  ["aufräumen", "Present", "er/sie/es", "räumt auf", "to clean up",3],
  ["aufräumen", "Present", "wir", "räumen auf", "to clean up",2],
  ["aufräumen", "Present", "ihr", "räumt auf", "to clean up",3],
  ["aufräumen", "Present", "sie/Sie", "räumen auf", "to clean up",2],

  ["fernsehen", "Present", "ich", "sehe fern","to watch TV",2],
  ["fernsehen", "Present", "du", "siehst fern","to watch TV",3],
  ["fernsehen", "Present", "er/sie/es", "sieht fern","to watch TV",3],
  ["fernsehen", "Present", "wir", "sehen fern","to watch TV",2],
  ["fernsehen", "Present", "ihr", "seht fern","to watch TV",3],
  ["fernsehen", "Present", "sie/Sie", "sehen fern","to watch TV",2],

  ["sagen", "Present", "ich", "sage", "to say",1],
  ["sagen", "Present", "du", "sagst", "to say",2],
  ["sagen", "Present", "er/sie/es", "sagt", "to say",2],
  ["sagen", "Present", "wir", "sagen", "to say",1],
  ["sagen", "Present", "ihr", "sagt", "to say",2],
  ["sagen", "Present", "sie/Sie", "sagen", "to say",1]
];

  /*,
  [ "müssen", "Present", "ich", "muss" ],
  [ "müssen", "Present", "du", "musst" ],
  [ "müssen", "Present", "er/sie/es", "muss" ],
  [ "müssen", "Present", "wir", "müssen" ],
  [ "müssen", "Present", "ihr", "müsst" ],
  [ "müssen", "Present", "sie/Sie", "müssen" ]*/


const newprompts = [

//ä to ä

  ["fahren", "Present", "ich", "fahre","to Drive",1],
  ["fahren", "Present", "du", "fährst","to Drive",3],
  ["fahren", "Present", "er/sie/es", "fährt","to Drive",3],
  ["fahren", "Present", "wir", "fahren","to Drive",1],
  ["fahren", "Present", "ihr", "fahrt","to Drive",1],
  ["fahren", "Present", "sie/Sie", "fahren","to Drive",1],

  ["waschen", "Present", "ich", "wasche","to Wash",1],
  ["waschen", "Present", "du", "wäschst","to Wash",3],
  ["waschen", "Present", "er/sie/es", "wäscht","to Wash",3],
  ["waschen", "Present", "wir", "waschen","to Wash",1],
  ["waschen", "Present", "ihr", "wascht","to Wash",1],
  ["waschen", "Present", "sie/Sie", "waschen","to Wash",1],

  ["schlafen", "Present", "ich", "schlafe","to Sleep",1],
  ["schlafen", "Present", "du", "schläfst","to Sleep",3],
  ["schlafen", "Present", "er/sie/es", "schläft","to Sleep",3],
  ["schlafen", "Present", "wir", "schlafen","to Sleep",1],
  ["schlafen", "Present", "ihr", "schlaft","to Sleep",1],
  ["schlafen", "Present", "sie/Sie", "schlafen","to Sleep",1],

  ["laufen", "Present", "ich", "laufe","to Run",1],
  ["laufen", "Present", "du", "läufst","to Run",3],
  ["laufen", "Present", "er/sie/es", "läuft","to Run",3],
  ["laufen", "Present", "wir", "laufen","to Run",1],
  ["laufen", "Present", "ihr", "lauft","to Run",1],
  ["laufen", "Present", "sie/Sie", "laufen","to Run",1],

  //e to ie


  ["lesen", "Present", "ich", "lese","to Read",1],
  ["lesen", "Present", "du", "liest","to Read",3],
  ["lesen", "Present", "er/sie/es", "liest","to Read",3],
  ["lesen", "Present", "wir", "lesen","to Read",1],
  ["lesen", "Present", "ihr", "lest","to Read",1],
  ["lesen", "Present", "sie/Sie", "lesen","to Read",1],

  ["sehen", "Present", "ich", "sehe","to See",1],
  ["sehen", "Present", "du", "siehst","to See",3],
  ["sehen", "Present", "er/sie/es", "sieht","to See",3],
  ["sehen", "Present", "wir", "sehen","to See",1],
  ["sehen", "Present", "ihr", "seht","to See",1],
  ["sehen", "Present", "sie/Sie", "sehen","to See",1],

  //e to i


  ["treffen", "Present", "ich", "treffe","to Meet",1],
  ["treffen", "Present", "du", "triffst","to Meet",3],
  ["treffen", "Present", "er/sie/es", "trifft","to Meet",3],
  ["treffen", "Present", "wir", "treffen","to Meet",1],
  ["treffen", "Present", "ihr", "trefft","to Meet",1],
  ["treffen", "Present", "sie/Sie", "treffen","to Meet",1],


  ["sprechen", "Present", "ich", "spreche","to Speak",1],
  ["sprechen", "Present", "du", "sprichst","to Speak",3],
  ["sprechen", "Present", "er/sie/es", "spricht","to Speak",3],
  ["sprechen", "Present", "wir", "sprechen","to Speak",1],
  ["sprechen", "Present", "ihr", "sprecht","to Speak",1],
  ["sprechen", "Present", "sie/Sie", "sprechen","to Speak",1],


  ["essen", "Present", "ich", "esse","to Eat",1],
  ["essen", "Present", "du", "isst","to Eat",3],
  ["essen", "Present", "er/sie/es", "isst","to Eat",3],
  ["essen", "Present", "wir", "essen","to Eat",1],
  ["essen", "Present", "ihr", "esst","to Eat",1],
  ["essen", "Present", "sie/Sie", "essen","to Eat",1],


  ["nehmen", "Present", "ich", "nehme","to Take",1],
  ["nehmen", "Present", "du", "nimmst","to Take",3],
  ["nehmen", "Present", "er/sie/es", "nimmt","to Take",3],
  ["nehmen", "Present", "wir", "nehmen","to Take",1],
  ["nehmen", "Present", "ihr", "nehmt","to Take",1],
  ["nehmen", "Present", "sie/Sie", "nehmen","to Take",1],

  ["geben", "Present", "ich", "gebe","to Give",1],
  ["geben", "Present", "du", "gibst","to Give",3],
  ["geben", "Present", "er/sie/es", "gibt","to Give",3],
  ["geben", "Present", "wir", "geben","to Give",1],
  ["geben", "Present", "ihr", "gebt","to Give",1],
  ["geben", "Present", "sie/Sie", "geben","to Give",1],


  //normal

  ["hören", "Present", "ich", "höre","to Hear",1],
  ["hören", "Present", "du", "hörst","to Hear",2],
  ["hören", "Present", "er/sie/es", "hört","to Hear",2],
  ["hören", "Present", "wir", "hören","to Hear",1],
  ["hören", "Present", "ihr", "hört","to Hear",2],
  ["hören", "Present", "sie/Sie", "hören","to Hear",1],


  ["wandern", "Present", "ich", "wandere","to Hike",1],
  ["wandern", "Present", "du", "wanderst","to Hike",2],
  ["wandern", "Present", "er/sie/es", "wandert","to Hike",2],
  ["wandern", "Present", "wir", "wandern","to Hike",1],
  ["wandern", "Present", "ihr", "wandert","to Hike",2],
  ["wandern", "Present", "sie/Sie", "wandern","to Hike",1],


  ["schwimmen", "Present", "ich", "schwimme","to Swim",1],
  ["schwimmen", "Present", "du", "schwimmst","to Swim",2],
  ["schwimmen", "Present", "er/sie/es", "schwimmt","to Swim",2],
  ["schwimmen", "Present", "wir", "schwimmen","to Swim",1],
  ["schwimmen", "Present", "ihr", "schwimmt","to Swim",2],
  ["schwimmen", "Present", "sie/Sie", "schwimmen","to Swim",1],


  ["kochen", "Present", "ich", "koche","to Cook",1],
  ["kochen", "Present", "du", "kochst","to Cook",2],
  ["kochen", "Present", "er/sie/es", "kocht","to Cook",2],
  ["kochen", "Present", "wir", "kochen","to Cook",1],
  ["kochen", "Present", "ihr", "kocht","to Cook",2],
  ["kochen", "Present", "sie/Sie", "kochen","to Cook",1],



  ["spielen", "Present", "ich", "spiele","to Play",1],
  ["spielen", "Present", "du", "spielst","to Play",2],
  ["spielen", "Present", "er/sie/es", "spielt","to Play",2],
  ["spielen", "Present", "wir", "spielen","to Play",1],
  ["spielen", "Present", "ihr", "spielt","to Play",2],
  ["spielen", "Present", "sie/Sie", "spielen","to Play",1],

//Trennbare Verben

  ["anfangen", "Present", "ich", "fange an", "to start",2],
  ["anfangen", "Present", "du", "fängst an", "to start",3],
  ["anfangen", "Present", "er/sie/es", "fängt an", "to start",3],
  ["anfangen", "Present", "wir", "fangen an", "to start",2],
  ["anfangen", "Present", "ihr", "fangt an", "to start",2],
  ["anfangen", "Present", "sie/Sie", "fangen an", "to start",2],

  ["aufhören", "Present", "ich", "höre auf", "to stop",2],
  ["aufhören", "Present", "du", "hörst auf", "to stop",3],
  ["aufhören", "Present", "er/sie/es", "hört auf", "to stop",3],
  ["aufhören", "Present", "wir", "hören auf", "to stop",2],
  ["aufhören", "Present", "ihr", "hört auf", "to stop",3],
  ["aufhören", "Present", "sie/Sie", "hören auf", "to stop",2],

  ["wegfahren", "Present", "ich", "fahre weg", "to leave",2],
  ["wegfahren", "Present", "du", "fährst weg", "to leave",3],
  ["wegfahren", "Present", "er/sie/es", "fährt weg", "to leave",3],
  ["wegfahren", "Present", "wir", "fahren weg", "to leave",2],
  ["wegfahren", "Present", "ihr", "fahrt weg", "to leave",3],
  ["wegfahren", "Present", "sie/Sie", "fahren weg", "to leave",2],

  ["einladen", "Present", "ich", "lade ein", "to invite",2],
  ["einladen", "Present", "du", "lädst ein", "to invite",3],
  ["einladen", "Present", "er/sie/es", "lädt ein", "to invite",3],
  ["einladen", "Present", "wir", "laden ein", "to invite",2],
  ["einladen", "Present", "ihr", "ladet ein", "to invite",3],
  ["einladen", "Present", "sie/Sie", "laden ein", "to invite",2],

  ["anrufen", "Present", "ich", "rufe an", "to call",2],
  ["anrufen", "Present", "du", "rufst an", "to call",3],
  ["anrufen", "Present", "er/sie/es", "ruft an", "to call",3],
  ["anrufen", "Present", "wir", "rufen an", "to call",2],
  ["anrufen", "Present", "ihr", "ruft an", "to call",3],
  ["anrufen", "Present", "sie/Sie", "rufen an", "to call",2],

  ["ausgehen", "Present", "ich", "gehe aus","to go out",2],
  ["ausgehen", "Present", "du", "gehst aus","to go out",3],
  ["ausgehen", "Present", "er/sie/es", "geht aus","to go out",3],
  ["ausgehen", "Present", "wir", "gehen aus","to go out",2],
  ["ausgehen", "Present", "ihr", "geht aus","to go out",3],
  ["ausgehen", "Present", "sie/Sie", "gehen aus","to go out",2],

  ["einkaufen", "Present", "ich", "kaufe ein","to shop",2],
  ["einkaufen", "Present", "du", "kaufst ein","to shop",3],
  ["einkaufen", "Present", "er/sie/es", "kauft ein","to shop",3],
  ["einkaufen", "Present", "wir", "kaufen ein","to shop",2],
  ["einkaufen", "Present", "ihr", "kauft ein","to shop",3],
  ["einkaufen", "Present", "sie/Sie", "kaufen ein","to shop",2],

  ["aufräumen", "Present", "ich", "räume auf", "to clean up",2],
  ["aufräumen", "Present", "du", "räumst auf", "to clean up",3],
  ["aufräumen", "Present", "er/sie/es", "räumt auf", "to clean up",3],
  ["aufräumen", "Present", "wir", "räumen auf", "to clean up",2],
  ["aufräumen", "Present", "ihr", "räumt auf", "to clean up",3],
  ["aufräumen", "Present", "sie/Sie", "räumen auf", "to clean up",2],

  ["fernsehen", "Present", "ich", "sehe fern","to watch TV",2],
  ["fernsehen", "Present", "du", "siehst fern","to watch TV",3],
  ["fernsehen", "Present", "er/sie/es", "sieht fern","to watch TV",3],
  ["fernsehen", "Present", "wir", "sehen fern","to watch TV",2],
  ["fernsehen", "Present", "ihr", "seht fern","to watch TV",3],
  ["fernsehen", "Present", "sie/Sie", "sehen fern","to watch TV",2],

  ["sagen", "Present", "ich", "sage", "to say",1],
  ["sagen", "Present", "du", "sagst", "to say",2],
  ["sagen", "Present", "er/sie/es", "sagt", "to say",2],
  ["sagen", "Present", "wir", "sagen", "to say",1],
  ["sagen", "Present", "ihr", "sagt", "to say",2],
  ["sagen", "Present", "sie/Sie", "sagen", "to say",1]

];

let workingPrompts = prompts;


let currentPrompt;
let numCorrect = 0;
let rigthAnswers=0;
let wrongAnswers=0;
let percentage =0;
let difficultyIndex =0;

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


function showPrompt() {
        if (numCorrect === MaxQuestions) {
          alert("Congratulations! You got " + MaxQuestions + " questions in a row right!");
        }

        currentPrompt = getRandonPrompt(workingPrompts);
       // currentPrompt = workingPrompts[randomIndex];
       // prompts.splice(randomIndex, 1);

        const promptElement = document.getElementById("prompt");
        promptElement.innerHTML = "Give me the <B> " + currentPrompt[1] + "</B> of the Verb: <B>" + currentPrompt[0] +  "</B>   <I>(" + currentPrompt[4] +  ")</I>for the pronoun <B>" + currentPrompt[2] + "</B>" ;
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


        showMessage("error", `too slow! Time's up! You only have ` + time2Answer + ` secs`);
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
        }
        showPrompt();
        updatePercentage();

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

  percentage = Math.round((rigthAnswers / (rigthAnswers+wrongAnswers)) * 100);
  difficultyIndex = (difficultyIndex /(rigthAnswers+wrongAnswers));
  
  if ((rigthAnswers+wrongAnswers)>0) {
    logtail.info("Verbs game finished", {
      rigthAnswers: rigthAnswers,
      wrongAnswers: wrongAnswers,
      percentageSuccess: percentage,
      difficultyIndex: difficultyIndex
      });
    // Ensure that all logs are sent to Logtail
    logtail.flush()

  }
});

textBox.focus();

 
