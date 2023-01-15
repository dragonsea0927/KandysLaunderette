import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import OurProcess from "/components/OurProcess";
import TextImageTwo from "../components/TextImageTwo";
import HeroSectionTwo from "../components/HeroSectionTwo";
import ContactBannerThree from "/components/ContactBannerThree";

const WeddingDressesAndBridal = ({
	seo,
	pageTitle,
	weddingDressesAndBridalPageContent,
	themesOptionsContent,
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
			<Head>
				{/* <!-- Website Title --> */}
				<title>{`${pageTitle} | Kandys Launderette`}</title>
				<meta name="description" content={seo?.metaDesc} />
				<link rel="icon" href="/img/Logo.png" />
			</Head>

			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionTwo
					title={weddingDressesAndBridalPageContent?.heroSection?.title}
					subtitle={weddingDressesAndBridalPageContent?.heroSection?.subtitle}
					backgroundImage={
						weddingDressesAndBridalPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
				/>

				{/* // <========== WEDDING DRESS PROCESS ==========> */}
				<TextImageTwo
					title={weddingDressesAndBridalPageContent?.textImage?.title}
					paragraph={weddingDressesAndBridalPageContent?.textImage?.paragraph}
					image={
						weddingDressesAndBridalPageContent?.textImage?.image?.sourceUrl
					}
					// Display Options
					displayImageLocation={
						weddingDressesAndBridalPageContent?.textImage?.displayOption
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={weddingDressesAndBridalPageContent?.ourProcess?.title}
					paragraph={weddingDressesAndBridalPageContent?.ourProcess?.paragraph}
					gridContent={
						weddingDressesAndBridalPageContent?.ourProcess?.gridContent
					}
				/>

				{/* // <========== WEDDING DRESS PROCESS ==========> */}
				<TextImageTwo
					title={weddingDressesAndBridalPageContent?.textImageTwo?.title}
					paragraph={
						weddingDressesAndBridalPageContent?.textImageTwo?.paragraph
					}
					image={
						weddingDressesAndBridalPageContent?.textImageTwo?.image?.sourceUrl
					}
					// Display Options
					displayImageLocation={
						weddingDressesAndBridalPageContent?.textImageTwo?.displayOption
					}
				/>

				{/* <!--===== CONTACT BANNER THREE =====--> */}
				<ContactBannerThree
					title={weddingDressesAndBridalPageContent?.contactBanner?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={
						weddingDressesAndBridalPageContent?.contactBanner?.buttonLink
					}
					backgroundImage={
						weddingDressesAndBridalPageContent?.contactBanner?.image?.sourceUrl
					}
				/>
			</main>
		</motion.div>
	);
};

export default WeddingDressesAndBridal;

export async function getStaticProps() {
	const getWeddingDressesBridalContent = gql`
		{
			pageTitle: pages(where: {id: 181, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 181, status: PUBLISH}) {
				edges {
					node {
						seo {
							metaDesc
						}
						WeddingDressesBridalPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							textImage {
								title
								paragraph
								displayOption
								image {
									sourceUrl
								}
							}
							ourProcess {
								title
								paragraph
								gridContent {
									title
									paragraph
									image {
										sourceUrl
									}
								}
							}
							textImageTwo {
								title
								paragraph
								displayOption
								image {
									sourceUrl
								}
							}
							contactBanner {
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
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getWeddingDressesBridalContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();

	return {
		props: {
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			weddingDressesAndBridalPageContent:
				response?.data?.mainContent?.edges[0]?.node?.WeddingDressesBridalPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
