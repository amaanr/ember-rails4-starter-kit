App.Store = DS.Store.extend({
	revision: 12,
	adapter: DS.RESTAdapter.create({
		url: '/api'
	})
});
