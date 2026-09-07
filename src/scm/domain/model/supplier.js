import {ValidationErrors} from "../../../shared/domain/model/errors.js";

export class Supplier {
    #id;
    #name;
    #contactEmail;
    #lastOrderTotalPrice;

    constructor({id, name, contactEmail = null, lastOrderTotalPrice = null}){
        if(!id instanceof SupplierId){
            throw new ValidationErrors('Supplier Id must be an instance of SupplierId');
        }

        this.#id = id;
        this.changeName(name);
        if(contactEmail !==null){
            this.updateEmail(contactEmail);
        }else{
            this.#contactEmail = null;
        }

        if()
    }

    #isValidEmail(email){
        const emailRegex = /;
        return emailRegex.test(email);
    }

    changeName(newName){
        if(typeof newName !== "string"|| newName.length < 2 || newName.length > 100)
        {
            throw new ValidationErrors('Name must be at least 3 characters long');
        }
        this.#name = newName;
    }

    updateEmail(newEmail){
        if(!this.#isValidEmail(newEmail)){
            throw  new ValidationErrors('Email already exists');
        }
        this.#contactEmail = newEmail;
    }

    recordOrder(orderTotal){
        if(!(orderTotal instanceof Money)){
            throw new ValidationErrors('Order total must be at least 3 characters long');
        }
        this.#lastOrderTotalPrice = orderTotal;
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }
    get contactEmail(){
        return this.#contactEmail;
    }
    get lastOrderTotalPrice(){
        return this.#lastOrderTotalPrice;
    }
}