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
import ContactBannerTwo from "/components/ContactBannerTwo";
import HeroContentSection from "../components/HeroContentSection";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";

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
				<HeroContentSection
					backgroundImage={
						howItWorksPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				<section className="pt-10 pb-16 bg-gray overflow-hidden">
					<div className="container mx-auto px-4">
						<span className="inline-block mb-3 text-tiny text-pink font-[600] uppercase tracking-widest">
							What we found
						</span>
						<h2 className="my-5 mb-12 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
							Here&rsquo;s what you get with Kandy&rsquo;s Launderette.
						</h2>
						<div className="flex flex-wrap -m-4">
							<div className="w-full md:w-1/2 p-4">
								<div className="p-8 md:p-16 text-center h-full bg-white border border-grey rounded-3xl hover:border-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									<Image
										className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
										src={howItWorksPageContent?.contactBanner?.image?.sourceUrl}
										width={1000}
										height={650}
										objectFit="cover"
										objectPosition="center"
										alt={`Image`}
									/>
									<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
										Schedule your collection
									</h3>
									<p className="mb-10 text-base lg:text-medium text-center font-[400] text-black">
										Plan your day with ease. Choose a collection and delivery
										time at your convenience.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 p-4">
								<div className="p-8 md:p-16 text-center h-full bg-white border border-grey rounded-3xl hover:border-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									<Image
										className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
										src={
											howItWorksPageContent?.contactBannerTwo?.image?.sourceUrl
										}
										width={1000}
										height={650}
										objectFit="cover"
										objectPosition="center"
										alt={`Image`}
									/>
									<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
										Pack your laundry
									</h3>
									<p className="mb-10 text-base lg:text-medium text-center font-[400] text-black">
										Pack your items in a disposable bag. Use one bag per
										service. Our driver will transfer them to reusable
										Laundryheap bags which you can keep for your next order.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 p-4">
								<div className="p-8 md:p-16 text-center h-full bg-white border border-grey rounded-3xl hover:border-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									<Image
										className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
										src={howItWorksPageContent?.contactBanner?.image?.sourceUrl}
										width={1000}
										height={650}
										objectFit="cover"
										objectPosition="center"
										alt={`Image`}
									/>
									<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
										Wait for our driver
									</h3>
									<p className="mb-10 text-base lg:text-medium text-center font-[400] text-black">
										You’ll receive a notification when our driver is nearby.
										They will collect your bags and take them to your local
										cleaning facility.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 p-4">
								<div className="p-8 md:p-16 text-center h-full bg-white border border-grey rounded-3xl hover:border-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									<Image
										className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
										src={
											howItWorksPageContent?.contactBannerTwo?.image?.sourceUrl
										}
										width={1000}
										height={650}
										objectFit="cover"
										objectPosition="center"
										alt={`Image`}
									/>
									<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
										Relax while we take care of your laundry
									</h3>
									<p className="mb-10 text-base lg:text-medium text-center font-[400] text-black">
										Your local partner facility will clean your items with
										utmost care. Our driver will then deliver them back to you
										whenever you like. You’re in full control of your delivery
										and can always reschedule if not at home.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={howItWorksPageContent?.imageTextBulletPoints?.title}
					buttonLink={howItWorksPageContent?.imageTextBulletPoints?.buttonLink}
					Image={howItWorksPageContent?.imageTextBulletPoints?.image?.sourceUrl}
					bulletPoints={
						howItWorksPageContent?.imageTextBulletPoints?.bulletPoints
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
												className="px-6 py-3.5 w-full text-medium text-black font-bold bg-white outline-none focus:ring-4 focus:ring-pink placeholder-black rounded-full"
												id="headerLightBorderInput4-1"
												type="text"
												placeholder="Email address"
											/>
										</div>
										<div className="w-full md:w-auto p-2">
											<div className="flex flex-wrap justify-center -m-2">
												<div className="w-full md:w-auto p-2">
													<a
														className="block w-full px-8 py-3.5 text-medium text-center text-white font-bold bg-pink hover:bg-fadedPink focus:ring-4 focus:ring-fadedPink rounded-full"
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
