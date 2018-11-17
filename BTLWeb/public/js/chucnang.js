var socket = io("http://localhost:8084");
 socket.on("gui-comment",function(data){
     $("#showcomment").val(data);
       $("#Comment").val("");
 })
 socket.on("add-product",function(){
     alert("Có sản phẩm mới được tải lên !! Vui lòng load lại trang để xem sản phẩm mới nhất");
 })
 socket.on("add-user",function(data){
    $("#"+data).html("on")
    $("#"+data).css("color","blue")
})
socket.on("delete-user",function(data){
    $("#"+data).html("off")
    $("#"+data).css("color","black")
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
    socket.on("follow",function(data){
        
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

    
        if ($('.wrapper-nav').length > 0) {
            var _top = $('.wrapper-nav').offset().top - parseFloat($('.wrapper-nav').css('marginTop').replace(/auto/, 0));
            $(window).scroll(function(evt) {
                var _y = $(this).scrollTop();
                if (_y > _top) {
                    $('.wrapper-nav').addClass('fixed');
                    $('.main-1').css("margin-top", "30px")
                } else {
                    $('.wrapper-nav').removeClass('fixed');
                    $('.main-1').css("margin-top", "0")
                }
            })
        }
    
        if ($('.wrapper-nav1').length > 0) {
            var _top1 = $('.wrapper-nav1').offset().top - parseFloat($('.wrapper-nav1').css('marginTop').replace(/auto/, 0));
            $(window).scroll(function(evt) {
                var _y1= $(this).scrollTop();
                if (_y1 > _top1) {
                    $('.wrapper-nav1').addClass('fixed1');
                    
                } else {
                    $('.wrapper-nav1').removeClass('fixed1');
                 
                }
            })
        }
    



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
           socket.emit("follow",$("#tenuser").val()+"\n"+$("#shop").html())
        }
        else
       { 
         socket.emit("unfollow",$("#tenuser").val()+"\n"+$("#shop").html())
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
        socket.emit("gui-comment",$("#attached").html()+"ooo"+$("#code").html()+"ooo"+$("#showcomment").val()+"ooo"+$("#Comment").val()+"ooo"+$("#tenuser").val());
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
function checkPhoneNumber() {
    var flag = false;
    var phone = $('#input').val().trim(); // ID của trường Số điện thoại
    phone = phone.replace('(+84)', '0');
    phone = phone.replace('+84', '0');
    phone = phone.replace('84', '0');
    phone = phone.replace('0084', '0');
    phone = phone.replace(/ /g, '');
    if (phone != '') {
        var firstNumber = phone.substring(0, 2);
        if ((firstNumber == '09' || firstNumber == '08'|| firstNumber == '03') && phone.length == 10) {
            if (phone.match(/^\d{10}/)) {
                return true;
            }
        } else if (firstNumber == '01' && phone.length == 11) {
            if (phone.match(/^\d{11}/)) {
                return true;
            }
        }
    }
    alert("Loi")
    return flag;
}
function checkPassword(){
    var password=$('#UserPassword').val().trim();
    var w = /[a-zA-Z0-9]+/ 
    if(password!=""){
        if(password.length<6){
            alert("Mật khẩu phải lớn hơn 6 kí tự")
         return false
        }else{
            if(!password.match(w)){
                alert("Mật khẩu chỉ chứa chữ hoặc số")
                return false
            }
        }
    }
    return true;
}

