import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function randomDate(start: Date, end: Date) {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
}

// const d = randomDate(new Date(2012, 0, 1), new Date());

async function main() {
    // ... you will write your Prisma Client queries here
    const users = await prisma.user.findMany();

    users.forEach(async (user) => {
        for (let i = 0; i < 5; i++) {
          const trip = await prisma.trip.create({
                data: {
                    time: randomDate(new Date(2023, 0, 1), new Date()),
                    userId: user.id
                },
            });
          
        }
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
