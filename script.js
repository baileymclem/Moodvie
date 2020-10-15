var introContainerEl = document.querySelector(".intro");
var choicesContainerEl = document.querySelector(".choices");
var startBtnEl = document.querySelector("#start-btn");

startBtnEl.addEventListener("click", function(event) {
    introContainerEl.style.display= "none";
	choicesContainerEl.classList.remove("hide");
})


// function displayEmojis() {};

// function emojiChoice(){
//     containerEl.textContent = displayEmojis()
// };