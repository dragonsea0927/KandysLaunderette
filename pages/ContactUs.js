import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Logos from "../components/Logos";
import Footer from "/components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import ContactForm from "../components/ContactForm";
import HeroSectionFour from "../components/HeroSectionFour";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";

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

				{/* <!--===== CONTACT FORM LOCATION =====--> */}
				<ContactForm
					image={contactUsPageContent?.contactForm?.image}
					title={contactUsPageContent?.contactForm?.title}
					email={themesOptionsContent?.themesOptions?.email}
					formText={contactUsPageContent?.contactForm?.formText}
					paragraph={contactUsPageContent?.contactForm?.paragraph}
					phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
					backgroundImage={
						contactUsPageContent?.contactForm?.backgroundImage?.sourceUrl
					}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<Logos
					title={contactUsPageContent?.logos?.title}
					logoGrid={contactUsPageContent?.logos?.logoGrid}
					// Display Options
					backgroundColor={contactUsPageContent?.logos?.backgroundColor}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={contactUsPageContent?.imageTextBulletPoints?.title}
					buttonLink={contactUsPageContent?.imageTextBulletPoints?.buttonLink}
					Image={contactUsPageContent?.imageTextBulletPoints?.image}
					bulletPoints={
						contactUsPageContent?.imageTextBulletPoints?.bulletPoints
					}
					// Display Options
					backgroundColor={
						contactUsPageContent?.imageTextBulletPoints?.backgroundColor
					}
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
							contactForm {
								title
								paragraph
								formText
								image {
									altText
									sourceUrl
								}
								backgroundImage {
									sourceUrl
								}
							}
							logos {
								title
								backgroundColor
								logoGrid {
									image {
										altText
										sourceUrl
									}
								}
							}
							imageTextBulletPoints {
								title
								backgroundColor
								buttonLink {
									url
									title
									target
								}
								image {
									altText
									sourceUrl
								}
								bulletPoints {
									text
									icon {
										sourceUrl
									}
								}
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
