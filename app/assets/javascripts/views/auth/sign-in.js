App.AuthSignInView = Ember.View.extend({
	templateName: 'auth/sign-in',
	email: null,
	password: null,
	
	submit: function (event, view) {
		event.preventDefault();
		event.stopPropagation();
		return App.Auth.signIn({
			data: {
				email: this.get('email'),
				password: this.get('password')
			}
		});
	}
});