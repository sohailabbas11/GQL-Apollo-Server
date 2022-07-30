const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id:ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends:[User]
        favouriteMovies:[Movie]
    }
    type Movie{
        id:ID!
        name:String!
        releaseYear:Int!
        isInTheatres:Boolean!
    }
    type Query {
        users:[User!]!
        user(id: ID!):User!
        movies:[Movie!]!
        movie(name:String!):Movie!
    }
    input CreateUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = italy
    }
    input UpdateUsernameInput{
        id:ID!
        newUsername:String!
    }
    type Mutation{
        createUser(input:CreateUserInput!):User!
        updateUsername(input:updateUsername!):User!
        deleteUser(id:ID!):User!
    }
    enum Nationality{
        canada
        brazil
        usa
        italy
        turkiye
    }
`

module.exports = { typeDefs }