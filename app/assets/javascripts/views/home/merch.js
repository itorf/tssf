TSSF.Views.Merch = Backbone.CompositeView.extend({
	template: JST["home/merch"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
})