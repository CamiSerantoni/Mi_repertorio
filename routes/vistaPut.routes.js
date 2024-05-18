import express from 'express';
import { putCancion } from '../controller/repertorioHandler.js';

const router = express.Router();

router.get('/', putCancion )

export default router;