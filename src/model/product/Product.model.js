import ProductSchema from "./Product.schema.js";

export const getSingleProduct = (filter) => {
  return ProductSchema.findOne(filter);
};
export const getProducts = (filter) => {
  return ProductSchema.find(filter);
};

export const getProductById = (_id) => {
  return ProductSchema.findById(_id);
};

export const getProductsBySlug = (filter) => {
  return ProductSchema.find(filter);
};
