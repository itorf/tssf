TSSF.Views.MusicView = Backbone.View.extend({
	template: JST["music/music_page"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
});