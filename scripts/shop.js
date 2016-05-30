// Wywołanie modalnego okna szczegółów produktu
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(document).ready(function() {
    // Wylogowanie z aplikacji
    $("#logout_btn").click(function() {
        localStorage.removeItem("localStorageCart");
        parent.location = '/';
    });
    // powrót do strony głównej
    $("#prev_btn").click(function() {
        parent.location = '/home.html';
    });
    //prekierowanie na strone kontaktową
    $("#contact_btn").click(function() {
        parent.location = '/contact.html';
    });

    $("#sum_btn").click(function() {
        parent.location = '/podsumowanie.html';
    });

    $("#next_step").click(function() {
        parent.location = '/platnosc.html';
    });

});

/**
 * Funkcja dodawania itemsów do koszyka
 *
 * @param  Object cmp komponent z danymi
 */
var _addToLocalStorage = function(cmp) {
    var localStorageCart = [],
        localStorageItem = {},
        price, name, imgLink;

    if (localStorage.getItem("localStorageCart") && localStorage.getItem("localStorageCart").length > 0) {
        localStorageCart = JSON.parse(localStorage.getItem("localStorageCart"));
    }

    price = cmp.parent('.thumbnail').find('input').eq(0)[0].value || "";
    name = cmp.parent('.thumbnail').find('h3').eq(0)[0].innerText;
    imgLink = cmp.parent('.thumbnail').find('img').attr('href');

    localStorageItem.price = price;
    localStorageItem.name = name;
    localStorageItem.imgLink = imgLink;

    localStorageCart.push(localStorageItem);
    localStorage.setItem('localStorageCart', JSON.stringify(localStorageCart));

    $('#cart_menu').append(
        "<li>" +
        "<span class='item' style='width:200px;padding-top:10px;padding-bottom:10px;padding-left:15px;padding-right:20px'>" +
        "<span class='item-left'>" +
        "<img src='" + imgLink + "' style='width:50px;height:50px'alt=''/>" +
        "<span class='item-info'>" +
        "</span>" +
        "</span>" +
        "<span class='item-right'>" +
        "<span>" + "   " + name + "</span>" +
        "</span>" +
        "</span>" +
        "</li>"
    );
};
// animacja dodawania do koszyka
$(document).delegate('*[default="add_to_cart"]', 'click', function() {
    var cart = $('.cart'),
        imgtodrag = $(this).parent('.thumbnail').find("img").eq(0),
        imgclone;

    if (imgtodrag) {
        imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        setTimeout(function() {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function() {
            $(this).detach()
        });
    }

    _addToLocalStorage($(this));
});
