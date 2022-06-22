import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ocv22h1wu701xi6odf49p5/master",
  cache: new InMemoryCache(),
});
