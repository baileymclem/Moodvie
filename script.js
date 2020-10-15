//Containers
var introContainerEl = document.querySelector(".intro");
var choicesContainerEl = document.querySelector(".choices");
var listContainerEl = document.querySelector(".list");
var trailerContainerEl = document.querySelector(".trailer");

//Buttons
var startBtnEl = document.querySelector("#start-btn");
var emojiBtnEl = document.querySelector("#emoji-btn");
var movieBtnEl = document.querySelector("#movie-btn");
var backBtnEl = document.querySelector("#back-btn");

//Events
startBtnEl.addEventListener("click", function(event) {
    introContainerEl.classList.add("hide");
	choicesContainerEl.classList.remove("hide");
});

emojiBtnEl.addEventListener("click", function(event) {
    choicesContainerEl.classList.add("hide");
    listContainerEl.classList.remove("hide");
});

movieBtnEl.addEventListener("click", function(event) {
    listContainerEl.classList.add("hide");
    trailerContainerEl.classList.remove("hide");
});

backBtnEl.addEventListener("click", function(event) {
    trailerContainerEl.classList.add("hide");
    choicesContainerEl.classList.remove("hide");
});