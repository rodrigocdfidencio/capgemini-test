import express from "express";
import SequenceController from "../controllers/sequenceController.js";

const router = express.Router();

router
    .post('/sequence', SequenceController.verifyLettersSequence)

export default router;
