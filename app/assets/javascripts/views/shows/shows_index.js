TSSF.Views.ShowsIndex = Backbone.View.extend({
	template: JST["shows/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		var renderedContent = this.template({
			shows: this.collection
		})
		this.$el.html(renderedContent);
		return this;
	}
});