App.UsersShowRoute = Ember.Route.extend(App.Auth.Redirectable, {
	serialize: function(model) {
		return {
			user_id: model.get('param')
		};
	}
});