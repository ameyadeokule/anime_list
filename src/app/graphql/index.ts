import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri:"https://aniList.co/graphql",
	cache: new InMemoryCache()
})