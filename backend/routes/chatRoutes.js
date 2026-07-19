import express from "express";
import {
  chat,
  streamChat,
} from "../controllers/chatController.js";

const router = express.Router();

// Normal response
router.post("/", chat);

// Streaming response
router.post("/stream", streamChat);

export default router;