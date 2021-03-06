var totalCost = [];
function order(type, size, crust, toppings, delivery) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.delivery = delivery;
  this.price = 0;
}
var pizzaType = ["pizza1", "pizza2", "pizza3", "pizza4", "pizza5", "pizza6", "pizza7", "pizza8", "pizza9", "pizza10", "pizza11", "pizza12"];
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaToppings = ["ExtraCheese", "Pepperoni", "PeriperiChillies"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];
var pizzaDelivery = ["Delivery", "NoDelivery"];

order.prototype.cost = function() {
  if (this.type === pizzaType[0]) {
    this.type += ORLANDOOLIVES;
  } else if (this.type === pizzaType[1]) {
    this.type += HAWAIAN;
  } else if (this.type === pizzaType[2]) {
    this.type += MILEROAST;
  } else if (this.type === pizzaType[3]) {
    this.type += TOMATINA;
  } else if (this.type === pizzaType[4]) {
    this.type += PEPPERTARIC;
  } else if (this.type === pizzaType[5]) {
    this.type += BOWERDELL;
  } else if (this.type === pizzaType[6]) {
    this.type += GALIORED;
  } else if (this.type === pizzaType[7]) {
    this.type += PEPPERONIDELUXE;
  } else if (this.type === pizzaType[8]) {
    this.type += VEGISLICE;
  } else if (this.type === pizzaType[9]) {
    this.type += DOGGOZZA;
  } else if (this.type === pizzaType[10]) {
    this.type += ZZABURGER;
  } else if (this.type === pizzaType[11]) {
    this.type += ZZATACCO;
  }

  if (this.size === pizzaSize[0]) {
    this.price += 450;
  } else if (this.size === pizzaSize[1]) {
    this.price += 650;
  } else if (this.size === pizzaSize[2]) {
    this.price += 900;
  }

  if (this.crust === pizzaCrust[0]) {
    this.price += 100;
  } else if (this.crust === pizzaCrust[1]) {
    this.price += 100;
  } else if (this.crust === pizzaCrust[2]) {
    this.price += 100;
  }

  if (this.delivery === pizzaDelivery[0]) {
    this.price += 150;
  } else if (this.delivery === pizzaDelivery[1]) {
    this.price += 0;
  }

  if (this.toppings === pizzaToppings[0]) {
    this.price += 200;
  } else if (this.toppings === pizzaToppings[1]){
    this.price += 200;
  } else if (this.toppings === pizzaToppings[2]){
    this.price += 200;
  }

  return this.price;
}



order.prototype.totalCost = function() {
    var orderTotal = 0;
    for (var order = 0; order < totalCost.length; order++) {
        orderTotal += totalCost[order];
    }
    return orderTotal;
}

$(document).ready(function() {
  $("input#orderbutton").click(function(event) {
    event.preventDefault();
    var types = $("select#type").val();
    var sizes = $("select#size").val();
    var crusts = $("select#crust").val();
    var topping = $("select#toppings").val();
    var deliveries = $("select#delivery").val();
//
    var newPizzaOrder = new order(types, sizes, crusts, topping, deliveries);
    newPizzaOrder.cost();
    totalCost.push(newPizzaOrder.price);

    $("#zzatype").text(types);
    $("#zzasize").text(sizes);
    $("#zzatoppings").text(crusts);
    $("#zzacrust").text(topping);
    $("#zzacrust").text(deliveries);
    $("#zzadelivery").text(newPizzaOrder.totalCost());

  });
   
  $("orderbutton").click(function() {
    prompt("Please insert your name");
    prompt("please insert your the location you wish your order to be delivered to");
    alert("Dear Customer, you will be charged Ksh.200 for delivery services.");
    alert("Thank you for your patronage! Your order will be delivered to your desired location shortly.");

  });

});
