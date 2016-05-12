/**
 * Obsługa logowania
 */
$(document).ready(function() {
    $("#login").click(function() {
        //TODO z poziomu nodejs + mongoDB
        
        // Z poziomu cookies
        var cookieUser = document.cookie.match(/USER=(.+)#/),
            cookieUserValue = cookieUser[0].substring(5, cookieUser[0].length),
            cookieUserValueArr = cookieUserValue.split("*");
         
        if (($("#inputEmail").val() === cookieUserValueArr[2]) &&
            ($("#inputPassword").val() === cookieUserValueArr[3])) {
            
            parent.location = "/home.html";
        } else {
            alert("Niepoprawny email lub hasło");
        }
    });
});

/**
 * Obsługa powrotu
 */
$(document).ready(function() {
    $("#gohome").click(function() {
        parent.location = '/';
    });
});

/**
 * Obsługa przejścia do rejestracji
 */
$(document).ready(function() {
    $("#register").click(function() {
        parent.location = '/register.html';
    });
});

/**
 * Obsługa rejestracji
 */
$(document).ready(function() {
    $("#register_me").click(function() {
        //TODO z poziomu nodejs + mongoDB

        //z poizomu cookies
        var expires = new Date(),
            userData = "";

        expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));

        userData = $("#inputName").val() + "*" + $("#inputSurname").val() + "*" +
            $("#inputEmail").val() + "*" + $("#inputPassword").val() + "*#";

        document.cookie = "USER" + '=' + userData + ';expires=' + expires.toUTCString();

        parent.location = '/';
    });
});