// Define libraries
require.config({
  paths: {
    jquery: 'vendors/jquery-1.8.3.min',
    ember: 'vendors/ember-1.0.0-pre.2.min',
    handlebars: 'vendors/handlebars-1.0.rc.1'
  }
});

define( 'app', [
  'app/router',
  'app/views/application',
  'jquery',
  'handlebars',
  'ember'
  ], function( Router, ApplicationView ) {
    var App = Ember.Application.create({
      VERSION: '1.0',
      Router: Router,
      ApplicationController: Ember.Controller.extend(),
      ApplicationView: ApplicationView,
      ready: function() {
        this.initialize();
      }
    });

    // Expose the application globally
    return window.Todos = App;
  }
);