import express from 'express';
import { putCancion } from '../controller/repertorioHandler.js';

const router = express.Router();

router.put('/:id', putCancion )

export default router;