function result(item) {
  this.id = item.id;
  this.thumbnail = item.picture;
  this.price = item.price.amount;
  this.title = item.title;
  this.location = item.location;
  this.shipping = item.free_shipping;
};