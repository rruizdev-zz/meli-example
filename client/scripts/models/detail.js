class detail extends result {
    constructor(item) {
      super(item);
      this.description = item.description;
      this.sold_quantity = item.sold_quantity;
      this.condition = item.condition;
    }
}