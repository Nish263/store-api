import CategorySchema from "./Category.schema.js";

export const getSingleCategory = (filter) => {
  return CategorySchema.findOne(filter);
};

export const getCategoryById = (_id) => {
  return CategorySchema.findById(_id);
};
