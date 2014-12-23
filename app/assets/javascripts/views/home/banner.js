TSSF.Views.Banner = Backbone.CompositeView.extend({
	template: JST['home/banner'],
	
	render: function () {
		var renderedContent = this.template();
		
		this.$el.html(renderedContent);
		return this;
	}
})