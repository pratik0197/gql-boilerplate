import {GraphQLServer} from 'graphql-yoga'

// Type Definition
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`

//Resolvers 
const resolvers = {
    Query : {
        title(){
            return `Hello`
        },
        price(){
            return 5.5
        },
        releaseYear(){
            return '2020'
        },
        rating(){
            return null
        },
        inStock(){
            return false
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})


const options = {
    port : 3000,
    endpoint : '/'
}
server.start(options,()=>{
    console.log('Server is up')
})