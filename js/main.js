$(document).ready(function(){

    $('.heart_wrap').click(function(){
        $(this).children('.fill_heart').toggleClass('active');
    });


    $(window).scroll(function(){

        var pageY = $(window).scrollTop();

        if(pageY > 500){

            $("header").css({
                position: 'fixed'
            });

        }else if(pageY < 500){

            $("header").css({
                position: 'relative'
            });

        };
    }); // scroll event end


}); //end
