"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require("apollo-server-express");
exports.default = gql `
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
`;
