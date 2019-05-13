let parallax = new Parallax($('.parallax'));
$(window).scroll(function() {
    parallax.parallax()
})

$("#nav-toggle").click(function(){
    $(".nav-menu").toggle(300);
});

$('.all-photos').addClass("photos").show();
$('.nature-photos').hide();
$('.wildfife-photos').hide();
$('.citylife-photos').hide();
$('.other-photos').hide();
$('.search-submit').hide();

$('.all-list').click(function() {
    $('.all-photos').addClass("photos").show();
    $('.nature-photos').hide();
    $('.wildfife-photos').hide();
    $('.citylife-photos').hide();
    $('.other-photos').hide();
    $('.search-submit').hide();
})

$('.nature-list').fadeIn().click(function() {
    $('.all-photos').hide();
    $('.nature-photos').addClass("photos").show();
    $('.wildfife-photos').hide();
    $('.citylife-photos').hide();
    $('.other-photos').hide();
    $('.search-submit').hide();
})

$('.wildfife-list').click(function() {
    $('.all-photos').hide();
    $('.nature-photos').hide();
    $('.wildfife-photos').addClass("photos").show();
    $('.citylife-photos').hide();
    $('.other-photos').hide();
    $('.search-submit').hide();
})

$('.citylife-list').click(function() {
    $('.all-photos').hide();
    $('.nature-photos').hide();
    $('.wildfife-photos').hide();
    $('.citylife-photos').addClass("photos").show();
    $('.other-photos').hide();
    $('.search-submit').hide();
})

$('.other-list').click(function() {
    $('.all-photos').hide();
    $('.nature-photos').hide();
    $('.wildfife-photos').hide();
    $('.citylife-photos').hide();
    $('.search-submit').show();
    $('.other-photos').addClass("photos").show();
})

const form = document.querySelector('#search-form');
const searchField = document.querySelector('#search-keyword');
const appID = 'd8e85a6ef9696b3b34ef0b9f4c9446f6a36ded785c7d997dc547ab343badf630';
let searchedForText = 0;
const responseContainer = document.querySelector('.other-photos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForText = searchField.value;
    fetch(`https://api.unsplash.com/search/photos?page=2&query=${searchedForText}&client_id=${appID}`)
        .then(response => response.json())
        .then(addImage)
        .catch(function(err) {
            console.log('Request failed ', err);
        });

    function addImage(data) {
        for (let image = 0; image < 8; image++) {
            responseContainer.insertAdjacentHTML('beforeend',
            `<div class="other_photos">
                <a href="#other"><img class="image" src="${data.results[image].urls.regular}" alt="${data.results[image].alt_description}"></a>
            </div>`
            );

        }
        $(".image").click(function() {
            let img = $(this);
            let src = img.attr('src');
            let alt = img.attr('alt');
            $("body").append(
            `<div class="popup">
                <div class="popupopen">
                    <div class="popup_bg"></div>
                    <img src="${src}" class="popup_img">
                </div>
                <div class="alt_modal">Description: "${alt}"</div>
            </div>`);
            $(".popupopen").fadeIn(800);
            $(".popup_bg").click(function() {
                $(".popup").fadeOut(800);
                setTimeout(function() {
                    $(".popup").remove();
                }, 800);
            });
        });
    }

});
