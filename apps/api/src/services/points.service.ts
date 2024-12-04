import prisma from '../../prisma/client';

class PointsService {
  // Method to add points with expiration tracking
  public async addPoints(userId: number, points: number): Promise<void> {
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 3); // 3 months from now

    try {
      await prisma.$transaction([
        prisma.point_Expiration.create({
          data: {
            user_id: userId,
            point: points,
            expired_at: expirationDate,
          },
        }),
        prisma.users.update({
          where: { id: userId },
          data: {
            total_point: { increment: points },
          },
        }),
      ]);
    } catch (error) {
      throw new Error(`Failed to add points: ${(error as Error).message}`);
    }
  }
}

export const pointsService = new PointsService();