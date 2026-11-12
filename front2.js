function start(){
let name = document.getElementById("name").value;
let exam = document.getElementById("exam").value;
if (exam === "" || name === ""){
document.getElementById("error").innerHTML="FILL IN YOUR NAME AND EXAM NO";
}else{ 
localStorage.setItem("Studentname",name);
localStorage.setItem("StudentExam",exam)
window.location.href="rules.html";
}
}
let userName = localStorage.getItem("Studentname");
let userExam = localStorage.getItem("StudentExam")
document.getElementById("userName").innerHTML=userName;
document.getElementById("userExam").innerHTML=userExam;
function start2(){
window.location.href="selection.html";
}
let SelectedSubject = "";
function SelectMath(){ 
SelectedSubject = "Math";
}
function SelectEng(){ 
SelectedSubject = "Eng";
}function SelectPhy(){ 
SelectedSubject = "Phy";
}function SelectChem(){ 
SelectedSubject = "Chem";
}
function startexam(){
if(SelectedSubject == ""){
// alert("Select a subject you want to participate in...")
document.getElementById("error2").innerHTML="SELECT THE SUBJECT YOU ARE OFFERING!!"
return
}else if(SelectedSubject === "Math"){
window.location.href="mathematics.html";
}
}

const questions = [
  { question: "Choose the word nearest in meaning to 'abundant'.", choices: ["Scarce", "Plentiful", "Tiny", "Empty"], answer: "Plentiful" },
  { question: "Choose the word opposite in meaning to 'reluctant'.", choices: ["Unwilling", "Eager", "Careful", "Quiet"], answer: "Eager" },
  { question: "The teacher, together with her students, ___ going to the museum.", choices: ["are", "were", "is", "have"], answer: "is" },
  { question: "Neither Ada nor her sisters ___ at home.", choices: ["is", "was", "are", "has"], answer: "are" },
  { question: "By the time we arrived, the film ___.", choices: ["starts", "has started", "had started", "will start"], answer: "had started" },
  { question: "If I ___ enough money, I would buy a new laptop.", choices: ["have", "had", "will have", "am having"], answer: "had" },
  { question: "She has lived in Lagos ___ 2020.", choices: ["for", "since", "during", "from"], answer: "since" },
  { question: "The boy was accused ___ stealing the phone.", choices: ["for", "with", "of", "on"], answer: "of" },
  { question: "The news ___ surprising to everyone.", choices: ["were", "are", "was", "have been"], answer: "was" },
  { question: "Each of the players ___ given a certificate.", choices: ["were", "are", "was", "have"], answer: "was" },
  { question: "Choose the correctly spelt word.", choices: ["Accomodation", "Acommodation", "Accommodation", "Acomodation"], answer: "Accommodation" },
  { question: "Choose the correctly spelt word.", choices: ["Seperate", "Separate", "Seperete", "Separrate"], answer: "Separate" },
  { question: "The principal asked Musa and ___ to wait outside.", choices: ["I", "me", "myself", "mine"], answer: "me" },
  { question: "This is the student ___ won the debate.", choices: ["which", "whose", "who", "whom"], answer: "who" },
  { question: "The woman ___ bag was missing reported it to the police.", choices: ["who", "whom", "whose", "which"], answer: "whose" },
  { question: "He speaks English ___ than his brother.", choices: ["more fluent", "most fluently", "more fluently", "fluent"], answer: "more fluently" },
  { question: "There are ___ people in the hall today than yesterday.", choices: ["less", "fewer", "little", "few"], answer: "fewer" },
  { question: "I prefer tea ___ coffee.", choices: ["than", "over", "to", "from"], answer: "to" },
  { question: "The students congratulated her ___ passing the examination.", choices: ["for", "on", "at", "with"], answer: "on" },
  { question: "We arrived ___ the airport before noon.", choices: ["in", "on", "at", "to"], answer: "at" },
  { question: "The furniture in the room ___ very expensive.", choices: ["are", "were", "is", "have"], answer: "is" },
  { question: "The police ___ investigating the matter.", choices: ["is", "was", "are", "has"], answer: "are" },
  { question: "One of my friends ___ in Kano.", choices: ["live", "lives", "are living", "have lived"], answer: "lives" },
  { question: "No sooner had the bell rung ___ the students rushed out.", choices: ["when", "than", "then", "while"], answer: "than" },
  { question: "Hardly had we sat down ___ the lights went out.", choices: ["than", "while", "when", "then"], answer: "when" },
  { question: "The meeting was put ___ until next week.", choices: ["on", "off", "out", "away"], answer: "off" },
  { question: "To 'look down on' someone means to ___.", choices: ["admire them", "despise them", "visit them", "depend on them"], answer: "despise them" },
  { question: "If a person 'spills the beans', the person ___.", choices: ["cooks a meal", "reveals a secret", "makes a mistake", "wastes money"], answer: "reveals a secret" },
  { question: "The expression 'once in a blue moon' means ___.", choices: ["very often", "at night", "rarely", "unexpectedly"], answer: "rarely" },
  { question: "Choose the word nearest in meaning to 'commence'.", choices: ["Finish", "Begin", "Delay", "Cancel"], answer: "Begin" },
  { question: "Choose the word nearest in meaning to 'cautious'.", choices: ["Careful", "Reckless", "Angry", "Confused"], answer: "Careful" },
  { question: "Choose the word opposite in meaning to 'expand'.", choices: ["Increase", "Enlarge", "Contract", "Extend"], answer: "Contract" },
  { question: "Choose the word opposite in meaning to 'ancient'.", choices: ["Old", "Historic", "Modern", "Early"], answer: "Modern" },
  { question: "Choose the word nearest in meaning to 'reluctant'.", choices: ["Unwilling", "Excited", "Certain", "Careless"], answer: "Unwilling" },
  { question: "Choose the word opposite in meaning to 'generous'.", choices: ["Kind", "Selfish", "Helpful", "Friendly"], answer: "Selfish" },
  { question: "Which word has the same vowel sound as 'seat'?", choices: ["Set", "Sit", "Beat", "Sat"], answer: "Beat" },
  { question: "Which word has the same vowel sound as 'food'?", choices: ["Blood", "Good", "Mood", "Flood"], answer: "Mood" },
  { question: "Which word begins with the same consonant sound as 'judge'?", choices: ["Gate", "Jam", "Yam", "Church"], answer: "Jam" },
  { question: "Which word has a different first sound from the others?", choices: ["City", "Circle", "Cinema", "Cat"], answer: "Cat" },
  { question: "Which word has the stress on the first syllable?", choices: ["About", "Begin", "Table", "Forget"], answer: "Table" },
  { question: "Choose the correct question tag: 'You have finished your work, ___?'", choices: ["haven't you", "didn't you", "don't you", "aren't you"], answer: "haven't you" },
  { question: "Choose the correct question tag: 'Let's go now, ___?'", choices: ["will we", "shall we", "do we", "aren't we"], answer: "shall we" },
  { question: "Choose the correct reported speech: He said, 'I am tired.'", choices: ["He said that I am tired.", "He said that he was tired.", "He says that he was tired.", "He said he is tired yesterday."], answer: "He said that he was tired." },
  { question: "Choose the correct passive form: 'The chef prepared the meal.'", choices: ["The meal prepares the chef.", "The meal was prepared by the chef.", "The meal is prepared by the chef.", "The chef was prepared by the meal."], answer: "The meal was prepared by the chef." },
  { question: "Choose the correct sentence.", choices: ["She don't like beans.", "She doesn't likes beans.", "She doesn't like beans.", "She not like beans."], answer: "She doesn't like beans." },
  { question: "Choose the correct sentence.", choices: ["Despite of the rain, we played.", "Despite the rain, we played.", "Although the rain, we played.", "In spite the rain, we played."], answer: "Despite the rain, we played." },
  { question: "Choose the correct word: The lost child was ___ reunited with her family.", choices: ["eventual", "eventually", "event", "eventuality"], answer: "eventually" },
  { question: "Choose the correct word: The medicine had no ___ on the patient.", choices: ["affect", "effect", "effort", "aspect"], answer: "effect" },
  { question: "Choose the correct word: Please ___ my apology.", choices: ["except", "accept", "expect", "aspect"], answer: "accept" },
  { question: "Choose the correct word: The principal gave useful ___ to the new students.", choices: ["advise", "advice", "advises", "advices"], answer: "advice" }
];

