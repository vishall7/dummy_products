import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

const errorTest = asyncHandler(async (req, res) => {
    // throw new ApiError('something went', 500)
    // res.send('hello');    
    throw new Error('v', 300)
    
})

export {errorTest}