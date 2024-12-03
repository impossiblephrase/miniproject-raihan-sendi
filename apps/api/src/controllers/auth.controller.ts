import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../prisma/client'; // Adjust path if necessary
import { referralCodeGenerator } from '../utils/referralCodeGenerator'; // Import the referral code generator class

const secretKey = process.env.JWT_SECRET || 'default_secret_key';

class AuthController {
  // Register a new user
  public async register(req: Request, res: Response): Promise<void> {
    const { username, password, referralCode, role_id } = req.body;
  
    // Ensure username, password, and role_id are provided
    if (!username || !password || !role_id) {
      res.status(400).json({ message: 'Username, password, and role are required' });
      return;
    }
  
    try {
      // Generate a hashed password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Generate a referral code based on role_id
      const newReferralCode = await referralCodeGenerator.generateReferralCode(role_id);
  
      // Handle referral logic only for customers (role_id = 1)
      let totalPoints = 0;
      let referringUser = null;
  
      if (role_id === 1 && referralCode) {
        referringUser = await prisma.users.findUnique({
          where: { referral_code: referralCode },
        });
  
        if (referringUser) {
          totalPoints = 10000;
          await prisma.users.update({
            where: { id: referringUser.id },
            data: { total_point: referringUser.total_point + 10000 },
          });
        } else {
          res.status(400).json({ message: 'Invalid referral code' });
          return;
        }
      }
  
      // Create the new user
      const newUser = await prisma.users.create({
        data: {
          username,
          password: hashedPassword,
          referral_code: newReferralCode, // Can be null for organizers
          role_id,
          total_point: totalPoints,
        },
      });
  
      res.status(201).json({
        message: 'User created successfully',
        userId: newUser.id,
        referralCode: newReferralCode, // May be null for organizers
      });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: (error as Error).message });
    }
  }

  // Login a user
  public async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: 'Username and password are required' });
      return;
    }

    try {
      const user = await prisma.users.findUnique({ where: { username } });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: 'Invalid username or password' });
        return;
      }

      const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: process.env.JWT_EXPIRATION || '1h' });
      res.json({ message: 'Login successful', token });
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: (error as Error).message });
    }
  }
}

export default AuthController;
