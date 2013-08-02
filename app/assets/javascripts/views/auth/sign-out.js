App.AuthSignOutView = Ember.View.extend({
	templateName: 'auth/sign-out',

	submit: function (event, view) {
		event.preventDefault();
		event.stopPropagation();
		return App.Auth.signOut();
	}
});