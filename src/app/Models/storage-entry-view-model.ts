export interface StorageEntryViewModel {
      ID_warehouse : number
      ID_compartment : number
      feedstockName : string
      quantityStored : string
      newestDateOfSupply : Date
      oldestDateOfSupply : Date
      quantityFromTheOldestDate : string
}