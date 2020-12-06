var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('Please enter your name to start the Quizz... ');

var userWelcomeMessage = " HI,  " + userName + " 👋" ;
console.log(userWelcomeMessage);

var highScores = [
  {
    name:"Ramesh",
    score:10
  },
  {
    nanme:"Ganesh",
    score:9
  }
]
//play function

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("You are correct! ");
  score = score +2;
  }else{
    console.log("That's Wrong! ");
    score = score-1;
  }
  console.log("current score:" , score);
  console.log("--------");
}
//objects in the array
var questions = [
  {
    question:  " Here's the first Question \n 1️⃣ If Kotesh  could wake up with a completely different permanent hair color, what would it be? \n a)red \n b)blue \n c)green \n d)yellow ",
    answer:"a"
  },
  {
    question: " \n 2️⃣ My all time favourite online game ? \n a)C-O-D \n b)FREE-FIRE \n c)PUB-G \n d)Assasin's creed ",
    answer:"c"
  },
  {
question:" \n 3️⃣ Web-series i've watched spending many nights ? \n a)Friends. \n b)Game of thrones. \n c)Breaking bad. \n d)Money heist. ",
answer:"d"
  },
  {
    question:" \n 4️⃣ Then my favourite movie ? \n a)Avengers: Endgame. \n b)It: Chapter Two. \n c)Toy Story 4. \n d)Spider-Man: Far From Home. ",
    answer:"a"
  },
  {
    question:" \n 5️⃣ Can you guess my Age ? \n a)25 \n b)21 \n c)27 \n d)10 ",
    answer:"b"
  }
];
for (var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
 play(currentQuestion.question , currentQuestion.answer);
}
if(score<5){
  console.log("OH DEAR... i think u should have guessed better about me")
}else{
console.log("congratulations dude... your guessing overwhelmed me 😇")
}