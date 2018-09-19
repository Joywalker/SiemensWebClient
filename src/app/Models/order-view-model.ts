export class OrderViewModel {
    ID_order?: number;
    Recipe!: string;
    Amount!: number;
    /**
     *
     */
    constructor(recipe: string, amount: number) {
        this.Recipe = recipe;
        this.Amount = amount;
        }
}