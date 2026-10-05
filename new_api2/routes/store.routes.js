import {Router} from "express"
import { listStore, createStore } from "../controllers/store.controller.js"
import {name,adress,adress} from "../validators/store.validators.js"

const router = Router()


router.post("/",[name,owner,addres],createStore)
router.get("/", listStore)
router.post("/", createStore)

export default router
