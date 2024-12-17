export class ApiError extends Error {
    constructor(errorMessage, errorStatus){
        super(errorMessage);
        this.statusCode = errorStatus;
    }
}