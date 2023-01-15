import Head from "next/head";
import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {fadeInUp, fadeIn, fadeInTwo, stagger} from "../animations/animations";

// Components
import OurProcess from "/components/ourProcess";
import ContactBanner from "../components/ContactBanner";

const AlterationsRepairs = ({
	pageTitle,
	seo,
	alterationsRepairsPageContent,
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

			<main>
				{/* // <========== ABOUT US DESCRIPTIONS ==========> */}
				<div className={styles.alterationsRepairsSection}>
					{/* // <========== PAGE TITLE ==========> */}
					<div className={styles.pageTitle}>
						<div>
							<div className={styles.content}>
								<motion.div variants={fadeInUp} className={styles.title}>
									<h2>Alterations & Repairs</h2>
									<h5>Garments Repairs And Alterations By Experts</h5>
								</motion.div>
							</div>
						</div>
					</div>

					{/* // <========== BACKGROUND IMAGE ==========> */}
					<div className={styles.backgroundImageAlterationsRepairs}></div>

					<div className={styles.aboutUs}>
						<div>
							<motion.div variants={stagger} className={styles.content}>
								<motion.h2 variants={fadeInUp}>We may be new to you</motion.h2>
								<motion.p variants={fadeIn}>
									But We believe in making the most of life❜s simple pleasures -
									it❜s the little things that matter. Precious moments of
									uncomplicated happiness are our constant inspiration, and it
									is with these in mind that we create collections of services
									that are built to last and become an intimate part of your
									everyday lives.
									<br></br>
									<br></br>I cannot emphasize enough how much thought, care, and
									attention to detail goes into every service we make at The
									White Company - I hope you❜ll cherish your purchases as much
									as we do.
									<br></br>
									<br></br>
									<motion.span variants={fadeInTwo}>
										We❜re delighted to meet you
									</motion.span>
								</motion.p>
							</motion.div>
						</div>
					</div>

					{/* <!--===== WEDDING SUITS =====--> */}
					<div className={styles.suitsBridal}>
						<div>
							<div className={styles.content}>
								<motion.div variants={fadeInUp} className={styles.title}>
									<h2>Wedding Suits & Bridal Dresses</h2>
									<h5>We make your special day simple.</h5>
								</motion.div>
								<div className={styles.gridDisplay}>
									<div className={styles.innerContent}>
										<motion.div variants={fadeIn} className={styles.Image}>
											<Image
												src="/img/tengyart-Q5jO8wxYnys-unsplash.jpg"
												alt="Product Image"
												width={600}
												height={800}
												objectFit="cover"
												objectPosition="center"
											></Image>
										</motion.div>
										<motion.div
											variants={stagger}
											className={styles.description}
										>
											<motion.h2 variants={fadeInUp}>Suits</motion.h2>
											<motion.p variants={fadeIn}>
												We offer suit cleaning & alterations for everyday and
												special day occasions. We specialize in wedding suits, 2
												Piece & 3 Piece suits and in 2 Piece Dress & Dinner
												Suit.
											</motion.p>
										</motion.div>
									</div>
								</div>
								<div className={styles.gridDisplay}>
									<div className={styles.innerContent}>
										<motion.div
											variants={stagger}
											className={styles.description}
										>
											<motion.h2 variants={fadeInUp}>Bridal Dresses</motion.h2>
											<motion.p variants={fadeIn}>
												We offer suit cleaning & alterations for everyday and
												special day occasions. We specialize in wedding suits, 2
												Piece & 3 Piece suits and in 2 Piece Dress & Dinner
												Suit.
											</motion.p>
										</motion.div>
										<motion.div variants={fadeIn} className={styles.Image}>
											<Image
												src="/img/w920_q60.webp"
												alt="Product Image"
												width={600}
												height={800}
												objectFit="cover"
												objectPosition="center"
											></Image>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={alterationsRepairsPageContent?.contactBanner?.title}
					paragraph={alterationsRepairsPageContent?.contactBanner?.paragraph}
					buttonLink={alterationsRepairsPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						alterationsRepairsPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				{/* <!--===== OUR PROCESS INFORMATION =====--> */}
				<OurProcess
					title={alterationsRepairsPageContent?.ourProcess?.title}
					paragraph={alterationsRepairsPageContent?.ourProcess?.paragraph}
					gridContent={alterationsRepairsPageContent?.ourProcess?.gridContent}
				/>
			</main>
		</motion.div>
	);
};

export default AlterationsRepairs;

export async function getStaticProps() {
	const getAlterationsRepairsPageContent = gql`
		{
			pageTitle: pages(where: {id: 173, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 173, status: PUBLISH}) {
				edges {
					node {
						seo {
							metaDesc
						}
						alterationsRepairsPage {
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
		query: getAlterationsRepairsPageContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();

	return {
		props: {
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			alterationsRepairsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.alterationsRepairsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
