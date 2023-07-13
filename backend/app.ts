import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()
const app: Express = express()
const port: number = 8000

app.use(express.json())

/**
 * @category Test API
 * @param route /api
 * @returns Object {title: "home"}
 */
app.get('/api', (req: Request, res: Response) => {
    return res.json({ title: "home" })
})

app.get('/api/test', async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: { id: 1 }
    })
    console.log('api/test')
    return res.json(user)
})

app.get('/api/users', async (req: Request, res: Response) => {
    const users = await prisma.user.findMany()
    return res.json(users)
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

    return res.json(trips)
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})