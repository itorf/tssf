TSSF.Views.ShowsIndex = Backbone.CompositeView.extend({
	template: JST["shows/index"],
	
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.collection, "sync", this.disableMore);
	},
	
	events: {
		'click .more-shows': 'loadMoreShows',
		'click .tix': 'navToTickets'
	},

	loadMoreShows: function () {
		var currentPage = parseInt(this.collection.page);
		var lastPage = parseInt(this.collection.total_pages);
		var nextPage = currentPage + 1;
		
		if (nextPage <= lastPage) {
			this.collection.fetch({
				remove: false,
				data: { page: nextPage}
			});
		}
	},
	
	disableMore: function () {
		var currentPage = parseInt(this.collection.page);
		var lastPage = parseInt(this.collection.total_pages);
		if (currentPage >= lastPage) {
			$('.more-shows').prop('disabled', true);
		}
	},
	
	navToTickets: function () {
		var url = $(event.target).data("url");
		var win = window.open(url, '_blank');
		win.focus();
	},
	

	render: function () {
		var renderedContent = this.template({
			shows: this.collection,
			page: this.collection.page,
			totalPages: this.collection.total_pages
		})
		this.$el.html(renderedContent);
		return this;
	}
});