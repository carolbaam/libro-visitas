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
}

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

}

function makelarge(){
    console.log("hola");
    $("#comment-zone").removeClass();
    $("#comment-zone").addClass("large");
    localStorage.size=$("#comment-zone");
}

function makeMedium(){
    console.log("hola");
    $("#comment-zone").removeClass();
    $("#comment-zone").addClass("medium");
}

function makeSmall(){
    console.log("hola");
    $("#comment-zone").removeClass();
    $("#comment-zone").addClass("small");
}

function putLeft(){
    console.log("hola");
    $("#comment-zone").removeClass();
    $("#comment-zone").addClass("left");
}
function putCenter(){
    console.log("hola");
    $("#comment-zone").removeClass();
    $("#comment-zone").addClass("center");
}
function putRight(){
    console.log("hola");
    $("#comment-zone").removeClass();
    $("#comment-zone").addClass("right");
}

function putColor(){
var askColor=prompt("¿qué color quieres?");
$("#comment-zone").style.background=askColor;
}







$(document).ready(loadPage);