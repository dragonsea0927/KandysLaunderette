import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import FAQTwo from "../components/FAQTwo";
import Footer from "../components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import HeroSection from "../components/HeroSection";
import StoreLocation from "../components/StoreLocation";
import ContactBanner from "../components/ContactBanner";
import FeaturesBanner from "../components/FeaturesBanner";
import TextImageJumbo from "../components/TextImageJumbo";
import ContactBannerTwo from "../components/ContactBannerTwo";
import FeaturesBannerTwo from "../components/FeaturesBannerTwo";
import TitleGridContentTwo from "../components/TitleGridContentTwo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TitleParagraphGridContent from "../components/TitleParagraphGridContent";
import LogoBanner from "../components/LogoBanner";

export default function Home({
	seo,
	homePageContent,
	CommercialServicesMenuLinks,
	themesOptionsContent,
	IndividualServicesMenuLinks,
}: any) {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<MetaTag title={`Kandy's Launderette`} seo={seo} />

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSection
					title={homePageContent?.heroSection?.title}
					subtitle={homePageContent?.heroSection?.subtitle}
					paragraph={homePageContent?.heroSection?.paragraph}
					buttonLink={homePageContent?.heroSection?.buttonLink}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
					backgroundImage={
						homePageContent?.heroSection?.backgroundImage?.sourceUrl
					}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<FeaturesBanner
					title={homePageContent?.featuresBanner?.title}
					content={homePageContent?.featuresBanner?.content}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<TextImageJumbo
					gridContent={homePageContent?.textImageJumbo?.gridContent}
				/>

				{/* <!--===== FEATURE BANNER =====--> */}
				<FeaturesBannerTwo
					title={homePageContent?.featuresBannerTwo?.title}
					gridContent={homePageContent?.featuresBannerTwo?.content}
				/>

				{/* // <========== OUR OPTIONS ==========> */}
				<TwoOptions
					title={homePageContent?.ourOptions?.title}
					paragraph={homePageContent?.ourOptions?.paragraph}
					content={homePageContent?.ourOptions?.content}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={homePageContent?.imageTextBulletPoints?.title}
					buttonLink={homePageContent?.imageTextBulletPoints?.buttonLink}
					image={homePageContent?.imageTextBulletPoints?.image}
					bulletPoints={homePageContent?.imageTextBulletPoints?.bulletPoints}
					// Display Options
					backgroundColor={
						homePageContent?.imageTextBulletPoints?.backgroundColor
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={homePageContent?.contactBanner?.title}
					paragraph={homePageContent?.contactBanner?.paragraph}
					buttonLink={homePageContent?.contactBanner?.buttonLink}
					backgroundImage={homePageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== SPECIAL OCCASIONS =====--> */}
				<TwoOptions
					title={homePageContent?.specialOccasions?.title}
					paragraph={homePageContent?.specialOccasions?.paragraph}
					content={homePageContent?.specialOccasions?.content}
				/>

				{/* <!--===== WHY CHOOSE US =====--> */}
				<TitleParagraphGridContent
					title={homePageContent?.whyChooseUs?.title}
					paragraph={homePageContent?.whyChooseUs?.paragraph}
					gridContent={homePageContent?.whyChooseUs?.gridContent}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<LogoBanner
					title={homePageContent?.logos?.title}
					logoBanner={homePageContent?.logos?.logoBanner}
				/>

				{/* <!--===== HOTEL & RESTAURANT =====--> */}
				<TitleGridContentTwo
					title={homePageContent?.commercialServices?.title}
					paragraph={homePageContent?.commercialServices?.paragraph}
					gridContent={homePageContent?.commercialServices?.gridContent}
				/>

				{/* <!--===== INFORMATION SECTION =====--> */}
				<ContactBannerTwo
					title={homePageContent?.contactBannerTwo?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={homePageContent?.contactBannerTwo?.buttonLink}
					backgroundImage={homePageContent?.contactBannerTwo?.image?.sourceUrl}
				/>

				{/* <!--===== FAQ TWO =====--> */}
				<FAQTwo
					title={homePageContent?.faq?.title}
					paragraph={homePageContent?.faq?.paragraph}
					buttonLink={homePageContent?.faq?.buttonLink}
					faqContent={homePageContent?.faq?.faqContent}
				/>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={homePageContent?.ourLocation?.title}
					paragraph={homePageContent?.ourLocation?.paragraph}
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
}

export async function getStaticProps() {
	const getHomePageContent: any = gql`
		{
			mainContent: pages(where: {id: 168, status: PUBLISH}) {
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
						homePage {
							heroSection {
								title
								subtitle
								paragraph
								buttonLink {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
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
							textImageJumbo {
								gridContent {
									card {
										title
										subtitle
										paragraph
										displayImageOption
										displayButtonOption
										buttonLink {
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
							specialOccasions {
								title
								paragraph
								content {
									titleTwo
									title
									buttonLinkTwo {
										url
										title
										target
									}
									buttonLink {
										url
										title
										target
									}
									imageTwo {
										altText
										sourceUrl
									}
									image {
										altText
										sourceUrl
									}
								}
							}
							whyChooseUs {
								title
								paragraph
								gridContent {
									title
									paragraph
									image {
										altText
										sourceUrl
									}
								}
							}
							logos {
								title
								logoBanner {
									image {
										altText
										sourceUrl
									}
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
							faq {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								faqContent {
									title
									paragraph
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
		query: getHomePageContent,
	});

	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			themesOptionsContent: themesOptionsContent,
			homePageContent: response?.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 60,
	};
}
