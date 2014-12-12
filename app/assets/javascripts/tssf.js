window.TSSF = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function () {
		
		TSSF.Shows = new TSSF.Collections.Shows
		
		new TSSF.Routers.AppRouter({
			"$rootEl": $('#main')
		})
	
		Backbone.history.start();	
	}
};