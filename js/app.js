$( document ).ready(function() {
  console.log( 'ready!' );

  $('.sidebar').addClass('animated bounceInLeft');
	$('#logol').addClass('animated bounceInLeft');
  $('#logor').addClass('animated bounceInRight');
  $('.vidbar').addClass('animated bounceInLeft');
  $('.icon_links').addClass('animated bounceInUp');
  $('.TitleBar').addClass('animated zoomIn');
  $('.sholder').addClass('animated zoomIn');
  $('.qbox').addClass('animated zoomIn');
  $('.qbox_e').addClass('animated bounceInRight');

  $(document).ready(function(){
      $('#extsearch_m').keypress(function(e){
        if(e.keyCode==13){
          $('#action-button').click();
          $('#picto').hide();
          $('#info').hide();
          $('#infob').hide();
          $('#infoc').hide();
        }
      });
  });


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
  /*
  $(".sholder").mouseover(function(){
  $( ".sholder" ).parent().css( "opacity", "1" );});
  $(".sholder").mouseleave(function(){
  $( ".sholder" ).parent().css( "opacity", ".5" );});
*/
  $('#action-button').click(function() {
    console.log("Action button clicked!");
/*  var searchTerm = $('#query').val(); */
    var val = $("input#extsearch_m").val();
    val = val.replace(/\s/g, '+');
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
        if(data.results.length === 0)
        {
          console.log("location not found!");
          console.log("There are no Offical Lego sets for location " + val + " in the rebrickable-database!");
          $('#info').html('<p>Yikes!  There are no Offical Lego sets for ' + val + ' in the rebrickable database!</p>');
          $('#info').show();
          $('#infob').html('<p>Would you like to search google for ' + val + ' in lego?</p>');
          $('#infob').show();
          $('#infoc').html('<p>Would you like to search Instagram for ' + val + ' in lego?</p>');
          $('#infoc').show();
          gmap(val);
        }
        if (data.results.length !== 0)
        {
          var a = data.results[0];
          console.log(a, a.descr);
          $('#info').show();
          $('#infob').show();
          $('#infoc').show();
          $('#info').html(data.results[0].descr);
          $('#infob').html("<p>#ofPieces: " + data.results[0].pieces + "</p>");
          $('#infoc').html("<p>SetNumber:  " + data.results[0].set_id + "</p>");

          $('#picto').show();
          $('#picto').html('<img src=' + data.results[0].img_big + '></img>');
          gmap(val);
        }


          },
      });


  });

function gmap(val){
  console.log("gmap called, val is " + val);
  $('.gmapimg').show();
    var gurl = 'https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyACpue7v_V7afU6vsUx7sBq4CFQmDSoFqI';
    var gsize = '&size=1200x1200';
    var gcenter = '&center=' + val;
    var gg = gurl + gsize + gcenter;
    console.log("gg is " + gg);
    var b = 'url(' + gg + ')';
    console.log("b is " + b);
    $('.gmapimg').css("background-image",  b);


  }



});
/*
https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyACpue7v_V7afU6vsUx7sBq4CFQmDSoFqI&center=Venice,%20Italy&size=600x600
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

/*google static maps: AIzaSyACpue7v_V7afU6vsUx7sBq4CFQmDSoFqI */




/* rebrickable: 05VzmYE6Rj

  brickset: SN9Y-MBSe-KJ4o  */
