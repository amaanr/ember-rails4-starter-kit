App.Auth = Ember.Auth.create({
  signInEndPoint: '/users/sign_in',
  signOutEndPoint: '/users/sign_out',
  tokenKey: 'auth_token',
  tokenIdKey: 'user_id'
});
