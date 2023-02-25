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
import SignUp from "../components/SignUp";
import MetaTag from "../components/Meta/MetaTag";
import OurProcess from "../components/OurProcess";
import TeamMembers from "../components/TeamMembers";
import StoreLocation from "../components/StoreLocation";
import TitleParagraph from "../components/TitleParagraph";
import ContactBanner from "../components/ContactBanner";
import HeroSectionFour from "../components/HeroSectionFour";
import AlterationsReline from "../components/AlterationsRepairs";
import TitleParagraphImage from "../components/TitleParagraphImage";

const AlterationsRepairs = ({
	seo,
	pageTitle,
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
	alterationsRepairsPageContent,
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

				{/* <!--===== ALTERATIONS & REPAIRS =====--> */}
				<AlterationsReline
					title={alterationsRepairsPageContent?.alterationsRepairs?.title}
					titleTwo={alterationsRepairsPageContent?.alterationsRepairs?.titleTwo}
					titleThree={
						alterationsRepairsPageContent?.alterationsRepairs?.titleThree
					}
					paragraph={
						alterationsRepairsPageContent?.alterationsRepairs?.paragraph
					}
					paragraphTwo={
						alterationsRepairsPageContent?.alterationsRepairs?.paragraphTwo
					}
					paragraphThree={
						alterationsRepairsPageContent?.alterationsRepairs?.paragraphThree
					}
					imageThree={
						alterationsRepairsPageContent?.alterationsRepairs?.imageThree
					}
					imageTwo={alterationsRepairsPageContent?.alterationsRepairs?.imageTwo}
					imageBanner={
						alterationsRepairsPageContent?.alterationsRepairs?.imageBanner
							?.sourceUrl
					}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={alterationsRepairsPageContent?.whatIsIncluded?.image}
					title={alterationsRepairsPageContent?.whatIsIncluded?.title}
					subtitle={alterationsRepairsPageContent?.whatIsIncluded?.subtitle}
					paragraph={alterationsRepairsPageContent?.whatIsIncluded?.paragraph}
				/>

				{/* TEAM MEMBERS */}
				<TeamMembers
					title={alterationsRepairsPageContent?.teamMembers?.title}
					paragraph={alterationsRepairsPageContent?.teamMembers?.paragraph}
					profileGrid={alterationsRepairsPageContent?.teamMembers?.profileGrid}
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

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={alterationsRepairsPageContent?.ourLocation?.title}
					paragraph={alterationsRepairsPageContent?.ourLocation?.paragraph}
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

export async function getStaticProps() {
	const getAlterationsRepairsPageContent: any = gql`
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
							alterationsRepairs {
								title
								titleTwo
								titleThree
								paragraph
								paragraphTwo
								paragraphThree
								imageBanner {
									sourceUrl
								}
								imageTwo {
									altText
									sourceUrl
								}
								imageThree {
									altText
									sourceUrl
								}
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
							teamMembers {
								title
								paragraph
								profileGrid {
									profileCard {
										title
										jobPosition
										twitter
										facebook
										instagram
										image {
											altText
											sourceUrl
										}
									}
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

	const response: any = await client.query({
		query: getAlterationsRepairsPageContent,
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
			alterationsRepairsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.alterationsRepairsPage,
		},
		revalidate: 60,
	};
}

export default AlterationsRepairs;
