"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = [
    { id: 1, name: "Fabio", surname: "Danubbio", age: 22 },
    { id: 2, name: "Daniel", surname: "Danubbio", age: 22 },
    { id: 3, name: "Giuseppe", surname: "Danubbio", age: 22 },
];
exports.default = {
    Query: {
        getAllPerson() {
            return list;
        },
        getPerson(parent, { id }) {
            let person = list.filter((e) => e.id == id)[0];
            console.log(`Person ${person}`);
            return person;
        }
    },
    Mutation: {
        createPerson(parent, args) {
            if (args.id == null) {
                let lastPerson = list[list.length - 1];
                args.id = lastPerson.id + 1;
            }
            list.push(args);
            return args;
        }
    }
};
