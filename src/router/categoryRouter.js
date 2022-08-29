import express from "express";
const router = express.Router();

import {
  getCategoryById,
  getSingleCategory,
} from "../model/category/Category.model.js";

router.get("/", async (req, res) => {
  const allCategories = await getSingleCategory();
  res.send(allCategories);
});

router.get("/:_id?", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await getCategoryById(_id);
    res.json({
      status: "success",
      message: "Castegory fetched successfully",
      result,
    });
  } catch (error) {
    console.log("error");
  }
});

export default router;
