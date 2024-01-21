export class ConvertedAmountDetails {
    from;
    to;
    amount;
    date;
    base;
    constructor(from: string, to: string, amount: string, date: string, base: string) {
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.date = date;
        this.base = base;
      }

      get amountDetails(){
        return this;
      }
}
