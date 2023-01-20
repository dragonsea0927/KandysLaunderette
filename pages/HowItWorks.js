import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";
import TitleGridContent from "/components/TitleGridContent";
import FourGridContent from "../components/FourGridContent";
import ContactBannerTwo from "/components/ContactBannerTwo";
import HeroSectionThree from "../components/HeroSectionThree";
import FeaturesBannerTwo from "../components/FeaturesBannerTwo";
import TitleParagraphVideo from "../components/TitleParagraphVideo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TitleParagraphGridContentTwo from "../components/TitleParagraphGridContentTwo";

const HowItWorks = ({
	seo,
	pageTitle,
	serviceMenuLinks,
	howItWorksPageContent,
	themesOptionsContent,
	laundryDryCleaningMenuLinks,
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
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
				laundryDryCleaningMenuLinks={
					laundryDryCleaningMenuLinks?.laundryDryCleaningMenuLinks
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
				<FeaturesBannerTwo />

				{/* <!--===== FEATURE BANNER =====--> */}
				<TitleParagraphGridContentTwo
					title={`Here's how Kandy's Launderette makes your life easier.`}
					paragraph={`In a hurry? Or just from the convenience of your home. We offer a
							timely Pick-up and drop off collection service. With th best
							laundry delivery service available Our delivery boys can pick up
							all your dirty linen in 30 minutes and deliver them washed and
							folded in just 24 hours.`}
					gridContent={howItWorksPageContent?.ourServices?.gridContent}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<TitleParagraphVideo
					title={howItWorksPageContent?.titleParagraphVideo?.title}
					subtitle={howItWorksPageContent?.titleParagraphVideo?.subtitle}
					paragraph={howItWorksPageContent?.titleParagraphVideo?.paragraph}
					buttonLink={howItWorksPageContent?.titleParagraphVideo?.buttonLink}
					video={`http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-karolina-grabowska-4959868-scaled.jpg`}
					backgroundImage={`http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-karolina-grabowska-4959868-scaled.jpg`}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={howItWorksPageContent?.imageTextBulletPoints?.title}
					buttonLink={howItWorksPageContent?.imageTextBulletPoints?.buttonLink}
					Image={howItWorksPageContent?.imageTextBulletPoints?.image?.sourceUrl}
					bulletPoints={
						howItWorksPageContent?.imageTextBulletPoints?.bulletPoints
					}
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

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<FourGridContent
					title={howItWorksPageContent?.fourGridContent?.title}
					subtitle={howItWorksPageContent?.fourGridContent?.subtitle}
					gridContent={howItWorksPageContent?.fourGridContent?.gridContent}
					Image={
						howItWorksPageContent?.heroSection?.square?.backgroundImage
							?.sourceUrl
					}
					ImageTwo={
						howItWorksPageContent?.heroSection?.squareOne?.backgroundImage
							?.sourceUrl
					}
					ImageThree={
						howItWorksPageContent?.heroSection?.squareTwo?.backgroundImage
							?.sourceUrl
					}
					ImageFour={
						howItWorksPageContent?.imageTextBulletPoints?.image?.sourceUrl
					}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<section className="pt-6 pb-20 bg-white overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="px-8 py-20 bg-white overflow-hidden border border-pink rounded-3xl">
							<div className="md:max-w-2xl text-center mx-auto">
								<span className="inline-block mb-3 text-medium text-pink font-[600] uppercase tracking-widest">
									Best caption here
								</span>
								<h1 className="my-12 text-5xl lg:text-6xl text-black text-center text-black tracking-tight font-[700] leading-[3.5rem]">
									<span>Build what you</span>
									<span className="text-pink bg-clip-text px-3 bg-gradient-fadedYellow">
										imagine
									</span>
									<span>without compromise.</span>
								</h1>
								<p className="mb-10 text-base lg:text-medium text-center font-[400] text-black">
									Thousands of companies trust in our apps, you could be part of
									our community too.
								</p>
								<div className="max-w-lg mx-auto">
									<div className="flex flex-wrap -m-2">
										<div className="w-full md:flex-1 p-2">
											<input
												className="px-6 py-3.5 w-full text-base text-black font-[400] bg-white outline-none focus:ring-1 focus:ring-pink placeholder-black rounded-xl"
												id="headerLightBorderInput4-1"
												type="text"
												placeholder="Email address"
											/>
										</div>
										<div className="w-full md:w-auto p-2">
											<div className="flex flex-wrap justify-center -m-2">
												<div className="w-full md:w-auto p-2">
													<a
														className="block w-full px-8 py-3.5 text-base text-center text-white rounded-xl font-[400] bg-pink hover:bg-fadedPink focus:ring-4 focus:ring-fadedPink"
														href="#"
													>
														Get Started
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!--===== INFORMATION SECTION =====--> */}
				<ContactBannerTwo
					title={howItWorksPageContent?.contactBannerTwo?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={howItWorksPageContent?.contactBannerTwo?.buttonLink}
					backgroundImage={
						howItWorksPageContent?.contactBannerTwo?.image?.sourceUrl
					}
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
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
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
							fourGridContent {
								title
								subtitle
								gridContent {
									title
									paragraph
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
		query: getHowItWorksPageContent,
	});

	const serviceMenuLinks = await getServiceLinksContent();
	const themesOptionsContent = await getThemesOptionsContent();
	const laundryDryCleaningMenuLinks = await getLaundryDryCleaningLinksContent();

	return {
		props: {
			serviceMenuLinks,
			laundryDryCleaningMenuLinks,
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
