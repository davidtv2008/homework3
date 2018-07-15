(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder(data);
    checkList.addRow(data);
  });
  console.log(formHandler);
})(window);

function updateStrength() {
  var sliderValue = document.getElementById('strengthLevel').value;
  var strength = document.getElementById('strengthAmount');

  if (sliderValue < 25) {
    strength.style.backgroundColor = 'green';
  } else if (sliderValue > 25 && sliderValue < 75) {
    strength.style.backgroundColor = 'yellow';
  } else {
    strength.style.backgroundColor = 'red';
  }
  strength.innerHTML = sliderValue;
}

function resetAll() {
  var strength = document.getElementById('strengthAmount');
  strength.style.backgroundColor = 'yellow';
  strength.innerHTML = 30;
}

function pay() {
  window.location.href = 'paymentPage.html';
}
