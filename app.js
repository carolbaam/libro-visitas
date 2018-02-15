function loadPage(){
    $("#tiempo-real").keyup(pintarTiempoReal);
    $("#enviar-comment").click(pintarComentarioArriba);
    $("#large").click(makelarge);
    $("#medium").click(makeMedium);
    $("#small").click(makeSmall);
    $("#left").click(putLeft);
    $("#middle").click(putCenter);
    $("#right").click(putRight);
    $("#text-color").click(putColor);
    $("#bg-color").click(putBgColor);
}

var comentarios=[
    {uno:"hola",
dos:"holaaa"}
]

function pintarTiempoReal(){

var $content=$("#tiempo-real").val();
$("#comment-zone").text($content);
}

function pintarComentarioArriba(){
   
    var $content=$("#tiempo-real").val();
    var $div1=$("<div />").addClass("row");
    var $div2=$("<div />").addClass("col-lg-4 col-lg-offset-2");
    var $p=$("<p />").text($content).addClass("border space-up");
   
    
    $div2.append($p);
    $div1.append($div2);

    $("#comment-up-zone").prepend($div1);
    $("#tiempo-real").val(" ");
    $("#comment-zone").text(" ");
    comentarios.push($content);
}

function makelarge(){
    $("#comment-zone").removeClass("medium small");
    $("#comment-zone").addClass("large");
    localStorage.size=$("#comment-zone");
}

function makeMedium(){
    
    $("#comment-zone").removeClass("large small");
    $("#comment-zone").addClass("medium");
}

function makeSmall(){
   
    $("#comment-zone").removeClass("medium large");
    $("#comment-zone").addClass("small");
}

function putLeft(){
   
    $("#comment-zone").removeClass("right center");
    $("#comment-zone").addClass("left");
}
function putCenter(){
   
    $("#comment-zone").removeClass("left right");
    $("#comment-zone").addClass("center");
}
function putRight(){
    
    $("#comment-zone").removeClass("left center");
    $("#comment-zone").addClass("right");
}

function putColor(){
var askColor =prompt("qué color quieres");

document.getElementById("comment-zone").style.color= askColor;
}

function putBgColor(){
    var askColor2 =prompt("qué color  de fondo quieres");
    
    document.getElementById("comment-zone").style.background= askColor2;
    }







$(document).ready(loadPage);