import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

const HotelRestaurantServices = ({
	seo,
	pageTitle,
	serviceMenuLinks,
	laundryDryCleaningMenuLinks,
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
				<title>{`${pageTitle} | Kandy's Launderette`}</title>
				<meta name="description" content={seo?.metaDesc} />
				<link rel="icon" href="img/Logo.png" />
			</Head>

			{/* <!--===== NAVBAR =====--> */}
			<Navbar
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
				laundryDryCleaningMenuLinks={
					laundryDryCleaningMenuLinks?.laundryDryCleaningMenuLinks
				}
			/>

			<main></main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
			/>
		</motion.div>
	);
};

export default HotelRestaurantServices;

export async function getStaticProps() {
	const getHotelRestaurantServicesPageContent = gql`
		{
			pageTitle: pages(where: {id: 685, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 685, status: PUBLISH}) {
				edges {
					node {
						seo {
							metaDesc
						}
						HotelRestaurantServicesPage
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getHotelRestaurantServicesPageContent,
	});

	const serviceMenuLinks = await getServiceLinksContent();
	const themesOptionsContent = await getThemesOptionsContent();
	const laundryDryCleaningMenuLinks = await getLaundryDryCleaningLinksContent();

	return {
		props: {
			serviceMenuLinks,
			laundryDryCleaningMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			hotelRestaurantServicesPageContent:
				response?.data?.mainContent?.edges[0]?.node
					?.HotelRestaurantServicesPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
