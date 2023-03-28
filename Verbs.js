const prompts = [
  [ "arbeiten", "Present", "ich", "arbeite","to Work" ],
  [ "arbeiten", "Present", "du", "arbeitest","to Work"  ],
  [ "arbeiten", "Present", "er/sie/es", "arbeitet","to Work"  ],
  [ "arbeiten", "Present", "wir", "arbeiten","to Work"  ],
  [ "arbeiten", "Present", "ihr", "arbeitet","to Work"  ],
  [ "arbeiten", "Present", "sie/Sie", "arbeiten","to Work"  ],

  [ "sein", "Present", "ich", "bin","to Be"  ],
  [ "sein", "Present", "du", "bist","to Be" ],
  [ "sein", "Present", "er/sie/es", "ist","to Be" ],
  [ "sein", "Present", "wir", "sind","to Be" ],
  [ "sein", "Present", "ihr", "seid","to Be" ],
  [ "sein", "Present", "sie/Sie", "sind","to Be" ],

  [ "kommen", "Present", "ich", "komme","to Come" ],
  [ "kommen", "Present", "du", "kommst","to Come" ],
  [ "kommen", "Present", "er/sie/es", "kommt","to Come" ],
  [ "kommen", "Present", "wir", "kommen","to Come" ],
  [ "kommen", "Present", "ihr", "kommt","to Come" ],
  [ "kommen", "Present", "sie/Sie", "kommen","to Come" ],

  [ "küssen", "Present", "ich", "küsse","to Kiss" ],
  [ "küssen", "Present", "du", "küsst","to Kiss" ],
  [ "küssen", "Present", "er/sie/es", "küsst","to Kiss" ],
  [ "küssen", "Present", "wir", "küssen","to Kiss" ],
  [ "küssen", "Present", "ihr", "küsst","to Kiss" ],
  [ "küssen", "Present", "sie/Sie", "küssen","to Kiss" ],

  [ "wohnen", "Present", "ich", "wohne","to Live in" ],
  [ "wohnen", "Present", "du", "wohnst","to Live in" ],
  [ "wohnen", "Present", "er/sie/es", "wohnt","to Live in" ],
  [ "wohnen", "Present", "wir", "wohnen","to Live in" ],
  [ "wohnen", "Present", "ihr", "wohnt","to Live in" ],
  [ "wohnen", "Present", "sie/Sie", "wohnen","to Live in" ],

  [ "mögen", "Present", "ich", "mag","to Like" ],
  [ "mögen", "Present", "du", "magst","to Like" ],
  [ "mögen", "Present", "er/sie/es", "mag","to Like" ],
  [ "mögen", "Present", "wir", "mögen","to Like" ],
  [ "mögen", "Present", "ihr", "mögt","to Like" ],
  [ "mögen", "Present", "sie/Sie", "mögen","to Like" ],

  [ "heissen", "Present", "ich", "heisse","to Be Called" ],
  [ "heissen", "Present", "du", "heisst","to Be Called" ],
  [ "heissen", "Present", "er/sie/es", "heisst","to Be Called" ],
  [ "heissen", "Present", "wir", "heissen","to Be Called" ],
  [ "heissen", "Present", "ihr", "heisst","to Be Called" ],
  [ "heissen", "Present", "sie/Sie", "heissen","to Be Called" ],

  [ "gehen", "Present", "ich", "gehe","to Go" ],
  [ "gehen", "Present", "du", "gehst","to Go" ],
  [ "gehen", "Present", "er/sie/es", "geht","to Go" ],
  [ "gehen", "Present", "wir", "gehen","to Go" ],
  [ "gehen", "Present", "ihr", "geht","to Go" ],
  [ "gehen", "Present", "sie/Sie", "gehen","to Go" ],

  [ "tanzen", "Present", "ich", "tanze","to Dance" ],
  [ "tanzen", "Present", "du", "tanzst","to Dance" ],
  [ "tanzen", "Present", "er/sie/es", "tanzt","to Dance" ],
  [ "tanzen", "Present", "wir", "tanzen","to Dance" ],
  [ "tanzen", "Present", "ihr", "tanzt","to Dance" ],
  [ "tanzen", "Present", "sie/Sie", "tanzen","to Dance" ],

  [ "trinken", "Present", "ich", "trinke","to Drink" ],
  [ "trinken", "Present", "du", "trinkst","to Drink" ],
  [ "trinken", "Present", "er/sie/es", "trinkt","to Drink" ],
  [ "trinken", "Present", "wir", "trinken","to Drink" ],
  [ "trinken", "Present", "ihr", "trinkt","to Drink" ],
  [ "trinken", "Present", "sie/Sie", "trinken","to Drink" ],

  [ "warten", "Present", "ich", "warte","to Wait" ],
  [ "warten", "Present", "du", "wartest","to Wait" ],
  [ "warten", "Present", "er/sie/es", "wartet","to Wait" ],
  [ "warten", "Present", "wir", "warten","to Wait" ],
  [ "warten", "Present", "ihr", "wartet","to Wait" ],
  [ "warten", "Present", "sie/Sie", "warten","to Wait" ],

  [ "fragen", "Present", "ich", "frage","to Ask" ],
  [ "fragen", "Present", "du", "fragst" ,"to Ask"],
  [ "fragen", "Present", "er/sie/es", "fragt" ,"to Ask"],
  [ "fragen", "Present", "wir", "fragen" ,"to Ask"],
  [ "fragen", "Present", "ihr", "fragt" ,"to Ask"],
  [ "fragen", "Present", "sie/Sie", "fragen" ,"to Ask"],

  [ "grüssen", "Present", "ich", "grüsse" ,"to Greet"],
  [ "grüssen", "Present", "du", "grüsst" ,"to Greet"],
  [ "grüssen", "Present", "er/sie/es", "grüsst" ,"to Greet"],
  [ "grüssen", "Present", "wir", "grüssen" ,"to Greet"],
  [ "grüssen", "Present", "ihr", "grüsst" ,"to Greet"],
  [ "grüssen", "Present", "sie/Sie", "grüssen" ,"to Greet"],

  [ "stehen", "Present", "ich", "stehe" ,"to Stand"],
  [ "stehen", "Present", "du", "stehst" ,"to Stand"],
  [ "stehen", "Present", "er/sie/es", "steht" ,"to Stand"],
  [ "stehen", "Present", "wir", "stehen" ,"to Stand"],
  [ "stehen", "Present", "ihr", "steht" ,"to Stand"],
  [ "stehen", "Present", "sie/Sie", "stehen" ,"to Stand"],

  [ "haben", "Present", "ich", "habe" ,"to Have"],
  [ "haben", "Present", "du", "hast" ,"to Have"],
  [ "haben", "Present", "er/sie/es", "hat" ,"to Have"],
  [ "haben", "Present", "wir", "haben" ,"to Have"],
  [ "haben", "Present", "ihr", "habt" ,"to Have"],
  [ "haben", "Present", "sie/Sie", "haben" ,"to Have"],

  [ "kaufen", "Present", "ich", "kaufe" ,"to Buy"],
  [ "kaufen", "Present", "du", "kaufst" ,"to Buy"],
  [ "kaufen", "Present", "er/sie/es", "kauft" ,"to Buy"],
  [ "kaufen", "Present", "wir", "kaufen" ,"to Buy"],
  [ "kaufen", "Present", "ihr", "kauft" ,"to Buy"],
  [ "kaufen", "Present", "sie/Sie", "kaufen" ,"to Buy"],

  [ "öffnen", "Present", "ich", "öffne" ,"to Open"],
  [ "öffnen", "Present", "du", "öffnest"  ,"to Open"],
  [ "öffnen", "Present", "er/sie/es", "öffnet"  ,"to Open"],
  [ "öffnen", "Present", "wir", "öffnen"  ,"to Open"],
  [ "öffnen", "Present", "ihr", "öffnet"  ,"to Open"],
  [ "öffnen", "Present", "sie/Sie", "öffnen"  ,"to Open"],

  [ "möchten", "Present", "ich", "möchte" ,"to Want"],
  [ "möchten", "Present", "du", "möchtest" ,"to Want"],
  [ "möchten", "Present", "er/sie/es", "möchte" ,"to Want"],
  [ "möchten", "Present", "wir", "möchten" ,"to Want"],
  [ "möchten", "Present", "ihr", "möchtet" ,"to Want"],
  [ "möchten", "Present", "sie/Sie", "möchten" ,"to Want"],

  [ "brauchen", "Present", "ich", "brauche" ,"to Need"],
  [ "brauchen", "Present", "du", "brauchst" ,"to Need"],
  [ "brauchen", "Present", "er/sie/es", "braucht" ,"to Need"],
  [ "brauchen", "Present", "wir", "brauchen" ,"to Need"],
  [ "brauchen", "Present", "ihr", "braucht" ,"to Need"],
  [ "brauchen", "Present", "sie/Sie", "brauchen" ,"to Need"],

  [ "finden", "Present", "ich", "finde" ,"to Find"],
  [ "finden", "Present", "du", "findest" ,"to Find"],
  [ "finden", "Present", "er/sie/es", "findet" ,"to Find"],
  [ "finden", "Present", "wir", "finden" ,"to Find"],
  [ "finden", "Present", "ihr", "findet" ,"to Find"],
  [ "finden", "Present", "sie/Sie", "finden" ,"to Find"],

  [ "suchen", "Present", "ich", "suche" ,"to Search"],
  [ "suchen", "Present", "du", "suchst" ,"to Search"],
  [ "suchen", "Present", "er/sie/es", "sucht" ,"to Search"],
  [ "suchen", "Present", "wir", "suchen" ,"to Search"],
  [ "suchen", "Present", "ihr", "sucht" ,"to Search"],
  [ "suchen", "Present", "sie/Sie", "suchen" ,"to Search"],

  [ "kennen", "Present", "ich", "kenne" ,"to Can"],
  [ "kennen", "Present", "du", "kennst" ,"to Can"],
  [ "kennen", "Present", "er/sie/es", "kennt" ,"to Can"],
  [ "kennen", "Present", "wir", "kennen" ,"to Can"],
  [ "kennen", "Present", "ihr", "kennt" ,"to Can"],
  [ "kennen", "Present", "sie/Sie", "kennen" ,"to Can"],

  ["fahren", "Present", "ich", "fahre","to Drive"],
  ["fahren", "Present", "du", "fährst","to Drive"],
  ["fahren", "Present", "er/sie/es", "fährt","to Drive"],
  ["fahren", "Present", "wir", "fahren","to Drive"],
  ["fahren", "Present", "ihr", "fahrt","to Drive"],
  ["fahren", "Present", "sie/Sie", "fahren","to Drive"],

  ["waschen", "Present", "ich", "wasche","to Wash"],
  ["waschen", "Present", "du", "wäschst","to Wash"],
  ["waschen", "Present", "er/sie/es", "wäscht","to Wash"],
  ["waschen", "Present", "wir", "waschen","to Wash"],
  ["waschen", "Present", "ihr", "wascht","to Wash"],
  ["waschen", "Present", "sie/Sie", "waschen","to Wash"],


  ["lesen", "Present", "ich", "lese","to Read"],
  ["lesen", "Present", "du", "liest","to Read"],
  ["lesen", "Present", "er/sie/es", "liest","to Read"],
  ["lesen", "Present", "wir", "lesen","to Read"],
  ["lesen", "Present", "ihr", "lest","to Read"],
  ["lesen", "Present", "sie/Sie", "lesen","to Read"],

  ["treffen", "Present", "ich", "treffe","to Meet"],
  ["treffen", "Present", "du", "triffst","to Meet"],
  ["treffen", "Present", "er/sie/es", "trifft","to Meet"],
  ["treffen", "Present", "wir", "treffen","to Meet"],
  ["treffen", "Present", "ihr", "trefft","to Meet"],
  ["treffen", "Present", "sie/Sie", "treffen","to Meet"],

  ["laufen", "Present", "ich", "laufe","to Run"],
  ["laufen", "Present", "du", "läufst","to Run"],
  ["laufen", "Present", "er/sie/es", "läuft","to Run"],
  ["laufen", "Present", "wir", "laufen","to Run"],
  ["laufen", "Present", "ihr", "lauft","to Run"],
  ["laufen", "Present", "sie/Sie", "laufen","to Run"],

  ["schlafen", "Present", "ich", "schlafe","to Sleep"],
  ["schlafen", "Present", "du", "schläfst","to Sleep"],
  ["schlafen", "Present", "er/sie/es", "schläft","to Sleep"],
  ["schlafen", "Present", "wir", "schlafen","to Sleep"],
  ["schlafen", "Present", "ihr", "schlaft","to Sleep"],
  ["schlafen", "Present", "sie/Sie", "schlafen","to Sleep"],

  ["sehen", "Present", "ich", "sehe","to See"],
  ["sehen", "Present", "du", "siehst","to See"],
  ["sehen", "Present", "er/sie/es", "sieht","to See"],
  ["sehen", "Present", "wir", "sehen","to See"],
  ["sehen", "Present", "ihr", "seht","to See"],
  ["sehen", "Present", "sie/Sie", "sehen","to See"],

  ["sprechen", "Present", "ich", "spreche","to Speak"],
  ["sprechen", "Present", "du", "sprichst","to Speak"],
  ["sprechen", "Present", "er/sie/es", "spricht","to Speak"],
  ["sprechen", "Present", "wir", "sprechen","to Speak"],
  ["sprechen", "Present", "ihr", "sprecht","to Speak"],
  ["sprechen", "Present", "sie/Sie", "sprechen","to Speak"],

  ["spielen", "Present", "ich", "spiele","to Play"],
  ["spielen", "Present", "du", "spielst","to Play"],
  ["spielen", "Present", "er/sie/es", "spielt","to Play"],
  ["spielen", "Present", "wir", "spielen","to Play"],
  ["spielen", "Present", "ihr", "spielt","to Play"],
  ["spielen", "Present", "sie/Sie", "spielen","to Play"],

  ["kochen", "Present", "ich", "koche","to Cook"],
  ["kochen", "Present", "du", "kochst","to Cook"],
  ["kochen", "Present", "er/sie/es", "kocht","to Cook"],
  ["kochen", "Present", "wir", "kochen","to Cook"],
  ["kochen", "Present", "ihr", "kocht","to Cook"],
  ["kochen", "Present", "sie/Sie", "kochen","to Cook"],

  ["hören", "Present", "ich", "höre","to hear"],
  ["hören", "Present", "du", "hörst","to hear"],
  ["hören", "Present", "er/sie/es", "hört","to hear"],
  ["hören", "Present", "wir", "hören","to hear"],
  ["hören", "Present", "ihr", "hört","to hear"],
  ["hören", "Present", "sie/Sie", "hören","to hear"],

  ["wandern", "Present", "ich", "wandere","to hike"],
  ["wandern", "Present", "du", "wanderst","to hike"],
  ["wandern", "Present", "er/sie/es", "wandert","to hike"],
  ["wandern", "Present", "wir", "wandern","to hike"],
  ["wandern", "Present", "ihr", "wandert","to hike"],
  ["wandern", "Present", "sie/Sie", "wandern","to hike"],

  ["schwimmen", "Present", "ich", "schwimme","to Swim"],
  ["schwimmen", "Present", "du", "schwimmst","to Swim"],
  ["schwimmen", "Present", "er/sie/es", "schwimmt","to Swim"],
  ["schwimmen", "Present", "wir", "schwimmen","to Swim"],
  ["schwimmen", "Present", "ihr", "schwimmt","to Swim"],
  ["schwimmen", "Present", "sie/Sie", "schwimmen","to Swim"],

  ["essen", "Present", "ich", "esse","to Eat"],
  ["essen", "Present", "du", "isst","to Eat"],
  ["essen", "Present", "er/sie/es", "isst","to Eat"],
  ["essen", "Present", "wir", "essen","to Eat"],
  ["essen", "Present", "ihr", "esst","to Eat"],
  ["essen", "Present", "sie/Sie", "essen","to Eat"],

  ["nehmen", "Present", "ich", "nehme","to take"],
  ["nehmen", "Present", "du", "nimmst","to take"],
  ["nehmen", "Present", "er/sie/es", "nimmt","to take"],
  ["nehmen", "Present", "wir", "nehmen","to take"],
  ["nehmen", "Present", "ihr", "nehmt","to take"],
  ["nehmen", "Present", "sie/Sie", "nehmen","to take"],

  ["geben", "Present", "ich", "gebe","to Give"],
  ["geben", "Present", "du", "gibst","to Give"],
  ["geben", "Present", "er/sie/es", "gibt","to Give"],
  ["geben", "Present", "wir", "geben","to Give"],
  ["geben", "Present", "ihr", "gebt","to Give"],
  ["geben", "Present", "sie/Sie", "geben","to Give"],

  ["anfangen", "Present", "ich", "fange an", "to start"],
  ["anfangen", "Present", "du", "fängst an", "to start"],
  ["anfangen", "Present", "er/sie/es", "fängt an", "to start"],
  ["anfangen", "Present", "wir", "fangen an", "to start"],
  ["anfangen", "Present", "ihr", "fangt an", "to start"],
  ["anfangen", "Present", "sie/Sie", "fangen an", "to start"],

  ["aufhören", "Present", "ich", "höre auf", "to stop"],
  ["aufhören", "Present", "du", "hörst auf", "to stop"],
  ["aufhören", "Present", "er/sie/es", "hört auf", "to stop"],
  ["aufhören", "Present", "wir", "hören auf", "to stop"],
  ["aufhören", "Present", "ihr", "hört auf", "to stop"],
  ["aufhören", "Present", "sie/Sie", "hören auf", "to stop"],

  ["wegfahren", "Present", "ich", "fahre weg", "to leave"],
  ["wegfahren", "Present", "du", "fährst weg", "to leave"],
  ["wegfahren", "Present", "er/sie/es", "fährt weg", "to leave"],
  ["wegfahren", "Present", "wir", "fahren weg", "to leave"],
  ["wegfahren", "Present", "ihr", "fahrt weg", "to leave"],
  ["wegfahren", "Present", "sie/Sie", "fahren weg", "to leave"],

  ["einladen", "Present", "ich", "lade ein", "to invite"],
  ["einladen", "Present", "du", "lädst ein", "to invite"],
  ["einladen", "Present", "er/sie/es", "lädt ein", "to invite"],
  ["einladen", "Present", "wir", "laden ein", "to invite"],
  ["einladen", "Present", "ihr", "ladet ein", "to invite"],
  ["einladen", "Present", "sie/Sie", "laden ein", "to invite"],

  ["anrufen", "Present", "ich", "rufe an", "to call"],
  ["anrufen", "Present", "du", "rufst an", "to call"],
  ["anrufen", "Present", "er/sie/es", "ruft an", "to call"],
  ["anrufen", "Present", "wir", "rufen an", "to call"],
  ["anrufen", "Present", "ihr", "ruft an", "to call"],
  ["anrufen", "Present", "sie/Sie", "rufen an", "to call"],

  ["ausgehen", "Present", "ich", "gehe aus","to go out"],
  ["ausgehen", "Present", "du", "gehst aus","to go out"],
  ["ausgehen", "Present", "er/sie/es", "geht aus","to go out"],
  ["ausgehen", "Present", "wir", "gehen aus","to go out"],
  ["ausgehen", "Present", "ihr", "geht aus","to go out"],
  ["ausgehen", "Present", "sie/Sie", "gehen aus","to go out"],

  ["einkaufen", "Present", "ich", "kaufe ein","to shop"],
  ["einkaufen", "Present", "du", "kaufst ein","to shop"],
  ["einkaufen", "Present", "er/sie/es", "kauft ein","to shop"],
  ["einkaufen", "Present", "wir", "kaufen ein","to shop"],
  ["einkaufen", "Present", "ihr", "kauft ein","to shop"],
  ["einkaufen", "Present", "sie/Sie", "kaufen ein","to shop"],

  ["aufräumen", "Present", "ich", "räume auf", "to clean up"],
  ["aufräumen", "Present", "du", "räumst auf", "to clean up"],
  ["aufräumen", "Present", "er/sie/es", "räumt auf", "to clean up"],
  ["aufräumen", "Present", "wir", "räumen auf", "to clean up"],
  ["aufräumen", "Present", "ihr", "räumt auf", "to clean up"],
  ["aufräumen", "Present", "sie/Sie", "räumen auf", "to clean up"],

  ["fernsehen", "Present", "ich", "sehe fern","to watch TV"],
  ["fernsehen", "Present", "du", "siehst fern","to watch TV"],
  ["fernsehen", "Present", "er/sie/es", "sieht fern","to watch TV"],
  ["fernsehen", "Present", "wir", "sehen fern","to watch TV"],
  ["fernsehen", "Present", "ihr", "seht fern","to watch TV"],
  ["fernsehen", "Present", "sie/Sie", "sehen fern","to watch TV"],
  
  ["sagen", "Present", "ich", "sage", "to say"],
  ["sagen", "Present", "du", "sagst", "to say"],
  ["sagen", "Present", "er/sie/es", "sagt", "to say"],
  ["sagen", "Present", "wir", "sagen", "to say"],
  ["sagen", "Present", "ihr", "sagt", "to say"],
  ["sagen", "Present", "sie/Sie", "sagen", "to say"]
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

  ["fahren", "Present", "ich", "fahre","to Drive"],
  ["fahren", "Present", "du", "fährst","to Drive"],
  ["fahren", "Present", "er/sie/es", "fährt","to Drive"],
  ["fahren", "Present", "wir", "fahren","to Drive"],
  ["fahren", "Present", "ihr", "fahrt","to Drive"],
  ["fahren", "Present", "sie/Sie", "fahren","to Drive"],

  ["waschen", "Present", "ich", "wasche","to Wash"],
  ["waschen", "Present", "du", "wäschst","to Wash"],
  ["waschen", "Present", "er/sie/es", "wäscht","to Wash"],
  ["waschen", "Present", "wir", "waschen","to Wash"],
  ["waschen", "Present", "ihr", "wascht","to Wash"],
  ["waschen", "Present", "sie/Sie", "waschen","to Wash"],

  ["schlafen", "Present", "ich", "schlafe","to Sleep"],
  ["schlafen", "Present", "du", "schläfst","to Sleep"],
  ["schlafen", "Present", "er/sie/es", "schläft","to Sleep"],
  ["schlafen", "Present", "wir", "schlafen","to Sleep"],
  ["schlafen", "Present", "ihr", "schlaft","to Sleep"],
  ["schlafen", "Present", "sie/Sie", "schlafen","to Sleep"],

  ["laufen", "Present", "ich", "laufe","to Run"],
  ["laufen", "Present", "du", "läufst","to Run"],
  ["laufen", "Present", "er/sie/es", "läuft","to Run"],
  ["laufen", "Present", "wir", "laufen","to Run"],
  ["laufen", "Present", "ihr", "lauft","to Run"],
  ["laufen", "Present", "sie/Sie", "laufen","to Run"],

  //e to ie


  ["lesen", "Present", "ich", "lese","to Read"],
  ["lesen", "Present", "du", "liest","to Read"],
  ["lesen", "Present", "er/sie/es", "liest","to Read"],
  ["lesen", "Present", "wir", "lesen","to Read"],
  ["lesen", "Present", "ihr", "lest","to Read"],
  ["lesen", "Present", "sie/Sie", "lesen","to Read"],

  ["sehen", "Present", "ich", "sehe","to See"],
  ["sehen", "Present", "du", "siehst","to See"],
  ["sehen", "Present", "er/sie/es", "sieht","to See"],
  ["sehen", "Present", "wir", "sehen","to See"],
  ["sehen", "Present", "ihr", "seht","to See"],
  ["sehen", "Present", "sie/Sie", "sehen","to See"],

  //e to i


  ["treffen", "Present", "ich", "treffe","to Meet"],
  ["treffen", "Present", "du", "triffst","to Meet"],
  ["treffen", "Present", "er/sie/es", "trifft","to Meet"],
  ["treffen", "Present", "wir", "treffen","to Meet"],
  ["treffen", "Present", "ihr", "trefft","to Meet"],
  ["treffen", "Present", "sie/Sie", "treffen","to Meet"],


  ["sprechen", "Present", "ich", "spreche","to Speak"],
  ["sprechen", "Present", "du", "sprichst","to Speak"],
  ["sprechen", "Present", "er/sie/es", "spricht","to Speak"],
  ["sprechen", "Present", "wir", "sprechen","to Speak"],
  ["sprechen", "Present", "ihr", "sprecht","to Speak"],
  ["sprechen", "Present", "sie/Sie", "sprechen","to Speak"],


  ["essen", "Present", "ich", "esse","to Eat"],
  ["essen", "Present", "du", "isst","to Eat"],
  ["essen", "Present", "er/sie/es", "isst","to Eat"],
  ["essen", "Present", "wir", "essen","to Eat"],
  ["essen", "Present", "ihr", "esst","to Eat"],
  ["essen", "Present", "sie/Sie", "essen","to Eat"],


  ["nehmen", "Present", "ich", "nehme","to Take"],
  ["nehmen", "Present", "du", "nimmst","to Take"],
  ["nehmen", "Present", "er/sie/es", "nimmt","to Take"],
  ["nehmen", "Present", "wir", "nehmen","to Take"],
  ["nehmen", "Present", "ihr", "nehmt","to Take"],
  ["nehmen", "Present", "sie/Sie", "nehmen","to Take"],

  ["geben", "Present", "ich", "gebe","to Give"],
  ["geben", "Present", "du", "gibst","to Give"],
  ["geben", "Present", "er/sie/es", "gibt","to Give"],
  ["geben", "Present", "wir", "geben","to Give"],
  ["geben", "Present", "ihr", "gebt","to Give"],
  ["geben", "Present", "sie/Sie", "geben","to Give"],


  //normal

  ["hören", "Present", "ich", "höre","to Hear"],
  ["hören", "Present", "du", "hörst","to Hear"],
  ["hören", "Present", "er/sie/es", "hört","to Hear"],
  ["hören", "Present", "wir", "hören","to Hear"],
  ["hören", "Present", "ihr", "hört","to Hear"],
  ["hören", "Present", "sie/Sie", "hören","to Hear"],


  ["wandern", "Present", "ich", "wandere","to Hike"],
  ["wandern", "Present", "du", "wanderst","to Hike"],
  ["wandern", "Present", "er/sie/es", "wandert","to Hike"],
  ["wandern", "Present", "wir", "wandern","to Hike"],
  ["wandern", "Present", "ihr", "wandert","to Hike"],
  ["wandern", "Present", "sie/Sie", "wandern","to Hike"],


  ["schwimmen", "Present", "ich", "schwimme","to Swim"],
  ["schwimmen", "Present", "du", "schwimmst","to Swim"],
  ["schwimmen", "Present", "er/sie/es", "schwimmt","to Swim"],
  ["schwimmen", "Present", "wir", "schwimmen","to Swim"],
  ["schwimmen", "Present", "ihr", "schwimmt","to Swim"],
  ["schwimmen", "Present", "sie/Sie", "schwimmen","to Swim"],


  ["kochen", "Present", "ich", "koche","to Cook"],
  ["kochen", "Present", "du", "kochst","to Cook"],
  ["kochen", "Present", "er/sie/es", "kocht","to Cook"],
  ["kochen", "Present", "wir", "kochen","to Cook"],
  ["kochen", "Present", "ihr", "kocht","to Cook"],
  ["kochen", "Present", "sie/Sie", "kochen","to Cook"],



  ["spielen", "Present", "ich", "spiele","to Play"],
  ["spielen", "Present", "du", "spielst","to Play"],
  ["spielen", "Present", "er/sie/es", "spielt","to Play"],
  ["spielen", "Present", "wir", "spielen","to Play"],
  ["spielen", "Present", "ihr", "spielt","to Play"],
  ["spielen", "Present", "sie/Sie", "spielen","to Play"],

//Trennbare Verben

  ["anfangen", "Present", "ich", "fange an", "to start"],
  ["anfangen", "Present", "du", "fängst an", "to start"],
  ["anfangen", "Present", "er/sie/es", "fängt an", "to start"],
  ["anfangen", "Present", "wir", "fangen an", "to start"],
  ["anfangen", "Present", "ihr", "fangt an", "to start"],
  ["anfangen", "Present", "sie/Sie", "fangen an", "to start"],

  ["aufhören", "Present", "ich", "höre auf", "to stop"],
  ["aufhören", "Present", "du", "hörst auf", "to stop"],
  ["aufhören", "Present", "er/sie/es", "hört auf", "to stop"],
  ["aufhören", "Present", "wir", "hören auf", "to stop"],
  ["aufhören", "Present", "ihr", "hört auf", "to stop"],
  ["aufhören", "Present", "sie/Sie", "hören auf", "to stop"],

  ["wegfahren", "Present", "ich", "fahre weg", "to leave"],
  ["wegfahren", "Present", "du", "fährst weg", "to leave"],
  ["wegfahren", "Present", "er/sie/es", "fährt weg", "to leave"],
  ["wegfahren", "Present", "wir", "fahren weg", "to leave"],
  ["wegfahren", "Present", "ihr", "fahrt weg", "to leave"],
  ["wegfahren", "Present", "sie/Sie", "fahren weg", "to leave"],

  ["einladen", "Present", "ich", "lade ein", "to invite"],
  ["einladen", "Present", "du", "lädst ein", "to invite"],
  ["einladen", "Present", "er/sie/es", "lädt ein", "to invite"],
  ["einladen", "Present", "wir", "laden ein", "to invite"],
  ["einladen", "Present", "ihr", "ladet ein", "to invite"],
  ["einladen", "Present", "sie/Sie", "laden ein", "to invite"],

  ["anrufen", "Present", "ich", "rufe an", "to call"],
  ["anrufen", "Present", "du", "rufst an", "to call"],
  ["anrufen", "Present", "er/sie/es", "ruft an", "to call"],
  ["anrufen", "Present", "wir", "rufen an", "to call"],
  ["anrufen", "Present", "ihr", "ruft an", "to call"],
  ["anrufen", "Present", "sie/Sie", "rufen an", "to call"],

  ["ausgehen", "Present", "ich", "gehe aus","to go out"],
  ["ausgehen", "Present", "du", "gehst aus","to go out"],
  ["ausgehen", "Present", "er/sie/es", "geht aus","to go out"],
  ["ausgehen", "Present", "wir", "gehen aus","to go out"],
  ["ausgehen", "Present", "ihr", "geht aus","to go out"],
  ["ausgehen", "Present", "sie/Sie", "gehen aus","to go out"],

  ["einkaufen", "Present", "ich", "kaufe ein","to shop"],
  ["einkaufen", "Present", "du", "kaufst ein","to shop"],
  ["einkaufen", "Present", "er/sie/es", "kauft ein","to shop"],
  ["einkaufen", "Present", "wir", "kaufen ein","to shop"],
  ["einkaufen", "Present", "ihr", "kauft ein","to shop"],
  ["einkaufen", "Present", "sie/Sie", "kaufen ein","to shop"],

  ["aufräumen", "Present", "ich", "räume auf", "to clean up"],
  ["aufräumen", "Present", "du", "räumst auf", "to clean up"],
  ["aufräumen", "Present", "er/sie/es", "räumt auf", "to clean up"],
  ["aufräumen", "Present", "wir", "räumen auf", "to clean up"],
  ["aufräumen", "Present", "ihr", "räumt auf", "to clean up"],
  ["aufräumen", "Present", "sie/Sie", "räumen auf", "to clean up"],

  ["fernsehen", "Present", "ich", "sehe fern","to watch TV"],
  ["fernsehen", "Present", "du", "siehst fern","to watch TV"],
  ["fernsehen", "Present", "er/sie/es", "sieht fern","to watch TV"],
  ["fernsehen", "Present", "wir", "sehen fern","to watch TV"],
  ["fernsehen", "Present", "ihr", "seht fern","to watch TV"],
  ["fernsehen", "Present", "sie/Sie", "sehen fern","to watch TV"],

  ["sagen", "Present", "ich", "sage", "to say"],
  ["sagen", "Present", "du", "sagst", "to say"],
  ["sagen", "Present", "er/sie/es", "sagt", "to say"],
  ["sagen", "Present", "wir", "sagen", "to say"],
  ["sagen", "Present", "ihr", "sagt", "to say"],
  ["sagen", "Present", "sie/Sie", "sagen", "to say"]

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
        }

        const randomIndex = Math.floor(Math.random() * workingPrompts.length);
        currentPrompt = workingPrompts[randomIndex];
       // prompts.splice(randomIndex, 1);

        const promptElement = document.getElementById("prompt");
        promptElement.innerHTML = "Give me the <B> " + currentPrompt[1] + "</B> of the Verb: <B>" + currentPrompt[0] +  "</B>   <I>(" + currentPrompt[4] +  ")</I>for the pronoun <B>" + currentPrompt[2] + "</B>" ;

        // set a timeout of 5 seconds
        const endTime = Date.now() + (time2Answer *1000);

       timeoutId = setTimeout(() => {
        // do something when the timeout expires
            numCorrect = 0;
            rigthInARowField.textContent = numCorrect;
          
            wrongAnswers++;
            wrongAnswersField.textContent=wrongAnswers;

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

window.addEventListener('beforeunload', function (event) {
  clearInterval(timerInterval);
  clearTimeout(timeoutId);
  event.preventDefault();
  event.returnValue = '';
});

textBox.focus();

 
