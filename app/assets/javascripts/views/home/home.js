TSSF.Views.HomeView = Backbone.CompositeView.extend({
	template: JST["home/home"],
	
	render: function () {
		var renderedContent = this.template({});
		this.$el.html(renderedContent);
		this.renderSubviews();
		return this;
	}
})