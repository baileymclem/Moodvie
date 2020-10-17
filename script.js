//Containers
var introContainerEl = document.querySelector(".intro");
var choicesContainerEl = document.querySelector(".choices");
var listContainerEl = document.querySelector(".list");
var trailerContainerEl = document.querySelector(".trailer");

//Buttons
var startBtnEl = document.querySelector("#start-btn1");
var emojiBtnEl = document.querySelector("#start-btn2");
var movieBtnEl = document.querySelector("#movie-btn");
var backBtnEl = document.querySelector("#back-btn");


//Events
startBtnEl.addEventListener("click", function (event) {
  introContainerEl.classList.add("hide");
  choicesContaine0rEl.classList.remove("hide");
});



movieBtnEl.addEventListener("click", function (event) {
  listContainerEl.classList.add("hide");
  trailerContainerEl.classList.remove("hide");
});

backBtnEl.addEventListener("click", function (event) {
  trailerContainerEl.classList.add("hide");
  choicesContainerEl.classList.remove("hide");
});

var Image1 = $("<img>");
var Image2 = $("<img>");
var Image3 = $("<img>");
var Image4 = $("<img>");

$("#start-btn1").on("click", function () {

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
    .then(function (response) {
      //get the image url from the response
      console.log(response);
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //var Image1 = $("<img>");
      //applying the data from the server to make the image in html
      Image1.attr("src", imageUrl);
      Image1.attr("alt", "moviegif1");
      Image1.attr("id", "btn");
      //prepends new img to the HTML
      $("#image1").prepend(Image1);
    });
  $.ajax({
    url: queryURL2,
    method: "GET" //http method 
  })
    //handling the response, as a javascript object (this is where the "call back" happen)
    .then(function (response) {
      //get the image url from the response
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //applying the data from the server to make the image in html
      Image2.attr("src", imageUrl);
      Image2.attr("alt", "moviegif2");
      Image2.attr("id", "btn");
      //prepends new img to the HTML
      $("#image2").prepend(Image2);
    });
  $.ajax({
    url: queryURL3,
    method: "GET" //http method 
  })
    .then(function (response) {
      //get the image url from the response
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //applying the data from the server to make the image in html
      Image3.attr("src", imageUrl);
      Image3.attr("alt", "moviegif3");
      Image3.attr("id", "btn");
      //prepends new img to the HTML
      $("#image3").prepend(Image3);
    });
  $.ajax({
    url: queryURL4,
    method: "GET" //http method 
  })
    .then(function (response) {
      //get the image url from the response
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //applying the data from the server to make the image in html
      Image4.attr("src", imageUrl);
      Image4.attr("alt", "moviegif4");
      Image4.attr("id", "btn");
      //prepends new img to the HTML
      $("#image4").prepend(Image4);
    });

});

$("#start-btn2").on("click", function () {
  var queryURL1 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=laughing";
  var queryURL2 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=crying";
  var queryURL3 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=scary";
  var queryURL4 = "https://api.giphy.com/v1/gifs/random?api_key=EueWF2584Ii51v40fdtdqwa5tJhtBv7c&tag=superhero";
  $.ajax({
    url: queryURL1,
    method: "GET" //http method 
  })
    //handling the response, as a javascript object (this is where the "call back" happen)
    .then(function (response) {
      //get the image url from the response
      console.log(response);
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //var Image1 = $("<img>");
      //applying the data from the server to make the image in html
      Image1.attr("src", imageUrl);
      Image1.attr("alt", "moviegif1");
      Image1.attr("id", "btn");
      //prepends new img to the HTML
      $("#image1").prepend(Image1);
    });

  $.ajax({
    url: queryURL2,
    method: "GET" //http method 
  })
    //handling the response, as a javascript object (this is where the "call back" happen)
    .then(function (response) {
      //get the image url from the response
      console.log(response);
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //var Image1 = $("<img>");
      //applying the data from the server to make the image in html
      Image2.attr("src", imageUrl);
      Image2.attr("alt", "moviegif2");
      Image2.attr("id", "btn");
      //prepends new img to the HTML
      $("#image2").prepend(Image2);
    });

  $.ajax({
    url: queryURL3,
    method: "GET" //http method 
  })
    //handling the response, as a javascript object (this is where the "call back" happen)
    .then(function (response) {
      //get the image url from the response
      console.log(response);
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //var Image1 = $("<img>");
      //applying the data from the server to make the image in html
      Image3.attr("src", imageUrl);
      Image3.attr("alt", "moviegif3");
      Image3.attr("id", "btn");
      //prepends new img to the HTML
      $("#image3").prepend(Image3);
    });

  $.ajax({
    url: queryURL4,
    method: "GET" //http method 
  })
    //handling the response, as a javascript object (this is where the "call back" happen)
    .then(function (response) {
      //get the image url from the response
      console.log(response);
      var imageUrl = response.data.fixed_width_small_url;
      //creating a new image element
      //var Image4 = $("<img>");
      //applying the data from the server to make the image in html
      Image4.attr("src", imageUrl);
      Image4.attr("alt", "moviegif4");
      Image4.attr("id", "btn");
      //prepends new img to the HTML
      $("#image4").prepend(Image4);
    });
})

$("#btn").on("click", function () {
  console.log("I have been clicked");
})
