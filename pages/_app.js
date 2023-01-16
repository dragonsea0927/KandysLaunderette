import "../styles/globals.scss";
import {client} from "../lib/apollo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {ApolloProvider} from "@apollo/client/react";

function MyApp({Component, pageProps}) {
	// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
	if (Component.getLayout) {
		return Component.getLayout(<Component {...pageProps} />);
	}

	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
