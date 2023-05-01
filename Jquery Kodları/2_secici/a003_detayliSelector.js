/*
$(document).ready(function (){

$("p").css("color","red");

});



$(document).ready(function (){

    $("h1,h2,h3").css("color","red");
    
    });


$(document).ready(function (){

    $("#deneme").click(function (){
        $(":checkbox").css("width","105px").css("height","105px");
       });
    });*/

 


    
$(document).ready(function (){

    $("#deneme").click(function (){
        $("tr td:first").css("background-color","yellow").css("height","105px");
       });
    });
   