import "server-only";
import { db } from "~/server/db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
    // Await the resolved value of auth()
    const user = await auth();

    if (!user.userId) {
        throw new Error("User is not authenticated");
    }

    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.id),
    });

    return images;
}

export async function getImage(id: number) {
    const user = await auth();
    if (!user.userId) {
        throw new Error("Unauthorized");
    }

    const image = await db.query.images.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    if (!image) {
        throw new Error("Image not found");
    }
    
    if (image.userId !== user.userId) {
        throw new Error("Unauthorized");
    }

    return image;
}