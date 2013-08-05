App.Auth = Ember.Auth.create({
  signInEndPoint: '/users/sign_in',
  signOutEndPoint: '/users/sign_out',
  tokenKey: 'auth_token',
  tokenIdKey: 'user_id',
  
  modules: ['emberData', 'authRedirectable', 'actionRedirectable'],
  authRedirectable: {
  	route: 'sign-in'
  },
  actionRedirectable: {
  	signInRoute: 'users',
  	signInSmart: true,
  	signInBlacklist: ['sign-in'],
  	// signOutRoute: 'posts',
  }
});
