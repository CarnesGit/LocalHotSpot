$(document).ready(function() { 
    $('#createAcct').hide();
    $('#mainPageHead').hide();
    $('#weatherBox').hide();
    $('#trafficBox').hide();
    $('#hotelBox').hide();

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

        // We store all of the retrieved data inside of an object called "response"

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

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
    $('#logInBtn').click(function() {
        $('#signIn').hide();
        $('#headH1').hide();
        $('#createAcct').hide();
        $('#mainPageHead').show();
        $('#weatherBox').show();
        $('#trafficBox').show();
        $('#hotelBox').show();
        $('body').css("background", "url('assets/images/mainPage.jpg') no-repeat center center fixed");
        $('body').css("-webkit-background-size", "cover");
        $('body').css("-moz-background-size", "cover");
        $('body').css("-o-background-size", "cover");
        $('body').css("background-size", "cover");
    });
var config = {
  apiKey: "AIzaSyCanlYIc7n-Wel8wDeaMxMzYtViVVCOwpI",
  authDomain: "my-first-firebase-51cb0.firebaseapp.com",
  databaseURL: "https://my-first-firebase-51cb0.firebaseio.com",
  storageBucket: "recent-user-with-push.appspot.com",
  messagingSenderId: "208476116054"
};
var password = null;
var user =  null;
firebase.initializeApp(config);
  console.log(config);
  var dataRef = firebase.database();
    $("#createBtn").click(function(event) {
        event.preventDefault();
         password = $("#createPassword").val();
         user =  $("#createUserName").val();
        console.log(password);
        console.log(user);
firebase.auth().createUserWithEmailAndPassword(user, password).then(function(response){console.log(response);}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  // ...
});
});
});



