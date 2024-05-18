import express from 'express';
import { getCanciones } from '../controller/repertorioHandler.js';

const router = express.Router();

router.get('/', getCanciones )

export default router;