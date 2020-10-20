//Containers
var introContainerEl = document.querySelector("#intro");
var choicesContainerEl = document.querySelector("#choices");
var listContainerEl = document.querySelector("#list");
var trailerContainerEl = document.querySelector("#trailer");

//Buttons
var startBtnEl = document.querySelector("#start-btn1");
var emojiBtnEl = document.querySelector("#start-btn2");
var movieBtnEl = document.querySelector("#movie-btn");
var backBtnEl = document.querySelector("#back-btn");


//Events
startBtnEl.addEventListener("click", function (event) {
  introContainerEl.classList.add("hide");
  choicesContainerEl.classList.remove("hide");
});



movieBtnEl.addEventListener("click", function (event) {
  listContainerEl.classList.add("hide");
  trailerContainerEl.classList.remove("hide");
});

backBtnEl.addEventListener("click", function (event) {
  trailerContainerEl.classList.add("hide");
  choicesContainerEl.classList.remove("hide");
  $("ul").empty();
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

//TMDB API
$(".btn2").on("click", function (event) {
  console.log("I have been clicked");
  choicesContainerEl.classList.add("hide");
  listContainerEl.classList.remove("hide");
  var apiKey = '44edc45cf343e4f63c0b65f4586bf3a6';

  var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=10749&sort_by=popularity.desc&include_image_language=en,null&api_key=" + apiKey;



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < 10;) {
      var romResults = response.results[i].title.split();
      var movieLi = $("<li>");
      var posterTag = $("<img />", {src : "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path});
      var radioInput = document.createElement('input');
      radioInput.setAttribute('type', 'radio');
      radioInput.setAttribute('name', 'choice');
      $(movieLi).append(romResults);
      $(movieLi).prepend(radioInput);
      $("#movie-list").prepend(movieLi);
      $(movieLi).append(posterTag);
      i++
    }
    console.log(response);
  });

})

$(".btn3").on("click", function (event) {
  console.log("I have been clicked");
  choicesContainerEl.classList.add("hide");
  listContainerEl.classList.remove("hide");
  var apiKey = '44edc45cf343e4f63c0b65f4586bf3a6';

  var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=" + apiKey;



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    
    for (i = 0; i < 10;) {
      var horResults = response.results[i].title.split();
      var movieLi = $("<li>");
      var posterTag = $("<img />", {src : "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path});
      var radioInput = document.createElement('input');
      radioInput.setAttribute('type', 'radio');
      radioInput.setAttribute('name', 'choice');
      $(movieLi).append(horResults);
      $(movieLi).prepend(radioInput);
      $("#movie-list").prepend(movieLi);
      $(movieLi).append(posterTag);
      i++
    }
  });

})

$(".btn1").on("click", function (event) {
  console.log("I have been clicked");
  choicesContainerEl.classList.add("hide");
  listContainerEl.classList.remove("hide");
  var apiKey = '44edc45cf343e4f63c0b65f4586bf3a6';

  var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=" + apiKey;



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < 10;) {
      var comResults = response.results[i].title.split();
      var movieLi = $("<li>");
      var posterTag = $("<img />", {src : "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path});
      var radioInput = document.createElement('input');
      radioInput.setAttribute('type', 'radio');
      radioInput.setAttribute('name', 'choice');
      $(movieLi).append(comResults);
      $(movieLi).prepend(radioInput);
      $("#movie-list").prepend(movieLi);
      $(movieLi).append(posterTag);
      i++
    }
  });

})

$(".btn4").on("click", function (event) {
  console.log("I have been clicked");
  choicesContainerEl.classList.add("hide");
  listContainerEl.classList.remove("hide");
  var apiKey = '44edc45cf343e4f63c0b65f4586bf3a6';

  var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=" + apiKey;



  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    for (i = 0; i < 10;) {
      var MovieOverView = response.results[i].overview;
      var movieLi = $("<li>");
      var posterTag = $("<img />", {src : "https://image.tmdb.org/t/p/w200" + response.results[i].poster_path});
      $(posterTag).addClass("finalBtn")
      var MOV = $("<p>");
      $(MOV).addClass("hide");
      $("#movie-list").prepend(movieLi);
      $(movieLi).append(posterTag);
      $(MOV).append(MovieOverView);
      $(movieLi).append(MOV);
      i++
    }
    $(".finalBtn").on("click", function (event) {
      console.log("I have been clicked");
      MOV.removeClass("hide");
    });

  });


})