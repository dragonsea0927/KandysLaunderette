// Add Apollo Client
import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
	uri: `${process.env.WORDPRESS_API_URL}`,
	cache: new InMemoryCache(),
});
