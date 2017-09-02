(function (window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    this.data= {};
  }

  DataStore.prototype.add = function (key, val) { // сохранение информации о заказе
    this.data[key] = val;
  };

  DataStore.prototype.get = function (key) { // поиск по ключу
    return this.data[key];
  };

  DataStore.prototype.getAll = function () { // возвращает ссылку на data
    return this.data;
  };

  DataStore.prototype.remove = function (key) { // удаление пары ключ : значение
    delete this.data[key];
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
