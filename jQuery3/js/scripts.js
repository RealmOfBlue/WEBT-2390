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