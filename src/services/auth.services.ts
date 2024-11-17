// Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// JWT
import jwt from "jsonwebtoken";
const config = {
  expiresIn: "1d",
}
// Types
import { loginType, registerType } from "@/schemas/auth.schemas";
// Secret
const secret: string = process.env.TOKEN_SECRET || 'digger';

export async function loginService(userData: loginType) {
  const user = await prisma.user.findUnique({
    where: {
      email: userData.identifier,
    },
  });

  if (!user) return { error: "User not found." };

  if (user.password !== userData.password) return { error: "Invalid password." };

  const { password, ...userWithoutPassword } = user;

  return { jwt: jwt.sign({ userId: user.id }, secret, config), user: userWithoutPassword };
}

export async function registerService(userData: registerType) {
  const userExists = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (userExists) return { error: "User already exists." };

  const user = await prisma.user.create({
    data: {
      name: userData.username,
      email: userData.email,
      password: userData.password,
      cart: {},
    },
  });

  const { password, ...userWithoutPassword } = user;

  return { jwt: jwt.sign({ userId: user.id }, secret, config), user: userWithoutPassword };
}