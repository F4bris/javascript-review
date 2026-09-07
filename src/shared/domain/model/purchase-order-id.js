import {validateUuid} from "./uuid.js";

export class PurchaseOrderId {
    #value;
    constructor(value){
        if (!validateUuid(value)){
            throw  new Error('Invalid PurchaseOrderId: ${ value }');
        }
        this.#value = value;
        Object.freeze(this);
    }
}