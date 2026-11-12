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

const questions = [
  { question: "What is the SI unit of force?", choices: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
  { question: "What instrument is used to measure temperature?", choices: ["Ammeter", "Thermometer", "Barometer", "Voltmeter"], answer: "Thermometer" },
  { question: "What is the SI unit of electric current?", choices: ["Volt", "Ohm", "Ampere", "Coulomb"], answer: "Ampere" },
  { question: "Which equation relates speed, distance, and time?", choices: ["Speed = distance × time", "Speed = distance ÷ time", "Speed = time ÷ distance", "Speed = distance + time"], answer: "Speed = distance ÷ time" },
  { question: "What force pulls objects towards the Earth?", choices: ["Friction", "Magnetism", "Gravity", "Tension"], answer: "Gravity" },
  { question: "What is the SI unit of energy?", choices: ["Newton", "Joule", "Watt", "Metre"], answer: "Joule" },
  { question: "Which instrument measures electric current?", choices: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"], answer: "Ammeter" },
  { question: "What is the speed of light in a vacuum approximately?", choices: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "300 m/s", "3 × 10¹⁰ m/s"], answer: "3 × 10⁸ m/s" },
  { question: "What type of energy does a moving object possess?", choices: ["Chemical energy", "Kinetic energy", "Nuclear energy", "Elastic potential energy"], answer: "Kinetic energy" },
  { question: "What is the SI unit of power?", choices: ["Joule", "Watt", "Newton", "Ampere"], answer: "Watt" },
  { question: "Which material is a good electrical conductor?", choices: ["Rubber", "Glass", "Copper", "Plastic"], answer: "Copper" },
  { question: "What is the SI unit of pressure?", choices: ["Pascal", "Joule", "Newton", "Watt"], answer: "Pascal" },
  { question: "What happens to the particles of a solid when it is heated?", choices: ["They stop moving", "They vibrate faster", "They disappear", "They become heavier"], answer: "They vibrate faster" },
  { question: "Which device converts electrical energy into light energy?", choices: ["Electric lamp", "Microphone", "Motor", "Generator"], answer: "Electric lamp" },
  { question: "What is the force that opposes motion between surfaces in contact?", choices: ["Gravity", "Friction", "Upthrust", "Magnetism"], answer: "Friction" },
  { question: "What is the SI unit of mass?", choices: ["Gram", "Kilogram", "Newton", "Pound"], answer: "Kilogram" },
  { question: "Which type of mirror is used as a car's side mirror?", choices: ["Plane mirror", "Concave mirror", "Convex mirror", "Cylindrical mirror"], answer: "Convex mirror" },
  { question: "What is the approximate acceleration due to gravity near Earth's surface?", choices: ["3.0 m/s²", "9.8 m/s²", "15 m/s²", "98 m/s²"], answer: "9.8 m/s²" },
  { question: "Which wave requires a medium to travel?", choices: ["Light wave", "Radio wave", "Sound wave", "X-ray"], answer: "Sound wave" },
  { question: "What is the unit of frequency?", choices: ["Hertz", "Metre", "Second", "Decibel"], answer: "Hertz" },
  { question: "Which instrument measures potential difference?", choices: ["Ammeter", "Voltmeter", "Barometer", "Hydrometer"], answer: "Voltmeter" },
  { question: "What is the relationship between current, voltage, and resistance in Ohm's law?", choices: ["V = I × R", "V = I ÷ R", "I = V × R", "R = I × V"], answer: "V = I × R" },
  { question: "What kind of energy is stored in a stretched spring?", choices: ["Kinetic energy", "Elastic potential energy", "Sound energy", "Light energy"], answer: "Elastic potential energy" },
  { question: "Which colour of visible light has the longest wavelength?", choices: ["Violet", "Blue", "Green", "Red"], answer: "Red" },
  { question: "What happens to light when it bounces off a mirror?", choices: ["Refraction", "Reflection", "Diffraction", "Absorption"], answer: "Reflection" },
  { question: "What is the SI unit of time?", choices: ["Minute", "Hour", "Second", "Day"], answer: "Second" },
  { question: "Which simple machine is a ramp?", choices: ["Pulley", "Lever", "Inclined plane", "Wheel and axle"], answer: "Inclined plane" },
  { question: "What is the energy stored in food?", choices: ["Chemical energy", "Sound energy", "Nuclear energy", "Electrical energy"], answer: "Chemical energy" },
  { question: "What happens to the pressure of a gas when its volume decreases at constant temperature?", choices: ["It decreases", "It increases", "It stays the same", "It becomes zero"], answer: "It increases" },
  { question: "Which lens is thicker in the middle and can converge light rays?", choices: ["Concave lens", "Convex lens", "Plane glass", "Prism"], answer: "Convex lens" },
  { question: "What is the unit of electrical resistance?", choices: ["Ampere", "Volt", "Ohm", "Watt"], answer: "Ohm" },
  { question: "Which energy transfer occurs when heat travels through a metal rod?", choices: ["Conduction", "Convection", "Radiation", "Reflection"], answer: "Conduction" },
  { question: "What is the momentum of an object equal to?", choices: ["Mass × velocity", "Mass ÷ velocity", "Force × distance", "Mass × acceleration"], answer: "Mass × velocity" },
  { question: "Which pole of a magnet attracts the north pole of another magnet?", choices: ["North pole", "South pole", "Either pole always", "Neither pole"], answer: "South pole" },
  { question: "What is the approximate density of pure water?", choices: ["1 kg/m³", "100 kg/m³", "1,000 kg/m³", "10,000 kg/m³"], answer: "1,000 kg/m³" },
  { question: "What is the main function of a fuse in an electrical circuit?", choices: ["To increase voltage", "To protect the circuit from excessive current", "To store charge", "To measure resistance"], answer: "To protect the circuit from excessive current" },
  { question: "What is the change in direction of light as it passes from one material into another called?", choices: ["Reflection", "Refraction", "Conduction", "Dispersion"], answer: "Refraction" },
  { question: "Which state of matter has particles that move freely and fill their container?", choices: ["Solid", "Liquid", "Gas", "Crystal"], answer: "Gas" },
  { question: "What is the turning effect of a force called?", choices: ["Pressure", "Moment", "Momentum", "Impulse"], answer: "Moment" },
  { question: "Which type of circuit has only one path for current to flow?", choices: ["Parallel circuit", "Series circuit", "Open circuit", "Short circuit"], answer: "Series circuit" },
  { question: "What is the unit of wavelength?", choices: ["Hertz", "Metre", "Second", "Watt"], answer: "Metre" },
  { question: "Which instrument measures atmospheric pressure?", choices: ["Barometer", "Ammeter", "Voltmeter", "Thermometer"], answer: "Barometer" },
  { question: "What happens to the pitch of a sound when its frequency increases?", choices: ["The pitch becomes higher", "The pitch becomes lower", "The sound stops", "The sound travels more slowly"], answer: "The pitch becomes higher" },
  { question: "Which process transfers heat from the Sun to Earth?", choices: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: "Radiation" },
  { question: "What is the weight of an object caused by?", choices: ["Its volume", "The gravitational force acting on its mass", "Its temperature", "The air around it"], answer: "The gravitational force acting on its mass" },
  { question: "Which energy transformation takes place in an electric motor?", choices: ["Electrical to mechanical", "Mechanical to chemical", "Light to electrical", "Sound to heat"], answer: "Electrical to mechanical" },
  { question: "What does a transformer change in an alternating current circuit?", choices: ["Its frequency only", "Its voltage", "Its resistance to zero", "Its direction of motion"], answer: "Its voltage" },
  { question: "Which particle carries electric charge through a metal wire?", choices: ["Proton", "Neutron", "Electron", "Atom nucleus"], answer: "Electron" },
  { question: "What is the upward force exerted by a fluid on an immersed object called?", choices: ["Friction", "Upthrust", "Tension", "Weight"], answer: "Upthrust" },
  { question: "If an object travels 100 metres in 20 seconds, what is its average speed?", choices: ["2 m/s", "5 m/s", "20 m/s", "80 m/s"], answer: "5 m/s" }
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