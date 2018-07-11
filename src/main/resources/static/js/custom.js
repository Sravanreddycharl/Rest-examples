//alert("I'm active");

$(function() {
    $(window).on('resize', function resize()  {
        $(window).off('resize', resize);
        setTimeout(function () {
            var content = $('#content');
            var top = (window.innerHeight - content.height()) / 2;
            content.css('top', Math.max(0, top) + 'px');
            $(window).on('resize', resize);
        }, 50);
    }).resize();
});
function page_init() {
}

function myFunction() {
	
		 alert("I'm active");
		 var request = new XMLHttpRequest();
		 request.open('get','http://www.google.com');
		 request.send();
		 /*var request = new XMLHttpRequest();
		 request.open("GET", "http://localhost:9222/login", false(async flag), "userName", "password");
		  request.send();
		  alert("I'm not active");*/
		 
 }

