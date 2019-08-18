import React from "react";
import Routes from "./src/Navigations";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// const networkInterface = createNetworkInterface({
//   uri: 'https://api.github.com/graphql',
//   headers: {
//     Authorization: '4acc7a4302a44b71e97eda3d3134ffb53b42ddbe'
//   }
// });
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "token 4acc7a4302a44b71e97eda3d3134ffb53b42ddbe",
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