let number = 0;
let answers = [];

function showQuestion() {
  let item = questions[number];
  document.getElementById("question").textContent = item.question;
  document.getElementById("choices").innerHTML = "";

  for (let choice of item.choices) {
    document.getElementById("choices").innerHTML += `
      <label>
        <input type="radio" name="choice" value="${choice}"
          ${answers[number] === choice ? "checked" : ""}
          onchange="answers[number] = this.value">
        ${choice}
      </label><br>`;
  }
}

function next() {
  if (number < questions.length - 1) number++;
  showQuestion();
}

function previous() {
  if (number > 0) number--;
  showQuestion();
}

function submitQuiz() {
  let score = 0;

  for (let number = 0; number < questions.length; number++) {
    if (answers[number] === questions[number].answer) score++;
  }

  document.getElementById("score").textContent =
    "Your score is " + score + " out of " + questions.length;
}

showQuestion();





let seconds = 1800;
let timer;

function start3() {
  if (timer) return;

  timer = setInterval(function () {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("clock").textContent =
      hours + ":" +minutes+ ":" +secs

    if (seconds === 0) {
      clearInterval(timer);
      timer = null;
    } else {
      seconds--;
    }
  }, 1000);
}
function pauseTime() {
  clearInterval(timer);
  timer = null;
}





