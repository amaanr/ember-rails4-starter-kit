// routes are standard, using the history API because
// hashes in the URL do not look natural
// this is why we reopen the router and set the location
App.Router.reopen({
	location: 'history'
});

App.Router.map(function() {
	this.resource('users', function() {
		return this.route('show', {
			path: '/:user_id'
		});
	});
	return this.route('sign-in');
});