TSSF.Views.ContactView = Backbone.View.extend({
	template: JST["contact/contact_info"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
});