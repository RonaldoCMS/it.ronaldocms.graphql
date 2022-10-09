import { Mutation } from 'apollo-server-core/src/plugin/schemaReporting/generated/operations';

const { gql } = require("apollo-server-express"); 

export default  gql`
    type Person {
        id: Int
        name: String!
        surname: String!
        age: Int!
    }

    type Query {
        getAllPerson: [Person!]!
        getPerson(id: Int!): Person!
    }

    type Mutation {
        createPerson(id: Int, name: String!, surname: String!, age: Int!): Person!
    }
    #Mutations
`