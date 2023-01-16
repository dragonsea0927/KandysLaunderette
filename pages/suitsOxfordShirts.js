import Head from "next/head";
import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import OurProcess from "/components/ourProcess";
import FooterDark from "/components/FooterDark";
import TextImageTwo from "../components/TextImageTwo";
import ContactBanner from "../components/ContactBanner";
import HeroSectionTwo from "../components/HeroSectionTwo";

const SuitsOxfordShirts = ({
	seo,
	pageTitle,
	serviceMenuLinks,
	themesOptionsContent,
	laundryDryCleaningMenuLinks,
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
			<Head>
				{/* <!-- Website Title --> */}
				<title>{`${pageTitle} | Kandy's Launderette`}</title>
				<meta name="description" content={seo?.metaDesc} />
				<link rel="icon" href="/img/Logo.png" />
			</Head>

			{/* <!--===== NAVBAR =====--> */}
			<Navbar serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks} />

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

				{/* // <========== SUITS & OXFORD DESCRIPTIONS ==========> */}
				<TextImageTwo
					title={suitsOxfordShirtsPageContent?.textImage?.title}
					paragraph={suitsOxfordShirtsPageContent?.textImage?.paragraph}
					image={suitsOxfordShirtsPageContent?.textImage?.image?.sourceUrl}
					// Display Options
					displayImageLocation={
						suitsOxfordShirtsPageContent?.textImage?.displayOption
					}
				/>

				{/* <!--===== WEDDING SUITS =====--> */}
				<TextImageTwo
					title={suitsOxfordShirtsPageContent?.textImageTwo?.title}
					paragraph={suitsOxfordShirtsPageContent?.textImageTwo?.paragraph}
					image={suitsOxfordShirtsPageContent?.textImageTwo?.image?.sourceUrl}
					// Display Options
					displayImageLocation={
						suitsOxfordShirtsPageContent?.textImageTwo?.displayOption
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
				/>

				{/* <!--===== ALTERATIONS & REPAIRS =====--> */}
				<div className={styles.alterationsRepairs}>
					<div>
						<div className={styles.content}>
							<motion.div variants={fadeInUp} className={styles.title}>
								<h2>Suits Alterations & Repairs</h2>
								<h5>Perfection has never been so easy</h5>
							</motion.div>
						</div>
					</div>
					<div className={styles.backgroundImage}></div>
					<div>
						<div className={styles.content}>
							<div className={styles.gridDisplay}>
								<div className={styles.alterationsDisplay}>
									<div className={styles.Image}>
										<Image
											src="/img/simona-sergi-pmFgcciSt4s-unsplash.jpg"
											alt="Product Image"
											width={600}
											height={800}
											objectFit="cover"
											objectPosition="center"
										></Image>
									</div>
									<motion.div variants={stagger} className={styles.description}>
										<motion.h2 variants={fadeInUp}>Alterations</motion.h2>
										<motion.p variants={fadeIn}>
											We offer suit cleaning & alterations for everyday and
											special day occasions. We specialize in wedding suits, 2
											Piece & 3 Piece suits and in 2 Piece Dress & Dinner Suit.
										</motion.p>
									</motion.div>
								</div>
							</div>
							<div className={styles.repairsDisplay}>
								<div className={styles.innerContent}>
									<motion.div variants={stagger} className={styles.description}>
										<motion.h2 variants={fadeInUp}>Repairs</motion.h2>
										<motion.p variants={fadeIn}>
											We also take care of your Groomsmen suits. Either 2 Piece
											& 3 Piece suits, we specialize in all of them.
										</motion.p>
									</motion.div>
									<div className={styles.Image}>
										<Image
											src="/img/sandie-clarke-BrohkstBl_w-unsplash.jpg"
											alt="Product Image"
											width={800}
											height={800}
											objectFit="contain"
										></Image>
									</div>
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
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
			/>
		</motion.div>
	);
};

export default SuitsOxfordShirts;

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
SuitsOxfordShirts.getLayout = function PageLayout(page) {
	return (
		<>
			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
			{page}

			{/* <!--===== FOOTER =====--> */}
			<FooterDark />
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
							metaDesc
						}
						SuitsOxfordShirtsPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							ourOptions {
								title
								paragraph
								content {
									title
									titleTwo
									paragraph
									paragraphTwo
									image {
										sourceUrl
									}
									imageTwo {
										sourceUrl
									}
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
								gridContent {
									title
									paragraph
									image {
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

	const serviceMenuLinks = await getServiceLinksContent();
	const themesOptionsContent = await getThemesOptionsContent();
	const laundryDryCleaningMenuLinks = await getLaundryDryCleaningLinksContent();

	return {
		props: {
			serviceMenuLinks,
			laundryDryCleaningMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			suitsOxfordShirtsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.SuitsOxfordShirtsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
