import prisma from '../../prisma/client'; // Ensure Prisma client is imported

export class referralCodeGenerator {
  static async generateReferralCode(role_id: number): Promise<string | null> {
    // Return null for organizers
    if (role_id === 2) {
      return null;
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let isUnique = false;
    let referralCode = '';

    while (!isUnique) {
      referralCode = '';
      // Generate a random 10-character code
      for (let i = 0; i < 10; i++) {
        referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      // Check if the referral code already exists in the database
      const existingCode = await prisma.users.findUnique({
        where: {
          referral_code: referralCode,
        },
      });

      isUnique = !existingCode; // If no user has this code, it's unique
    }

    return referralCode;
  }
}
