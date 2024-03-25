

  $( function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
 
    $( ".portlet-toggle" ).on( "click", function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
  } );

  $( function() {
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    }); 
 } );



 $( function() {
  $(".oreo").attr("src", "images/kitty1ready.png");

  $(".oreo").click(function () {
    $(".oreo").attr("src", "images/oreo-desc.png");
  });
  $(".oreo").dblclick(function () {
    $(".oreo").attr("src", "images/kitty1ready.png");
  });

  $(".bob").click(function () {
    $(".bob").attr("src", "images/bob-desc.png");
  });
  $(".bob").dblclick(function () {
    $(".bob").attr("src", "images/kitty5ready.png");
  });


  $(".sir-fluffykins").click(function () {
    $(".sir-fluffykins").attr("src", "images/fluffykins-desc.png");
  });
  $(".sir-fluffykins").dblclick(function () {
    $(".sir-fluffykins").attr("src", "images/kitty3ready.png");
  });

  $(".ashely").click(function () {
    $(".ashely").attr("src", "images/ashely-desc.png");
  });
  $(".ashely").dblclick(function () {
    $(".ashely").attr("src", "images/kitty2ready.png");
  });

  $(".pringle").click(function () {
    $(".pringle").attr("src", "images/pringle-desc.png");
  });
  $(".pringle").dblclick(function () {
    $(".pringle").attr("src", "images/kitty4ready.png");
  });

} );