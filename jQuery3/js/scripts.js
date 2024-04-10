$( function() {
    $( ".desktop" ).accordion({
      collapsible: true,
      active: false,
      heightStyle: SVGTextContentElement,
        event: "mouseover"
        }).on('mouseleave', function () {
            $(this).accordion("option", "active", false);
        });

        $( ".item" ).accordion({
            collapsible: true,
            active: false,
              });

        $( ".item-full" ).accordion({
                collapsible: true,
                active: false,

        });
                
  } );

  $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  } );


  $( function() {
  
    $(".billy-mac").click(function () {
      $(".selected-img").attr("src", "images/entrees/billy-mac.png");
      $(".selected-desc").attr("src", "images/desc/billy-mac-desc.png");
    });
    $(".billy-basic").click(function () {
        $(".selected-img").attr("src", "images/entrees/billy-basic.png");
        $(".selected-desc").attr("src", "images/desc/billy-basic-desc.png");
      });
    $(".double-troubles").click(function () {
        $(".selected-img").attr("src", "images/entrees/double-troubles.png");
        $(".selected-desc").attr("src", "images/desc/double-troubles-desc.png");
    });
    $(".chicken-dinner").click(function () {
          $(".selected-img").attr("src", "images/entrees/chicken-dinner.png");
          $(".selected-desc").attr("src", "images/desc/chicken-dinner-desc.png");
    });
    $(".hot-diggity-dogs").click(function () {
        $(".selected-img").attr("src", "images/entrees/hot-diggity-dogs.png");
        $(".selected-desc").attr("src", "images/desc/hot-diggity-dogs-desc.png");
    });
    $(".chili-cheesers").click(function () {
          $(".selected-img").attr("src", "images/entrees/chili-cheesers.png");
          $(".selected-desc").attr("src", "images/desc/chili-cheesers-desc.png");
    });
} );

$( function() {
  
    $(".billy-mac").click(function () {
      $(".selected-img").attr("src", "images/entrees/billy-mac.png");
      $(".selected-desc").attr("src", "images/desc/billy-mac-desc.png");
    });
    $(".billy-basic").click(function () {
        $(".selected-img").attr("src", "images/entrees/billy-basic.png");
        $(".selected-desc").attr("src", "images/desc/billy-basic-desc.png");
      });
    $(".double-troubles").click(function () {
        $(".selected-img").attr("src", "images/entrees/double-troubles.png");
        $(".selected-desc").attr("src", "images/desc/double-troubles-desc.png");
    });
    $(".chicken-dinner").click(function () {
          $(".selected-img").attr("src", "images/entrees/chicken-dinner.png");
          $(".selected-desc").attr("src", "images/desc/chicken-dinner-desc.png");
    });
    $(".hot-diggity-dogs").click(function () {
        $(".selected-img").attr("src", "images/entrees/hot-diggity-dogs.png");
        $(".selected-desc").attr("src", "images/desc/hot-diggity-dogs-desc.png");
    });
    $(".chili-cheesers").click(function () {
          $(".selected-img").attr("src", "images/entrees/chili-cheesers.png");
          $(".selected-desc").attr("src", "images/desc/chili-cheesers-desc.png");
    });
} );