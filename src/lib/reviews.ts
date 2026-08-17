import { prisma } from "@/lib/prismaDB";

export async function getProductReviewStats(productId: string) {
  const stats = await prisma.review.aggregate({
    where: { productID: productId },
    _avg: { ratings: true },
    _count: { ratings: true },
  });

  if (!stats._count.ratings) {
    return null;
  }

  return {
    average: stats._avg.ratings ?? 0,
    count: stats._count.ratings,
  };
}

export async function getProductReviews(productId: string) {
  return prisma.review.findMany({
    where: { productID: productId },
    orderBy: { id: "desc" },
  });
}
