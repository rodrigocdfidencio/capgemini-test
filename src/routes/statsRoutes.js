import express from "express";
import StatsController from "../controllers/statsController.js";

const router = express.Router();

router
    .get('/stats', StatsController.getStats)
    .put('/stats', StatsController.updateStats)

export default router;
