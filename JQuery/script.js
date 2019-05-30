$(document).ready(function(){

    $('#append button').click(function(){
        $('#append').append("<h1>Sup</h1>");
    })

    $('#html button').click(function(){
        var htmlstring = $('#html').html();
        $('#html p').text(htmlstring);
        $('#html').html("<h1>changed</h1>");
    })
    

    $('#attr button').click(function(){
        $('#attr h1').attr("class","orange");
    })

    $('#val button').click(function(){
        $('input').val( "Chicken Butt" );
    })

    $('#text button').click(function(){
        $('h1').text( "Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you!" );
    })
})