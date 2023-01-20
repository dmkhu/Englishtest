function getRandomNum (max) {
    ranNum = Math.floor(Math.random() * (max + 1));
    return ranNum;
}

//Кнопка старта
function startTest() {
    document.querySelector('.start-test').style= 'display: none';
    document.querySelector('.test').style= 'display: block';
    document.getElementById("a1").innerHTML = num;
    getTask()
}


//Кнопка дальше
function pushNext() {
    if(num < 15) {
        checkTask();
        document.getElementById("a1").innerHTML = num;
        resetDisplay();
        getTask();
    }
    else {
        showResult();
    }
}

//кнопка пройти еще раз
function pushAgain() {
    location.reload();
}


//открываем страницу с результатом
function showResult(){
    document.querySelector('.test').style= 'display: none';
    document.querySelector('.test-result').style= 'display: flex';
    checkTask();
    console.log(userCount);
    showTextResult();
}


//отображаем результат
function showTextResult() {
    document.getElementsByClassName("your-count")[0].innerHTML = userCount;
    if( userCount == 15) {
        document.getElementsByClassName("result-img")[0].src = "gif/best.gif";
        document.getElementsByClassName("text-result")[0].innerHTML = "Incredible!";
    }
    else if( userCount >= 11) {
        document.getElementsByClassName("result-img")[0].src = "gif/good job.gif";
        document.getElementsByClassName("text-result")[0].innerHTML = "Good job!";
    }
    else if(userCount >= 6) {
        document.getElementsByClassName("result-img")[0].src = "gif/try again.gif";
        document.getElementsByClassName("text-result")[0].innerHTML = "Есть над чем поработать";
    }
    else {
        document.getElementsByClassName("result-img")[0].src = "gif/bad news.gif";
        document.getElementsByClassName("text-result")[0].innerHTML = "Неудачная попытка";
    }
}

//Находим вопрос
function getQuestion (randomNum) {
    let question = allQuestion[num-1];
    let variant = question[randomNum];
    document.getElementById("a2").innerHTML = variant;
    return variant
}


//Находим ответы
function getAnswers(randomNum) {
    let answers = allAnswers[num-1];
    let variant = answers[randomNum];

    // раскрываем вопросы
    let i = 0;
    for(let j in document.getElementsByClassName('answer')){
        document.getElementsByClassName('answer')[j].style = "display: none";
    }
    while (i < variant.length) {
        document.getElementsByClassName('answer')[i];
        textAns = document.getElementsByClassName('answer')[i];
        textAns.style= "display: block";
        textAns.querySelector("p").innerHTML = variant[i];
        i++;
    }
    return variant
}


//Вывод вопроса и ответов
function getTask(){
    let randomNum = getRandomNum(allQuestion[num-1].length - 1);
    getQuestion(randomNum);
    getAnswers(randomNum);
}


//выбор ответа пользователем
function pushAnswer() {
        resetDisplay();
        const myAnswer = event.currentTarget;
        let noAnswer = myAnswer.querySelector(".no-answer");
        let yesAnswer = myAnswer.querySelector(".yes-answer");
        noAnswer.style = "display: none";
        yesAnswer.style = "display: block";
}


//обновляем картинку после смены выбора
function resetDisplay() {
    let resetDisplay1 = document.querySelectorAll(".no-answer");
    for (let i in resetDisplay1) {
        resetDisplay1[i].style = "display: block";
    }
    let resetDisplay2 = document.querySelectorAll(".yes-answer");
    for (let i in resetDisplay2) {
        resetDisplay2[i].style = "display: none";
    }
}



// ищем рандом
function findTask() {
    let questions = allQuestion[num-1];
    let question = document.getElementById('a2').textContent;
    let j = questions.indexOf(question);
    let key = findKey(j);
    return key;
}


//проверяем задание
function checkTask() {
    const userAnswer = scanAnswers();
    const rightAnswers = findTask();
    if(userAnswer !== -1){
        if(userAnswer === rightAnswers){
            userCount++;
        }
    }
    num++;
}

