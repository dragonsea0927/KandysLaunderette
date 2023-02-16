/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";

// Components
import Footer from "/components/Footer";
import Logos from "../components/Logos";
import SignUpTwo from "../components/SignUpTwo";
import OurProcess from "../components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import TeamMembers from "../components/TeamMembers";
import ContactBanner from "../components/ContactBanner";
import ContactFormMap from "../components/ContactFormMap";
import HeroSectionFour from "../components/HeroSectionFour";
import TitleParagraphImage from "../components/TitleParagraphImage";
import TitleParagraphThree from "../components/TitleParagraphThree";

const aboutUs = ({
	seo,
	pageTitle,
	CommercialServicesMenuLinks,
	aboutUsPageContent,
	themesOptionsContent,
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

				{/* <section className="py-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
							<span className="text-xs text-blue font-[600]">
								Get to know us better
							</span>
							<h2 className="mt-8 mb-10 text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
								Reinventing the future of laundry and dry cleaning.
							</h2>
							<div className="max-w-2xl mx-auto">
								<p className="text-medium text-darkGrey text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
									aliquet orci.
								</p>
							</div>
						</div>
						<div className="flex flex-row justify-center items-center gap-4 m-4">
							<div className="p-4">
								<img
									className="h-[75px] w-full mx-auto"
									src="http://kandyslaunderette.local/wp-content/uploads/2023/02/5eb3c54ec8c459000443513b.png"
									alt=""
								/>
							</div>
							<div className="p-4">
								<img
									className="h-[75px] w-full mx-auto"
									src="http://kandyslaunderette.local/wp-content/uploads/2023/02/5a4d3de3c6d47903998f5c8b.png"
									alt=""
								/>
							</div>
							<div className="p-4">
								<img
									className="h-[75px] w-full mx-auto"
									src="http://kandyslaunderette.local/wp-content/uploads/2023/02/5a1d2f624ac6b00ff574e297.png"
									alt=""
								/>
							</div>
							<div className="p-4">
								<img
									className="h-[75px] w-full mx-auto"
									src="http://kandyslaunderette.local/wp-content/uploads/2023/02/62544f456d0b0834bd268b11.png"
									alt=""
								/>
							</div>
							<div className="p-4">
								<img
									className="h-[75px] w-full mx-auto"
									src="http://kandyslaunderette.local/wp-content/uploads/2023/02/630100a12a5343120e77d7f5.png"
									alt=""
								/>
							</div>
							<div className="p-4">
								<img
									className="h-[75px] w-full mx-auto"
									src="http://kandyslaunderette.local/wp-content/uploads/2023/02/5a1c3b5cf65d84088faf1418.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</section> */}

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
					Image={aboutUsPageContent?.signUp?.image}
				/>

				<section className="text-grey body-font">
					<div className="container px-5 py-24 mx-auto flex flex-wrap">
						<div className="flex flex-wrap w-full">
							<div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
								<div className="flex relative pb-12">
									<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
										<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink inline-flex items-center justify-center text-white relative z-10">
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
										<h2 className="font-medium title-font text-sm text-pink mb-1 tracking-wider">
											STEP 1
										</h2>
										<p className="text-darkGrey leading-relaxed">
											VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
											Kinfolk bespoke try-hard cliche palo santo offal.
										</p>
									</div>
								</div>
								<div className="flex relative pb-12">
									<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
										<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink inline-flex items-center justify-center text-white relative z-10">
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
										<h2 className="font-medium title-font text-sm text-pink mb-1 tracking-wider">
											STEP 2
										</h2>
										<p className="text-darkGrey leading-relaxed">
											Vice migas literally kitsch +1 pok pok. Truffaut hot
											chicken slow-carb health goth, vape typewriter.
										</p>
									</div>
								</div>
								<div className="flex relative pb-12">
									<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
										<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink inline-flex items-center justify-center text-white relative z-10">
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
										<h2 className="font-medium title-font text-sm text-pink mb-1 tracking-wider">
											STEP 3
										</h2>
										<p className="text-darkGrey leading-relaxed">
											Coloring book nar whal glossier master cleanse umami.
											Salvia +1 master cleanse blog taiyaki.
										</p>
									</div>
								</div>
								<div className="flex relative pb-12">
									<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
										<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
									</div>
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink inline-flex items-center justify-center text-white relative z-10">
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
										<h2 className="font-medium title-font text-sm text-pink mb-1 tracking-wider">
											STEP 4
										</h2>
										<p className="text-darkGrey leading-relaxed">
											VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
											Kinfolk bespoke try-hard cliche palo santo offal.
										</p>
									</div>
								</div>
								<div className="flex relative">
									<div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink inline-flex items-center justify-center text-white relative z-10">
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
										<h2 className="font-medium title-font text-sm text-pink mb-1 tracking-wider">
											FINISH
										</h2>
										<p className="text-darkGrey leading-relaxed">
											Pitchfork ugh tattooed scenester echo park gastropub
											whatever cold-pressed retro.
										</p>
									</div>
								</div>
							</div>
							<img
								className="w-full lg:w-3/5 md:w-1/2 h-[750px] object-cover object-center rounded-lg md:mt-0 mt-12"
								src="https://mydummysite.co.uk/ToddLearning/wp-content/uploads/2023/01/pexels-polina-tankilevitch-7741615-two.jpg"
								alt="step"
							/>
						</div>
					</div>
				</section>

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
					paragraphTwo={`<p>This site is protected by reCAPTCHA and the Google <a href="/PrivacyPolicy">Privacy Policy</a> &amp; <a href="/TermsOfService">Terms of Service</a>.</p>`}
					buttonLink={aboutUsPageContent?.contactBanner?.buttonLink}
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

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
aboutUs.getLayout = function PageLayout(page) {
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

	const response = await client.query({
		query: getAboutUsPageContent,
	});

	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			aboutUsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.aboutUsPage,
			themesOptionsContent,
		},
		revalidate: 60,
	};
}

export default aboutUs;
