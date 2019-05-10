let parallax = new Parallax($('.parallax'));
$(window).scroll(function() {
    parallax.parallax()
})

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
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}&client_id=${appID}`)
        .then(response => response.json())
        .then(addImage)
        .catch(function(err) {
            console.log('Request failed ', err);
        });

    function addImage(data) {
        for (let image = 0; image < 8; image++) {
            responseContainer.insertAdjacentHTML('beforeend', `<div class="${searchedForText}">
                <a href="${data.results[image].urls.regular}"><img src="${data.results[image].urls.regular}" alt="${searchedForText}"></a>
            </div>`);
        }

    }
});
