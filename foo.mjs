import { createServer } from '@graphql-yoga/node';
import fetch from 'isomorphic-unfetch';

const server = createServer()

 fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res => res.json()).then(console.log)
 