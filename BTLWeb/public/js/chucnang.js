var socket = io("http://localhost:8084");
 socket.on("gui-comment",function(data){
     $("#showcomment").val(data);
       $("#Comment").val("");
 })
 socket.on("add-product",function(){
     alert("Có sản phẩm mới được tải lên !! Vui lòng load lại trang để xem sản phẩm mới nhất");
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
        socket.emit("gui-comment",$("#attached").html()+"ooo"+$("#code").html()+"ooo"+$("#showcomment").val()+"ooo"+$("#Comment").val());
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
