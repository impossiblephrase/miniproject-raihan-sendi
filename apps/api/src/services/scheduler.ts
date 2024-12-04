import cron from 'node-cron'; 
import prisma from '../../prisma/client';

// Function to process expired points
async function processExpiredPoints(): Promise<void> {
  const now = new Date(); // Get the current date and time

  try {
    // Find all points that have expired
    const expiredPoints = await prisma.point_Expiration.findMany({
      where: { expired_at: { lt: now } },
    });

    for (const point of expiredPoints) {
      // Convert point from Decimal to number
      const pointsToDeduct = point.point.toNumber(); 

      // Begin a transaction to update points and delete the expired entry
      await prisma.$transaction([
        prisma.users.update({
          where: { id: point.user_id },
          data: {
            total_point: {
              decrement: Math.min(pointsToDeduct, 0), // Prevent going below 0
            },
          },
        }),
        prisma.point_Expiration.delete({
          where: { id: point.id },
        }),
      ]);
    }

    console.log(`${expiredPoints.length} expired points processed.`);
  } catch (error) {
    console.error('Error processing expired points:', error);
  }
}

// Schedule the cron job to run every day at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running scheduled job: Checking for expired points');
  await processExpiredPoints(); // Call the function to handle expired points
});
