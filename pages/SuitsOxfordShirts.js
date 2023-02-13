import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import SignUp from "../components/SignUp";
import OurProcess from "../components/OurProcess";
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import ContactBanner from "../components/ContactBanner";
import HeroSectionTwo from "../components/HeroSectionTwo";
import CTAContentImage from "../components/CTAContentImage";
import TitleParagraphTwo from "../components/TitleParagraphTwo";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";

const SuitsOxfordShirts = ({
	seo,
	pageTitle,
	CommercialServicesMenuLinks,
	themesOptionsContent,
	IndividualServicesMenuLinks,
	suitsOxfordShirtsPageContent,
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
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
			/>

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionTwo
					title={suitsOxfordShirtsPageContent?.heroSection?.title}
					subtitle={suitsOxfordShirtsPageContent?.heroSection?.subtitle}
					backgroundImage={
						suitsOxfordShirtsPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
				/>
				{/* <!--===== TITLE PARAGRAPH =====--> */}
				<TitleParagraphTwo
					title={suitsOxfordShirtsPageContent?.titleParagraph?.title}
					paragraph={suitsOxfordShirtsPageContent?.titleParagraph?.paragraph}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={suitsOxfordShirtsPageContent?.suitsContent?.title}
					paragraph={suitsOxfordShirtsPageContent?.suitsContent?.paragraph}
					gridContent={suitsOxfordShirtsPageContent?.suitsContent?.gridContent}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.suitsContent?.backgroundColor
					}
					backgroundLetter={
						suitsOxfordShirtsPageContent?.suitsContent?.backgroundLetter
					}
				/>
				{/* // <========== OUR OPTIONS ==========> */}
				<TwoOptions
					title={suitsOxfordShirtsPageContent?.ourOptions?.title}
					paragraph={suitsOxfordShirtsPageContent?.ourOptions?.paragraph}
					content={suitsOxfordShirtsPageContent?.ourOptions?.content}
				/>
				{/* <!--===== GET DOWN TO BUSINESS CTA =====--> */}
				<CTAContentImage
					title={suitsOxfordShirtsPageContent?.ctaContentImage?.title}
					paragraph={suitsOxfordShirtsPageContent?.ctaContentImage?.paragraph}
					paragraphOne={
						suitsOxfordShirtsPageContent?.ctaContentImage?.paragraphOne
					}
					paragraphTwo={
						suitsOxfordShirtsPageContent?.ctaContentImage?.paragraphTwo
					}
					subtitleOne={
						suitsOxfordShirtsPageContent?.ctaContentImage?.subtitleOne
					}
					subtitleTwo={
						suitsOxfordShirtsPageContent?.ctaContentImage?.subtitleTwo
					}
					buttonLink={suitsOxfordShirtsPageContent?.ctaContentImage?.buttonLink}
					Image={suitsOxfordShirtsPageContent?.ctaContentImage?.image}
				/>

				{/* <!--===== SIGN UP =====--> */}
				<SignUp
					title={suitsOxfordShirtsPageContent?.signUp?.title}
					paragraph={suitsOxfordShirtsPageContent?.signUp?.paragraph}
					buttonLink={suitsOxfordShirtsPageContent?.signUp?.buttonLink}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.signUp?.backgroundColor
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={suitsOxfordShirtsPageContent?.contactBanner?.title}
					paragraph={suitsOxfordShirtsPageContent?.contactBanner?.paragraph}
					buttonLink={suitsOxfordShirtsPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						suitsOxfordShirtsPageContent?.contactBanner?.image?.sourceUrl
					}
				/>
				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={suitsOxfordShirtsPageContent?.ourProcess?.title}
					paragraph={suitsOxfordShirtsPageContent?.ourProcess?.paragraph}
					gridContent={suitsOxfordShirtsPageContent?.ourProcess?.gridContent}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.ourProcess?.backgroundColor
					}
					backgroundLetter={
						suitsOxfordShirtsPageContent?.ourProcess?.backgroundLetter
					}
				/>
				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={suitsOxfordShirtsPageContent?.imageTextBulletPoints?.title}
					buttonLink={
						suitsOxfordShirtsPageContent?.imageTextBulletPoints?.buttonLink
					}
					Image={suitsOxfordShirtsPageContent?.imageTextBulletPoints?.image}
					bulletPoints={
						suitsOxfordShirtsPageContent?.imageTextBulletPoints?.bulletPoints
					}
					// Display Options
					backgroundColor={
						suitsOxfordShirtsPageContent?.imageTextBulletPoints?.backgroundColor
					}
				/>

				{/* <!--===== ALTERATIONS & REPAIRS =====--> */}
				<div className={styles.alterationsRepairs}>
					<div className="container mx-auto px-4 py-20">
						<div className="py-20">
							<motion.div variants={fadeInUp} className="flex flex-col">
								<h2 className="text-center text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full">
									Suits Alterations & Repairs
								</h2>
								<h5 className="w-full lg:max-w-[75rem] mx-auto mt-4 text-center text-darkGrey text-medium">
									Perfection has never been so easy
								</h5>
							</motion.div>
						</div>
					</div>
					<div
						className="flex items-center w-full h-[40rem] bg-center bg-cover bg-[no-repeat]"
						style={{
							backgroundImage: `url("http://kandyslaunderette.local/wp-content/uploads/2023/01/richie-roberts-7or-8zEkxPM-unsplash.jpg");`,
						}}
					></div>
					<div className="container py-20 px-4 mx-auto">
						<div className="flex flex-col justify-between items-center gap-14">
							<div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-14">
								<div className={styles.Image}>
									<Image
										width={`600px`}
										height={`600px`}
										objectFit="cover"
										alt="Product Image"
										objectPosition="center"
										src={`http://kandyslaunderette.local/wp-content/uploads/2023/01/juan-jose-porta-YsoCJDGoiG4-unsplash.jpg`}
										className="w-full h-[600px] rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
									></Image>
								</div>
								<motion.div variants={stagger} className="p-4">
									<motion.h3
										variants={fadeInUp}
										className="text-center sm:text-left text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full"
									>
										Alterations
									</motion.h3>
									<motion.p
										variants={fadeIn}
										className="w-full lg:max-w-[60rem] mx-auto sm:mx-0 mt-4 p-0 text-darkGrey text-medium"
									>
										Perfect fitting of clothes augments their overall appeal.
										This defines our exclusive clothing alterations and clothes
										repair services intended to glorify your looks.
									</motion.p>
								</motion.div>
							</div>
							<div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-14">
								<motion.div variants={stagger} className="p-4">
									<motion.h3
										variants={fadeInUp}
										className="text-center sm:text-left text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full"
									>
										Repairs
									</motion.h3>
									<motion.p
										variants={fadeIn}
										className="w-full lg:max-w-[60rem] mx-auto sm:mx-0 mt-4 p-0 text-darkGrey text-medium"
									>
										We also take care of your Groomsmen suits. Either 2 Piece &
										3 Piece suits, we specialize in all of them.
									</motion.p>
								</motion.div>
								<div className={styles.Image}>
									<Image
										width={`600px`}
										height={`600px`}
										objectFit="cover"
										alt="Product Image"
										objectPosition="center"
										src={`http://kandyslaunderette.local/wp-content/uploads/2023/01/richie-roberts-7or-8zEkxPM-unsplash.jpg`}
										className="w-full h-[600px] rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
									></Image>
								</div>
							</div>
						</div>
					</div>
				</div>
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
SuitsOxfordShirts.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
			{page}

			{/* <!--===== FOOTER =====--> */}
			{/* <FooterDark /> */}
		</>
	);
};

export async function getStaticProps() {
	const getSuitsOxfordShirtsContent = gql`
		{
			pageTitle: pages(where: {id: 179, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 179, status: PUBLISH}) {
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
						SuitsOxfordShirtsPage {
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
							suitsContent {
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
							signUp {
								title
								paragraph
								backgroundColor
								buttonLink {
									url
									title
									target
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
							ourProcess {
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
							imageTextBulletPoints {
								title
								backgroundColor
								image {
									altText
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
										altText
										sourceUrl
									}
								}
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getSuitsOxfordShirtsContent,
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
			suitsOxfordShirtsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.SuitsOxfordShirtsPage,
			themesOptionsContent,
		},
		revalidate: 60,
	};
}

export default SuitsOxfordShirts;
