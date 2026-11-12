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
  { question: "What is the chemical symbol for sodium?", choices: ["So", "S", "Na", "N"], answer: "Na" },
  { question: "What is the chemical formula for water?", choices: ["H₂O", "HO₂", "H₂O₂", "OH"], answer: "H₂O" },
  { question: "Which particle has a negative charge?", choices: ["Proton", "Neutron", "Electron", "Nucleus"], answer: "Electron" },
  { question: "What is the pH of a neutral solution at room temperature?", choices: ["0", "5", "7", "14"], answer: "7" },
  { question: "Which gas is released when an acid reacts with a carbonate?", choices: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"], answer: "Carbon dioxide" },
  { question: "What is the chemical symbol for iron?", choices: ["Ir", "Fe", "I", "In"], answer: "Fe" },
  { question: "Which substance turns red litmus paper blue?", choices: ["An acid", "An alkali", "A salt", "Distilled water"], answer: "An alkali" },
  { question: "What is the smallest unit of an element that retains its chemical properties?", choices: ["Molecule", "Atom", "Cell", "Compound"], answer: "Atom" },
  { question: "Which gas is necessary for combustion?", choices: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: "Oxygen" },
  { question: "What is the formula for sodium chloride?", choices: ["NaCl", "Na₂Cl", "NaCl₂", "SCl"], answer: "NaCl" },
  { question: "Which of these is a noble gas?", choices: ["Chlorine", "Neon", "Hydrogen", "Oxygen"], answer: "Neon" },
  { question: "What charge does a proton carry?", choices: ["Negative", "Positive", "Neutral", "Variable"], answer: "Positive" },
  { question: "Which method separates an insoluble solid from a liquid?", choices: ["Filtration", "Distillation", "Chromatography", "Evaporation"], answer: "Filtration" },
  { question: "What is the chemical formula for carbon dioxide?", choices: ["CO", "CO₂", "C₂O", "C₂O₂"], answer: "CO₂" },
  { question: "Which element has the symbol K?", choices: ["Krypton", "Calcium", "Potassium", "Copper"], answer: "Potassium" },
  { question: "What is formed when an acid reacts with a base?", choices: ["A salt and water", "A metal and oxygen", "Hydrogen and carbon", "A base and oxygen"], answer: "A salt and water" },
  { question: "Which state of matter has a fixed volume but no fixed shape?", choices: ["Solid", "Liquid", "Gas", "Plasma"], answer: "Liquid" },
  { question: "What is the chemical symbol for silver?", choices: ["Si", "Ag", "Au", "S"], answer: "Ag" },
  { question: "Which gas makes up most of Earth's atmosphere?", choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
  { question: "What is a substance made from two or more elements chemically joined?", choices: ["Mixture", "Compound", "Solution", "Alloy"], answer: "Compound" },
  { question: "Which subatomic particle is found in the nucleus and has no charge?", choices: ["Electron", "Proton", "Neutron", "Ion"], answer: "Neutron" },
  { question: "What is the formula for methane?", choices: ["CH₄", "C₂H₆", "CO₂", "CH₃"], answer: "CH₄" },
  { question: "What is the change from a liquid to a gas at the liquid's surface called?", choices: ["Condensation", "Freezing", "Evaporation", "Melting"], answer: "Evaporation" },
  { question: "Which particle determines the identity of an element?", choices: ["Number of neutrons", "Number of protons", "Number of shells", "Number of molecules"], answer: "Number of protons" },
  { question: "What is the chemical symbol for calcium?", choices: ["C", "Cl", "Ca", "Cu"], answer: "Ca" },
  { question: "Which type of bond forms when atoms share electrons?", choices: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"], answer: "Covalent bond" },
  { question: "What are the products of complete combustion of a hydrocarbon?", choices: ["Carbon monoxide and water", "Carbon dioxide and water", "Carbon and hydrogen", "Oxygen and water"], answer: "Carbon dioxide and water" },
  { question: "Which apparatus is commonly used to measure liquid volume?", choices: ["Beaker", "Measuring cylinder", "Test tube", "Evaporating dish"], answer: "Measuring cylinder" },
  { question: "What is the chemical formula for oxygen gas?", choices: ["O", "O₂", "O₃", "₂O"], answer: "O₂" },
  { question: "What happens to blue litmus paper in an acidic solution?", choices: ["It turns red", "It turns green", "It stays blue", "It turns white"], answer: "It turns red" },
  { question: "Which metal is liquid at room temperature?", choices: ["Iron", "Mercury", "Aluminium", "Copper"], answer: "Mercury" },
  { question: "What is a charged atom or group of atoms called?", choices: ["Isotope", "Ion", "Molecule", "Element"], answer: "Ion" },
  { question: "Which method can be used to obtain pure water from salt water?", choices: ["Filtration", "Simple distillation", "Magnetic separation", "Sieving"], answer: "Simple distillation" },
  { question: "What is the chemical symbol for copper?", choices: ["Co", "Cu", "C", "Cp"], answer: "Cu" },
  { question: "Which is a physical change?", choices: ["Burning wood", "Rusting iron", "Melting ice", "Cooking an egg"], answer: "Melting ice" },
  { question: "How many hydrogen atoms are in one molecule of H₂SO₄?", choices: ["1", "2", "4", "6"], answer: "2" },
  { question: "Which gas is needed for iron to rust?", choices: ["Helium", "Oxygen", "Neon", "Argon"], answer: "Oxygen" },
  { question: "What are the vertical columns in the periodic table called?", choices: ["Periods", "Groups", "Blocks", "Series"], answer: "Groups" },
  { question: "Which of these is an alkali?", choices: ["Hydrochloric acid", "Sodium hydroxide", "Carbon dioxide", "Sodium chloride"], answer: "Sodium hydroxide" },
  { question: "What is the chemical formula for ammonia?", choices: ["NH₃", "NO₂", "N₂H", "NH₄"], answer: "NH₃" },
  { question: "What is the usual charge on a chloride ion?", choices: ["1+", "2+", "1−", "2−"], answer: "1−" },
  { question: "Which substance conducts electricity when molten?", choices: ["Sugar", "An ionic compound", "Wax", "Cooking oil"], answer: "An ionic compound" },
  { question: "What is the change from a gas to a liquid called?", choices: ["Melting", "Freezing", "Condensation", "Sublimation"], answer: "Condensation" },
  { question: "Which element has the symbol C?", choices: ["Calcium", "Copper", "Carbon", "Chlorine"], answer: "Carbon" },
  { question: "What is the relative charge of an electron?", choices: ["+1", "0", "−1", "+2"], answer: "−1" },
  { question: "Which test identifies hydrogen gas?", choices: ["A glowing splint relights", "Limewater turns milky", "A lighted splint makes a squeaky pop", "Blue litmus turns red"], answer: "A lighted splint makes a squeaky pop" },
  { question: "What is a mixture in which a solute dissolves in a solvent called?", choices: ["Suspension", "Solution", "Emulsion", "Compound"], answer: "Solution" },
  { question: "Which element makes up diamond and graphite?", choices: ["Silicon", "Carbon", "Sulfur", "Phosphorus"], answer: "Carbon" },
  { question: "What is the formula for calcium carbonate?", choices: ["CaCO₃", "Ca₂CO₃", "CaC₂O₃", "CaCO₂"], answer: "CaCO₃" },
  { question: "What does a catalyst do in a chemical reaction?", choices: ["Slows the reaction permanently", "Speeds up the reaction without being used up", "Becomes the main product", "Stops particles colliding"], answer: "Speeds up the reaction without being used up" }
];

let number = 0;
let answers = [];

function showQuestion() {
  const item = questions[number];

  document.getElementById("question").textContent =
    `${number + 1}. ${item.question}`;

  const choicesElement = document.getElementById("choices");
  choicesElement.innerHTML = "";

  item.choices.forEach((choice) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");

    radio.type = "radio";
    radio.name = "choice";
    radio.value = choice;
    radio.checked = answers[number] === choice;
    radio.onchange = () => {
      answers[number] = choice;
    };

    label.append(radio, ` ${choice}`);
    choicesElement.append(label, document.createElement("br"));
  });
}

function next() {
  if (number < questions.length - 1) {
    number++;
    showQuestion();
  }
}

function previous() {
  if (number > 0) {
    number--;
    showQuestion();
  }
}

function submitQuiz() {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === questions[i].answer) {
      score++;
    }
  }

  document.getElementById("score").textContent =
    `Your score is ${score} out of ${questions.length}`;
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