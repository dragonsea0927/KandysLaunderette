/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import HeroSection from "../components/HeroSection";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";
import FeaturesBanner from "../components/FeaturesBanner";
import TextImageJumbo from "../components/TextImageJumbo";
import ContactBannerTwo from "/components/ContactBannerTwo";
import FeaturesBannerTwo from "../components/FeaturesBannerTwo";
import TitleGridContentTwo from "/components/TitleGridContentTwo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TitleParagraphGridContent from "/components/TitleParagraphGridContent";

export default function Home({
	seo,
	homePageContent,
	CommercialServicesMenuLinks,
	themesOptionsContent,
	IndividualServicesMenuLinks,
}) {
	// console.log(homePageContent?.faq?.title);

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
					IconImage={homePageContent?.featuresBannerTwo?.iconBanner}
					paragraph={homePageContent?.featuresBannerTwo?.paragraphBanner}
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
					Image={homePageContent?.imageTextBulletPoints?.image}
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

				{/* <!--===== FAQ =====--> */}
				{/* <section
					className="bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url("http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-polina-tankilevitch-3875080-scaled.jpg")`,
					}}
				>
					<div
						className="container mx-auto px-4 py-20"
						style={{
							backdropFilter: `blur(12px)`,
						}}
					>
						<div className="max-w-sm mx-auto mb-12 text-center">
							<h2 className="mb-4 text-3xl md:text-4xl font-bold font-heading">
								Frequently Asked&nbsp;Questions
							</h2>
							<p className="text-sm md:text-base leading-loose text-blueGray-500">
								<span>
									Can&rsquo;t find the answer you&rsquo;re looking for? Write
									out to our
								</span>
								<a className="text-blue-600 hover:text-blue-700" href="#">
									customer support team.
								</a>
							</p>
						</div>
						<div className="max-w-3xl mx-auto">
							<ul className="space-y-4">
								<li className="px-6 py-4 bg-white rounded shadow">
									<button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700">
										<span>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit?
										</span>
										<svg
											className="w-4 h-4 ml-2 text-blueGray-300"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 5l7 7-7 7"
											></path>
										</svg>
									</button>
									<p className="hidden mt-2 text-blueGray-400 font-normal leading-loose">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
										orci gravida, hendrerit enim non, gravida turpis. Praesent
										non lectus porttitor, scelerisque nulla nec, ornare neque.
										Integer massa libero, ornare ut leo nec, scelerisque rutrum
										elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit
										amet porta nulla, quis varius risus. Suspendisse ultrices ut
										lectus non laoreet. Etiam ornare laoreet tortor quis
										porttitor. Suspendisse tempus erat non dui volutpat
										eleifend.
									</p>
								</li>
								<li className="px-6 py-4 bg-white rounded shadow">
									<button className="w-full flex justify-between items-center text-left font-bold font-heading text-blue-600 hover:text-blue-700">
										<span>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit?
										</span>
										<svg
											className="w-4 h-4 ml-2 text-blueGray-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</button>
									<p className="mt-2 text-blueGray-400 font-normal leading-loose">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
										orci gravida, hendrerit enim non, gravida turpis. Praesent
										non lectus porttitor, scelerisque nulla nec, ornare neque.
										Integer massa libero, ornare ut leo nec, scelerisque rutrum
										elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit
										amet porta nulla, quis varius risus. Suspendisse ultrices ut
										lectus non laoreet. Etiam ornare laoreet tortor quis
										porttitor. Suspendisse tempus erat non dui volutpat
										eleifend.
									</p>
								</li>
								<li className="px-6 py-4 bg-white rounded shadow">
									<button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700">
										<span>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit?
										</span>
										<svg
											className="w-4 h-4 ml-2 text-blueGray-300"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 5l7 7-7 7"
											></path>
										</svg>
									</button>
									<p className="hidden mt-2 text-blueGray-400 font-normal leading-loose">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
										orci gravida, hendrerit enim non, gravida turpis. Praesent
										non lectus porttitor, scelerisque nulla nec, ornare neque.
										Integer massa libero, ornare ut leo nec, scelerisque rutrum
										elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit
										amet porta nulla, quis varius risus. Suspendisse ultrices ut
										lectus non laoreet. Etiam ornare laoreet tortor quis
										porttitor. Suspendisse tempus erat non dui volutpat
										eleifend.
									</p>
								</li>
								<li className="px-6 py-4 bg-white rounded shadow">
									<button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-blueGray-700">
										<span>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit?
										</span>
										<svg
											className="w-4 h-4 ml-2 text-blueGray-300"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 5l7 7-7 7"
											></path>
										</svg>
									</button>
									<p className="hidden mt-2 text-blueGray-400 font-normal leading-loose">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
										orci gravida, hendrerit enim non, gravida turpis. Praesent
										non lectus porttitor, scelerisque nulla nec, ornare neque.
										Integer massa libero, ornare ut leo nec, scelerisque rutrum
										elit. Morbi et massa id ipsum lobortis rhoncus. Aenean sit
										amet porta nulla, quis varius risus. Suspendisse ultrices ut
										lectus non laoreet. Etiam ornare laoreet tortor quis
										porttitor. Suspendisse tempus erat non dui volutpat
										eleifend.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</section> */}

				{/* <!--===== FAQ =====--> */}
				{/* <section className="py-20 2xl:py-40">
					<div className="container px-4 mx-auto">
						<div className="mb-8 text-center">
							<span className="text-lg font-bold text-blue-500">
								Hey! Have any questions?
							</span>
							<h2 className="mt-8 mb-20 text-7xl font-bold font-heading">
								FAQ&apos;s
							</h2>
						</div>
					</div>
					<div className="max-w-4xl mx-auto pt-20 border-t border-gray-50">
						<ul>
							<li className="px-4 lg:px-12 py-5 border-b border-gray-50">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-white text-lg font-bold bg-blue-500 rounded-full">
											1
										</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl text-blue-500 font-bold">
												How should I develop my workflow over time?
											</h3>
											<span className="ml-4">
												<svg
													className="w-4 h-4"
													width="18"
													height="10"
													viewBox="0 0 18 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
														fill="#1F40FF"
													></path>
												</svg>
											</span>
										</div>
										<div className="mt-10 mb-6 max-w-xl border-l-2 border-gray-50 pl-4 lg:pl-10">
											<p className="mb-8 text-lg">
												The point of using Lorem Ipsum is that it has a
												more-or-less normal. Vestibulum lectus ex, molestie id
												erat at, consectetur.
											</p>
											<p className="text-gray-300">
												Etiam finibus nibh enim, et tempus sem imperdiet eget.
												Ut blandit, nulla quis tincidunt dignissim, ipsum diam
												efficitur est, et iaculis dui ante eu enim.
											</p>
										</div>
									</div>
								</button>
							</li>
							<li className="px-4 lg:px-12 py-5 border-b border-gray-50">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-50 rounded-full">
											2
										</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold">Can I pay by card?</h3>
											<span className="ml-4">
												<svg
													className="w-4 h-4"
													width="18"
													height="10"
													viewBox="0 0 18 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
														fill="#1F40FF"
													></path>
												</svg>
											</span>
										</div>
										<div className="hidden mt-10 mb-6 max-w-xl border-l-2 border-gray-50 pl-10">
											<p className="text-lg">
												The point of using Lorem Ipsum is that it has a
												more-or-less normal. Vestibulum lectus ex, molestie id
												erat at, consectetur.
											</p>
										</div>
									</div>
								</button>
							</li>
							<li className="px-4 lg:px-12 py-5 border-b border-gray-50">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-50 rounded-full">
											3
										</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold">
												How often should the app be updated?
											</h3>
											<span className="ml-4">
												<svg
													className="w-4 h-4"
													width="18"
													height="10"
													viewBox="0 0 18 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
														fill="#1F40FF"
													></path>
												</svg>
											</span>
										</div>
										<div className="hidden mt-10 mb-6 max-w-xl border-l-2 border-gray-50 pl-4 lg:pl-10">
											<p className="text-lg">
												The point of using Lorem Ipsum is that it has a
												more-or-less normal. Vestibulum lectus ex, molestie id
												erat at, consectetur.
											</p>
										</div>
									</div>
								</button>
							</li>
							<li className="px-4 lg:px-12 py-5 border-b border-gray-50">
								<button className="flex w-full text-left">
									<div className="w-auto mr-8">
										<span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-50 rounded-full">
											4
										</span>
									</div>
									<div className="w-full mt-3">
										<div className="flex items-center justify-between">
											<h3 className="text-xl font-bold">
												Are Zospace apps free?
											</h3>
											<span className="ml-4">
												<svg
													className="w-4 h-4"
													width="18"
													height="10"
													viewBox="0 0 18 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
														fill="#1F40FF"
													></path>
												</svg>
											</span>
										</div>
										<div className="hidden mt-10 mb-6 max-w-xl border-l-2 border-gray-50 pl-4 lg:pl-10">
											<p className="text-lg">
												The point of using Lorem Ipsum is that it has a
												more-or-less normal. Vestibulum lectus ex, molestie id
												erat at, consectetur.
											</p>
										</div>
									</div>
								</button>
							</li>
						</ul>
					</div>
				</section> */}

				{/* <!--===== FAQ =====--> */}
				{/* <FAQ
					title={homePageContent?.faq?.title}
					subtitle={homePageContent?.faq?.subtitle}
					faqContent={homePageContent?.faq?.faqContent}
				/> */}

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
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
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
										altText
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
										altText
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
								subtitle
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

	const response = await client.query({
		query: getHomePageContent,
	});

	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			themesOptionsContent: themesOptionsContent,
			homePageContent: response?.data?.mainContent?.edges[0]?.node?.homePage,
		},
		revalidate: 1,
	};
}
