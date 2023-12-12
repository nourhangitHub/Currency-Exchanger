export class ConvertedAmountDetails {
    from;
    to;
    amount;
    constructor(from: string, to: string, amount: number) {
        this.from = from;
        this.to = to;
        this.amount = amount;
      }

      get amountDetails(){
        return this;
      }
}
