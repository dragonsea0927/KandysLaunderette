import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import OurProcess from "../components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import TextImageTwo from "../components/TextImageTwo";
import HeroSectionTwo from "../components/HeroSectionTwo";
import ContactBannerThree from "/components/ContactBannerThree";
import TitleParagraphThree from "../components/TitleParagraphThree";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";

const WeddingDressesAndBridal = ({
	seo,
	pageTitle,
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
	weddingDressesAndBridalPageContent,
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
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
			/>

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionTwo
					title={weddingDressesAndBridalPageContent?.heroSection?.title}
					subtitle={weddingDressesAndBridalPageContent?.heroSection?.subtitle}
					backgroundImage={
						weddingDressesAndBridalPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
				/>

				{/* // <========== WEDDING DRESS PROCESS ==========> */}
				<TextImageTwo
					title={weddingDressesAndBridalPageContent?.textImage?.title}
					paragraph={weddingDressesAndBridalPageContent?.textImage?.paragraph}
					image={weddingDressesAndBridalPageContent?.textImage?.image}
					// Display Options
					displayImageLocation={
						weddingDressesAndBridalPageContent?.textImage?.displayOption
					}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphThree
					title={weddingDressesAndBridalPageContent?.titleParagraph?.title}
					paragraph={
						weddingDressesAndBridalPageContent?.titleParagraph?.paragraph
					}
				/>

				{/* // <========== WEDDING DRESS PROCESS ==========> */}
				<TextImageTwo
					title={weddingDressesAndBridalPageContent?.textImageTwo?.title}
					paragraph={
						weddingDressesAndBridalPageContent?.textImageTwo?.paragraph
					}
					image={weddingDressesAndBridalPageContent?.textImageTwo?.image}
					// Display Options
					displayImageLocation={
						weddingDressesAndBridalPageContent?.textImageTwo?.displayOption
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={weddingDressesAndBridalPageContent?.ourProcess?.title}
					paragraph={weddingDressesAndBridalPageContent?.ourProcess?.paragraph}
					gridContent={
						weddingDressesAndBridalPageContent?.ourProcess?.gridContent
					}
					// Display Options
					backgroundColor={
						weddingDressesAndBridalPageContent?.ourProcess?.backgroundColor
					}
					backgroundLetter={
						weddingDressesAndBridalPageContent?.ourProcess?.backgroundLetter
					}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={
						weddingDressesAndBridalPageContent?.imageTextBulletPoints?.title
					}
					buttonLink={
						weddingDressesAndBridalPageContent?.imageTextBulletPoints
							?.buttonLink
					}
					Image={
						weddingDressesAndBridalPageContent?.imageTextBulletPoints?.image
					}
					bulletPoints={
						weddingDressesAndBridalPageContent?.imageTextBulletPoints
							?.bulletPoints
					}
					// Display Options
					backgroundColor={
						weddingDressesAndBridalPageContent?.imageTextBulletPoints
							?.backgroundColor
					}
				/>

				{/* <!--===== CONTACT BANNER THREE =====--> */}
				<ContactBannerThree
					title={weddingDressesAndBridalPageContent?.contactBanner?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={
						weddingDressesAndBridalPageContent?.contactBanner?.buttonLink
					}
					backgroundImage={
						weddingDressesAndBridalPageContent?.contactBanner?.image?.sourceUrl
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
	const getWeddingDressesBridalContent = gql`
		{
			pageTitle: pages(where: {id: 181, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 181, status: PUBLISH}) {
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
						WeddingDressesBridalPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							titleParagraph {
								title
								paragraph
							}
							textImage {
								title
								paragraph
								displayOption
								image {
									altText
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
							imageTextBulletPoints {
								title
								backgroundColor
								image {
									altText
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
								bulletPoints {
									text
									icon {
										altText
										sourceUrl
									}
								}
							}
							textImageTwo {
								title
								paragraph
								displayOption
								image {
									altText
									sourceUrl
								}
							}
							contactBanner {
								title
								buttonLink {
									url
									title
									target
								}
								image {
									sourceUrl
								}
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getWeddingDressesBridalContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();
	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			weddingDressesAndBridalPageContent:
				response?.data?.mainContent?.edges[0]?.node?.WeddingDressesBridalPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default WeddingDressesAndBridal;
