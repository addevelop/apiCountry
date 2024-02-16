import { CustomError } from "./CustomError";
import { errorApi } from "../constantes/constantesError";
export class ApiError extends CustomError {
    constructor(message: string)
    {
        super(message, errorApi.error);
        this.name = "ApiError";
    } 
}
