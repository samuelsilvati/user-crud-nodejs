import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { userRoutes } from './routes/user'
import { authRoutes } from './routes/auth'

const app = fastify()
app.register(cors, {
  origin: true,
})
const prisma = new PrismaClient()
app.get('/users', async (request) => {
  await request.jwtVerify()
  const users = await prisma.user.findMany()
  return users
})

app.register(userRoutes)
app.register(authRoutes)

app.register(jwt, {
  secret: 'todo-list',
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
