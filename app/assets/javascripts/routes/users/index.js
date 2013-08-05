App.UsersIndexRoute = Ember.Route.extend(App.Auth.AuthRedirectable, {
	model: function() {
		App.User.find();
	}
});