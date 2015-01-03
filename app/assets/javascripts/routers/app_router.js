TSSF.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "home",
		"home": "home",
		"shows": "shows",
		"videos": "videos",
		"contact": "contact",
		"about": "about",
		"music": "music"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	home: function () {

		TSSF.Shows.fetch({
			remove: true,
			data: { page: 1 },
		});
		var home = new TSSF.Views.HomeView();
		
		this._swapView(home);
		bannerFade.startFade();
	},
	
	shows: function () {
		TSSF.Shows.fetch({
			remove: true,
			data: { page: 1 },
		});
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		});
		
		this._swapView(showsIndex);
	},
	
	videos: function () {
		var videosView = new TSSF.Views.VideosView();
		this._swapView(videosView);
	},
	
	contact: function () {
		var contactView = new TSSF.Views.ContactView();
		this._swapView(contactView);
	},
	
	about: function () {
		var aboutView = new TSSF.Views.AboutView();
		this._swapView(aboutView);
	},
	
	music: function () {
		var musicView = new TSSF.Views.MusicView();
		this._swapView(musicView);
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