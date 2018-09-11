export class StockEntryViewModel {
    Name: string;
    NumberOfBags: number;
    Recipe: string;
    ManufactureDate?: Date;
    constructor(name: string, nob: number, recipe: string, date: Date)
    {
        this.Name = name;
        this.NumberOfBags = nob;
        this.Recipe = recipe;
        this.ManufactureDate = date;
    }
}