import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {fadeInUp} from "../animations/animations";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Footer from "/components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import StoreLocation from "/components/storeLocation";
import HeroSectionFour from "../components/HeroSectionFour";

const contactUs = ({
	seo,
	pageTitle,
	contactUsPageContent,
	themesOptionsContent,
	IndividualServicesMenuLinks,
	CommercialServicesMenuLinks,
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

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionFour
					title={contactUsPageContent?.heroSection?.title}
					paragraph={contactUsPageContent?.heroSection?.paragraph}
					backgroundImage={
						contactUsPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={
						contactUsPageContent?.heroSection?.displayPaymentInfo
					}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				{/* // <========== PAGE TITLE ==========> */}
				<div className={styles.pageTitle}>
					<div className="container mx-auto flex flex-col justify-center items-center gap-4">
						<div className={styles.content}>
							<motion.div variants={fadeInUp} className={styles.title}>
								<h2>Contact Us</h2>
								<h5>Lets get In Touch</h5>
							</motion.div>
						</div>
					</div>
				</div>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={contactUsPageContent?.ourLocation?.title}
					paragraph={contactUsPageContent?.ourLocation?.paragraph}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
			/>
		</motion.div>
	);
};

export async function getStaticProps() {
	const getContactUsPageContent = gql`
		{
			pageTitle: pages(where: {id: 175, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 175, status: PUBLISH}) {
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
						contactUsPage {
							heroSection {
								title
								paragraph
								displayPaymentInfo
								backgroundImage {
									sourceUrl
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
		query: getContactUsPageContent,
	});

	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			contactUsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.contactUsPage,
		},
		revalidate: 60,
	};
}

export default contactUs;
