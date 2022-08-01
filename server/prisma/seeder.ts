import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async () => {
    await prisma.usuario.create({
        data: {
            email: 'maycon@gmail.com',
            cordeis: {
                create: [
                    { 
                     titulo: 'O poeta da roça' ,
                     autor: 'Patativa do Assaré' 
                    },
                ],
            }
        }
    })
}

main()
  .then(async() => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })