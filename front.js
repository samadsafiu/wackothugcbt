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
  { question: "Evaluate 3/4 + 2/3.", choices: ["5/12", "17/12", "13/12", "7/12"], answer: "17/12" },
  { question: "Simplify 2³ × 2⁵ ÷ 2⁴.", choices: ["8", "16", "32", "64"], answer: "16" },
  { question: "Solve 5x − 7 = 18.", choices: ["3", "4", "5", "6"], answer: "5" },
  { question: "Find 15% of ₦24,000.", choices: ["₦2,600", "₦3,000", "₦3,600", "₦4,000"], answer: "₦3,600" },
  { question: "Find the mean of 4, 7, 9 and 12.", choices: ["7", "8", "9", "10"], answer: "8" },
  { question: "Solve x² − 7x + 12 = 0.", choices: ["x = 2 or 6", "x = 3 or 4", "x = −3 or −4", "x = 1 or 12"], answer: "x = 3 or 4" },
  { question: "If 2x + 3y = 13 and x − y = 2, find x.", choices: ["3", "4", "5", "6"], answer: "19/5" },
  { question: "A sum of ₦50,000 is invested at 8% simple interest per year. Find the interest after 3 years.", choices: ["₦8,000", "₦10,000", "₦12,000", "₦14,000"], answer: "₦12,000" },
  { question: "Find the 15th term of the sequence 7, 11, 15, 19, ...", choices: ["59", "61", "63", "67"], answer: "63" },
  { question: "Find the sum of the first 12 terms of 3, 7, 11, 15, ...", choices: ["276", "288", "300", "312"], answer: "300" },
  { question: "Solve 3ˣ⁺¹ = 81.", choices: ["2", "3", "4", "5"], answer: "3" },
  { question: "If log₁₀(x) + log₁₀(2) = 1, find x.", choices: ["2", "5", "10", "20"], answer: "5" },
  { question: "Solve log₂(x − 1) = 3.", choices: ["7", "8", "9", "10"], answer: "9" },
  { question: "Simplify (√5 + √2)(√5 − √2).", choices: ["3", "7", "√3", "3√10"], answer: "3" },
  { question: "Rationalise 3/(2 + √5).", choices: ["3√5 − 6", "6 − 3√5", "3√5 + 6", "1 − √5"], answer: "3√5 − 6" },
  { question: "The roots of x² − 6x + k = 0 are equal. Find k.", choices: ["6", "8", "9", "12"], answer: "9" },
  { question: "If the roots of x² − 5x + 6 = 0 are α and β, find α² + β².", choices: ["11", "13", "17", "25"], answer: "13" },
  { question: "Solve 2x² − 5x − 3 = 0.", choices: ["x = 3 or −1/2", "x = −3 or 1/2", "x = 1 or −3", "x = 2 or −3/2"], answer: "x = 3 or −1/2" },
  { question: "If f(x) = 2x² − 3x + 1, find f(−2).", choices: ["7", "11", "15", "19"], answer: "15" },
  { question: "If f(x) = 3x + 2 and g(x) = x², find f(g(2)).", choices: ["10", "12", "14", "16"], answer: "14" },
  { question: "A quantity varies directly as x and inversely as y. If it is 12 when x = 8 and y = 2, find it when x = 10 and y = 5.", choices: ["3", "6", "9", "15"], answer: "6" },
  { question: "A map has scale 1:50,000. What actual distance does 6 cm represent?", choices: ["1.2 km", "2 km", "3 km", "30 km"], answer: "3 km" },
  { question: "A trader buys an item for ₦8,000 and sells it for ₦9,200. Find the percentage profit.", choices: ["12%", "15%", "18%", "20%"], answer: "15%" },
  { question: "A car travels 180 km at 60 km/h and returns at 90 km/h. Find its average speed for the whole journey.", choices: ["70 km/h", "72 km/h", "75 km/h", "80 km/h"], answer: "72 km/h" },
  { question: "Find the sum of the interior angles of a 9-sided polygon.", choices: ["1,080°", "1,260°", "1,440°", "1,620°"], answer: "1,260°" },
  { question: "Each exterior angle of a regular polygon is 30°. How many sides does it have?", choices: ["10", "12", "15", "18"], answer: "12" },
  { question: "A triangle has sides 13 cm, 14 cm and 15 cm. Find its area.", choices: ["72 cm²", "84 cm²", "90 cm²", "96 cm²"], answer: "84 cm²" },
  { question: "A sector has radius 21 cm and angle 120°. Find its arc length. Use π = 22/7.", choices: ["22 cm", "44 cm", "66 cm", "88 cm"], answer: "44 cm" },
  { question: "Find the volume of a cylinder of radius 7 cm and height 10 cm. Use π = 22/7.", choices: ["1,100 cm³", "1,320 cm³", "1,540 cm³", "1,760 cm³"], answer: "1,540 cm³" },
  { question: "A cone has radius 3 cm and height 4 cm. Find its volume in terms of π.", choices: ["9π cm³", "12π cm³", "18π cm³", "36π cm³"], answer: "12π cm³" },
  { question: "If sin θ = 5/13 and θ is acute, find tan θ.", choices: ["5/12", "12/5", "5/13", "12/13"], answer: "5/12" },
  { question: "If tan θ = 3/4 and θ is acute, find sin 2θ.", choices: ["7/25", "12/25", "24/25", "1"], answer: "24/25" },
  { question: "Solve 2 sin θ = 1 for 0° ≤ θ ≤ 360°.", choices: ["30°, 150°", "30°, 210°", "150°, 330°", "210°, 330°"], answer: "30°, 150°" },
  { question: "Find the gradient of the line joining (−2, 3) and (4, 15).", choices: ["1", "2", "3", "4"], answer: "2" },
  { question: "Find the equation of a line with gradient 3 passing through (2, 5).", choices: ["y = 3x − 1", "y = 3x + 1", "y = 2x + 1", "y = 5x − 3"], answer: "y = 3x − 1" },
  { question: "Find the distance between (−1, 2) and (5, 10).", choices: ["8", "10", "12", "14"], answer: "10" },
  { question: "Find the midpoint of the line joining (−3, 4) and (7, −2).", choices: ["(2, 1)", "(2, −1)", "(−2, 1)", "(5, 2)"], answer: "(2, 1)" },
  { question: "Find the determinant of the matrix [[4, 3], [2, 5]].", choices: ["8", "14", "20", "26"], answer: "14" },
  { question: "A fair die is rolled twice. What is the probability that the total is 8?", choices: ["1/6", "5/36", "1/4", "7/36"], answer: "5/36" },
  { question: "A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find the probability both are red.", choices: ["5/14", "5/28", "3/14", "1/2"], answer: "5/14" },
  { question: "In a class of 50 students, 28 study Biology, 24 study Chemistry, and 10 study both. How many study neither?", choices: ["6", "8", "10", "12"], answer: "8" },
  { question: "The mean of 5 numbers is 12. Four of them are 8, 10, 14 and 15. Find the fifth number.", choices: ["11", "13", "15", "17"], answer: "13" },
  { question: "Find the median of 4, 9, 2, 11, 7 and 5.", choices: ["5", "6", "7", "8"], answer: "6" },
  { question: "Solve the inequality 3(2x − 1) ≤ 4x + 7.", choices: ["x ≤ 5", "x ≥ 5", "x ≤ 2", "x ≥ 2"], answer: "x ≤ 5" },
  { question: "Solve |2x − 5| = 7.", choices: ["x = 6 or −1", "x = 1 or −6", "x = 6 or 1", "x = −6 or −1"], answer: "x = 6 or −1" },
  { question: "If x + y = 7 and x² + y² = 25, find xy.", choices: ["10", "12", "14", "24"], answer: "12" },
  { question: "The 3rd term of a geometric progression is 12 and the 6th term is 96. Find its common ratio.", choices: ["2", "3", "4", "8"], answer: "2" },
  { question: "Find the sum to infinity of the geometric progression 12, 6, 3, ...", choices: ["18", "20", "24", "30"], answer: "24" },
  { question: "Differentiate y = 3x² − 4x + 7 with respect to x.", choices: ["6x − 4", "3x − 4", "6x + 7", "3x² − 4"], answer: "6x − 4" },
  { question: "Find the gradient of y = x² + 2x at x = 3.", choices: ["6", "7", "8", "9"], answer: "8" },
  { question: "Evaluate ∫(2x + 3) dx.", choices: ["x² + 3x + C", "2x² + 3 + C", "x² + 3 + C", "2x + 3x² + C"], answer: "x² + 3x + C" }
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
  let score = 0;

function submitQuiz() {
  // let score = 0;

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
      hours + ":" + minutes + ":" + secs;

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