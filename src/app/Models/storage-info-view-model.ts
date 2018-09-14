export class StorageInfoViewModel {
    ID_warehouse: number
    ID_compartment: number
    Name: string
    /**
     * Class used for getting data about all the deposits and compartments available, alongside witht he feedstock stored there.
     */
    constructor(id_wh : number, id_cp: number, fsName: string) {
        this.ID_warehouse = id_wh;
        this.ID_compartment = id_cp;
        this.Name = fsName;
    }
}