//подбираю ключ
function findKey(randomNum) {
    let numTask = answers[num-1];
    let rightAnswers = numTask[randomNum];
    return rightAnswers;
}


//находим выбор юзера
function scanAnswers() {
    const yesCount = document.querySelectorAll(".yes-answer");
    let j = 0;
    let userAnswer = [];
    while(j < yesCount.length) {
        style = window.getComputedStyle(yesCount[j]);
        j++;
        let display = style.getPropertyValue('display');
        userAnswer.push(display);
    }
    let userResult = userAnswer.indexOf('block');
    return userResult;
}

let num = 1; //номер задания
let userCount = 0; //считаем баллы


//Вопросы
const stativeVerbs1 = "I ______ every bite of this meal";
const stativeVerbs2 = "What a terrible noise! Our neighbors ______ a party.";
const stativeVerbs3 = "This fabric ______ soft to the touch, like fine silk.";
const questionNum1 = [stativeVerbs1, stativeVerbs2, stativeVerbs3];
const theGerund1 = "They spend hours _______ on the phone.";
const theGerund2 = "Don’t leave without ______ goodbye.";
const theGerund3 = "I always forget ______ the flowers in the house.";
const questionNum2 = [theGerund1, theGerund2, theGerund3];
const relativeClause1 = "The woman ___ is standing near the window is a doctor.";
const relativeClause2 = "Did you find the pencil _____ was missing?";
const relativeClause3 = "Italy is a country ____ I will visit next month.";
const questionNum3 = [relativeClause1, relativeClause2, relativeClause3]
const modalVerb1 = "We haven't got much time. We _____ hurry.";
const modalVerb2 = "You have just had lunch. You _____ be hungry.";
const modalVerb3 = "I understand it very well. You _____ explain further.";
const questionNum4 = [modalVerb1, modalVerb2, modalVerb3];
const conditionalSentences1 = "If Tom had enough money, he ______ to the USA long ago.";
const conditionalSentences2 = "If I ______ their language, I could understand what they were saying.";
const conditionalSentences3 = "If Jane _____ this medicine yesterday, she would feel better now.";
const questionNum5 = [conditionalSentences1, conditionalSentences2, conditionalSentences1];
const usedTo1 = "Larry _____ work as a lorry-driver, bit now he works as a dispatcher at the station.";
const usedTo2 = "My girlfriend _____ like men with long hair, but now she is dating with me, and she likes my long hair!";
const usedTo3 = "Nancy _____ forget about important meetings, but now she has bought a pocket planner.";
const questionNum6 = [usedTo1, usedTo2, usedTo3];
const reportedSpeech1 = "Berta  _____ me that she lived in Canada.";
const reportedSpeech2 = "Lisa said she hadn’t been at the meeting  _____ .";
const reportedSpeech3 = "My mother ordered me _____ my room again.  ";
const questionNum7 = [reportedSpeech1, reportedSpeech2, reportedSpeech3]
const tellOrSay1 = "First of all I'd like ______ a few words about my background.";
const tellOrSay2 = "Bruce has _____ us the truth, hasn't he?";
const tellOrSay3 = "______ of the devil and he is sure to appear.";
const questionNum8 = [tellOrSay1, tellOrSay2, tellOrSay3];
const tooMuch1 = "You watch _____ TV.";
const tooMuch2 = "You don't drink _____ water.";
const tooMuch3 = "You eat _____ pizzas.";
const questionNum9 = [tooMuch1, tooMuch2, tooMuch3];
const phrasalVerbs1 = "After his illness, he worked hard to ______ on his missed schoolwork.";
const phrasalVerbs2 = "Jeremy didn't want to _____ the wedding any longer.";
const phrasalVerbs3 = "Bob's father taught him to be firm and to _____ for what he believes.";
const questionNum10 = [phrasalVerbs1, phrasalVerbs2, phrasalVerbs3];
const neither1 = "She doesn’t like Indian food. – Really? I don’t like it ______ .";
const neither2 = "Do you have a flat or a room? – ______ I have a detached house.";
const neither3 = "Our teacher is great! I like her! – Yes, she is. I like her _____";
const questionNum11 = [neither1, neither2, neither3];
const soBut1 = "We couldn't find a taxi, _______ we walked home";
const soBut2 = "_______ she's very nice, she doesn't have many friends.";
const soBut3 = "There was nothing on TV, _______ I went to bed.";
const questionNum12 = [soBut1, soBut2, soBut3];
const tagQuestion1 = "You are so angry with me, ______?";
const tagQuestion2 = "It is dark in the evening in winter, ______?";
const tagQuestion3 = "He can speak English well, ______?";
const questionNum13 = [tagQuestion1, tagQuestion2, tagQuestion3];
const presentPerfect1 = "They _____ in the park for two hours already.";
const presentPerfect2 = "Michael ______ his house in 1998.";
const presentPerfect3 = "Emma ______ dinner for some minutes already.";
const questionNum14 = [presentPerfect1, presentPerfect2, presentPerfect3];
const passiveVoice1 = "I _____ last Friday";
const passiveVoice2 = "People ______ this road very often";
const passiveVoice3 = "This dictionary ______ a week ago";
const questionNum15 = [passiveVoice1, passiveVoice2, passiveVoice3];

