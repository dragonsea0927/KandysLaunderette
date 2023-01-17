/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import HeroSection from "../components/HeroSection";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";
import FeaturesBanner from "../components/FeaturesBanner";
import ContactBannerTwo from "/components/ContactBannerTwo";
import TitleGridContent from "/components/TitleGridContent";
import TitleGridContentTwo from "/components/TitleGridContentTwo";
import TitleParagraphGridContent from "/components/TitleParagraphGridContent";
import TextImageJumbo from "../components/TextImageJumbo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";

export default function Home({
	seo,
	homePageContent,
	serviceMenuLinks,
	themesOptionsContent,
	laundryDryCleaningMenuLinks,
}) {
	// console.log(themesOptionsContent);

	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<MetaTag
				title={`Kandy's Launderette | Professional Dry Cleaning Solutions`}
				seo={seo}
			/>

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSection
					title={homePageContent?.heroSection?.title}
					subtitle={homePageContent?.heroSection?.subtitle}
					paragraph={homePageContent?.heroSection?.paragraph}
					buttonLink={homePageContent?.heroSection?.buttonLink}
					serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
					laundryDryCleaningMenuLinks={
						laundryDryCleaningMenuLinks?.laundryDryCleaningMenuLinks
					}
					backgroundImage={
						homePageContent?.heroSection?.backgroundImage?.sourceUrl
					}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<FeaturesBanner
					title={homePageContent?.featuresBanner?.title}
					content={homePageContent?.featuresBanner?.content}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<TextImageJumbo
					gridContent={homePageContent?.textImageJumbo?.gridContent}
				/>

				{/* <!--===== MAIN SERVICES =====--> */}
				<TitleGridContent
					title={homePageContent?.ourServices?.title}
					paragraph={homePageContent?.ourServices?.paragraph}
					gridContent={homePageContent?.ourServices?.gridContent}
					backgroundImage={
						homePageContent?.ourServices?.backgroundImage?.sourceUrl
					}
				/>

				{/* <!--===== SPECIAL OCCASIONS =====--> */}
				<TwoOptions
					title={homePageContent?.specialOccasions?.title}
					paragraph={homePageContent?.specialOccasions?.paragraph}
					content={homePageContent?.specialOccasions?.content}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={homePageContent?.imageTextBulletPoints?.title}
					buttonLink={homePageContent?.imageTextBulletPoints?.buttonLink}
					Image={homePageContent?.imageTextBulletPoints?.image?.sourceUrl}
					bulletPoints={homePageContent?.imageTextBulletPoints?.bulletPoints}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={homePageContent?.contactBanner?.title}
					paragraph={homePageContent?.contactBanner?.paragraph}
					buttonLink={homePageContent?.contactBanner?.buttonLink}
					backgroundImage={homePageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== WHY CHOOSE US =====--> */}
				<TitleParagraphGridContent
					title={homePageContent?.whyChooseUs?.title}
					paragraph={homePageContent?.whyChooseUs?.paragraph}
					gridContent={homePageContent?.whyChooseUs?.gridContent}
				/>

				{/* <!--===== HOTEL & RESTAURANT =====--> */}
				<TitleGridContentTwo
					title={homePageContent?.hotelRestaurantServices?.title}
					paragraph={homePageContent?.hotelRestaurantServices?.paragraph}
					gridContent={homePageContent?.hotelRestaurantServices?.gridContent}
				/>

				{/* <!--===== INFORMATION SECTION =====--> */}
				<ContactBannerTwo
					title={homePageContent?.contactBannerTwo?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={homePageContent?.contactBannerTwo?.buttonLink}
					backgroundImage={homePageContent?.contactBannerTwo?.image?.sourceUrl}
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
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
			/>
		</motion.div>
	);
}

export async function getStaticProps() {
	const getHomePageContent = gql`
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
										sourceUrl
									}
								}
							}
							textImageJumbo {
								gridContent {
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
										sourceUrl
										altText
									}
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
										sourceUrl
									}
									image {
										sourceUrl
										altText
									}
								}
							}
							imageTextBulletPoints {
								title
								buttonLink {
									url
									title
									target
								}
								image {
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
							whyChooseUs {
								title
								paragraph
								gridContent {
									title
									paragraph
									image {
										sourceUrl
										altText
									}
								}
							}
							hotelRestaurantServices {
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
										sourceUrl
										altText
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
		query: getHomePageContent,
	});

	const serviceMenuLinks = await getServiceLinksContent();
	const themesOptionsContent = await getThemesOptionsContent();
	const laundryDryCleaningMenuLinks = await getLaundryDryCleaningLinksContent();

	return {
		props: {
			serviceMenuLinks,
			laundryDryCleaningMenuLinks,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			themesOptionsContent: themesOptionsContent,
			homePageContent: response?.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 1,
	};
}
