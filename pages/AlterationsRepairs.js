import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Footer from "/components/Footer";
import SignUp from "../components/SignUp";
import OurProcess from "../components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import TitleParagraph from "/components/TitleParagraph";
import ContactBanner from "../components/ContactBanner";
import HeroSectionFour from "../components/HeroSectionFour";
import TitleParagraphImage from "../components/TitleParagraphImage";

const AlterationsRepairs = ({
	seo,
	pageTitle,
	CommercialServicesMenuLinks,
	themesOptionsContent,
	IndividualServicesMenuLinks,
	alterationsRepairsPageContent,
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

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionFour
					title={alterationsRepairsPageContent?.heroSection?.title}
					paragraph={alterationsRepairsPageContent?.heroSection?.paragraph}
					backgroundImage={
						alterationsRepairsPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
					displayPaymentInfo={
						alterationsRepairsPageContent?.heroSection?.displayPaymentInfo
					}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				{/* // <========== TITLE & PARAGRAPH ==========> */}
				<TitleParagraph
					title={alterationsRepairsPageContent?.titleParagraph?.title}
					paragraph={alterationsRepairsPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={alterationsRepairsPageContent?.whatIsIncluded?.image}
					title={alterationsRepairsPageContent?.whatIsIncluded?.title}
					subtitle={alterationsRepairsPageContent?.whatIsIncluded?.subtitle}
					paragraph={alterationsRepairsPageContent?.whatIsIncluded?.paragraph}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={alterationsRepairsPageContent?.titleParagraphImage?.image}
					title={alterationsRepairsPageContent?.titleParagraphImage?.title}
					subtitle={
						alterationsRepairsPageContent?.titleParagraphImage?.subtitle
					}
					paragraph={
						alterationsRepairsPageContent?.titleParagraphImage?.paragraph
					}
				/>

				{/* <!--===== SIGN UP =====--> */}
				<SignUp
					title={alterationsRepairsPageContent?.signUp?.title}
					paragraph={alterationsRepairsPageContent?.signUp?.paragraph}
					buttonLink={alterationsRepairsPageContent?.signUp?.buttonLink}
					// Display Options
					backgroundColor={
						alterationsRepairsPageContent?.signUp?.backgroundColor
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={alterationsRepairsPageContent?.contactBanner?.title}
					paragraph={alterationsRepairsPageContent?.contactBanner?.paragraph}
					buttonLink={alterationsRepairsPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						alterationsRepairsPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={alterationsRepairsPageContent?.ourProcess?.title}
					paragraph={alterationsRepairsPageContent?.ourProcess?.paragraph}
					gridContent={alterationsRepairsPageContent?.ourProcess?.gridContent}
					// Display Options
					backgroundColor={
						alterationsRepairsPageContent?.ourProcess?.backgroundColor
					}
					backgroundLetter={
						alterationsRepairsPageContent?.ourProcess?.backgroundLetter
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
	const getAlterationsRepairsPageContent = gql`
		{
			pageTitle: pages(where: {id: 173, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 173, status: PUBLISH}) {
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
						alterationsRepairsPage {
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
							whatIsIncluded {
								title
								subtitle
								paragraph
								image {
									altText
									sourceUrl
								}
							}
							titleParagraphImage {
								title
								subtitle
								paragraph
								image {
									altText
									sourceUrl
								}
							}
							signUp {
								title
								paragraph
								backgroundColor
								buttonLink {
									url
									title
									target
								}
							}
							contactBanner {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								image {
									sourceUrl
								}
							}
							ourProcess {
								title
								paragraph
								backgroundLetter
								backgroundColor
								gridContent {
									title
									paragraph
									image {
										altText
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
		query: getAlterationsRepairsPageContent,
	});

	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			alterationsRepairsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.alterationsRepairsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default AlterationsRepairs;
