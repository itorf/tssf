TSSF.Views.VideosView = Backbone.View.extend({
	template: JST["videos/vids_index"],
	
	className: 'vids',
	
	tagName: 'div',
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
});