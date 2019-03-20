var backgrounds = ['donnafugata_millenotte', 'Free Red Wine', 'Something Pretty', 'W Red', 'Wollersheim Prairie Fume']

$( document ).ready(function(){

  $('h1').on('click', function (){

    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    var imageUrl = "url('./images/" + randomBackground + ".jpg')"


$('body').css('background-image', imageUrl)

    $('span').text(randomBackground)


  })
})
