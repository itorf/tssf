Backbone.CompositeView = Backbone.View.extend({
	subviews: {},
	
	addSubview: function (selector, view) {
		var selectorSubviews = this.subviews[selector] || (this.subviews[selector] = []);
		selectorSubviews.push(view);
	},
	
	renderSubviews: function () {
		var view = this;
		_(this.subviews).each(function (selectorSubviews, selector) {
			var $selectorEl = view.$(selector).empty();
			_(selectorSubviews).each(function (subview) {
				$selectorEl.append(subview.render().$el);
			})
		})
	}
})