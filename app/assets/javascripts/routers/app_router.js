TSSF.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"home": "home"
	},
	
	initialize: function (options) {
		this.$rootEl = options.$rootEl
	},
	
	home: function () {

		TSSF.Shows.fetch();
		debugger
		var showsIndex = new TSSF.Views.ShowsIndex({
			collection: TSSF.Shows
		})
		
		this.$rootEl.html(showsIndex.render().$el);
	
	}
})