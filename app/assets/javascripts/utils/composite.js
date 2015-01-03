Backbone.CompositeView = Backbone.View.extend({
	subviews: function (selector) {
		this._subviews = this._subviews || {};
		
		if (selector) {
			this._subviews[selector] = this._subviews[selector] || [];
			return this._subviews[selector];
		} else {
			return this._subviews;
		}
		
	},
	
	addSubview: function (selector, view) {
		this.subviews(selector).push(view);
		this.attachSubview(selector, view);
		// var selectorSubviews = this.subviews[selector] || (this.subviews[selector] = []);
	},
	
	attachSubview: function (selector, subview) {
		this.$(selector).append(subview.render().$el);
		subview.delegateEvents();
	},
	
	renderSubviews: function () {
		var view = this;
		_(this.subviews()).each(function (selectorSubviews, selector) {
			view.$(selector).empty();
			_(selectorSubviews).each(function (subview) {
				view.attachSubview(selector, subview);
			})
		})
	},
	
	remove: function () {
		Backbone.View.prototype.remove.call(this);
		
		_(this.subviews()).each(function (subviews) {
			_(subviews).each(function (subview){
				subview.remove();
			})
		})
	}
})