TSSF.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"home": "home",
		"shows": "shows"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	home: function () {

		TSSF.Shows.fetch();
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		});
		
		this.$rootEl.html(showsIndex.render().$el);
	
	},
	
	shows: function () {
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		});
		
		this.$rootEl.html(showsIndex.render().$el);
	}
})