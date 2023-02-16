import "../styles/globals.scss";
import {client} from "../lib/apollo";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import {ApolloProvider} from "@apollo/client/react";

function MyApp({Component, pageProps}) {
	function Loading() {
		const router = useRouter();

		const [loading, setLoading] = useState(false);

		useEffect(() => {
			const handleStart = (url) => url !== router.asPath && setLoading(true);
			const handleComplete = (url) =>
				url === router.asPath &&
				setTimeout(() => {
					setLoading(false);
				}, 2000);

			router.events.on("routeChangeStart", handleStart);
			router.events.on("routeChangeComplete", handleComplete);
			router.events.on("routeChangeError", handleComplete);

			return () => {
				router.events.off("routeChangeStart", handleStart);
				router.events.off("routeChangeComplete", handleComplete);
				router.events.off("routeChangeError", handleComplete);
			};
		});

		return (
			loading && (
				<div className="spinner-wrapper">
					<div className="spinner"></div>
				</div>
			)
		);
	}

	// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
	if (Component.getLayout) {
		return Component.getLayout(
			<ApolloProvider client={client}>
				<Loading />
				<Component {...pageProps} />
			</ApolloProvider>
		);
	}
	return (
		<ApolloProvider client={client}>
			<Loading />
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
