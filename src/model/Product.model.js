import ProductSchema from "./Product.schema";

export const getProducts = () => {
  return ProductSchema.find();
};

export const getProductById = (_id) => {
  return ProductSchema.findById(_id);
};

export const getProductsBySlug = (filter) => {
  return ProductSchema.find(filter);
};
