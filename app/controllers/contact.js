import Ember from 'ember';

export default Ember.Controller.extend({

    emailAddress: '',

    message: '',

    validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    validMessage: Ember.computed.gte('message.length', 5),

    isValid: Ember.computed.and('validMessage', 'validEmail'),
    isDisabled: Ember.computed.not('isValid'),

    mad : undefined,
    troll : 'are you mad?',
    userMadnessBinary : Ember.observer('mad', function(){

        if(this.get('mad')){
            this.set('troll', 'why you so mad bro?');
        } else {
            this.set('troll', 'Oh OK, well that\'s good. Are you sure you aren\'t mad?');
        }
    })

});
