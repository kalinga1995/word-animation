const containerEl = document.querySelector(".container");

const carrers = ["social media designer", "freelancer", "webdeveloper", "trader"];

let carrerIndex = 0;
let characterIndex = 0;  // Initialize characterIndex

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h2>I am ${carrers[carrerIndex].charAt(0) === "I" ? "an" : "a"} ${carrers[carrerIndex].slice(0, characterIndex)}</h2>`;

    if (characterIndex === carrers[carrerIndex].length) {
        carrerIndex++;
        characterIndex = 0;
    }
    if (carrerIndex === carrers.length) {
        carrerIndex = 0;
    }
    setTimeout(updateText, 400);
}


