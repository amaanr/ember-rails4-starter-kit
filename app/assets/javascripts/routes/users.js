App.UsersRoute = Ember.Route.extend(App.Auth.AuthRedirectable, {
	model: function() {
		return App.User.find();
	}
});