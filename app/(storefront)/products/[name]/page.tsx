import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });

      return {
        title: "All Products",
        data: data,
      };
    }
    case "phones": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "phones",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Phones and accessories",
        data: data,
      };
    }

    case "televisions": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "televisions",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Televsions",
        data: data,
      };
    }

    case "laptops": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "laptops",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Laptops and accessories",
        data: data,
      };
    }
    case "general": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "general",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "General Electronics",
        data: data,
      };
    }
    case "cameras": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "cameras",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Cameras",
        data: data,
      };
    }

    case "phoneCases": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "phoneCases",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Phone Cases",
        data: data,
      };
    }

    case "headphones": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "headphones",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Headphones",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  noStore();
  const { data, title } = await getData(params.name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
