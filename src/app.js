import Express from "express";
import { errorHandler } from "./utils/errorHandler.js";
import { asyncHandler } from "./utils/asyncHandler.js";
const app = Express();

app.use(Express.json({limit: "16kb"}));
app.use(Express.urlencoded({extended: true, limit: "16kb"}));
app.use(Express.static("public"));

import productRouter from './routes/products.route.js'

app.use(productRouter);

app.use(errorHandler);            
export { app };

