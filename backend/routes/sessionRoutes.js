import express from "express";
import LiveSession from "../models/LiveSession.js";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const uniqueId = uuidv4();
    const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
    const userUrl = `${FRONTEND_URL}/session/${uniqueId}`;
    
    console.log("Generated URL:", userUrl);

    const session = await LiveSession.create({
      type: "admin",
      unique_id: uniqueId,
      userurl: userUrl,
    });

    res.json(session);
  } catch (err) {
    res.status(500).json({ error: "Failed to create session" });
  }
});

router.get("/:uniqueId", async (req, res) => {
  try {
    const session = await LiveSession.findOne({ unique_id: req.params.uniqueId });
    if (!session) return res.status(404).json({ error: "Session not found" });
    res.json(session);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