const allQuestion = [questionNum1, questionNum2, questionNum3, questionNum4, questionNum5, 
                     questionNum6, questionNum7, questionNum8, questionNum9, questionNum10, 
                     questionNum11, questionNum12, questionNum13, questionNum14, questionNum15];

//Ответы
const iDontKnow = "I don't know";
const thisMeal1 = "enjoy";
const thisMeal2 = "am enjoying"; // +
const thisMeal = [thisMeal1, thisMeal2, iDontKnow];
const ourNeighbors1 = "have";
const ourNeighbors2 = "are having"; //+
const ourNeighbors = [ourNeighbors1, ourNeighbors2, iDontKnow];
const thisFabric1 = "feels"; //+
const thisFabric2 = "is feeling";
const thisFabric = [thisFabric1, thisFabric2, iDontKnow];
const answerNum1 = [thisMeal, ourNeighbors, thisFabric];

const theySpend1 = "to talk";
const theySpend2 = "talking"; //+
const theySpend3 = "talk";
const theySpend = [theySpend1, theySpend2, theySpend3, iDontKnow];
const dontLeave1 = "saying";//+
const dontLeave2 = "to say";
const dontLeave3 = "say";
const dontLeave = [dontLeave1, dontLeave2, dontLeave3, iDontKnow];
const inTheHouse1 = "to water";//+
const inTheHouse2 = "watering";
const inTheHouse3 = "water";
const inTheHouse = [inTheHouse1, inTheHouse2, inTheHouse3, iDontKnow];
const answerNum2 = [theySpend, dontLeave, inTheHouse];

const theWoman1 = "what";
const theWoman2 = "who";//+
const theWoman3 = "which";
const theWoman = [theWoman1, theWoman2, theWoman3, iDontKnow];
const wasMissing1 = "that";//+
const wasMissing2 = "what";
const wasMissing3 = "whom";
const wasMissing = [wasMissing1, wasMissing2, wasMissing3, iDontKnow];
const willVisit1 = "that";//+
const willVisit2 = "what";
const willVisit3 = "than";
const willVisit = [willVisit1, willVisit2, willVisit3, iDontKnow];
const answerNum3 = [theWoman, wasMissing, willVisit];

const muchTime1 = "should";
const muchTime2 = "needn't";
const muchTime3 = "must"; //+
const muchTime = [muchTime1, muchTime2, muchTime3, iDontKnow];
const hadLunch1 ="mustn't";
const hadLunch2 ="can't";//+
const hadLunch3 ="wouldn't";
const hadLunch = [hadLunch1, hadLunch2, hadLunch3, iDontKnow];
const veryWell1 = "needn't";//+
const veryWell2 = "mustn't";
const veryWell3 = "shouldn't";
const veryWell = [veryWell1, veryWell2, veryWell3, iDontKnow];
const answerNum4 = [muchTime, hadLunch, veryWell];

