import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";

export default async function SearchPage({
                                             searchParams,
                                         }: {
    searchParams: { q: string };
}) {
    const query = searchParams.q;

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

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {products.map((product) => (
                        <ProductCard key={product.id} item={product} />
                    ))}
                </div>
            )}
        </div>
    );
}