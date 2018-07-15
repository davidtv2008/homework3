(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-payment-form="form"]';
  var App = window.App;
  var FormHandler = App.FormHandler;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler();
  console.log(formHandler);
})(window);

console.log('testing');
