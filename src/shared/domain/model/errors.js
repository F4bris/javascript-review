export class ValidationErrors extends  Error {
    constructor(message){
        super(message);
        this.name = 'ValidationErrors';
    }
}