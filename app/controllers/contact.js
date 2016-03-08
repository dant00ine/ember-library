import Ember from 'ember';

export default Ember.Controller.extend({

    troll : 'are you mad?',

    mad : undefined,

    userMadnessBinary : Ember.observer('mad', function(){

        console.log('mad changed to', this.get('mad'));

        if(this.get('mad') === true){

            this.set('troll', 'why you so mad bro?');

        } else {

            this.set('troll', 'Oh OK, well that\'s good. Are you sure you aren\'t mad?');
        }
    })

});
