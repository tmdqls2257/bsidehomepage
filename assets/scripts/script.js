

// 햄버거 버튼
$(document).ready(function(){
    $('.ham_btn').click(function(){
        if ($('.ham_box').hasClass('on')) {
            $('.ham_box').removeClass('on');
        }else{
            $('.ham_box').addClass('on');
        }
    });
});
$(document).ready(function(){
    // 탑버튼
    $('#etc').hide();
    $(window).scroll(function() {

        if ($(this).scrollTop() > 2000) {
            $('#etc').fadeIn();
        } else {
            $('#etc').fadeOut();
        }
    });
    $("#top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

    // 모달창 켜기1
    $('.modal_step_open').click(function(){
        var modal_step = $(this).attr('modal_step');

        $('.modal_step').addClass('hidden'); // 이전 모달창을 숨김
        
        $(this).addClass('current');
        $("."+ "modal_step" +modal_step).removeClass('hidden');
    })

    // 모달창 켜기2
    $('.modal_open').on("click", function() {
        $(this).next().removeClass("hidden");
    });

    // 모달창 끄기
    $('.cancerButton').on("click", function() {
        if ($(this).closest(".modal")) {
            $(this).closest(".modal").addClass("hidden");
        }
        else {
            $(this).closest(".modal").addClass("hidden");
        }
    });

    // 모든 모달창 끄기
    $('.allModalClose').on("click", function() {
        $('.modal').addClass("hidden");
    });

    // 첫번째 모달창 끄기
    $('.firstModalClose2').on("click", function() {
        $(this).closest('.modal').addClass("hidden");
        $(this).closest('.modal').next('.modal').removeClass("hidden");
    });   
});



$(document).ready(function(){
			
    // $('#selectPay_phone').hide();   // 초깃값 설정
    // $('#selectPay_noBank').hide();	// 초깃값 설정
        
    $("input[name='process']").change(function(){
        // event1
        if($("input[name='process']:checked").val() == 'event1'){
            $('.process').addClass('on1');
            $('.process').removeClass('on2');
            $('.process').removeClass('on3');
            $('.process').removeClass('on4');
            $("#img_radio img").attr("src", './assets/images/process1.png');
        }	
        // event2
        else if($("input[name='process']:checked").val() == 'event2'){
            $('.process').removeClass('on1');
            $('.process').addClass('on2');
            $('.process').removeClass('on3');
            $('.process').removeClass('on4');
            $("#img_radio img").attr("src", './assets/images/process2.png');
        }
        // event3
        else if($("input[name='process']:checked").val() == 'event3'){
            $('.process').removeClass('on1');
            $('.process').removeClass('on2');
            $('.process').addClass('on3');
            $('.process').removeClass('on4');
            $("#img_radio img").attr("src", './assets/images/process3.png');
        }
        // event4
        else if($("input[name='process']:checked").val() == 'event4'){
            $('.process').removeClass('on1');
            $('.process').removeClass('on2');
            $('.process').removeClass('on3');
            $('.process').addClass('on4');
            $("#img_radio img").attr("src", './assets/images/process4.png');
        }
    });
        
});	