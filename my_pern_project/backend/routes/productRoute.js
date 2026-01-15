import express from "express";
import { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts); //GET ALL PRODUCTS
router.get("/:id", getProduct); //GET ONE PRODUCT
router.post("/", createProduct); //CREATE NEW PRODUCT
router.put("/:id", updateProduct); //UPDATE PRODUCT
router.delete("/:id", deleteProduct); //REMOVE PRODUCT
  
export default router;