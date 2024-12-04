import { Request, Response, NextFunction } from "express";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response, next: NextFunction) {
  if (req.method === 'GET') {
    const { search, date, location } = req.query;

    try {
      const events = await prisma.events.findMany({
        where: {
          AND: [
            search ? { name: { contains: search as string, mode: 'insensitive' } } : {},
            date ? { start_date: new Date(date as string) } : {},
            location ? { location: { contains: location as string, mode: 'insensitive' } } : {},
          ],
        },
      });

      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
