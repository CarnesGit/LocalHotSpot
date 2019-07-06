$(document).ready(function() {
    $('#createAcct').hide();

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=CapeMay,NJ&units=imperial&appid=" + APIKey;fc3eedbc130c2c600959bc0285839654de13a77a

    $('#newAcctBtn').click(function() {
        $('#signIn').hide();
        $('#headH1').hide();
        $('#createAcct').show();
        $('body').css("background", "url('assets/images/createAcct.jpg') no-repeat center center fixed");
        $('body').css("-webkit-background-size", "cover");
        $('body').css("-moz-background-size", "cover");
        $('body').css("-o-background-size", "cover");
        $('body').css("background-size", "cover");
    });
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=CapeMay,NJ&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (F) " + response.main.temp);

            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);
        });
});
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
    });


    $('#createCancelBtn').click(function() {
        $('#signIn').show();
        $('#headH1').show();
        $('#createAcct').hide();
        $('body').css("background", "url('assets/images/background.jpg') no-repeat center center fixed");
        $('body').css("-webkit-background-size", "cover");
        $('body').css("-moz-background-size", "cover");
        $('body').css("-o-background-size", "cover");
        $('body').css("background-size", "cover");
    });

});

});

