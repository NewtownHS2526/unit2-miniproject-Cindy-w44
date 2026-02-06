// YOUR CODE HERE
const form = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

form.addEventListener('change', () => {
    const checkedRadio = document.querySelector('input[name="fav_color"]:checked');
    if (checkedRadio) {
        radioOutput.innerHTML = `Your fav color is ${checkedRadio.value}!`
    }
});

const targetNum = getRandomInt();
const part2 = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

part2.addEventListener('input', (e) => {
    const numberChosen = Number(e.target.value);
    if (numberChosen === targetNum) {
        numOutput.innerHTML = `You guessed correctly!`;
    } else {
        numOutput.innerHTML = `You guessed wrong...`;
    }
});

const textBox = document.querySelector("#text-input");
const outputBox = document.querySelector("#text-output");
const statusBox = document.querySelector("#sr-continent-alert");
let score = 0;

const nA = document.querySelector("#north-america");
const eU = document.querySelector("#europe");
const aS = document.querySelector("#asia");
const sA = document.querySelector("#south-america");
const aF = document.querySelector("#africa");
const aU = document.querySelector("#australia");
const aN = document.querySelector("#antarctica");

const checkAnswer = () => {

    const currentAnswer = textBox.value.trim();
    console.log("Checking", currentAnswer);

    if (currentAnswer === "North America") {
        nA.style.display = "block";
        score += 1;
    } else if (currentAnswer === "Europe") {
        eU.style.display = "block";
        score += 1;
    } else if (currentAnswer === "Asia") {
        aS.style.display = "block";
        score += 1;
    } else if (currentAnswer === "South America") {
        sA.style.display = "block";
        score += 1;
    } else if (currentAnswer === "Africa") {
        aF.style.display = "block";
        score += 1;
    } else if (currentAnswer === "Australia") {
        aU.style.display = "block";
        score += 1;
    } else if (currentAnswer === "Antarctica") {
        aN.style.display = "block";
        score += 1;
    } else {
        alert("Try again...");
    }
    checkScore();
    textBox.value = "";
};

const checkScore = () => {
    if (score === 7) {
        statusBox.innerHTML = "You found all 7 continents!!!";
        textBox.disabled = true;
    } else if (score <= 4) {
        statusBox.innerHTML = "Way to go!";
    } else if (score === 6) {
        statusBox.innerHTML = "One more to go!!!";
    }
};
textBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

const backgroundColor = document.querySelector("#color");
const submitButton = document.querySelector("#submit");
const body = document.querySelector("body");
const checkBox = document.querySelector("#human");

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!checkBox.checked) {
        alert("Please confirm humanity first!");
        return;
    }

    if (is_dark(backgroundColor.value)) {
    alert("Choose another color! This one is too dark!");
    } else {
    body.style.backgroundColor = backgroundColor.value;
    };
});

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.