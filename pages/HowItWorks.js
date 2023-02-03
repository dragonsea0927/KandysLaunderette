import Link from "next/link";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getLatestThreePosts} from "../lib/blogPosts";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import OurProcess from "/components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";
import FeaturesBanner from "../components/FeaturesBanner";
import TitleGridContent from "/components/TitleGridContent";
import HeroSectionThree from "../components/HeroSectionThree";
import FeaturesBannerTwo from "../components/FeaturesBannerTwo";
import TitleParagraphVideo from "../components/TitleParagraphVideo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TitleParagraphGridContentTwo from "../components/TitleParagraphGridContentTwo";
import SignUp from "../components/SignUp";
import Blogs from "../components/Blogs";
import PricingPlans from "../components/PricingPlans";

const HowItWorks = ({
	seo,
	pageTitle,
	latestThreePosts,
	themesOptionsContent,
	howItWorksPageContent,
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
				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<HeroSectionThree
					title={howItWorksPageContent?.heroSection?.square?.title}
					subtitle={howItWorksPageContent?.heroSection?.square?.subtitle}
					// Main Square
					buttonLink={howItWorksPageContent?.heroSection?.square?.buttonLink}
					buttonLinkTwo={
						howItWorksPageContent?.heroSection?.square?.buttonLinkTwo
					}
					backgroundImage={
						howItWorksPageContent?.heroSection?.square?.backgroundImage
							?.sourceUrl
					}
					// Square One
					titleTwo={howItWorksPageContent?.heroSection?.squareOne?.title}
					subtitleTwo={howItWorksPageContent?.heroSection?.squareOne?.subtitle}
					buttonLinkThree={
						howItWorksPageContent?.heroSection?.squareOne?.buttonLink
					}
					backgroundImageTwo={
						howItWorksPageContent?.heroSection?.squareOne?.backgroundImage
							?.sourceUrl
					}
					// Square Two
					titleThree={howItWorksPageContent?.heroSection?.squareTwo?.title}
					subtitleThree={
						howItWorksPageContent?.heroSection?.squareTwo?.subtitle
					}
					buttonLinkFour={
						howItWorksPageContent?.heroSection?.squareTwo?.buttonLink
					}
					backgroundImageThree={
						howItWorksPageContent?.heroSection?.squareTwo?.backgroundImage
							?.sourceUrl
					}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<FeaturesBannerTwo
					title={howItWorksPageContent?.featuresBannerTwo?.title}
					gridContent={howItWorksPageContent?.featuresBannerTwo?.content}
					IconImage={howItWorksPageContent?.featuresBannerTwo?.iconBanner}
					paragraph={howItWorksPageContent?.featuresBannerTwo?.paragraphBanner}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<TitleParagraphGridContentTwo
					title={`Here's how Kandy's Launderette makes your life easier.`}
					paragraph={`<p>
									Out In a hurry? Or from the convenience of your home. We offer a
									timely Pick-up and drop off collection service. With th best
									laundry delivery service available Our delivery boys can pick up
									all your dirty linen in 30 minutes and deliver them washed and
									folded in just 24 hours. 
								</p>`}
					gridContent={howItWorksPageContent?.ourServices?.gridContent}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<TitleParagraphVideo
					title={howItWorksPageContent?.titleParagraphVideo?.title}
					subtitle={howItWorksPageContent?.titleParagraphVideo?.subtitle}
					paragraph={howItWorksPageContent?.titleParagraphVideo?.paragraph}
					buttonLink={howItWorksPageContent?.titleParagraphVideo?.buttonLink}
					video={`/videos/pexels-tima-miroshnichenko-8756819.mp4`}
				/>

				{/* <!--===== SIGN UP =====--> */}
				<SignUp
					title={howItWorksPageContent?.signUp?.title}
					paragraph={howItWorksPageContent?.signUp?.paragraph}
					buttonLink={howItWorksPageContent?.signUp?.buttonLink}
					// Display Options
					backgroundColor={howItWorksPageContent?.signUp?.backgroundColor}
				/>

				{/* <!--===== PRICING PLANS =====--> */}
				<PricingPlans />

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={howItWorksPageContent?.imageTextBulletPoints?.title}
					buttonLink={howItWorksPageContent?.imageTextBulletPoints?.buttonLink}
					Image={howItWorksPageContent?.imageTextBulletPoints?.image}
					bulletPoints={
						howItWorksPageContent?.imageTextBulletPoints?.bulletPoints
					}
					// Display Options
					backgroundColor={
						howItWorksPageContent?.imageTextBulletPoints?.backgroundColor
					}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<FeaturesBanner
					title={howItWorksPageContent?.featuresBanner?.title}
					content={howItWorksPageContent?.featuresBanner?.content}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={howItWorksPageContent?.ourProcess?.title}
					paragraph={howItWorksPageContent?.ourProcess?.paragraph}
					gridContent={howItWorksPageContent?.ourProcess?.gridContent}
					// Display Options
					backgroundColor={howItWorksPageContent?.ourProcess?.backgroundColor}
					backgroundLetter={howItWorksPageContent?.ourProcess?.backgroundLetter}
				/>

				{/* <!--===== MAIN SERVICES =====--> */}
				<TitleGridContent
					title={howItWorksPageContent?.ourServices?.title}
					paragraph={howItWorksPageContent?.ourServices?.paragraph}
					gridContent={howItWorksPageContent?.ourServices?.gridContent}
					backgroundImage={
						howItWorksPageContent?.ourServices?.backgroundImage?.sourceUrl
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={howItWorksPageContent?.contactBanner?.title}
					paragraph={howItWorksPageContent?.contactBanner?.paragraph}
					buttonLink={howItWorksPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						howItWorksPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== BLOG =====--> */}
				<Blogs
					title={howItWorksPageContent?.blogs?.title}
					paragraph={howItWorksPageContent?.blogs?.paragraph}
					buttonLink={howItWorksPageContent?.blogs?.buttonLink}
					latestThreePosts={latestThreePosts?.latestThreePosts}
				/>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={howItWorksPageContent?.ourLocation?.title}
					paragraph={howItWorksPageContent?.ourLocation?.paragraph}
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
	const getHowItWorksPageContent = gql`
		{
			pageTitle: pages(where: {id: 678, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 678, status: PUBLISH}) {
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
						HowItWorksPage {
							heroSection {
								square {
									title
									subtitle
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
									backgroundImage {
										altText
										sourceUrl
									}
								}
								squareOne {
									title
									subtitle
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
									}
								}
								squareTwo {
									title
									subtitle
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
							}
							featuresBannerTwo {
								title
								paragraphBanner
								iconBanner {
									altText
									sourceUrl
								}
								content {
									title
									paragraph
									icon {
										altText
										sourceUrl
									}
								}
							}
							ourServices {
								title
								paragraph
								backgroundImage {
									sourceUrl
								}
								gridContent {
									title
									link {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
									}
								}
							}
							titleParagraphVideo {
								title
								subtitle
								videoLink
								paragraph
								buttonLink {
									url
									title
									target
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
							featuresBanner {
								title
								content {
									title
									icon {
										altText
										sourceUrl
									}
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
							blogs {
								title
								paragraph
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
		query: getHowItWorksPageContent,
	});

	const latestThreePosts = await getLatestThreePosts();
	const themesOptionsContent = await getThemesOptionsContent();
	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			latestThreePosts,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			howItWorksPageContent:
				response?.data?.mainContent?.edges[0]?.node?.HowItWorksPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default HowItWorks;
