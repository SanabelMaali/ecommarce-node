import joi from 'joi'
import { generalFeilds } from '../../Middleware/validation.js';
export const createCategory= joi.object({
    name:joi.string().min(2).max(20).required(),
    file:generalFeilds.file.required(),//استخدمت generalFields  لانه فيها التست تبع الفايل بدل لا ارجع اكتبه

}).required();