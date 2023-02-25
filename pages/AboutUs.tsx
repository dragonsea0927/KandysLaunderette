import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getLatestThreePosts} from "../lib/blogPosts";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Footer from "../components/Footer";
import Logos from "../components/Logos";
import BlogsTwo from "../components/BlogsTwo";
import SignUpTwo from "../components/SignUpTwo";
import OurProcess from "../components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import TeamMembers from "../components/TeamMembers";
import ContactBanner from "../components/ContactBanner";
import ContactFormMap from "../components/ContactFormMap";
import HeroSectionFour from "../components/HeroSectionFour";
import TitleParagraphImage from "../components/TitleParagraphImage";
import TitleParagraphThree from "../components/TitleParagraphThree";

const AboutUs = ({
	seo,
	pageTitle,
	latestThreePosts,
	aboutUsPageContent,
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
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

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionFour
					title={aboutUsPageContent?.heroSection?.title}
					paragraph={aboutUsPageContent?.heroSection?.paragraph}
					backgroundImage={
						aboutUsPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={
						aboutUsPageContent?.heroSection?.displayPaymentInfo
					}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				{/* <!--===== TITLE PARAGRAPH IMAGE =====--> */}
				<TitleParagraphImage
					image={aboutUsPageContent?.whoWeAre?.image}
					title={aboutUsPageContent?.whoWeAre?.title}
					subtitle={aboutUsPageContent?.whoWeAre?.subtitle}
					paragraph={aboutUsPageContent?.whoWeAre?.paragraph}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphThree
					title={aboutUsPageContent?.titleParagraph?.title}
					paragraph={aboutUsPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<Logos
					title={aboutUsPageContent?.logos?.title}
					logoGrid={aboutUsPageContent?.logos?.logoGrid}
					// Display Options
					backgroundColor={aboutUsPageContent?.logos?.backgroundColor}
				/>

				{/* TEAM MEMBERS */}
				<TeamMembers
					title={aboutUsPageContent?.teamMembers?.title}
					paragraph={aboutUsPageContent?.teamMembers?.paragraph}
					profileGrid={aboutUsPageContent?.teamMembers?.profileGrid}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={aboutUsPageContent?.bookingContent?.title}
					paragraph={aboutUsPageContent?.bookingContent?.paragraph}
					gridContent={aboutUsPageContent?.bookingContent?.gridContent}
					// Display Options
					backgroundColor={aboutUsPageContent?.bookingContent?.backgroundColor}
					backgroundLetter={
						aboutUsPageContent?.bookingContent?.backgroundLetter
					}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={aboutUsPageContent?.titleParagraphImage?.image}
					title={aboutUsPageContent?.titleParagraphImage?.title}
					subtitle={aboutUsPageContent?.titleParagraphImage?.subtitle}
					paragraph={aboutUsPageContent?.titleParagraphImage?.paragraph}
				/>

				{/* <!--===== SIGN UP TWO =====--> */}
				<SignUpTwo
					title={aboutUsPageContent?.signUp?.title}
					titleTwo={aboutUsPageContent?.signUp?.titleTwo}
					pointOne={aboutUsPageContent?.signUp?.pointOne}
					pointTwo={aboutUsPageContent?.signUp?.pointTwo}
					pointThree={aboutUsPageContent?.signUp?.pointThree}
					pointFour={aboutUsPageContent?.signUp?.pointFour}
					paragraph={aboutUsPageContent?.signUp?.paragraph}
					image={aboutUsPageContent?.signUp?.image}
				/>

				<section className="px-4 px-5 py-24 lg:px-0">
					<div className="container mx-auto">
						<div className="flex flex-col w-full lg:flex-row">
							<div className="w-full py-6 lg:w-1/2 lg:pr-10">
								<div className="relative flex flex-row items-center justify-center pb-12">
									<div className="absolute inset-0 flex items-center justify-center w-10 h-full">
										<div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-pink">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
										</svg>
									</div>
									<div className="flex-grow pl-4">
										<h2 className="mb-1 text-sm font-medium tracking-wider title-font text-pink">
											STEP 1
										</h2>
										<p className="leading-relaxed text-darkGrey">
											VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
											Kinfolk bespoke try-hard cliche palo santo offal.
										</p>
									</div>
								</div>
								<div className="relative flex flex-row items-center justify-center pb-12">
									<div className="absolute inset-0 flex items-center justify-center w-10 h-full">
										<div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-pink">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
										</svg>
									</div>
									<div className="flex-grow pl-4">
										<h2 className="mb-1 text-sm font-medium tracking-wider title-font text-pink">
											STEP 2
										</h2>
										<p className="leading-relaxed text-darkGrey">
											Vice migas literally kitsch +1 pok pok. Truffaut hot
											chicken slow-carb health goth, vape typewriter.
										</p>
									</div>
								</div>
								<div className="relative flex flex-row items-center justify-center pb-12">
									<div className="absolute inset-0 flex items-center justify-center w-10 h-full">
										<div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-pink">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<circle cx="12" cy="5" r="3"></circle>
											<path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
										</svg>
									</div>
									<div className="flex-grow pl-4">
										<h2 className="mb-1 text-sm font-medium tracking-wider title-font text-pink">
											STEP 3
										</h2>
										<p className="leading-relaxed text-darkGrey">
											Coloring book nar whal glossier master cleanse umami.
											Salvia +1 master cleanse blog taiyaki.
										</p>
									</div>
								</div>
								<div className="relative flex flex-row items-center justify-center pb-12">
									<div className="absolute inset-0 flex items-center justify-center w-10 h-full">
										<div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-pink">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
									</div>
									<div className="flex-grow pl-4">
										<h2 className="mb-1 text-sm font-medium tracking-wider title-font text-pink">
											STEP 4
										</h2>
										<p className="leading-relaxed text-darkGrey">
											VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
											Kinfolk bespoke try-hard cliche palo santo offal.
										</p>
									</div>
								</div>
								<div className="relative flex flex-row items-center justify-center">
									<div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-pink">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
											<path d="M22 4L12 14.01l-3-3"></path>
										</svg>
									</div>
									<div className="flex-grow pl-4">
										<h2 className="mb-1 text-sm font-medium tracking-wider title-font text-pink">
											FINISH
										</h2>
										<p className="leading-relaxed text-darkGrey">
											Pitchfork ugh tattooed scenester echo park gastropub
											whatever cold-pressed retro.
										</p>
									</div>
								</div>
							</div>
							<Image
								width={550}
								height={550}
								className="w-full lg:w-1/2 h-[750px] object-cover object-center rounded-lg md:mt-0 mt-12"
								alt="step"
								src="https://mydummysite.co.uk/ToddLearning/wp-content/uploads/2023/01/pexels-polina-tankilevitch-7741615-two.jpg"
							/>
						</div>
					</div>
				</section>

				{/* <!--===== BLOGS =====--> */}
				<BlogsTwo
					title={`Our Latest News and Articles`}
					subtitle={`Operational Insights`}
					latestThreePosts={latestThreePosts?.latestThreePosts}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={aboutUsPageContent?.contactBanner?.title}
					paragraph={aboutUsPageContent?.contactBanner?.paragraph}
					buttonLink={aboutUsPageContent?.contactBanner?.buttonLink}
					backgroundImage={aboutUsPageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={`Feedback`}
					paragraph={`<p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>`}
					paragraphBottom={`<p>This site is protected by reCAPTCHA and the Google <a href="https://mydummysite.co.uk/ToddLearning/PrivacyPolicy">Privacy Policy</a> &amp; <a href="/TermsOfService">Terms of Service</a>.</p>`}
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
AboutUs.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
			{page}
		</>
	);
};

export async function getStaticProps() {
	const getAboutUsPageContent = gql`
		{
			pageTitle: pages(where: {id: 171, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 171, status: PUBLISH}) {
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
						aboutUsPage {
							heroSection {
								title
								paragraph
								displayPaymentInfo
								backgroundImage {
									sourceUrl
								}
							}
							whoWeAre {
								title
								subtitle
								paragraph
								image {
									altText
									sourceUrl
								}
							}
							titleParagraph {
								title
								paragraph
							}
							logos {
								title
								backgroundColor
								logoGrid {
									image {
										altText
										sourceUrl
									}
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
							bookingContent {
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
								titleTwo
								pointOne
								pointTwo
								pointThree
								pointFour
								paragraph
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
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getAboutUsPageContent,
	});

	const latestThreePosts: object = await getLatestThreePosts();
	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			latestThreePosts,
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			aboutUsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.aboutUsPage,
		},
		revalidate: 60,
	};
}

export default AboutUs;
