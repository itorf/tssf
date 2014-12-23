var bannerFade = {
	startFade: function () {
		$('.fadein img:gt(0)').hide();

		fadeInterval = setInterval(function () {
			$('.fadein :first-child').fadeOut(function () {
				$('.fadein :first-child').next('img').fadeIn().end().appendTo('.fadein');
			});
		}, 5000);
	},
	
	stopFade: function () {
		if (typeof(fadeInterval) !== 'undefined') {
			clearInterval(fadeInterval);	
		}
	}
};
