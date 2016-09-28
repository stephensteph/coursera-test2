(function () {
  'use strict';


  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var list1 = this;
    list1.listBuy = ShoppingListCheckOffService.getToBuyList();

    list1.checkOff = function (itemIndex) {
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
  };


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var list2 = this;
  list2.listBought = ShoppingListCheckOffService.getBoughtList();
};


function ShoppingListCheckOffService () {
  var service = this;

var listBought = [];
  var ToBuyList =  [
      {
        name: "cookies",
        quantity: "10"
      },
      {
        name: "Milk Powders",
        quantity: "2"
      },
      {
        name: "Chocolates",
        quantity: "2"
      },
      {
        name: "Biscuits",
        quantity: "2"
      },
      {
        name: "Meats",
        quantity: "4"
      }
    ];

    service.getToBuyList = function () {
      return ToBuyList;
    };

    service.getBoughtList = function (itemName, itemQuantity) {
      return listBought;
    };

    service.checkOff = function (itemIndex) {
      listBought.push(ToBuyList[itemIndex]);
      ToBuyList.splice(itemIndex, 1);

    };

};

})();
