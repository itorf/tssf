TSSF.Views.AboutView = Backbone.View.extend({
	template: JST["about/about_page"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
});