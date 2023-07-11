import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  { email: "userone.com", username: "userone", password: "123456" },
];

async function main() {
  // ... you will write your Prisma Client queries here
  users.forEach(async (user) => {
    await prisma.user.create({
      data: {
        ...user,
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
