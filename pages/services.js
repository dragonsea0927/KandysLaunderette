import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components

const services = ({
	seo,
	pageTitle,
	servicesPageContent,
	themesOptionsContent,
}) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<Head>
				{/* <!-- Website Title --> */}
				<title>{`${pageTitle} | Kandys Launderette`}</title>
				<meta name="description" content={seo?.metaDesc} />
				<link rel="icon" href="img/Logo.png" />
			</Head>
			<main></main>
		</motion.div>
	);
};

export default services;

export async function getStaticProps() {
	const getServicesPageContent = gql`
		{
			pageTitle: pages(where: {id: 479, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 479, status: PUBLISH}) {
				edges {
					node {
						seo {
							metaDesc
						}
						ServicesPage
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getServicesPageContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();

	return {
		props: {
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			servicesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.ServicesPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
