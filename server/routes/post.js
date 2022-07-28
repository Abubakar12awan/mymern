import  express  from "express";
const router =express.Router();
import {getpost,createpost} from "../controllers/post.js"
router.get("/",getpost)
router.post("/",createpost)
router.get("/",getpost)
router.get("/",getpost)

export default router;