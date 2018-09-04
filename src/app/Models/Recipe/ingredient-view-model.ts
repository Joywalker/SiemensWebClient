export class Ingredient{
    IngredientName: String;
    Quantity: number;
    MeasurementUnit: String;

    constructor(name: String, quantity: number, unit: string)
    {
        this.IngredientName = name;
        this.Quantity = quantity;
        this.MeasurementUnit = unit;
    }
}