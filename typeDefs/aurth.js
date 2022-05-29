const { gql } = require('apollo-server-express');

//! significa requerido
module.exports = gql`
   type Query {
      me: String!
   }
`;