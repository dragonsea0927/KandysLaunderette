/* eslint-disable @next/next/no-img-element */
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getLatestTwoPosts} from "../lib/blogPosts";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import BlogBanner from "../components/BlogBanner";
import TwoOptions from "../components/TwoOptions";
import StoreLocation from "/components/storeLocation";
import ImageContent from "../components/ImageContent";
import PricingPlans from "../components/PricingPlans";
import ContactBanner from "../components/ContactBanner";
import TitleGridContent from "/components/TitleGridContent";
import ContactBannerTwo from "/components/ContactBannerTwo";
import CTAContentImage from "../components/CTAContentImage";
import HeroSectionThree from "../components/HeroSectionThree";
import TitleGridContentTwo from "/components/TitleGridContentTwo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TwitterTestimonialGrid from "../components/TwitterTestimonialGrid";

const services = ({
	seo,
	pageTitle,
	latestTwoPosts,
	servicesPageContent,
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
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
			/>

			<main>
				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<HeroSectionThree
					title={servicesPageContent?.heroSection?.square?.title}
					subtitle={servicesPageContent?.heroSection?.square?.subtitle}
					// Main Square
					buttonLink={servicesPageContent?.heroSection?.square?.buttonLink}
					buttonLinkTwo={
						servicesPageContent?.heroSection?.square?.buttonLinkTwo
					}
					backgroundImage={
						servicesPageContent?.heroSection?.square?.backgroundImage?.sourceUrl
					}
					// Square One
					titleTwo={servicesPageContent?.heroSection?.squareone?.title}
					subtitleTwo={servicesPageContent?.heroSection?.squareone?.subtitle}
					buttonLinkThree={
						servicesPageContent?.heroSection?.squareone?.buttonLink
					}
					backgroundImageTwo={
						servicesPageContent?.heroSection?.squareone?.backgroundImage
							?.sourceUrl
					}
					// Square Two
					titleThree={servicesPageContent?.heroSection?.squaretwo?.title}
					subtitleThree={servicesPageContent?.heroSection?.squaretwo?.subtitle}
					buttonLinkFour={
						servicesPageContent?.heroSection?.squaretwo?.buttonLink
					}
					backgroundImageThree={
						servicesPageContent?.heroSection?.squaretwo?.backgroundImage
							?.sourceUrl
					}
				/>

				{/* // <========== OUR OPTIONS ==========> */}
				<TwoOptions
					title={servicesPageContent?.ourOptions?.title}
					paragraph={servicesPageContent?.ourOptions?.paragraph}
					content={servicesPageContent?.ourOptions?.content}
				/>

				{/* <!--===== CONTENT =====--> */}
				<ImageContent
					title={servicesPageContent?.imageContent?.title}
					titleTwo={servicesPageContent?.imageContent?.titleTwo}
					titleThree={servicesPageContent?.imageContent?.titleThree}
					paragraph={servicesPageContent?.imageContent?.paragraph}
					paragraphTwo={servicesPageContent?.imageContent?.paragraphTwo}
					paragraphThree={servicesPageContent?.imageContent?.paragraphThree}
					Image={servicesPageContent?.imageContent?.image}
				/>

				{/* <!--===== COMMERCIAL SERVICES =====--> */}
				<TitleGridContentTwo
					title={servicesPageContent?.commercialServices?.title}
					paragraph={servicesPageContent?.commercialServices?.paragraph}
					gridContent={servicesPageContent?.commercialServices?.gridContent}
				/>

				{/* <!--===== INFORMATION SECTION =====--> */}
				<ContactBannerTwo
					title={servicesPageContent?.contactBannerTwo?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={servicesPageContent?.contactBannerTwo?.buttonLink}
					backgroundImage={
						servicesPageContent?.contactBannerTwo?.image?.sourceUrl
					}
				/>

				{/* <!--===== GET DOWN TO BUSINESS CTA =====--> */}
				<CTAContentImage
					title={servicesPageContent?.ctaContentImage?.title}
					paragraph={servicesPageContent?.ctaContentImage?.paragraph}
					paragraphOne={servicesPageContent?.ctaContentImage?.paragraphOne}
					paragraphTwo={servicesPageContent?.ctaContentImage?.paragraphTwo}
					subtitleOne={servicesPageContent?.ctaContentImage?.subtitleOne}
					subtitleTwo={servicesPageContent?.ctaContentImage?.subtitleTwo}
					buttonLink={servicesPageContent?.ctaContentImage?.buttonLink}
					Image={servicesPageContent?.ctaContentImage?.image}
				/>

				{/* <!--===== PRICING PLANS =====--> */}
				<PricingPlans
					title={servicesPageContent?.pricingPlans?.title}
					paragraph={servicesPageContent?.pricingPlans?.paragraph}
					subscriptionsGrid={
						servicesPageContent?.pricingPlans?.subscriptionsGrid
					}
				/>

				{/* <!--===== INDIVIDUAL SERVICES =====--> */}
				<TitleGridContent
					title={servicesPageContent?.individualServices?.title}
					paragraph={servicesPageContent?.individualServices?.paragraph}
					gridContent={servicesPageContent?.individualServices?.gridContent}
					backgroundImage={
						servicesPageContent?.individualServices?.backgroundImage?.sourceUrl
					}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={servicesPageContent?.imageTextBulletPoints?.title}
					buttonLink={servicesPageContent?.imageTextBulletPoints?.buttonLink}
					Image={servicesPageContent?.imageTextBulletPoints?.image}
					bulletPoints={
						servicesPageContent?.imageTextBulletPoints?.bulletPoints
					}
					// Display Options
					backgroundColor={
						servicesPageContent?.imageTextBulletPoints?.backgroundColor
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={servicesPageContent?.contactBanner?.title}
					paragraph={servicesPageContent?.contactBanner?.paragraph}
					buttonLink={servicesPageContent?.contactBanner?.buttonLink}
					backgroundImage={servicesPageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== TWITTER TESTIMONIAL =====--> */}
				<TwitterTestimonialGrid
					title={servicesPageContent?.twitterTestimonial?.title}
					paragraph={servicesPageContent?.twitterTestimonial?.paragraph}
					gridContent={servicesPageContent?.twitterTestimonial?.gridContent}
				/>

				{/* <!--===== BLOG BANNER =====--> */}
				<BlogBanner
					title={servicesPageContent?.blogBanner?.title}
					paragraph={servicesPageContent?.blogBanner?.paragraph}
					buttonLink={servicesPageContent?.blogBanner?.buttonLink}
					latestTwoPosts={latestTwoPosts?.latestTwoPosts}
				/>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={servicesPageContent?.ourLocation?.title}
					paragraph={servicesPageContent?.ourLocation?.paragraph}
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
	const getServicesPageContent = gql`
		{
			pageTitle: pages(where: {id: 479, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 479, status: PUBLISH}) {
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
						ServicesPage {
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
								squareone {
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
								squaretwo {
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
							imageContent {
								title
								titleTwo
								titleThree
								paragraph
								paragraphTwo
								paragraphThree
								image {
									altText
									sourceUrl
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
							commercialServices {
								title
								paragraph
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
							pricingPlans {
								title
								paragraph
								subscriptionsGrid {
									card {
										tier
										price
										billingInfo
										paragraphTop
										paragraphBottom
										buttonLink {
											url
											title
											target
										}
									}
								}
							}
							individualServices {
								title
								paragraph
								backgroundImage {
									sourceUrl
								}
								gridContent {
									title
									image {
										altText
										sourceUrl
									}
									link {
										url
										title
										target
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
							contactBannerTwo {
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
							twitterTestimonial {
								title
								paragraph
								gridContent {
									singleCard {
										userName
										userTag
										paragraph
										hashTags
										image {
											altText
											sourceUrl
										}
									}
								}
							}
							blogBanner {
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
		query: getServicesPageContent,
	});

	const latestTwoPosts = await getLatestTwoPosts();
	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			latestTwoPosts,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			servicesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.ServicesPage,
			themesOptionsContent,
		},
		revalidate: 60,
	};
}

export default services;
