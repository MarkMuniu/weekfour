var totalCost = [];
function order(type, size, crust, toppings, delivery) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = 0;
}
var pizzaType = ["pizza1", "pizza2", "pizza3", "pizza4", "pizza5", "pizza6", "pizza7", "pizza8", "pizza9", "pizza10", "pizza11", "pizza12"];
var pizzaSize = ["Small", "Medium", "Large"];
var pizzaToppings = ["ExtraCheese", "Pepperoni", "PeriperiChillies"];
var pizzaCrust = ["Crispy", "Stuffed", "Gluten-free"];