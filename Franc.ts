export default class Franc {
    private amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }

    public times(multiplier: number): Franc {
        return new Franc(this.amount * multiplier);
    }

    public getAmount(): number {
        return this.amount;
    }
}