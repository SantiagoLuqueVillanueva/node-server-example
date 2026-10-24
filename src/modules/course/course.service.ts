import { prisma } from "../../config/db.js";

export async function createCourse(title: string, description: string) {
    return prisma.course.create({
        data: { title, description },
        select: { id: true, title: true, description: true, createdAt: true }
    });
}

export async function findCourseById(id: number) {
    return prisma.course.findUnique({
        where: { id },
        select: { id: true, title: true, description: true, createdAt: true }
    });
}

export async function listCourses() {
    return prisma.course.findMany({
        select: { id: true, title: true, description: true, createdAt: true },
        orderBy: { id: 'asc' }
    });
}

export async function updateCourse(id: number, data: { title?: string; description?: string }) {
    return prisma.course.update({
        where: { id },
        data,
        select: { id: true, title: true, description: true, createdAt: true }
    });
}

export async function deleteCourse(id: number) {
    return prisma.course.delete({ where: { id } });
}
