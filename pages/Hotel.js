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
import OurProcess from "/components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import TeamMembers from "../components/TeamMembers";
import ContactBanner from "../components/ContactBanner";
import TextImageJumbo from "../components/TextImageJumbo";
import ContactFormMap from "../components/ContactFormMap";
import HeroSectionFour from "../components/HeroSectionFour";
import TitleParagraphImage from "../components/TitleParagraphImage";
import TitleParagraphThree from "../components/TitleParagraphThree";

const Hotel = ({
	seo,
	pageTitle,
	hotelPageContent,
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

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionFour
					title={gymPageContent?.heroSection?.title}
					paragraph={gymPageContent?.heroSection?.paragraph}
					backgroundImage={
						gymPageContent?.heroSection?.backgroundImage?.sourceUrl
					}
					displayPaymentInfo={gymPageContent?.heroSection?.displayPaymentInfo}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				<TitleParagraphImage
					image={gymPageContent?.whoWeAre?.image}
					title={gymPageContent?.whoWeAre?.title}
					subtitle={gymPageContent?.whoWeAre?.subtitle}
					paragraph={gymPageContent?.whoWeAre?.paragraph}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphThree
					title={gymPageContent?.titleParagraph?.title}
					paragraph={gymPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<TextImageJumbo
					gridContent={gymPageContent?.textImageJumbo?.gridContent}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<Logos
					title={gymPageContent?.logos?.title}
					logoGrid={gymPageContent?.logos?.logoGrid}
				/>

				{/* TEAM MEMBERS */}
				<TeamMembers
					title={gymPageContent?.teamMembers?.title}
					paragraph={gymPageContent?.teamMembers?.paragraph}
					profileGrid={gymPageContent?.teamMembers?.profileGrid}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={gymPageContent?.contactBanner?.title}
					paragraph={gymPageContent?.contactBanner?.paragraph}
					buttonLink={gymPageContent?.contactBanner?.buttonLink}
					backgroundImage={gymPageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={gymPageContent?.bookingContent?.title}
					paragraph={gymPageContent?.bookingContent?.paragraph}
					gridContent={gymPageContent?.bookingContent?.gridContent}
					// Display Options
					backgroundColor={gymPageContent?.bookingContent?.backgroundColor}
					backgroundLetter={gymPageContent?.bookingContent?.backgroundLetter}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={gymPageContent?.titleParagraphImage?.image}
					title={gymPageContent?.titleParagraphImage?.title}
					subtitle={gymPageContent?.titleParagraphImage?.subtitle}
					paragraph={gymPageContent?.titleParagraphImage?.paragraph}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={`Feedback`}
					paragraph={`<p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>`}
					paragraphTwo={`<p>This site is protected by reCAPTCHA and the Google <a href="/PrivacyPolicy">Privacy Policy</a> &amp; <a href="/TermsOfService">Terms of Service</a>.</p>`}
					buttonLink={gymPageContent?.contactBanner?.buttonLink}
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
	const getHotelPageContent = gql`
		{
			pageTitle: pages(where: {id: 685, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 685, status: PUBLISH}) {
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
						HotelPage {
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
							ourOptions {
								title
								paragraph
								content {
									title
									titleTwo
									image {
										altText
										sourceUrl
									}
									imageTwo {
										altText
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
							contactBanner {
								title
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
		query: getHotelPageContent,
	});

	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			hotelPageContent: response?.data?.mainContent?.edges[0]?.node?.HotelPage,
		},
		revalidate: 1,
	};
}

export default Hotel;
