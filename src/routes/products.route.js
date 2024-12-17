import { Router } from "express";
import { errorTest } from "../controllers/products.controller.js";

const router = Router();

router.route('/errortest').get(errorTest);


export default router;