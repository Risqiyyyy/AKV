import express from "express";
import {
    getioctable 
} from "../controllers/ioc_tableController.js";
 
const router = express.Router();
 
router.get('/ioc_table', getioctable);
 
export default router;