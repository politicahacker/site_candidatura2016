// Empty JS for your own code to be here
var $root = $('html, body');
var $header = $('#menu');

$().ready(function () {
	$("#video-img").click(function (){
	  $('#video-embed').show();
		$('#video-img').fadeOut("slow", function(){
    	var div = $('');
    	$(this).replaceWith(div);
	  });
  });
  
  $('a[href*=#]').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - $header.height()
    }, 500);
    return false;
  });
})
