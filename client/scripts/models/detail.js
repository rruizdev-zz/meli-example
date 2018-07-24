function detail(item) {
  result.apply(this, [item]);
  this.description = item.description;
  this.sold_quantity = item.sold_quantity;
  this.condition = item.condition;
};