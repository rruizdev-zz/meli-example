class result {
    constructor(item) {
      this.id = item.id;
      this.thumbnail = item.picture;
      this.price = numeral(item.price.amount).format('$0,0[.]00').replace(",", "").replace(".", ",");
      this.title = item.title;
      this.location = item.location;
      this.shipping = item.free_shipping;
    }
}
  