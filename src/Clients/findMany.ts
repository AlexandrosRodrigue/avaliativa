import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


async function main() {
  const client = await prisma.clients.findMany();
  console.log(client);
}


main();