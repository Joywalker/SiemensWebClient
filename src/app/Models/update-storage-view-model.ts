export class UpdateStorageViewModel {
    ID_SC: number;
    ID_DC: number;
    MaterialName : string;
    Quantity: number;

    /**
     *
     */
    constructor( ID_sourceCompartment: number, 
                 ID_destCompartment: number,
                feedstockName: string, quantity: number) {
        this.ID_SC = ID_sourceCompartment;
        this.ID_DC = ID_destCompartment;
        this.MaterialName = feedstockName;
        this.Quantity = quantity;
    }
}