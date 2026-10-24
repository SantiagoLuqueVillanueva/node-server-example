import { z } from 'zod';

export const createCourseSchema = z.object({
    title: z.string().min(3, 'El título debe tener al menos 3 caracteres').max(100, 'El título debe tener como máximo 100 caracteres'),
    description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres')
});

export const updateCourseSchema = z.object({
    title: z.string().min(3, 'El título debe tener al menos 3 caracteres').max(100, 'El título debe tener como máximo 100 caracteres').optional(),
    description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres').optional()
});
