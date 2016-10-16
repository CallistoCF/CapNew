$( document ).ready(function() {
  console.log( 'ready!' );
  $('.sidebar').addClass('animated bounceInLeft');
	$('#logo').addClass('animated bounceInLeft');
  $('.vidbar').addClass('animated bounceInLeft');
  $('.icon_links').addClass('animated bounceInUp');



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

$('#testform').submit(function(event) {
    // get all the inputs into an array.
    var input = $('#testform input').val();
    event.preventDefault();
    console.log(input);
    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    $.ajax({
       url: 'https://rebrickable.com/api/search',
       data: {
          key: '05VzmYE6Rj',
          format: 'json',
          query: input,
          type: 'S'
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
