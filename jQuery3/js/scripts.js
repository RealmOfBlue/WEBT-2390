$( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
      heightStyle: SVGTextContentElement,
      widthStyle: SVGTextContentElement,
        event: "mouseover"
        }).on('mouseleave', function () {
            $(this).accordion("option", "active", false);
        });
  } );