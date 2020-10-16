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

$("#start-btn").on("click", function() {
    //api endpoint url with api key
    var queryURL1 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=laughing";
    var queryURL2 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=crying";
    var queryURL3 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=scary";
    var queryURL4 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=superhero";
    //make a request to a remote server by using jqury .ajax
    $.ajax({
      url: queryURL1,
      method: "GET" //http method 
    })
    //handling the response, as a javascript object (this is where the "call back" happen)
      .then(function(response) {
      //get the image url from the response
        var imageUrl = response.data.fixed_width_downsampled_url;
        //creating a new image element
        var Image1 = $("<img>");
        //applying the data from the server to make the image in html
        Image1.attr("src", imageUrl);
        Image1.attr("alt", "moviegif1");
        Image1.attr("class", "btn");
        //prepends new img to the HTML
        $("#images").prepend(Image1);
      });
      $.ajax({
        url: queryURL2,
        method: "GET" //http method 
      })
      //handling the response, as a javascript object (this is where the "call back" happen)
        .then(function(response) {
        //get the image url from the response
          var imageUrl = response.data.fixed_width_downsampled_url;
          //creating a new image element
          var Image2 = $("<img>");
          //applying the data from the server to make the image in html
          Image2.attr("src", imageUrl);
          Image2.attr("alt", "moviegif2");
          Image2.attr("class", "btn");
          //prepends new img to the HTML
          $("#images").prepend(Image2);
        });
      $.ajax({
        url: queryURL3,
        method: "GET" //http method 
      })
      .then(function(response) {
        //get the image url from the response
          var imageUrl = response.data.fixed_width_downsampled_url;
          //creating a new image element
          var Image3 = $("<img>");
          //applying the data from the server to make the image in html
          Image3.attr("src", imageUrl);
          Image3.attr("alt", "moviegif3");
          Image3.attr("class", "btn");
          //prepends new img to the HTML
          $("#images").prepend(Image3);
        });
      $.ajax({
        url: queryURL4,
        method: "GET" //http method 
      })
      .then(function(response) {
        //get the image url from the response
          var imageUrl = response.data.fixed_width_downsampled_url;
          //creating a new image element
          var Image4 = $("<img>");
          //applying the data from the server to make the image in html
          Image4.attr("src", imageUrl);
          Image4.attr("alt", "moviegif4");
          Image4.attr("class", "btn");
          //prepends new img to the HTML
          $("#images").prepend(Image4);
        });
    });