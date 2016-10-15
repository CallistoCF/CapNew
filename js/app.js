$( document ).ready(function() {
  console.log( 'ready!' );
  $('.sidebar').addClass('animated bounceInLeft');
	$('#logo').addClass('animated bounceInLeft');
  $('.vidbar').addClass('animated bounceInLeft');
  $('.icon_links').addClass('animated bounceInUp');
  $('.TitleBar').addClass('animated zoomIn');
  $('.sholder').addClass('animated zoomIn');
  $('.qbox').addClass('animated zoomIn');



  $(".TitleBar").mouseover(function(event){

    $('.TitleBar').toggleClass('animated rubberBand');
  });

  $(".searchwrap").mouseover(function(){
      $( ".searchwrap" ).parent().css( "opacity", "1" );});
  $(".searchwrap").mouseleave(function(){
     $( ".searchwrap" ).parent().css( "opacity", ".5" );});
  $(".searchwrap_y").mouseover(function(){
      $( ".searchwrap_y" ).parent().css( "opacity", "1" );
           });
  $(".searchwrap_y").mouseleave(function(){
      $( ".searchwrap_y" ).parent().css( "opacity", ".5" );
              });
  $(".searchwrap_b").mouseover(function(){
      $( ".searchwrap_b" ).parent().css( "opacity", "1" );
                 });
  $(".searchwrap_b").mouseleave(function(){
      $( ".searchwrap_b" ).parent().css( "opacity", ".5" );
                    });

$('#action-button').click(function() {
  console.log("Action button clicked!");
   $.ajax({
      url: 'https://rebrickable.com/api/search?key=05VzmYE6Rj&search=&type=',
      data: {
         format: 'json'
      },
      "method": "GET",
          "headers": {
              "cache-control": "no-cache"
            },
      dataType: 'json',
      success: function(data) {
        console.log(data);
         var $title = $('<h1>').text(data.results[0].descr);
         console.log(data.results[0].img_url);
         var $image = $('#picto').html('<img src="' + data.results[0].img_url + '">');
         $('#info')
            .append($title);
                              },
            });
                                    });

});
/*
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://rebrickable.com/api/search?key=05VzmYE6Rj&search=spaceship&type=S",
      "method": "GET",
      "headers": {
        "cache-control": "no-cache",
        "postman-token": "5e52c5ba-950a-ef8a-26ef-26bd29815307"}
      };
  $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }); */





/* rebrickable: 05VzmYE6Rj

  brickset: SN9Y-MBSe-KJ4o  */
