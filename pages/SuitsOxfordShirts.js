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
import SignUp from "../components/SignUp";
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import OurProcess from "../components/OurProcess";
import ContactBanner from "../components/ContactBanner";
import HeroSectionTwo from "../components/HeroSectionTwo";
import ContactFormMap from "../components/ContactFormMap";
import CTAContentImage from "../components/CTAContentImage";
import TitleParagraphTwo from "../components/TitleParagraphTwo";
import AlterationsRepairs from "../components/AlterationsRepairs";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";

const SuitsOxfordShirts = ({
	seo,
	pageTitle,
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
	suitsOxfordShirtsPageContent,
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
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
			/>

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionTwo
					title={suitsOxfordShirtsPageContent?.heroSection?.title}
					subtitle={suitsOxfordShirtsPageContent?.heroSection?.subtitle}
					backgroundImage={
						suitsOxfordShirtsPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphTwo
					title={suitsOxfordShirtsPageContent?.titleParagraph?.title}
					paragraph={suitsOxfordShirtsPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={suitsOxfordShirtsPageContent?.suitsContent?.title}
					paragraph={suitsOxfordShirtsPageContent?.suitsContent?.paragraph}
					gridContent={suitsOxfordShirtsPageContent?.suitsContent?.gridContent}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.suitsContent?.backgroundColor
					}
					backgroundLetter={
						suitsOxfordShirtsPageContent?.suitsContent?.backgroundLetter
					}
				/>

				{/* // <========== OUR OPTIONS ==========> */}
				<TwoOptions
					title={suitsOxfordShirtsPageContent?.ourOptions?.title}
					paragraph={suitsOxfordShirtsPageContent?.ourOptions?.paragraph}
					content={suitsOxfordShirtsPageContent?.ourOptions?.content}
				/>

				{/* <!--===== GET DOWN TO BUSINESS CTA =====--> */}
				<CTAContentImage
					title={suitsOxfordShirtsPageContent?.ctaContentImage?.title}
					paragraph={suitsOxfordShirtsPageContent?.ctaContentImage?.paragraph}
					paragraphOne={
						suitsOxfordShirtsPageContent?.ctaContentImage?.paragraphOne
					}
					paragraphTwo={
						suitsOxfordShirtsPageContent?.ctaContentImage?.paragraphTwo
					}
					subtitleOne={
						suitsOxfordShirtsPageContent?.ctaContentImage?.subtitleOne
					}
					subtitleTwo={
						suitsOxfordShirtsPageContent?.ctaContentImage?.subtitleTwo
					}
					buttonLink={suitsOxfordShirtsPageContent?.ctaContentImage?.buttonLink}
					Image={suitsOxfordShirtsPageContent?.ctaContentImage?.image}
				/>

				{/* <!--===== SIGN UP =====--> */}
				<SignUp
					title={suitsOxfordShirtsPageContent?.signUp?.title}
					paragraph={suitsOxfordShirtsPageContent?.signUp?.paragraph}
					buttonLink={suitsOxfordShirtsPageContent?.signUp?.buttonLink}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.signUp?.backgroundColor
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={suitsOxfordShirtsPageContent?.contactBanner?.title}
					paragraph={suitsOxfordShirtsPageContent?.contactBanner?.paragraph}
					buttonLink={suitsOxfordShirtsPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						suitsOxfordShirtsPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={suitsOxfordShirtsPageContent?.ourProcess?.title}
					paragraph={suitsOxfordShirtsPageContent?.ourProcess?.paragraph}
					gridContent={suitsOxfordShirtsPageContent?.ourProcess?.gridContent}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.ourProcess?.backgroundColor
					}
					backgroundLetter={
						suitsOxfordShirtsPageContent?.ourProcess?.backgroundLetter
					}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={suitsOxfordShirtsPageContent?.imageTextBulletPoints?.title}
					buttonLink={
						suitsOxfordShirtsPageContent?.imageTextBulletPoints?.buttonLink
					}
					Image={suitsOxfordShirtsPageContent?.imageTextBulletPoints?.image}
					bulletPoints={
						suitsOxfordShirtsPageContent?.imageTextBulletPoints?.bulletPoints
					}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.imageTextBulletPoints?.backgroundColor
					}
				/>

				{/* <!--===== ALTERATIONS & REPAIRS =====--> */}
				<AlterationsRepairs
					title={suitsOxfordShirtsPageContent?.alterationsRepairs?.title}
					titleTwo={suitsOxfordShirtsPageContent?.alterationsRepairs?.titleTwo}
					titleThree={
						suitsOxfordShirtsPageContent?.alterationsRepairs?.titleThree
					}
					paragraph={
						suitsOxfordShirtsPageContent?.alterationsRepairs?.paragraph
					}
					paragraphTwo={
						suitsOxfordShirtsPageContent?.alterationsRepairs?.paragraphTwo
					}
					paragraphThree={
						suitsOxfordShirtsPageContent?.alterationsRepairs?.paragraphThree
					}
					imageThree={
						suitsOxfordShirtsPageContent?.alterationsRepairs?.imageThree
					}
					imageTwo={suitsOxfordShirtsPageContent?.alterationsRepairs?.imageTwo}
					imageBanner={
						suitsOxfordShirtsPageContent?.alterationsRepairs?.imageBanner
							?.sourceUrl
					}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={suitsOxfordShirtsPageContent?.contactUs?.title}
					paragraph={suitsOxfordShirtsPageContent?.contactUs?.paragraph}
					buttonLink={suitsOxfordShirtsPageContent?.contactUs?.buttonLink}
					paragraphTwo={
						suitsOxfordShirtsPageContent?.contactUs?.paragraphBottom
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

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
// SuitsOxfordShirts.getLayout = function PageLayout(page) {
// 	return (
// 		<>
// 			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
// 			{page}

// 			{/* <!--===== FOOTER =====--> */}
// 			{/* <FooterDark /> */}
// 		</>
// 	);
// };

export async function getStaticProps() {
	const getSuitsOxfordShirtsContent = gql`
		{
			pageTitle: pages(where: {id: 179, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 179, status: PUBLISH}) {
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
						SuitsOxfordShirtsPage {
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
							suitsContent {
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
							ourOptions {
								title
								paragraph
								content {
									titleTwo
									title
									image {
										sourceUrl
									}
									imageTwo {
										sourceUrl
									}
									buttonLink {
										url
										title
										target
									}
									buttonLinkTwo {
										url
										title
										target
									}
								}
							}
							ctaContentImage {
								title
								subtitleOne
								subtitleTwo
								paragraph
								paragraphOne
								paragraphTwo
								image {
									altText
									sourceUrl
								}
								buttonLink {
									url
									title
									target
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

	const response = await client.query({
		query: getSuitsOxfordShirtsContent,
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
			suitsOxfordShirtsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.SuitsOxfordShirtsPage,
			themesOptionsContent,
		},
		revalidate: 60,
	};
}

export default SuitsOxfordShirts;
