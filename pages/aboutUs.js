import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, fadeInTwo, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import NavbarTwo from "/components/NavbarTwo";
import MetaTag from "../components/Meta/MetaTag";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";

const aboutUs = ({
	seo,
	pageTitle,
	serviceMenuLinks,
	aboutUsPageContent,
	themesOptionsContent,
	laundryDryCleaningMenuLinks,
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
			<MetaTag title={pageTitle} seo={seo} />

			{/* <!--===== NAVBAR =====--> */}
			<Navbar
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
				laundryDryCleaningMenuLinks={
					laundryDryCleaningMenuLinks?.laundryDryCleaningMenuLinks
				}
			/>

			<main>
				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={aboutUsPageContent?.contactBanner?.title}
					paragraph={aboutUsPageContent?.contactBanner?.paragraph}
					buttonLink={aboutUsPageContent?.contactBanner?.buttonLink}
					backgroundImage={aboutUsPageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={aboutUsPageContent?.ourLocation?.title}
					paragraph={aboutUsPageContent?.ourLocation?.paragraph}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
			/>
		</motion.div>
	);
};

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
aboutUs.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
			{page}
		</>
	);
};

export async function getStaticProps() {
	const getAboutUsPageContent = gql`
		{
			pageTitle: pages(where: {id: 171, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 171, status: PUBLISH}) {
				edges {
					node {
						seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
						aboutUsPage {
							contactBanner {
								title
								paragraph
								image {
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
							}
							ourLocation {
								title
								paragraph
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getAboutUsPageContent,
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
			aboutUsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.aboutUsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default aboutUs;
