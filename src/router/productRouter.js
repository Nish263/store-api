import express from "express";
import { getProducts, getProductsBySlug } from "../model/Product.model";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await getProducts();
    result?._id
      ? res.json({
          status: "success",
          message: "Products fetched successfully",
          result,
        })
      : res.json({
          status: " error",
          message: "Unable to fectch products",
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
