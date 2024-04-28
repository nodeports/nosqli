import { Router } from "express";
import { register, login } from "../controllers/auth";
import { validateUserInput } from "../utils/validate-input";

const router = Router();

router.post("/register", validateUserInput, register);
router.post("/login", validateUserInput, login);

export default router;
