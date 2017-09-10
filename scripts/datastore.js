(function (window) {
  'use strict';
  var App = window.App || {};
  var Promise = window.Promise;

  function DataStore() {
    this.data= {};
  }

  function promiseResolveWith(value) {
    var promise = new Promise(function (resolve, reject) {
      resolve(value);
    });
    return promise;
  }

  DataStore.prototype.add = function (key, val) { // сохранение информации о заказе
    return promiseResolveWith(null);
  };

  DataStore.prototype.get = function (key) { // поиск по ключу
    return promiseResolveWith(this.data[key]);
  };

  DataStore.prototype.getAll = function () { // возвращает ссылку на data
    return promiseResolveWith(this.data);
  };

  DataStore.prototype.remove = function (key) { // удаление пары ключ : значение
    delete this.data[key];
    return promiseResolveWith(null);
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);

/*
(function (window) {
  'use strict';
  var App = window.App || {};

  var data = {};

  function DataStore() {

    this.add = function (key, val) { // сохранение информации о заказе
      data[key] = val;
    };

    this.get = function (key) { // поиск по ключу
      return data[key];
    };

    this.getAll = function () { // возвращает ссылку на data
      return data;
    };

    this.remove = function (key) { // удаление пары ключ : значение
      delete data[key];
    };
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
*/
