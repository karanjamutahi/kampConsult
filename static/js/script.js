$(document).ready(function(){
    console.log("Ready!");

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 700){
            $("#topNav").each(function(){
                this.style.setProperty('background','solid', 'important');
                this.style.setProperty('background-color','white', 'important');
            });
            
        }
        else{
            $("#topNav").each(function(){
                this.style.setProperty('background','transparent', 'important');
                this.style.setProperty('background-color','rgba(0,0,0,0)', 'important');
            });
        }
    });
});