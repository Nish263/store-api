import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
    name: {
      type: String,
      required: true,
      maxLength: 100,
    },
    sku: {
      type: String,
      unique: true,
      index: 1,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 5000,
    },
    catId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    qty: {
      type: Number,
      required: true,
      default: "",
    },
    images: {
      type: String,
    },
    thumbnail: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    salesStartDate: {
      type: Date,
      default: null,
    },
    salesEndDate: {
      type: Date,
      default: null,
    },
    ratings: {
      type: Number,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
