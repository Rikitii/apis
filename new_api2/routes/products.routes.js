import {Router} from "express"
import { listProduct, createProduct, getProductById, updateProduct, updateStockProduct, deleteProduct} from "../controllers/products.controller.js"

const router = Router()

router.get("/", listProduct)
router.post("/", createProduct)
router.get("/", getProductById)
router.post("/", updateProduct)
router.post("/", updateStockProduct)
router.post("/", deleteProduct)

export default router



























