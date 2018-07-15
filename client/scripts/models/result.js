class result {
    constructor(item) {
      this.thumbnail = item ? item.picture : undefined;
      this.price = item ? '$' + item.price.amount : undefined;
      this.title = item ? item.title : undefined;
      this.location = item ? item.location: 'No ubicado';
      this.shipping = item ? item.free_shipping : undefined;
    }
}
  