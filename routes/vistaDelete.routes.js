import express from 'express';
import { deleteCancion } from '../controller/repertorioHandler.js';

const router = express.Router();

router.get('/', deleteCancion )

export default router;