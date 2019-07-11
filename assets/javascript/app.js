$(document).ready(function() {
    // hide the account creation screen on start
    $('#createAcct').hide();
    $('#mainPageHead').hide();
    $('#weatherBox').hide();
    $('#trafficBox').hide();
    $('#hotelBox').hide();
    $('#saveBtn').hide();
    $('#logOutBtn').hide();

    //Account creation form
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

    //Cancel account creation and go back to the log in screen
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

    // Weather API variables
    var APIKey = "e3e26770ea91f1526f1d91e4b4212507";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=08260,us&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // $("#weatherBox").text(JSON.stringify(response));


        // We store all of the retrieved data inside of an object called "response"

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $("#city").html(response.name + " Weather Details");
        $("#wind").text("Wind Speed: " + response.wind.speed + " mph");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#temp").text("Current Temperature: " + response.main.temp + `\u00B0` + "F");
        $("#highTemp").text("Today's High: " + response.main.temp_max + `\u00B0` + "F");
        $("#lowTemp").text("Today's Low: " + response.main.temp_min + `\u00B0` + "F");
        var icon = response.weather[0].icon
        var url = `http://openweathermap.org/img/wn/${icon}@2x.png`
        $('#weatherImg').attr('src', url)
        $('#currentConditions').text(response.weather[0].description)

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
    });

    // Mock click event on Log In button to move forward with layout
    var password = null;
    var user = null;
    var firebaseConfig = {
        apiKey: "AIzaSyD_Y5vVG95B78qd_HuzzzAOZWp7cYvxDPk",
        authDomain: "my-first-firebase-51cb0.firebaseapp.com",
        databaseURL: "https://my-first-firebase-51cb0.firebaseio.com",
        projectId: "my-first-firebase-51cb0",
        storageBucket: "my-first-firebase-51cb0.appspot.com",
        messagingSenderId: "145849620073",
        appId: "1:145849620073:web:1c4134d7d2c25a85"
    };
    firebase.initializeApp(firebaseConfig);
    var dataRef = firebase.database();
    $("#createBtn").click(function(event) {
        event.preventDefault();
        password = $("#createPassword").val();
        user = $("#createUserName").val();
        console.log(password);
        console.log(user);
        firebase.auth().createUserWithEmailAndPassword(user, password).then(function(response) { console.log(response); }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });
    });
    $('#logInBtn').click(function() {
        var user = firebase.auth().currentUser;
        console.log(user.email);
        console.log(user);
        console.log("you clicked me");
        var Suser = $("#uName").val();
        var Spassword = $("#pWord").val();
        firebase.auth().signInWithEmailAndPassword(Suser, Spassword).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
        $('#signIn').hide();
        $('#headH1').hide();
        $('#createAcct').hide();
        $('#mainPageHead').show();
        $('#weatherBox').show();
        $('#trafficBox').show();
        $('#hotelBox').show();
        $('#saveBtn').show();
        $('#logOutBtn').show();
        $('body').css("background", "url('assets/images/mainPage.jpg') no-repeat center center fixed");
        $('body').css("-webkit-background-size", "cover");
        $('body').css("-moz-background-size", "cover");
        $('body').css("-o-background-size", "cover");
        $('body').css("background-size", "cover");
    });


});