TSSF.Collections.Shows = Backbone.Collection.extend({
	model: TSSF.Models.Show,
	url: '/api/shows',
	
	// getOrFetch: function (id) {
	//
	// }
	
	parse: function (response) {
		this.page = response.page;
		this.total_pages = response.total_pages;
		return response.models;
	}
})