import type { Request, Response } from 'express';
import { listCourses, updateCourse, findCourseById, deleteCourse, createCourse } from './course.service.js';

export async function listCoursesCtrl(_req: Request, res: Response) {
    try {
        const courses = await listCourses();
        res.json(courses);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export async function getCourseCtrl(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        const course = await findCourseById(id);
        if (!course) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }

        res.json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export async function updateCourseCtrl(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        const course = await updateCourse(id, req.body);
        res.json(course);
    } catch (error: any) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: 'Curso no encontrado' })
        }

        res.status(500).json({ message: error.message })
    }
}

export async function deleteCourseCtrl(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        await deleteCourse(id);
        res.status(204).send();
    } catch (error: any) {
        if (error.code === 'P2025') {
            return res.status(404).json({ message: 'Curso no encontrado' })
        }
        
        res.status(500).json({ message: error.message });
    }
}

export async function createCourseCtrl(req: Request, res: Response) {
    try {
        const title = req.body.title
        const description = req.body.description

        const course = await createCourse(title, description);
        res.status(201).json(course);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
