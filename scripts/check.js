/**
 * Obsługa logowania
 */
$(document).ready(function() {
    $("#login").click(function() {
        var cookieUser = document.cookie.match(/USER=(.+)#/),
            cookieUserValue = cookieUser[0].substring(5, cookieUser[0].length),
            cookieUserValueArr = cookieUserValue.split("*"), userDetails = {};

            userDetails.imie = cookieUserValueArr[0];
            userDetails.nazwisko = cookieUserValueArr[1];
            userDetails.imie = cookieUserValueArr[2];

            localStorage.setItem('userDetails', JSON.stringify(userDetails));

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

        //z poziomu cookies
        var expires = new Date(),
            userData = "";

        expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));

        userData = $("#inputName").val() + "*" + $("#inputSurname").val() + "*" +
            $("#inputEmail").val() + "*" + $("#inputPassword").val() + "*#";

        document.cookie = "USER" + '=' + userData + ';expires=' + expires.toUTCString();
        parent.location = '/';
    });
});
/**
 * Autouzupełnie koszyka na podstawie localStorage
 */
var _completionCart = function() {
    var i, localStorageCartItem = [],
        sumPrice = 0;

    if (localStorage.getItem("localStorageCart") && localStorage.getItem("localStorageCart").length > 0) {
        localStorageCartItem = JSON.parse(localStorage.getItem("localStorageCart"));

        if (($('#cart_menu')[0].children && localStorageCartItem)) {

            $('#cart_menu').empty();
            for (i = 0; i < localStorageCartItem.length; i++) {

                sumPrice += parseFloat(parseFloat(Math.round(localStorageCartItem[i].price * 100) / 100).toFixed(2));

                $('#cart_menu').append(
                    "<li>" +
                    "<span class='item' style='width:200px;padding-top:10px;padding-bottom:10px;padding-left:15px;padding-right:20px'>" +
                    "<span class='item-left'>" +
                    "<img src='" + localStorageCartItem[i].imgLink + "' style='width:50px;height:50px'alt=''/>" +
                    "<span class='item-info'>" +
                    "</span>" +
                    "</span>" +
                    "<span class='item-right'>" +
                    "<span>" + "   " + localStorageCartItem[i].name + "  </span>" +
                    "<input type='hidden' name='price' value='49.99' />" +
                    "</span>" +
                    "<button type='button' id='" + localStorageCartItem[i].imgLink + "' class='btn btn-default' style='position:absolute;left:350px;' default='remove_from_cart'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button>" +
                    "</span>" +
                    "</li>"

                );
            }
            $('#cart_menu').append(
                "<li>" +
                "<span class='item' style='width:200px;padding-top:30px;padding-bottom:10px;padding-left:15px;padding-right:20px'>" +
                "<span class='item-left'>" +
                "<span class='item-info'>" +
                "</span>" +
                "</span>" +
                "<span class='item-right'>" +
                "<span></span>" +
                "</span>" +
                "</span>" +
                "</li>"
            );
            $('#cart_menu').append(
                "<li>" +
                "<span class='item' style='width:200px;padding-top:30px;padding-bottom:10px;padding-left:200px;padding-right:20px'>" +
                "<span class='item-left'>" +
                "<img src='./public/podsumowanie.jpg' style='width:50px;height:50px'alt=''/>" +
                "<span class='item-info'>" +
                "</span>" +
                "</span>" +
                "<span class='item-right'>" +
                "<span> Razem: " + sumPrice.toFixed(2) + " zł</span>" +
                "</span>" +
                "</span>" +
                "</li>"
            );
        }
    }
};
$(document).delegate("*[default='remove_from_cart']", 'click', function() {

    var i, itemImg = $(this).attr('id'),
        localStorageCart = JSON.parse(localStorage.getItem("localStorageCart")),
        newLocalStorage = [];

    for (i = 0; i < localStorageCart.length; i++) {
        if (localStorageCart[i].imgLink !== itemImg) {
            newLocalStorage.push(localStorageCart[i]);
        }
    }

    localStorage.setItem('localStorageCart', JSON.stringify(newLocalStorage));

    _completionCart();
});
/**
 * Obsługa kliknięcia w menu kontekstowe
 */
$(document).ready(function() {
    // menu swimming
    $("#menu_swimming").click(function() {
        parent.location = '/shop.html';
    });

    $("#menu_swimming").mouseenter(function() {
        $("#menu_swimming").css({
            opacity: 1
        });
    });

    $("#menu_swimming").mouseleave(function() {
        $("#menu_swimming").css({
            opacity: 0.4
        });
    });

    //menu running
    $("#menu_running").click(function() {
        alert("aaa");
    });

    $("#menu_running").mouseenter(function() {
        $("#menu_running").css({
            opacity: 1
        });
    });

    $("#menu_running").mouseleave(function() {
        $("#menu_running").css({
            opacity: 0.4
        });
    });

    // menu bike
    $("#menu_bike").click(function() {
        alert("aaa");
    });

    $("#menu_bike").mouseenter(function() {
        $("#menu_bike").css({
            opacity: 1
        });
    });

    $("#menu_bike").mouseleave(function() {
        $("#menu_bike").css({
            opacity: 0.4
        });
    });

    //menu roll
    $("#menu_roll").click(function() {
        alert("aaa");
    });

    $("#menu_roll").mouseenter(function() {
        $("#menu_roll").css({
            opacity: 1
        });
    });

    $("#menu_roll").mouseleave(function() {
        $("#menu_roll").css({
            opacity: 0.4
        });
    });

    //menu ski
    $("#menu_ski").click(function() {
        alert("aaa");
    });

    $("#menu_ski").mouseenter(function() {
        $("#menu_ski").css({
            opacity: 1
        });
    });

    $("#menu_ski").mouseleave(function() {
        $("#menu_ski").css({
            opacity: 0.4
        });
    });

    //menu snowboard
    $("#menu_snowboard").click(function() {
        alert("aaa");
    });

    $("#menu_snowboard").mouseenter(function() {
        $("#menu_snowboard").css({
            opacity: 1
        });
    });

    $("#menu_snowboard").mouseleave(function() {
        $("#menu_snowboard").css({
            opacity: 0.4
        });
    });
});