const toUSA1 = "went";
const toUSA2 = "would have gone";//+
const toUSA3 = "would go";
const toUSA = [toUSA1, toUSA2, toUSA3, iDontKnow];
const wereSaying1 = "had known";
const wereSaying2 = "will know";
const wereSaying3 = "knew";//+
const wereSaying = [wereSaying1, wereSaying2, wereSaying3, iDontKnow];
const medicine1 = "took";
const medicine2 = "taken";
const medicine3 = "had taken";//+
const medicine = [medicine1, medicine2, medicine3, iDontKnow];
const answerNum5 = [toUSA, wereSaying, medicine];

const lorryDriver1 = "used to";//+
const lorryDriver2 = "didn't use to";
const lorryDriver = [lorryDriver1, lorryDriver2, iDontKnow];
const longHair1 = "used to";
const longHair2 = "didn't use to";//+
const longHair = [longHair1, longHair2, iDontKnow];
const pocketPlanner1 = "used to";//+
const pocketPlanner2 = "didn't use to";
const pocketPlanner = [pocketPlanner1, pocketPlanner2, iDontKnow];
const answerNum6 = [lorryDriver, longHair, pocketPlanner];

const berta1 = "asked";
const berta2 = "said";
const berta3 = "told";//+
const berta = [berta1, berta2, berta3, iDontKnow];
const liza1 = "the next day";
const liza2 = "the day before";//+
const liza3 = "yesterday";
const liza = [liza1, liza2, liza3, iDontKnow];
const myRoom1 = "not to leave";//+
const myRoom2 = "don't leave";
const myRoom = [myRoom1, myRoom2, iDontKnow];
const answerNum7 = [berta, liza, myRoom];

const aboutMy1 = "to tell";
const aboutMy2 = "to talk";
const aboutMy3 = "to say";//+
const aboutMy = [aboutMy1, aboutMy2, aboutMy3, iDontKnow];
const Bruce1 = "said";
const Bruce2 = "spoke";
const Bruce3 = "told";//+
const Bruce = [Bruce1, Bruce2, Bruce3, iDontKnow];
const ofTheDevil1 = "Talk";
const ofTheDevil2 = "Speak";//+
const ofTheDevil3 = "Tell";
const ofTheDevil = [ofTheDevil1, ofTheDevil2, ofTheDevil3, iDontKnow];
const answerNum8 = [aboutMy, Bruce, ofTheDevil];

const TV1 = "too much";//+
const TV2 = "too many";
const TV3 = "enough";
const TV = [TV1, TV2, TV3, iDontKnow];
const water1 = "too much";
const water2 = "too many";
const water3 = "enough";//+
const water = [water1, water2, water3, iDontKnow];
const pizzas1 = "too much";
const pizzas2 = "too many";//+
const pizzas3 = "enough";
const pizzas = [pizzas1, pizzas2, pizzas3, iDontKnow];
const answerNum9 = [TV, water, pizzas]

const hardTo1 = "catch";
const hardTo2 = "catch back";
const hardTo3 = "catch up";//+
const hardTo = [hardTo1,hardTo2, hardTo3, iDontKnow];
const wedding1 = "put by";
const wedding2 = "put over";
const wedding3 = "put off";//+
const wedding = [wedding1, wedding2, wedding3, iDontKnow];
const bobsFather1 = "stand in";
const bobsFather2 = "stand up";//+
const bobsFather3 = "stand down";
const bobsFather = [bobsFather1, bobsFather2, bobsFather3, iDontKnow];
const answerNum10 = [hardTo, wedding, bobsFather];

const indianFood1 = "either";//+
const indianFood2 = "too";
const indianFood3 = "also";
const indianFood = [indianFood1, indianFood2, indianFood3, iDontKnow];
const flatOrRoom1 = "Also";
const flatOrRoom2 = "Either";
const flatOrRoom3 = "Neither";//+
const flatOrRoom = [flatOrRoom1, flatOrRoom2, flatOrRoom3, iDontKnow];
const teacher1 = "either";
const teacher2 = "too";//+
const teacher3 = "also";
const teacher = [teacher1, teacher2, teacher3, iDontKnow];
const answerNum11 =[indianFood, flatOrRoom, teacher];

