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
        $(".numfollowed").html(data);
    })
    socket.on("unfollow",function(data){
        $(".numfollowed").html(data);
    })
$(document).ready(function(){
    $(".pop-up-footer").hide();
    $(".ChatLog").hide();
    $("#moki_small").hide();
    $("#thongtin").hide();
    $("#theo_doi").hide();
    $("#duoctheodoi").hide();
    $(".user-out").hide();
    $("#mota-title").css("color","#f16e8e")
    $("#binhluan-title").css("color","black")
    $('#AlphaNav > ul > li > i').click(function () {
        $(this).closest('li').siblings().find('ul:visible').slideUp(); // ADDED
        $(this).closest('li').siblings().find('ul:visible').parent().find('i').toggleClass('fa-angle-double-up fa-angle-double-down'); // ADDED 2
        $(this).closest('li').find('ul').slideToggle();
        $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down');
        
    });
    $("#modifier-user-1").hide();
    $("#modifier-user-2").hide();
    $("#modifier-user").click(function(){
        $(".user-out").show();
        $(".user-in").hide();
        $("#modifier-user-1").show();
        $("#modifier-user-2").show();
        $("#modifier-user").hide();
        $("#change-password").hide();
    })
    $("#modifier-user-2").click(function(){
        $(".user-out").hide();
        $(".user-in").show();
        $("#modifier-user-1").hide();
        $("#modifier-user-2").hide();
        $("#modifier-user").show();
        $("#change-password").show();
    })
    $(".delete-follow").click(function(){
        alert("ok")
    })
    $(".tab1").click(function(){
        $("#showsp").hide();
        $("#thongtin").show();
        $("#theo_doi").hide();
        $("#duoctheodoi").hide();
        $(".tab2").css("color","black");
        $(".tab1").css("color","aqua");
        $(".tab3").css("color","black");
        $(".tab4").css("color","black");
    })
    $(".tab2").click(function(){
        $("#thongtin").hide();
        $("#showsp").show();
        $("#theo_doi").hide();
        $("#duoctheodoi").hide();
        $(".tab2").css("color","aqua");
        $(".tab1").css("color","black");
        $(".tab3").css("color","black");
        $(".tab4").css("color","black");
    })
    $(".tab3").click(function(){
        $("#thongtin").hide();
        $("#showsp").hide();
        $("#theo_doi").show();
        $("#duoctheodoi").hide();
        $(".tab2").css("color","black");
        $(".tab1").css("color","black");
        $(".tab3").css("color","aqua");
        $(".tab4").css("color","black");
    })
    $(".tab4").click(function(){
        $("#thongtin").hide();
        $("#showsp").hide();
        $("#theo_doi").hide();
        $("#duoctheodoi").show();
        $(".tab2").css("color","black");
        $(".tab1").css("color","black");
        $(".tab3").css("color","black");
        $(".tab4").css("color","aqua");
    })
var stt=0;
var starImg= 0;
var endImg= $(".slide:last").attr("stt");
$(".slide").each(function(){
    if($(this).is(':visible'))
    stt=$(this).attr("stt")
})
$("#Next").click(function(){
    if(stt==endImg){
        stt=1;
    }
    next=++stt;
    $(".slide").hide();
    $(".slide").eq(next).show();
    $(".slide").eq(next-1).show();
    $(".slide").eq(next-2).show();
})
$("#Previous").click(function(){
    if(stt-2==starImg){
        stt=endImg;
        prev=stt++;
    }
    prev=--stt;
    $(".slide").hide();
    $(".slide").eq(prev-2).show();
    $(".slide").eq(prev-3).show();
    $(".slide").eq(prev-4).show();
})

var stt1=0;
var starImg1= 0;
var endImg1= $(".slide-shop:last").attr("stt-shop");
$(".slide-shop").each(function(){
    if($(this).is(':visible'))
    stt1=$(this).attr("stt-shop")
})
$("#Next-shop").click(function(){
    if(stt1==endImg1){
        stt1=2;
    }
    next1=++stt1;
    $(".slide-shop").hide();
    $(".slide-shop").eq(next1).show();
    $(".slide-shop").eq(next1-1).show();
    $(".slide-shop").eq(next1-2).show();
    $(".slide-shop").eq(next1-3).show();
})
$("#Previous-shop").click(function(){
    if(stt1-3==starImg1){
        stt1=endImg1;
        prev1=stt++;
    }
    prev1=--stt1;
    $(".slide-shop").hide();
    $(".slide-shop").eq(prev1).show();
    $(".slide-shop").eq(prev1-1).show();
    $(".slide-shop").eq(prev1-2).show();
    $(".slide-shop").eq(prev1-3).show();
})
setInterval(function(){$("#Next").click()},2000)
    $("#btn-report").click(function(){
        $(".text-report").slideToggle();
    });
    $("#send-report").click(function(){
        socket.emit("report",$("#textarea").val());
       })
        if ($('.wrapper-nav').length > 0) {
            var _top = $('.wrapper-nav').offset().top - parseFloat($('.wrapper-nav').css('marginTop').replace(/auto/, 0));
            $(window).scroll(function(evt) {
                var _y = $(this).scrollTop();
                if (_y > _top) {
                    $('.wrapper-nav').addClass('fixed');
                    $('.main-1').css("margin-top", "30px")
                    $("#moki_small").show();
                } else {
                    $('.wrapper-nav').removeClass('fixed');
                    $('.main-1').css("margin-top", "0")
                    $("#moki_small").hide();
                }
            })
           
        }
    
        if ($('.wrapper-nav1').length > 0) {
            var _top1 = $('.wrapper-nav1').offset().top - parseFloat($('.wrapper-nav1').css('marginTop').replace(/auto/, 0));
            $(window).scroll(function(evt) {
                var _y1= $(this).scrollTop();
                var c=$("#footer_container").offset().top-500; 
                if (_y1 > _top1) {
                    $('.wrapper-nav1').addClass('fixed1');
                    if($(".fixed1").offset().top>c){
                     
                                $('.wrapper-nav1').removeClass('fixed1');
                        
                    }
                    // if($(".fixed1").offset().top<c && $(".fixed1").offset().top<$('.wrapper-nav1').offset().top){
                    //     $(window).scroll(function(evt) {
                    //         $('.wrapper-nav1').addClass('fixed1');
                    // })
                    // }
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
    $("img#follow").click(function(){
        if( $("#follow").attr("src")=="/imagei/unfollow.png")
       {
           $("img#follow").attr("src","/imagei/follow.png")
           $("#theodoi").html("Đã theo dõi");
           $("#theodoi").attr("style","color: blue")
           socket.emit("follow",$("#tenuser").html()+"\n"+$("#name-user").html());
        }
        else
       { 
         socket.emit("unfollow",$("#tenuser").html()+"\n"+$("#name-user").html());
           $("img#follow").attr("src","/imagei/unfollow.png");
           $("#theodoi").html("Theo dõi");
           $("#theodoi").attr("style","color: rgb(177, 174, 171)")
    }
    })
    $("#mota").show();
    $("#binhluan").hide();
    $("#ht").hide()
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
$("#ht").show();
$("#binhluan-title").css("color","#f16e8e")
$("#mota-title").css("color","black")
}
function  mota(){
    $("#mota").show();
    $("#binhluan").hide();
    $("#ht").hide();
    $("#mota-title").css("color","#f16e8e")
    $("#binhluan-title").css("color","black")
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
    var w = /[a-zA-Z0-9]+/ ;
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
