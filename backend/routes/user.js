import express from 'express';
import { UserDetails } from '../controller/user.js';

const router = express.Router();

router.post("/", UserDetails);

export default router;