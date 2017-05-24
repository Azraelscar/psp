$(document).ready(function() {
	var video = document.getElementById('video');
	$('#switch').change(function() {
		$('.led--power').toggleClass('on-led-green');
		if ($('#switch').is(':checked')) {
			video.play();
			$('.screen').css('display','block');
      $('.led--memory').delay(8000).queue(function(next) {
      $(this).addClass("on-led-orange");
        next();
      });
      $('.led--wifi').delay(8000).queue(function(next) {
        $(this).addClass("on-led-green");
        next();
      });
		}else {
			video.pause();
			video.currentTime = 0;
			$('.screen').css('display','none');
      $('.led--memory').removeClass('on-led-orange');
      $('.led--wifi').removeClass('on-led-green');
		}
	});
});