TSSF.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"home": "home",
		"shows": "shows"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	home: function () {

		TSSF.Shows.fetch({
			remove: false,
			data: { page: 1 },
		});
		var home = new TSSF.Views.HomeView();
		
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		});
		var banner = new TSSF.Views.Banner();
		var ad = new TSSF.Views.Ad();
		var merch = new TSSF.Views.Merch();
		
		home.addSubview('.shows', showsIndex);
		home.addSubview('.banner', banner);
		home.addSubview('.ad', ad);
		home.addSubview('.merch', merch);
		
		this._swapView(home);
		
		bannerFade.startFade();
	},
	
	shows: function () {
		TSSF.Shows.fetch({
			remove: false,
			data: { page: 1 },
		});
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		});
		
		this._swapView(showsIndex);
	},
	
	_swapView: function (newView) {
		this._currentView && this._currentView.remove();
		this._currentView = newView;
		this.$rootEl.html(newView.render().$el);
		
		// $('#bs-example-navbar-collapse-1').collapse('toggle');
		checkCollapse('#bs-example-navbar-collapse-1');
		bannerFade.stopFade();
	}
})