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
		var selectorSubviews = this.subviews[selector] || (this.subviews[selector] = []);
	},
	
	renderSubviews: function () {
		var view = this;
		_(this.subviews()).each(function (selectorSubviews, selector) {
			var $selectorEl = view.$(selector).empty();
			_(selectorSubviews).each(function (subview) {
				$selectorEl.append(subview.render().$el);
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