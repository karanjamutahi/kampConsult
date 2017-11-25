var phoneWidth = window.matchMedia("(max-width:400px)");
var cards = $("#Service-Row").children();

$(document).ready(function(){
    console.log("Ready!");

    

    //I want to make the service cards responsive. By makng them a carousel
    let carousel_data = `<div class="carousel carousel-slider center" data-indicators="true">
    <div class = "container">
    <div class="carousel-item teal white-text" href="#one!">
        <h1>Debt Collection</h1>
        <p class = 'carousel-text'>We give you the best services in debt collection and reconciliation. With over 10 years experiencing working with corporates and SMEs, your problems are as good as solved once you bring them to us.</p>
    </div>

    <div class="carousel-item teal accent-3 white-text" href="#two!">
        <h1>Business Advisory</h1>
        <p class = 'carousel-text'>Having handled payroll for over 1000 employees, we take away the stresses involved in disbursement, deductions, renumerations and all the ins-and-outs of payroll.</p>
    </div>

    <div class="carousel-item teal white-text" href="#three!">
        <h1>Tax Advisory</h1>
        <p class = 'carousel-text'>We're self-proclaimed iTax gurus. But more than that, we're terribly good at handling the nitty-gritties of taxes. We'll openly take care of your deductions, whether standard or itemized, all the while keeping open, easy-to-follow accounts for you.</p>
    </div>

    <div class="carousel-item teal accent-3 white-text" href="#four!">
        <h1>Insurance Services</h1>
        <p class = "carousel-text">We're self-proclaimed iTax gurus. But more than that, we're terribly good at handling the nitty-gritties of taxes. We'll openly take care of your deductions, whether standard or itemized, all the while keeping open, easy-to-follow accounts for you.</p>
    </div>

    <div class="carousel-item teal white-text" href="#five!">
        <h1>Accounting</h1>
        <p class = 'carousel-text'>We give you the best services in debt collection and reconciliation. With over 10 years experiencing working with corporates and SMEs, your problems are as good as solved once you bring them to us.</p>
    </div>

    <div class="carousel-item teal accent-3 white-text" href="#six!">
        <h1>Mergers & Acquisitions</h1>
        <p class = 'carousel-text'>Having handled payroll for over 1000 employees, we take away the stresses involved in disbursement, deductions, renumerations and all the ins-and-outs of payroll.</p>
    </div>

    </div>
    </div>`;

    if(phoneWidth.matches){
        $("#Service-Row").empty();
        $("#Service-Row").append(carousel_data);
        $('.carousel.carousel-slider').carousel({fullWidth: true});
    
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



