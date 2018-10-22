var socket = io("http://localhost:8084");
// socket.on("gui-comment",function(data){
//     $("#showcomment").append($("#showcomment").html()+$("#Comment").val());
// })
socket.on("san-pham", function(data){
    for(var i =0;i<data.lenght;i++ )
    var ins = '<a href="/data._id"><img id="0" src="/imageMayTinh/<%= MayTinh[i].image%>" width="150px" height="150px"></a><br><span class ="ten" id = "ten-1"><%= MayTinh[i].name%></span><br><span class ="gia" id = "gia-1"><%= MayTinh[i].price%></span><br>' 
    $("#frame-1").append(ins);
})
$(document).ready(function(){
    $('#AlphaNav > ul > li > a').click(function () {
        $(this).closest('li').siblings().find('ul:visible').slideUp(); // ADDED
        $(this).closest('li').siblings().find('ul:visible').parent().find('i').toggleClass('fa-angle-double-up fa-angle-double-down'); // ADDED 2
        $(this).closest('li').find('ul').slideToggle();
        $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down');
        
    });
    $("#info-main").hover(function(){
            $("#info").show();
    },function(){
        $("#info").hide();
    })
    socket.emit("list-sp");
    $("#like").click(function(){
        if( $("#like").attr("src")=="/imagei/like.png")
       {
           $("#like").attr("src","/imagei/like1.png")
        }
        else
        $("#like").attr("src","/imagei/like.png")
    })
    $("#follow").click(function(){
        if( $("#follow").attr("src")=="/imagei/unfollow.png")
       {
           $("#follow").attr("src","/imagei/follow.png")
           $("#theodoi").html("Đã theo dõi");
           $("#theodoi").attr("style","color: blue")
        }
        else
       { 
           $("#follow").attr("src","/imagei/unfollow.png");
           $("#theodoi").html("Theo dõi");
           $("#theodoi").attr("style","color: rgb(177, 174, 171)")
    }
    })
    $("#mota").show();
    $("#binhluan").hide();
    $("#mota").click(function(){
        mota();
    })
    $("#binhluan").click(function(){
        binhluan();
    })
    
    socket.emit("gui-thong-tin");
    $("#send").click(function(){
      $("#showcomment").append($("#showcomment").html()+$("#Comment").val());
        socket.emit("gui-comment",$("#Comment").val());
    })
})
function binhluan(){
$("#mota").hide();
$("#binhluan").show();
}
function  mota(){
    $("#mota").show();
    $("#binhluan").hide();
}
