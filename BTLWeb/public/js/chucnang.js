var socket = io("http://localhost:8084");
 socket.on("gui-comment",function(data){
     $("#showcomment").val(data);
       $("#Comment").val("");
 })
 socket.on("add-product",function(){
     alert("Có sản phẩm mới được tải lên !! Vui lòng load lại trang để xem sản phẩm mới nhất");
 })

 // report san pham
socket.on("report",function(){
   $("#send-report").click(function(){
    $(".text-report").slideUp();
       $("#thanks-report").fadeTo(2500,1).fadeOut(2500);
       $("#textarea").val("");
   });
})
socket.on("add-like",function(data){
    $("#listlike").html("");
$("#numlike").html(data.numLike);
for(var i=0;i<data.likelist.length-1;i++)
$("#listlike").append("<li>"+data.likelist[i]+"</li>")
})
socket.on("add-unlike",function(data){

    $("#listlike").html("");
$("#numlike").html(data.numLike);
for(var i=0;i<data.likelist.length-1;i++)
$("#listlike").append("<li>"+data.likelist[i]+"</li>")
    })
$(document).ready(function(){
    $("#btn-report").click(function(){
        $(".text-report").slideToggle();
    });
    $("#send-report").click(function(){
        socket.emit("report",$("#textarea").val());
       })
    
});

$(document).ready(function(){
    $('#AlphaNav > ul > li > a').click(function () {
        $(this).closest('li').siblings().find('ul:visible').slideUp(); // ADDED
        $(this).closest('li').siblings().find('ul:visible').parent().find('i').toggleClass('fa-angle-double-up fa-angle-double-down'); // ADDED 2
        $(this).closest('li').find('ul').slideToggle();
        $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down');
        
    });
   $("#listlike").hide()
   $("#numlike").hover(function(){

    $("#listlike").show()
   },function(){

    $("#listlike").hide()
   })
    socket.emit("list-sp");
    $("#like").click(function(){
        if( $("#like").attr("src")=="/imagei/like.png")
       {
           socket.emit("like",$("#code").html()+"ooo"+$("#attached").html()+"ooo"+$("#tenuser").val());
           $("#like").attr("src","/imagei/like1.png")
        }
        else{
            socket.emit("unlike",$("#code").html()+"ooo"+$("#attached").html()+"ooo"+$("#tenuser").val());
        $("#like").attr("src","/imagei/like.png")
        }
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
