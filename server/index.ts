import 'reflect-metadata'
import path from 'path'
import {buildSchema} from 'type-graphql'
import { ApolloServer } from 'apollo-server'

async function main() {
  const schema = await buildSchema({
    resolvers: [],
    emitSchemaFile: path.resolve(__dirname,'schem.gql'),
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()

  console.log(`Servidor rodando na rota ${url}`)
}

main()