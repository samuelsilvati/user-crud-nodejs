import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    user: {
      name: string
      sub: string
      iat: number
      exp: number
    }
  }
}
