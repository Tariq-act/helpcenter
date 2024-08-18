import { Request, Response } from "express";
import prisma from "../prisma";

// Create a new card
export const createCard = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body;
    const newCard = await prisma.card.create({
      data: { title, description },
    });
    res.status(201).json(newCard);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Error creating card", error: err.message });
  }
};

// Get all cards
export const getAllCards = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cards = await prisma.card.findMany();
    res.status(200).json(cards);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Error retrieving cards", error: err.message });
  }
};

// Get a specific card by title
export const getCardByTitle = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const card = await prisma.card.findFirst({
      where: { title: req.params.title },
    });
    if (!card) {
      res.status(404).json({ message: "Card not found" });
      return;
    }
    res.status(200).json(card);
  } catch (err: any) {
    res
      .status(500)
      .json({ message: "Error retrieving card", error: err.message });
  }
};
