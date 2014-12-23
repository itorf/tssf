TSSF.Views.Ad = Backbone.CompositeView.extend({
	template: JST["home/ad"],
	
	render: function () {
		var renderedContent = this.template();
		
		this.$el.html(renderedContent);
		return this;
	}
})