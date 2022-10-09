"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typedefs_1 = __importDefault(require("./graphql/typedefs"));
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const apollo_server_express_1 = require("apollo-server-express");
(() => __awaiter(void 0, void 0, void 0, function* () {
    dotenv_1.default.config();
    const app = (0, express_1.default)();
    const port = process.env.PORT;
    const apollo = new apollo_server_express_1.ApolloServer({ typeDefs: typedefs_1.default, resolvers: resolvers_1.default });
    app.set('json spaces', 2);
    app.get('/', (req, res) => {
        res.send("Hello World!");
    });
    yield apollo.start();
    yield apollo.applyMiddleware({ app });
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
}))();
