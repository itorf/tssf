TSSF.Views.ShowItem = Backbone.CompositeView.extend({
	template: JST["shows/item"],
	
	className: 'show-item',
	
	tagName: 'tr',
	
	initialize: function () {
		this.parseDate();
	},
	
	parseDate: function () {
		var date = this.model.attributes.date;
		var year = parseInt(date.slice(0, 4));
		var month = parseInt(date.slice(5, 7)) - 1;
		var day = parseInt(date.slice(8, 10));
		this._date = new Date(year, month, day);
	},
	
	months: {
		0: 'January',
		1: 'February',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December'
	},
	
	days: {
		0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday'
	},
	
	render: function () {
		var renderedContent = this.template({
			show: this.model,
			month: this.months[this._date.getMonth()],
			day: this.days[this._date.getDay()],
			date: this._date.getDate(),
			year: this._date.getFullYear()
		});
		this.$el.html(renderedContent);
		return this;
	}
});