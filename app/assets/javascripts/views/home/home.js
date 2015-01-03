TSSF.Views.HomeView = Backbone.CompositeView.extend({
	template: JST["home/home"],
	
	initialize: function () {
		this.listenTo(TSSF.Shows, "sync", this.addShowItems);
		
		var banner = new TSSF.Views.Banner();
		var ad = new TSSF.Views.Ad();
		
		this.addSubview('.banner', banner);
		this.addSubview('.ad', ad);
	},
	
	addShowItems: function () {
		var showItem1 = new TSSF.Views.ShowItem({
			model: TSSF.Shows.first()
		});
		var showItem2 = new TSSF.Views.ShowItem({
			model: TSSF.Shows.models[1]
		});
		this.addSubview('.shows1', showItem1);
		this.addSubview('.shows2', showItem2);
	},
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		this.renderSubviews();
		return this;
	}
})




