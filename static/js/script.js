var phoneWidth = window.matchMedia("(max-width:400px)");
var cards = $("#Service-Row").children();

$(document).ready(function(){
    console.log("Ready!");


    if(phoneWidth.matches){
      
    
        $("iframe").attr("width",`${Window.innerWidth}px`);
    }

    else{
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();

            if(scroll > 700){
                $("#topNav").each(function(){
                    this.removeAttribute("style");
                    $("#topNav").removeClass("invisible");
                    $("#topNav").addClass("teal-gradient");
                });
            }
            
            else{
                $("#topNav").each(function(){
                    this.style.setProperty('background','transparent', 'important');
                    this.style.setProperty('background-color','rgba(0,0,0,0)', 'important');
                });
            }
        });

    }

});



