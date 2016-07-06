// Empty JS for your own code to be here
$().ready(function () {
	$("#video-img").click(function (){
		$('#video-img').fadeOut("slow", function(){
    	var div = $('');
    	$(this).replaceWith(div);

	});
});
})