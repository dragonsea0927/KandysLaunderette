// Import
import postHog from "posthog-js";
import {client} from "../lib/apollo";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import {PostHogProvider} from "posthog-js/react";
import {ApolloProvider} from "@apollo/client/react";

// Components
import Layout from "../components/Layout/Layout";

// Styling
import "../styles/globals.scss";

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== "undefined") {
	postHog.init(`${process.env.POSTHOG_KEY}`, {
		api_host: `${process.env.POSTHOG_HOST}` || "https://app.posthog.com",
		// Disable in development
		loaded: (postHog) => {
			if (process.env.NODE_ENV === "development") postHog.opt_out_capturing();
		},
	});
}

function MyApp({Component, pageProps}) {
	// PostHog Cookies Policy
	const router = useRouter();

	useEffect(() => {
		// Track page views
		const handleRouteChange = () => postHog?.capture("$pageview");
		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	});

	// Page Animation Loader
	function Loading() {
		const router: any = useRouter();

		const [loading, setLoading]: any = useState(false);

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
				<PostHogProvider client={postHog}>
					<Layout>
						<Loading />
						<Component {...pageProps} />
					</Layout>
				</PostHogProvider>
			</ApolloProvider>
		);
	}
	return (
		<ApolloProvider client={client}>
			<PostHogProvider client={postHog}>
				<Layout>
					<Loading />
					<Component {...pageProps} />
				</Layout>
			</PostHogProvider>
		</ApolloProvider>
	);
}

export default MyApp;
