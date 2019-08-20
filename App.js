import React from "react";
import Routes from "./src/Navigations";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { GITHUB_TOKEN } from 'react-native-dotenv';

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});
const App = () => {
  const prefix = "javadevsapp://";
  return (
    <ApolloProvider client={client}>
      <Routes uriPrefix={prefix} />
    </ApolloProvider>
  );
};

export default App;
