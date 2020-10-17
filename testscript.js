//once DOM load, run jquery
$(document).ready(function(){

    var apiKey = '44edc45cf343e4f63c0b65f4586bf3a6'

    // var title = "space+jam";
    // var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

    $('.btn').on('click', function(e){
        e.preventDefault();


        var genreIdArr = [{
            
        }]
        var movieGenre = $('#movieGenreText').val().trim(); 

        console.log('movieGenre', movieGenre)
        var queryURL = "https://api.themoviedb.org/3/discover/movie?with_genres=" + genreIdArr + "&sort_by=popularity.desc&api_key=" +apiKey;
    
        $.ajax({
          url: queryURL,
          method: "GET"
        // }).then(function(response) {
        //   console.log('res', response);
        //   var temp = response.main.temp;
        //   var humidity = response.main.humidity;
        //   var windSpeed = response.wind.speed;

        //   var weatherForecaseEL = $("#weatherForecast")

        //   var tempEl = $('<p>');
        //   tempEl.text(`Temp: ` + temp);

        //   var humidityEl = $('<p>');
        //   humidityEl.text('Humidity ' + humidity);

        //   weatherForecaseEL.append(tempEl);
        //   weatherForecaseEL.append(humidityEl);




        // });

    })


})

