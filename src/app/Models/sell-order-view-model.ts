export class SellOrderViewModel {
    ClientName: string;
    Recipe: string;
    Amount: number;
    /**
     *
     */
    constructor(cl: string, rcp: string, am: number) {
        this.ClientName = cl;
        this.Recipe = rcp;
        this.Amount = am;
    }
}