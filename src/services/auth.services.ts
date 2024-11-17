// Prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// Types
import { loginType, registerType } from "@/schemas/auth.schemas";

export async function loginService(userData: loginType) {
  const user = await prisma.user.findUnique({
    where: {
      email: userData.identifier,
    },
  });

  if (!user) return { error: "User not found." };

  if (user.password !== userData.password) return { error: "Invalid password." };

  return { jwt: "jwt-token" };
}

export async function registerService(userData: registerType) {
  const userExists = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (userExists) return { error: "User already exists." };

  const user = await prisma.user.create({});

  return { jwt: "jwt-token" };
}