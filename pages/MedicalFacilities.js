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

const MedicalFacilities = ({
	seo,
	pageTitle,
	medicalFacilitiesPageContent,
	themesOptionsContent,
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

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionFour
					title={medicalFacilitiesPageContent?.heroSection?.title}
					paragraph={medicalFacilitiesPageContent?.heroSection?.paragraph}
					backgroundImage={
						medicalFacilitiesPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
					displayPaymentInfo={
						medicalFacilitiesPageContent?.heroSection?.displayPaymentInfo
					}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				<TitleParagraphImage
					image={medicalFacilitiesPageContent?.whoWeAre?.image}
					title={medicalFacilitiesPageContent?.whoWeAre?.title}
					subtitle={medicalFacilitiesPageContent?.whoWeAre?.subtitle}
					paragraph={medicalFacilitiesPageContent?.whoWeAre?.paragraph}
				/>

				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphThree
					title={medicalFacilitiesPageContent?.titleParagraph?.title}
					paragraph={medicalFacilitiesPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== INTRO SECTION =====--> */}
				<TextImageJumbo
					gridContent={
						medicalFacilitiesPageContent?.textImageJumbo?.gridContent
					}
				/>

				{/* <!--===== LOGO BANNER =====--> */}
				<Logos
					title={medicalFacilitiesPageContent?.logos?.title}
					logoGrid={medicalFacilitiesPageContent?.logos?.logoGrid}
				/>

				{/* TEAM MEMBERS */}
				<TeamMembers
					title={medicalFacilitiesPageContent?.teamMembers?.title}
					paragraph={medicalFacilitiesPageContent?.teamMembers?.paragraph}
					profileGrid={medicalFacilitiesPageContent?.teamMembers?.profileGrid}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={medicalFacilitiesPageContent?.contactBanner?.title}
					paragraph={medicalFacilitiesPageContent?.contactBanner?.paragraph}
					buttonLink={medicalFacilitiesPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						medicalFacilitiesPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={medicalFacilitiesPageContent?.bookingContent?.title}
					paragraph={medicalFacilitiesPageContent?.bookingContent?.paragraph}
					gridContent={
						medicalFacilitiesPageContent?.bookingContent?.gridContent
					}
					// Display Options
					backgroundColor={
						medicalFacilitiesPageContent?.bookingContent?.backgroundColor
					}
					backgroundLetter={
						medicalFacilitiesPageContent?.bookingContent?.backgroundLetter
					}
				/>

				{/* <!--===== USER ACCOUNT =====--> */}
				<TitleParagraphImage
					image={medicalFacilitiesPageContent?.titleParagraphImage?.image}
					title={medicalFacilitiesPageContent?.titleParagraphImage?.title}
					subtitle={medicalFacilitiesPageContent?.titleParagraphImage?.subtitle}
					paragraph={
						medicalFacilitiesPageContent?.titleParagraphImage?.paragraph
					}
				/>

				{/* <!--===== CONTACT US MAP =====--> */}
				<ContactFormMap
					title={`Feedback`}
					paragraph={`<p>Post-ironic portland shabby chic echo park, banjo fashion axe</p>`}
					paragraphTwo={`<p>This site is protected by reCAPTCHA and the Google <a href="/PrivacyPolicy">Privacy Policy</a> &amp; <a href="/TermsOfService">Terms of Service</a>.</p>`}
					buttonLink={medicalFacilitiesPageContent?.contactBanner?.buttonLink}
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
	const getMedicalFacilitiesPageContent = gql`
		{
			pageTitle: pages(where: {id: 3005, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 3005, status: PUBLISH}) {
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
						MedicalFacilitiesPage {
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
							logos {
								title
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
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getMedicalFacilitiesPageContent,
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
			medicalFacilitiesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.MedicalFacilitiesPage,
		},
		revalidate: 1,
	};
}

export default MedicalFacilities;
