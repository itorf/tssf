window.TSSF = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function () {
		
		TSSF.Shows = new TSSF.Collections.Shows;
		
		new TSSF.Routers.AppRouter({
			"$rootEl": $('#main')
		})
	
		Backbone.history.start();	
	}
};

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

var checkCollapse = function (selector) {
	if ($(selector).hasClass('in')) {
		$(selector).collapse('toggle');
	}
};

$('html').click(function (){
	checkCollapse('#bs-example-navbar-collapse-1');
});

$('#bs-example-navbar-collapse-1').click(function (event) {
	event.stopPropagation();
});
