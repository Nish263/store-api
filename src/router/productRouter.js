import express from "express";
import slugify from "slugify";
import {
  getProductById,
  getProducts,
  getProductsBySlug,
} from "../model/Product.model.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const allProducts = await getProducts();
  res.send(allProducts);
});
router.get("/:id?", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await getProductById(_id);
    res.json({
      status: "success",
      message: "Products fetched successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await getProductsBySlug(slug);
    slug
      ? res.json({
          status: "success",
          message: "product fetched successfully",
          result,
        })
      : res.json({
          satus: "error",
          message: "Product fetched unsuccesfull",
        });
  } catch (error) {
    console.log(error);
  }
});

export default router;
