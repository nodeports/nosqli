import { Request, Response, NextFunction } from "express";
import { validationResult, check } from "express-validator";

export const validateUserInput = [
  check("username").isString().notEmpty().trim().escape(),
  check("email").isEmail().normalizeEmail(),
  check("password").isLength({ min: 6 }).trim().escape(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
