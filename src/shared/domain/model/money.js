import {Currency} from "./currency.js";
import {ValidationErrors} from "./errors.js";

export class Money {
    #amount;
    #currency;

    constructor({currency, amount}){
        if(!Number.isFinite(amount) || amount < 0){
            throw new ValidationErrors(`Invalid amount: ${amount}. Amount must be a positive integer.`);
        }
        if(!currency instanceof Currency){
            throw new ValidationErrors(`Invalid currency: ${currency}. Amount must be a positive integer.`);
        }
        this.#currency = currency;
        this.#amount = Number(amount.toFixed(2));
        Object.freeze(this);
    }

    get amount(){
        return this.#amount;
    }
    get currency(){
        return this.#currency;
    }

    add (other){
        if(!(other instanceof Money) || !this.#currency.equals(other,this.currency)){
            throw new ValidationErrors(`Invalid multiplier: ${this.#currency.code}. Amount must be a positive integer.`);
        }
        return new Money({amount:this.#amount + other.amount,
            currency:this.#currency});
    }

    multiply(multiplier){
        if(!Number.isFinite(multiplier) || multiplier < 0){
            throw new ValidationErrors(`Invalid multiplier: ${multiplier}. Amount must be a positive integer.`);
        }
        return new Money({amount:this.#amount * multiplier,
        currency:this.#currency});
    }

    toString(){
        return `${this.amount} ${this.amount}`;
    }
}