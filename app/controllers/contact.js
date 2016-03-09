import Ember from 'ember';

export default Ember.Controller.extend({

    responseMessage: '',

    emailAddress: '',

    message: '',

    validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    validMessage: Ember.computed.gte('message.length', 5),

    isValid: Ember.computed.and('validMessage', 'validEmail'),
    isDisabled: Ember.computed.not('isValid'),

    actions : {
      submitMessage(){
        const email = this.get('emailAddress');

        const message = this.get('message');

        const mad = this.get('mad');
        console.log('the value of mad:', mad);

        const newContact = this.store.createRecord('contact', {
          email: email,
          message: message,
          mad: mad

        });

        newContact.save().then((response) => {

          this.set('responseMessage', `Thank you, we will get back to you (hopefully soon) at ${this.get('emailAddress')}`);
          console.log(`Here is the server response: ${response}`)
          this.set('emailAddress', '');
          this.set('message', '');
          this.set('mad', false)

        })
      }
    },

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
