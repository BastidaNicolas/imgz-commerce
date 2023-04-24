import { z } from "zod";
import { procedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const appRouter = router({
  getProducts: procedure
    .query(async () => {
      return {
        products: await prisma.product.findMany(),
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
