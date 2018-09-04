export class RecipeAction {
    ActionName: String;
    Duration: number;
    TimeMeasurementUnit: String;

    constructor(name: String, duration: number, unit: string)
    {
        this.ActionName = name;
        this.Duration = duration;
        this.TimeMeasurementUnit = unit;
    }
}