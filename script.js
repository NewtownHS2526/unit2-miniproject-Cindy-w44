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


const textBox = document.querySelector("#sr-continent-alert");
const outputBox = document.querySelector("#text-output");

// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.