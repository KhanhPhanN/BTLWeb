
var socket = io("http://localhost:8084");

socket.on("server-send",function(data){
    $(".ChatLog").append("<li class='ChatLog__entry ChatLog__entry_mine'><p class='ChatLog__message'>"+data+"</p></li>");
    $(".ChatLog").append("<li class='ChatLog__entry'><div class='ChatLog__avatar'>A</div><p class='ChatLog__message'>"+data+"</p></li>");
});

$(document).ready(function(){

    $("#xxx").show();
    $(".pop-up-box").hide();
    $("#mess").focus();
    $("#xxx").click(function(){
        $(".pop-up-box").show();
        $("#xxx").hide();
        $("#anhmoki").hide();
    })
    $("#close").click(function(){
        $(".pop-up-box").hide();
        $("#xxx").show();
    })

    $(".pop-up-head").click(function(){
        $(".pop-up-box").hide();
        $("#xxx").show();
        $("#anhmoki").show();
    })
    $("#btnSend").click(function(){
        if(($("#mess").val()!=null) && ($("#mess").val()!="")){
            socket.emit("Client-send-messages", $("#mess").val());
            $("#mess").val("");
        }
    })
    $("#mess").keyup(function(event){
        if((event.keyCode == 13 ) && ($("#mess").val()!=null) && ($("#mess").val()!="")){
            $("#btnSend").click(function(){

                
            });
        }        
    });
})