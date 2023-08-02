import {Router} from 'express';
import * as postController from './Controller/Post,controller.js';
import { auth } from '../../Middleware/auth.middleware.js';
import { asyncHandler } from '../../Services/errorHandling.js';
import fileUpload, { fileValidation } from '../../Services/multerCloudinary.js';
import validation from '../../Middleware/validation.js'
import * as validators from './Post.validation.js';;
const router =Router();

router.post('/',auth,fileUpload(fileValidation.image).single('image'),postController.createPost)
export default router;