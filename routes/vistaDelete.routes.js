import express from 'express';
import { deleteCancion } from '../controller/repertorioHandler.js';

const router = express.Router();

router.delete('/', deleteCancion )

export default router;