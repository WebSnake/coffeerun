(function (window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('Галактика', new DataStore());
  window.myTruck = myTruck; // экспорт экземпляра Truck
})(window);
