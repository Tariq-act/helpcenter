import { Router } from "express";
import {
  createCard,
  getAllCards,
  getCardByTitle,
} from "../controllers/cardController";

const router: Router = Router();

// POST /cards: Create a new card
router.post("/", createCard);

// GET /cards: Get all cards
router.get("/", getAllCards);

// GET /cards/:title: Get a specific card by title
router.get("/:title", getCardByTitle);

export default router;
