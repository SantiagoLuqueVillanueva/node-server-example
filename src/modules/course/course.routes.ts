import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { createCourseSchema, updateCourseSchema } from './course.schema.js';
import { listCoursesCtrl, updateCourseCtrl, getCourseCtrl, deleteCourseCtrl, createCourseCtrl } from './course.controller.js';

const router = Router();

router.get('/', listCoursesCtrl);
router.get('/:id', getCourseCtrl);
router.patch('/:id', validate(updateCourseSchema), updateCourseCtrl);
router.post('/', validate(createCourseSchema), createCourseCtrl);
router.delete('/:id', deleteCourseCtrl);

export default router;
