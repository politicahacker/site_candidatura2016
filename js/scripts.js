// Empty JS for your own code to be here
var $root = $('html, body');
var $header = $('#menu');

$().ready(function () {
	$("#video-img").click(function (){
   	var div = '<div id="video-embed"><iframe src="https://www.youtube.com/embed/oliAYl6853w?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
	  $(div).insertBefore(this);
		$(this).fadeOut("slow");
  });
  
  $('li a[href*=#]').click(function() {
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - $header.height()
    }, 500);
    return false;
  });

  $('#maisvideos').click(function (e) {
  	e.preventDefault;
  	$(this).hide();
  	$("#videos .more").fadeIn("slow");
  });


//GAnalytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80435506-1', 'auto');
  ga('send', 'pageview');
  
  //Timeout event
  setTimeout("ga('send', 'event', { eventCategory: '30 seconds on page', eventAction: 'Read' })", 30000);
  
  //Scroll event  
  var runned = false; 
  $( window ).scroll( function() { 
  if ( $( document ).scrollTop() >= 250 && runned == false ) { 
  ga('send', 'event', { eventCategory: 'Scrolled 250px', eventAction: 'Scroll' }); 
  runned = true; 
  }});

})


