import App from './app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Database connected successfully.');

    const app = new App();
    app.start();
  } catch (error) {
    console.error('Database connection error:', error);
  } finally {
    await prisma.$disconnect();
  }
};

main();
