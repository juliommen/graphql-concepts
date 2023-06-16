import 'reflect-metadata'
import path from 'path'
import {buildSchema} from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { UserResolver } from './src/resolvers/UserResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname,'schem.gql'),
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()

  console.log(`Servidor rodando na rota ${url}`)
}

main()