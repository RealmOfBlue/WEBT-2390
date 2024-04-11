$( function() {
    $( ".desktop" ).accordion({
      collapsible: true,
      active: false,
      heightStyle: SVGTextContentElement,
        event: "mouseover"
        }).on('mouseleave', function () {
            $(this).accordion("option", "active", false);
        });

        $( ".mobile" ).accordion({
            collapsible: true,
            active: false,
            heightStyle: SVGTextContentElement,

        });

        $( ".item" ).accordion({
            collapsible: true,
            active: false,
              });

        $( ".item-full" ).accordion({
                collapsible: true,
                active: false,

        });
        $( ".preview" ).accordion({
            collapsible: true,
            active: false,
            heightStyle: SVGTextContentElement,

        });
                
  } );

  $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  } );

// ENTREES
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


    // SIDES
$( function() {
  
    $(".ring-dingers").click(function () {
      $(".selected-img").attr("src", "images/sides/ring-dingers.png");
      $(".selected-desc").attr("src", "images/desc/ring-dingers-desc.png");
    });
    $(".fries").click(function () {
        $(".selected-img").attr("src", "images/sides/fries.png");
        $(".selected-desc").attr("src", "images/desc/fries-desc.png");
      });
    $(".billy-mac-n-cheese").click(function () {
        $(".selected-img").attr("src", "images/sides/billy-mac-n-cheese.png");
        $(".selected-desc").attr("src", "images/desc/billy-mac-n-cheese-desc.png");
    });
    $(".chili-cheese-fries").click(function () {
          $(".selected-img").attr("src", "images/sides/chili-cheese-fries.png");
          $(".selected-desc").attr("src", "images/desc/chili-cheese-fries-desc.png");
    });
    $(".sweet-potato-fries").click(function () {
        $(".selected-img").attr("src", "images/sides/sweet-potato-fries.png");
        $(".selected-desc").attr("src", "images/desc/sweet-potato-fries-desc.png");
    });
    
} );

// DESSERTS
$( function() {
  
    $(".happy-birthday-to-you-sundae").click(function () {
      $(".selected-img").attr("src", "images/desserts/happy-birthday-to-you-sundae.png");
      $(".selected-desc").attr("src", "images/desc/happy-birthday-to-you-desc.png");
    });
    $(".take-me-to-church-chocolate-sundae").click(function () {
        $(".selected-img").attr("src", "images/desserts/take-me-to-church-chocolate-sundae.png");
        $(".selected-desc").attr("src", "images/desc/take-me-to-church-desc.png");
      });
    $(".coconutty-cocoa-chip-cookies").click(function () {
        $(".selected-img").attr("src", "images/desserts/coconutty-cocoa-chip-cookies.png");
        $(".selected-desc").attr("src", "images/desc/take-me-to-church-desc.png");
    });
    $(".triple-chocolate-brownies").click(function () {
          $(".selected-img").attr("src", "images/desserts/triple-chocolate-brownies.png");
          $(".selected-desc").attr("src", "images/desc/triple-chocolate-brownies-desc.png");
    });
    $(".apple-fritters").click(function () {
        $(".selected-img").attr("src", "images/desserts/apple-fritters.png");
        $(".selected-desc").attr("src", "images/desc/apple-fritters-desc.png");
    });

} );
    // DRINKS
$( function() {
  
    $(".coke").click(function () {
      $(".selected-img").attr("src", "images/drinks/coke.png");
      $(".selected-desc").attr("src", "images/desc/coke-desc.png");
    });
    $(".sprite").click(function () {
        $(".selected-img").attr("src", "images/drinks/sprite.png");
        $(".selected-desc").attr("src", "images/desc/sprite-desc.png");
      });
    $(".dr-pepper").click(function () {
        $(".selected-img").attr("src", "images/drinks/dr-pepper.png");
        $(".selected-desc").attr("src", "images/desc/dr-pepper-desc.png");
    });
    $(".soft-drink").click(function () {
          $(".selected-img").attr("src", "images/drinks/soft-drink.png");
          $(".selected-desc").attr("src", "images/desc/soft-drink-desc.png");
    });
    $(".choc-shake").click(function () {
        $(".selected-img").attr("src", "images/drinks/choc-shake.png");
        $(".selected-desc").attr("src", "images/desc/choc-shake-desc.png");
    });
    $(".pb-shake").click(function () {
        $(".selected-img").attr("src", "images/drinks/pb-shake.png");
        $(".selected-desc").attr("src", "images/desc/pb-shake-desc.png");
    });
    
    
} );


