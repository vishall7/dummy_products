// app configuration
// database connectivity
// dontenv conectivity
import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/connect.js";

dotenv.config({
    path: "./.env"
});

const port = process.env.PORT || 3000;

(async () => {
    try {
        await connectDB(); 
        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        })
    } catch (error) {
        console.log("something went wrong ", error.message)
    }
})()