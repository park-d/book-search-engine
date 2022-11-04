const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  me: User
}

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }

type User {
  _id: ID
    username: String
    email: String
    bookCount: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

`;

module.exports = typeDefs;
