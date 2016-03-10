import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    this.store.findAll('contact');
  },

//      init() {
//        debugger;
//      },
//
//      beforeModel(transition) {
//        console.log("HERE IS THE TRANSITION", transition);
//        debugger;
//      },
//
//      model(params, transition) {
//        console.log(params);
//        console.log(transition);
//        debugger;
//      },
//
//      afterModel(model, transition) {
//        console.log(model);
//        console.log(transition);
//        debugger;
//      },
//
//      activate() {
//        debugger;
//      },
//
//      setupController(controller, model) {
//        console.log(controller);
//        console.log(transition);
//        debugger;
//      },
//
//      renderTemplate(controller, model) {
//        console.log(controller);
//        console.log(model);
//        debugger;
//      }
});
