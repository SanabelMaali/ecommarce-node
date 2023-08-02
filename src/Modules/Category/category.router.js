import {Router} from 'express' ;
import fileUpload, { fileValidation } from "../../Services/multerCloudinary.js";
import * as CategoryController from './controller/category.controller.js'
import * as validators from './category.validation.js'
import { asyncHandler } from '../../Services/errorHandling.js';
import validation from '../../Middleware/validation.js';
const router =Router();

router.post('/',fileUpload(fileValidation.image).single('image'),validation(validators) ,asyncHandler(CategoryController.createCategory) )
export default router;