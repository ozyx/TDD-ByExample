export default class Money {
    protected amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }

    public times(multiplier: number): Money {
        return new Money(this.amount * multiplier);
    }

    public getAmount(): number {
        return this.amount;
    }
}