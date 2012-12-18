define('app/views/application', [ 'ember'	],
	function( ) {
		return Ember.ContainerView.extend({
			createTodoView: Ember.TextField.create({
				entriesBinding: 'controller.namespace.entriesController',
				placeholder: 'What needs to be done?',
				elementId: 'new-todo',
				insertNewline: function() {
					var value = this.get( 'value' );
					if ( value ) {
						this.get( 'entries' ).createNew( value );
						this.set( 'value', '' );
					}
				}
			}),
		})
	}
);