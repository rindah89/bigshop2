import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
        return NextResponse.json({ products: [] });
    }

    const products = await prisma.product.findMany({
        where: {
            OR: [
                { name: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
            ],
            status: "published",
        },
        select: {
            id: true,
            name: true,
            price: true,
            images: true,
            description: true,
        },
    });

    return NextResponse.json({ products });
}