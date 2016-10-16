$( document ).ready(function() {
  console.log( 'ready!' );

  $('.sidebar').addClass('animated bounceInLeft');
	$('#logo').addClass('animated bounceInLeft');
  $('.vidbar').addClass('animated bounceInLeft');
  $('.icon_links').addClass('animated bounceInUp');
  $('.TitleBar').addClass('animated zoomIn');
  $('.sholder').addClass('animated zoomIn');
  $('.qbox').addClass('animated zoomIn');
  $('.qbox_e').addClass('animated bounceInRight');

  $(".references").click(function(){
    console.log("references clicked");
  $(".references").toggleClass("btnclk");
  $( function() {
  $( "#dialog" ).dialog();
    } );
    setTimeout(function() { $(".references").toggleClass("btnclk"); }, 5000);
  });

  $(".qbox_e").mouseleave(function(){
  $(".qbox_e").addClass("shady");
  $(".qbox_e").removeClass("notshady");});
  $(".qbox_e").mouseover(function(){
  $(".qbox_e").addClass("notshady");
  $(".qbox_e").removeClass("shady");});
  $(".searchwrap").mouseover(function(){
  $( ".searchwrap" ).parent().css( "opacity", "1" );});
  $(".searchwrap").mouseleave(function(){
  $( ".searchwrap" ).parent().css( "opacity", ".5" );});
  $(".searchwrap_y").mouseover(function(){
  $( ".searchwrap_y" ).parent().css( "opacity", "1" );});
  $(".searchwrap_y").mouseleave(function(){
  $( ".searchwrap_y" ).parent().css( "opacity", ".5" );});
  $(".searchwrap_b").mouseover(function(){
      $( ".searchwrap_b" ).parent().css( "opacity", "1" );
                 });
  $(".searchwrap_b").mouseleave(function(){
  $( ".searchwrap_b" ).parent().css( "opacity", ".5" );});
  $(".sholder").mouseover(function(){
  $( ".sholder" ).parent().css( "opacity", "1" );});
  $(".sholder").mouseleave(function(){
  $( ".sholder" ).parent().css( "opacity", ".5" );});

  $('#action-button').click(function() {
    console.log("Action button clicked!");
/*  var searchTerm = $('#query').val(); */
    var val = $("input#extsearchbrickable").val();
    console.log("val is" + val);
    $.ajax({
      url: 'https://rebrickable.com/api/search?key=05VzmYE6Rj',
      data: {
        format: 'json',
        type: 'S',
        query: val,
        theme1: 'Architecture',
            },
      method: 'GET',
      success: function(data) {
        console.log(data);
        var a = data.results[0];
        console.log(a, a.descr);
        $('#info').html(data.results[0].descr);
        $('#picto').html('<img src=' + data.results[0].img_big + '></img>');
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
