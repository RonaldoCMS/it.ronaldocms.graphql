var list:Person[] = [
    {id: 1, name: "Fabio", surname: "Danubbio", age: 22},
    {id: 2, name: "Daniel", surname: "Danubbio", age: 22}, 
    {id: 3, name: "Giuseppe", surname: "Danubbio", age: 22},
 ]

export default {
    Query: {
        getAllPerson() { 
            return list;
        },
        getPerson(parent: any, { id } : any) {
            let person = list.filter((e) => e.id == id)[0]
            console.log(`Person ${person}`);
            return person;
        } 
    },
    Mutation: {
        createPerson(parent: any, args: Person) {
            if(args.id == null) {
                let lastPerson = list[list.length - 1];
                args.id = lastPerson.id! + 1;
            }
            list.push(args);
            return args;
        }
    }
}