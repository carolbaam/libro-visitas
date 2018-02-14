function loadPage(){
    $("#tiempo-real").keyup(pintarTiempoReal);
    $("#enviar-comment").click(pintarComentarioArriba);
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



























$(document).ready(loadPage);