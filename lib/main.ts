import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import typedefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';
import {ApolloServer} from 'apollo-server-express';
 (async () => {
    dotenv.config();
    const app: Express = express();
    const port = process.env.PORT;


    const apollo = new ApolloServer({typeDefs: typedefs, resolvers: resolvers})

    app.set('json spaces', 2)

    app.get('/', (req : Request, res : Response) => {
        res.send("Hello World!")
    });
    await apollo.start();

    await apollo.applyMiddleware({app});

    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
})();
