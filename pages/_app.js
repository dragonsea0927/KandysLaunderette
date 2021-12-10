import "../styles/globals.scss";
import {AnimatePresence} from "framer-motion";

function MyApp({Component, pageProps}) {
	return (
		<AnimatePresence exitBeforeEnter>
			<Component {...pageProps} />
		</AnimatePresence>
	);
}

export default MyApp;
