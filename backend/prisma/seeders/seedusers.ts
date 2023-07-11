import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = [
  { email: "tom@mail.com", username: "tom", password: "123456" },
  { email: "don@mail.com", username: "don", password: "123456" },
  { email: "jimmy@mail.com", username: "jimmy", password: "123456" },
  { email: "bill@mail.com", username: "bill", password: "123456" },
];

async function main() {
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
