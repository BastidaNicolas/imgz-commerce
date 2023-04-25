import { string, z } from "zod";
import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Product = {
  id: number | null;
  title: string | null;
  imageUrl: string | null;
  category: string | null;
  price: number | null;
  description: string | null;
  width: number | null;
  height: number | null;
  weight: number | null;
  isBestSeller: boolean | null;
};

const productDTO = (product: Product) => {
  return {
    id: product.id,
    title: product.title,
    imageUrl: product.imageUrl,
    category: product.category,
    price: product.price,
    description: product.description,
    details: {
      size: {
        width: product.width,
        height: product.height,
      },
      weight: product.weight,
    },
    isBestSeller: product.isBestSeller,
  };
};

export const appRouter = router({
  getProducts: procedure
    .input(
      z.object({
        page: z.number(),
        amount: z.number(),
        filters: z.optional(z.union([z.array(z.string()), z.string()])),
        orderBy: z.string(),
        ascending: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const products = (
        await prisma.product.findMany({
          take: input.amount,
          skip: (input.page - 1) * input.amount,
          orderBy: {
            [input.orderBy]: input.ascending,
          },
          where: {
            category: {
              in: input.filters,
            },
          },
        })
      ).map(productDTO);
      const totalCount = await prisma.product.count({
        where: {
          category: {
            in: input.filters,
          },
        },
      });

      const totalPages = Math.ceil(totalCount / input.amount);

      return { products, totalPages };
    }),
  getPhotoOfTheDay: procedure.query(async () => {
    const data = await prisma.photoOfTheDay.findFirstOrThrow({
      include: {
        product: true,
      },
    });

    const product = productDTO(data.product);

    return {
      product,
    };
  }),
  getPeopleAlsoBuy: procedure.query(async () => {
    const data = await prisma.peopleAlsoBuy.findFirstOrThrow({
      include: {
        products: true,
      },
    });

    const products = data.products.map(productDTO);

    return {
      products,
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
