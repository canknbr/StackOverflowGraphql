import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://itaperucu.stepzen.net/api/ordered-starfish/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apikey itaperucu::stepzen.net+1000::d4e42159c8880dd79fcdb6fb18b622b8efcd8f6dc01cf3614a817ea97c280fd3",
  },
});

export default client;
