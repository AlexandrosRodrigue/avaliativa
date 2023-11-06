import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const result = await prisma.clients.create({
        data: {
            name: "Alexandros",
            fullname: "Rodrigues",  
            cpf: 88888888,
            endereco: "Rua do senai"
        },
    });

    console.log(result)
    
}

main();