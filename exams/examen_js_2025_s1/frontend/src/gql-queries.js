import { gql } from '@apollo/client';

const GET_WORDS = gql`
  query {
    words {
      word
      hints
    }
  }
`;

const ADD_WORD = gql`
  mutation addWord($word: String!, $hints: [String!]!) {
    addWord(word: $word, hints: $hints) {
      word
      hints
    }
  }
`;

export { GET_WORDS, ADD_WORD };