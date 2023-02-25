import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Footer from "../components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import ContactFormMap from "../components/ContactFormMap";
import HeroSectionFour from "../components/HeroSectionFour";
import TitleParagraphFour from "../components/TitleParagraphFour";

const Sustainability = ({
	seo,
	pageTitle,
	themesOptionsContent,
	SustainabilityPageContent,
	IndividualServicesMenuLinks,
	CommercialServicesMenuLinks,
}: any) => {
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
					title={SustainabilityPageContent?.heroSection?.title}
					paragraph={SustainabilityPageContent?.heroSection?.paragraph}
					backgroundImage={
						SustainabilityPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={
						SustainabilityPageContent?.heroSection?.displayPaymentInfo
					}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphFour
					title={SustainabilityPageContent?.titleParagraph?.title}
					paragraph={SustainabilityPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={SustainabilityPageContent?.contactUs?.title}
					paragraph={SustainabilityPageContent?.contactUs?.paragraph}
					paragraphBottom={
						SustainabilityPageContent?.contactUs?.paragraphBottom
					}
				/>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
			/>
		</motion.div>
	);
};

export default Sustainability;

export async function getStaticProps() {
	const getSustainabilityPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 3916, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 3916, status: PUBLISH}) {
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
						SustainabilityPage {
							heroSection {
								title
								paragraph
								displayPaymentInfo
								backgroundImage {
									sourceUrl
								}
							}
							titleParagraph {
								title
								paragraph
							}
							contactUs {
								title
								paragraph
								paragraphBottom
							}
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getSustainabilityPageContent,
	});

	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			SustainabilityPageContent:
				response?.data?.mainContent?.edges[0]?.node?.SustainabilityPage,
		},
		revalidate: 60,
	};
}
