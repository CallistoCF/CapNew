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
          $('#searcho').empty();
          $('#picto').hide();
          $('#info').hide();
          $('#infob').hide();
          $('#infoc').hide();
        }
      });
  });

  var picsondisplay = 0;
  var lastsearch;

  $( window ).resize(function() {
    var bb = $(window).width()
    console.log("window has been changed to " + bb);
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
          $('#info').html('<p>Yikes!  There are no Offical Lego sets for ' + val + ' in the rebrickable database!  Some Google Images to the left instead :-)</p>');
          $('#info').show();
          /*
          $('#infob').html('<p>Would you like to see a custom <a href="https://www.google.com/search?as_st=y&tbm=isch&as_q=lego+' + val + '&as_epq=&as_oq=&as_eq=&imgsz=&imgar=&imgc=&imgcolor=&imgtype=&cr=&as_sitesearch=&safe=images&as_filetype=&as_rights=">google</a> image search for ' + val + ' in lego?</p>');
          /*$('.gsc-input-box').html(val + ' lego'); */
          $('#infob').hide();
          $('#infoc').html('<p>Would you like to see <a href="https://en.wikipedia.org/wiki/Lego_Architecture"> a list </a>of places made in lego?</p>');
          $('#infoc').show();
          lastsearch = val;
          gii(val);
          picsondisplay = 1;
          $('#searcho').show();
          /*gmap(val);*/
        }
        if (data.results.length !== 0)
        {
          var a = data.results[0];
          console.log(a, a.descr);
          $('#searcho').hide();

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

  function bingsearch(searchq){
    console.log("emerygency bing img replacement search started!");
    $(function() {
    var params = {
        // Request parameters
        "q": searchq,
        "count": "10",
        "offset": "0",
        "mkt": "en-us",
        "safeSearch": "Moderate",
    };

    $.ajax({
        url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","9ca57af5d0c345fbb698c171948cec56");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        console.log("success");
        console.log(data.value);
        var aa = $(window).width()
        console.log("checksize is " + aa);
        var d = 9;
        if (aa <= 650)
        {
           var d = 3;
        }
        if (aa <= 900 && aa >= 650)
        {
           var d = 6;
        }
        for (var x = 0; x < d; x++)
        {
            var name = 'div.searchbo';
            var div = $('#searcho').append('<div class="searchbo ' + x + '"><img src="' + data.value[x].thumbnailUrl + '"></div>');
            $(name).html();
        }
        console.log("end image placement");
    })
    .fail(function() {
        console.log("error");
        });
    });
};


function gii(val){
  $('.gmapimg').hide();
  console.log("Google advanced Image search called!");
  var searchq = val + '+lego';
  $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBkRs0PB1z9zCh17Ul6jzkJAcpVpCMf40w&cx=007694209913361185258:dqzjo8ajsb0&searchType=image',
    data: {
      q: searchq,
          },
    method: 'GET',
    error: function(){
      console.log("An error has occurred, perhaps you've sent too many requests?");
      console.log("Launching emerygency bing search");
      bingsearch(searchq);
    },
    success: function(data) {
      console.log(data);
      if(data.items.length === 0)
      {
        console.log("error- no search results!");
      }
      if (data.items.length !== 0)
      {
        var aa = $(window).width()
        console.log("checksize is " + aa);
        $('#searcho').addClass("shadecity");
        var a = data.items[0];
        console.log("a is " + a);
        var d = 9;
        if (aa <= 650)
        {
           var d = 3;
        }
        if (aa <= 900 && aa >= 650)
        {
           var d = 6;
        }
        for (var x = 0; x < d; x++)
        {
            var name = 'div.searchbo';
            var div = $('#searcho').append('<div class="searchbo ' + x + '"><img src="' + data.items[x].link + '"></div>');
            $(name).html();
        }
      }
      }


    });

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
