Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n				");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.render || depth0.render),stack1 ? stack1.call(depth0, "auth/sign-out", options) : helperMissing.call(depth0, "render", "auth/sign-out", options))));
  data.buffer.push("\n			");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n				<button type=\"button\" class=\"btn btn-default navbar-btn\">Log in</button>\n				<button type=\"button\" class=\"btn btn-primary navbar-btn\">Register</button>\n			");
  }

  data.buffer.push("<div class=\"navbar navbar-fixed-top\">\n	<div class=\"container\" style=\"width:auto;\">\n		<a class=\"navbar-brand\" href=\"#\">Starter Kit</a>\n		<ul class=\"nav navbar-nav\">\n			<li class=\"active\"><a href=\"#\">Home</a></li>\n			<li><a href=\"#\">About</a></li>\n			<li><a href=\"#\">Contact</a></li>\n		</ul>\n		<ul class=\"nav navbar-nav pull-right\">\n			");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "App.Auth.signedIn", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</ul>	\n	</div>\n</div>	\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.AuthView", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});
