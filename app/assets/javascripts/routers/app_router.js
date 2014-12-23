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
		var home = new TSSF.Views.HomeView();
		
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		});
		
		home.addSubview('.shows', showsIndex);
		
		this.$rootEl.html(home.render().$el);
	
	},
	
	shows: function () {
		TSSF.Shows.fetch();
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		});
		
		this.$rootEl.html(showsIndex.render().$el);
	}
})