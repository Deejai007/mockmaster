import { Router } from "express";
import {
  generateQuestions,
  generateQuestions2,
  createUser,
  getInterviews,
  submitAnswer,
  submitAnswer2,
  totalScore,
  stats,
  getUsers,
  badge,
  suggestedAnswer,
} from "./controller.js";

const router = Router();
router.post("/questions", generateQuestions2);
router.post("/user", createUser);
router.post("/interviews", getInterviews);
router.post("/submit", submitAnswer2);
router.post("/total", totalScore);
router.post("/stats", stats);
router.get("/users", getUsers);
router.post("/badge", badge);
router.post("/suggest", suggestedAnswer);

export default router;
