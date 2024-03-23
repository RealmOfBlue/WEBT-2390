$( function() {
    $( "#accordion" ).accordion();
    $("body").css("background-color", "#010101");
    $("#accordion").accordion('option', 'position', 'center');
    $("nav").css("background-color", "#22ABE2");
    $("footer").css("background-color", "#1D2E3B");
    $("h3").css("font-size", "105%");
    $("p").css("color", "#C5C5C5");

    $(".cat").text("I am a cat.");
    $(".medium-text").text("I Am a Header");
    $(".big-text").text("I Am a Bigger Header");
    $(".biggest-text").text("I Am the Biggest Header");

    $(".light-blue").css("color", "#94BED6");
    $(".true-blue").css("color", "#0173A6");
    $(".dark-blue").css("color", "#1D2E3B");

    $("button").click(function(){
        $("ul").slideToggle();
      });



  } );
