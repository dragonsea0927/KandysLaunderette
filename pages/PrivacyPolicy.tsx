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

const PrivacyPolicy = ({
	seo,
	pageTitle,
	themesOptionsContent,
	privacyPolicyPageContent,
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
					title={privacyPolicyPageContent?.heroSection?.title}
					paragraph={privacyPolicyPageContent?.heroSection?.paragraph}
					backgroundImage={
						privacyPolicyPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={
						privacyPolicyPageContent?.heroSection?.displayPaymentInfo
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
					title={privacyPolicyPageContent?.titleParagraph?.title}
					paragraph={privacyPolicyPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={privacyPolicyPageContent?.contactUs?.title}
					paragraph={privacyPolicyPageContent?.contactUs?.paragraph}
					paragraphBottom={privacyPolicyPageContent?.contactUs?.paragraphBottom}
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

export default PrivacyPolicy;

export async function getStaticProps() {
	const getPrivacyPolicyPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 3893, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 3893, status: PUBLISH}) {
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
						PrivacyPolicyPage {
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
		query: getPrivacyPolicyPageContent,
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
			privacyPolicyPageContent:
				response?.data?.mainContent?.edges[0]?.node?.PrivacyPolicyPage,
		},
		revalidate: 60,
	};
}
