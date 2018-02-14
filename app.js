function loadPage(){
    $("#tiempo-real").keyup(pintarTiempoReal);
    $("#enviar-comment").click(pintarComentarioArriba);
    $("#large").click(makelarge);
    $("#medium").click(makeMedium);
    $("#small").click(makeSmall);
    $("#left").click(putLeft);
    $("#middle").click(putCenter);
    $("#right").click(putRight);
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
    $("#comment-zone").addClass("large");
}

function makeMedium(){
    console.log("hola");
    $("#comment-zone").addClass("medium");
}

function makeSmall(){
    console.log("hola");
    $("#comment-zone").addClass("small");
}

function putLeft(){
    console.log("hola");
    $("#comment-zone").addClass("left");
}
function putCenter(){
    console.log("hola");
    $("#comment-zone").addClass("center");
}
function putRight(){
    console.log("hola");
    $("#comment-zone").addClass("right");
}



























$(document).ready(loadPage);