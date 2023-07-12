import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()
const app: Express = express()
const port: number = 8000

app.use(express.json())

app.get('/api', (req: Request, res: Response) => {
    res.json({ title: "home" })
})

app.get('/api/test', async (req: Request, res: Response) => {
    const user = await prisma.user.findMany()
    console.log('api/test')
    res.json(user)
})

app.get('/api/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    res.json(users) 
})

app.get('/api/trips', async (req: Request, res: Response) => {
    const trips = await prisma.trip.findMany({
        include: {
            story: {
                select: {
                    title: true,
                    text: true
                }

            },
            images: {
                select: {
                    title: true,
                    imageUrl: true
                }
            },
            catches: {
                select: {
                    kind: true,
                    weight: true,
                    length: true,
                    imageUrl: {
                        select: {
                            imageUrl: true
                        }
                    }
                },
            },
        }
    })

    res.json(trips)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})