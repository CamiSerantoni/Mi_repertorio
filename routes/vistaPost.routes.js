import express from 'express';
import {postRepertorio} from '../controller/repertorioHandler.js';

const router = express.Router();

router.post('/', postRepertorio)

export default router;