const taxi1 = "because";
const taxi2 = "so";//+
const taxi3 = "but";
const taxi = [taxi1, taxi2, taxi3, iDontKnow];
const sheNice1 = "Although"//+
const sheNice2 = "so";
const sheNice3 = "but";
const sheNice = [sheNice1, sheNice2, sheNice3, iDontKnow];
const wentToBed1 = "because";
const wentToBed2 = "so";//+
const wentToBed3 = "but";
const wentToBed = [wentToBed1, wentToBed2, wentToBed3, iDontKnow];
const answerNum12 = [taxi, sheNice, wentToBed];

const soAngry1 = "aren't you";//+
const soAngry2 = "are you";
const soAngry3 = "am I";
const soAngry = [soAngry1, soAngry2, soAngry3, iDontKnow];
const darkWinter1 = "is it";
const darkWinter2 = "isn't it";//+
const darkWinter3 = "doesn't it";
const darkWinter = [darkWinter1, darkWinter2, darkWinter3, iDontKnow];
const canWell1 = "can't he";//+
const canWell2 = "does he";
const canWell3 = "doesn't he";
const canWell = [canWell1, canWell2, canWell3, iDontKnow];
const answerNum13 = [soAngry, darkWinter, canWell];

const park1 = "walked";
const park2 = "were walking";
const park3 = "have been walking";//+
const park = [park1, park2, park3, iDontKnow];
const michael1 = "built";//+
const michael2 = "was building";
const michael3 = "has been building";
const michael = [michael1, michael2, michael3, iDontKnow];
const Emma1 = "was cooking";
const Emma2 = "has cooked";
const Emma3 = "has been cooking";//+
const Emma = [Emma1, Emma2, Emma3, iDontKnow];
const answerNum14 = [park, michael, Emma];

const lastFriday1 = "was arrived";
const lastFriday2 = "have arrived";
const lastFriday3 = "arrived";//+
const lastFriday = [lastFriday1, lastFriday2, lastFriday3, iDontKnow];
const roadOften1 = "haven't used";
const roadOften2 = "aren't used";
const roadOften3 = "don't use";//+
const roadOften = [roadOften1, roadOften2, roadOften3, iDontKnow];
const dictionaryWeek1 = "was published";//+
const dictionaryWeek2 = "has published";
const dictionaryWeek3 = "published";
const dictionaryWeek = [dictionaryWeek1, dictionaryWeek2, dictionaryWeek3, iDontKnow];
const answerNum15 =[lastFriday, roadOften, dictionaryWeek];


const allAnswers = [answerNum1, answerNum2, answerNum3, answerNum4, answerNum5, 
                    answerNum6, answerNum7, answerNum8, answerNum9, answerNum10,
                    answerNum11, answerNum12, answerNum13, answerNum14, answerNum15];

//ключи
const keyNum1 = [1, 1, 0];
const keyNum2 = [1, 0, 0];
const keyNum3 = [1, 0, 0];
const keyNum4 = [2, 1, 0];
const keyNum5 = [1, 2, 2];
const keyNum6 = [0, 1, 0];
const keyNum7 = [2, 1, 0];
const keyNum8 = [2, 2, 1];
const keyNum9 = [0, 2, 1];
const keyNum10 = [2, 2, 1];
const keyNum11= [0, 2, 1];
const keyNum12 = [1, 0, 1];
const keyNum13 = [0, 1, 0];
const keyNum14 = [2, 0, 2];
const keyNum15 = [2, 2, 0];
const answers = [keyNum1, keyNum2, keyNum3, keyNum4, keyNum5, 
                 keyNum6, keyNum7, keyNum8, keyNum9, keyNum10,
                 keyNum11, keyNum12, keyNum13, keyNum14, keyNum15];