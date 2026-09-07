import {generateUuid, validateUuid} from "./uuid.js";
import {ValidationErrors} from "./errors.js";

export class ProductId{
    #value;
    constructor(value){
        if(!validateUuid(value)){
            throw new ValidationErrors('Invalid product id: ${value}');
        }
        this.#value = value;
        Object.freeze(this);

    }

    static generate(){
        return new ProductId(generateUuid());
    }

    get value(){
        return this.#value;
    }

    equals(other){
        return other instanceof ProductId && this.#value === other.value;
    }

    toString(){
        return this.#value;
    }
}