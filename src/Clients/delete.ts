import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    
    const result = await prisma.clients.delete({
        where:{
            id: '14a29510-0863-4e61-9703-063882a1c197'
        },
    })

    console.log(result)
    
}

main();