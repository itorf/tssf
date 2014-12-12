TSSF.Views.ShowsIndex = Backbone.View.extend({
	template: JST["shows/index"],
	
	initiailize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	render: function () {
		debugger
		var renderedContent = this.template({
			shows: this.collection
		})
		this.$el.html(renderedContent);
		return this;
	}
});