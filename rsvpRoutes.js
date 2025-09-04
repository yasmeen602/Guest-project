import express from "express";
import { createRSVP, getRSVPsByEvent } from "../controllers/rsvpController.js";

const router = express.Router();

router.post("/", createRSVP);
router.get("/:eventId", getRSVPsByEvent);

export default router;
