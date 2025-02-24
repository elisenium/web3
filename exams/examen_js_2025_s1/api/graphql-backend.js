import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `
  type Word {
    word: String!
    hints: [String!]!
  }

  type Query {
    words: [Word!]!
  }

  type Mutation {
    addWord(word: String!, hints: [String!]!): Word!
  }
`;

let words = [];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    words: () => words,
  },
  Mutation: {
    addWord: (_, { word, hints }) => {
      if (words.some(w => w.word === word)) {
        throw new UserInputError('Word already exists');
      }
      const newWord = { word, hints };
      words.push(newWord);
      return newWord;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
