


$(document).ready(function (){
//$().css();
//$("#p1").css("color","red");
//$("#p1").css("color","red").css("background-color","blue");

//object
/*$(".p2").css({
    "color":"yellow",
    "background-color":"blue",
    "font-size":"25px"
});*/

//object var değiştikeni
var styleObject={
    "color":"yellow",
    "background-color":"blue",
    "font-size":"25px",
    "opacity":".1"
};
$(".p2").css(styleObject);

//object camelCase
var styleObjectCamelCase={
    color:"yellow",
    backgroundColor:"blue",
    fontSize:"25px",
    opacity:".9"
};
$(".p2").css(styleObjectCamelCase);
});