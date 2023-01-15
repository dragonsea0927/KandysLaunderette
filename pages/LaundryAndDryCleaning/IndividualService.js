import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import mainServicesDB from "/lib/mainServicesDB.json";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import IndividualServicesListDB from "/lib/IndividualServicesListDB.json";

// Components
import ContactBanner from "/components/ContactBanner";

const IndividualService = ({
	pageTitle,
	seo,
	IndividualServicePageContent,
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
				{/* // <========== PAGE TITLE ==========> */}
				<div className={styles.mainContent}>
					<div>
						<div className={styles.previousButton}>
							<Link href="/LaundryDryCleaning">
								<a target="blank">
									<i className="bi bi-arrow-left-circle"></i>
								</a>
							</Link>
						</div>
						<div className={styles.content}>
							<motion.div variants={fadeInUp} className={styles.title}>
								<h2>Individual Self-Service</h2>
								<motion.p variants={fadeIn}>
									Our Individual Self-Services allows any of our customers to
									arrive at our store are select the various options we provide.
									No prior booking required. <br></br>
									Most our customer book in advance when they need their items
									completed by and when they plan to arrive.
								</motion.p>
							</motion.div>
							<motion.div variants={fadeIn} className={styles.subtitle}>
								<h2>All Our Services</h2>
							</motion.div>
							<div className={styles.innerContent}>
								<div className={styles.servicesList}>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Suits</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[0].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[1].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[2].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[3].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Trousers</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[4].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[5].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Skirts</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[6].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[7].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[8].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[9].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Dresses</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[10].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[11].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[12].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[13].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[14].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[15].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[16].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Coats</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[17].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[18].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[19].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[20].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[21].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Tops & Shirts</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[22].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[23].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[24].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[25].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[26].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[27].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Jackets</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[28].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Throw-over</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[29].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[30].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Wedding Items</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[31].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[32].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[33].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[34].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[35].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Accessories</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[36].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[37].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[38].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[39].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[40].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[41].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[42].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[43].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Duvet Cleaning</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[44].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[45].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[46].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Sleeping Bag</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[47].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[48].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[49].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
									<motion.div variants={stagger} className={styles.List}>
										<h2>Full Bags</h2>
										<ul>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[49].serviceName}
												</motion.a>
											</Link>
											<Link href="/">
												<motion.a variants={fadeInUp}>
													{IndividualServicesListDB[50].serviceName}
												</motion.a>
											</Link>
										</ul>
									</motion.div>
								</div>
								<div className={styles.servicesDisplays}>
									<div className={styles.ImageDivider}></div>
									<motion.div
										variants={stagger}
										className={styles.servicesDisplay}
									>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/04438fc4fc1a9a09b7c2e06de39eccee.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[0].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/benjamin-rascoe-WdhmRPvMn7A-unsplash.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[1].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/2dadbbf0777ed8a16b24ccde6a6f90dd.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[2].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/231-419s.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[3].serviceName}</a>
												</Link>
											</div>
										</motion.div>
									</motion.div>
									<div className={styles.ImageDividerTwo}></div>
									<motion.div
										variants={stagger}
										className={styles.servicesDisplay}
									>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/572e21864592e57f4a6d121be547b12d.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[4].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/f46c1141fb97af8cc03149945a4f19c4.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[5].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/supersoft_duvet_2_2_2.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[6].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/cashmere-care-step2.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[7].serviceName}</a>
												</Link>
											</div>
										</motion.div>
									</motion.div>
									<div className={styles.ImageDividerThree}></div>
									<motion.div
										variants={stagger}
										className={styles.servicesDisplay}
									>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/209-116s4.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[8].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/Multislider_Rustic_Linen_Napkins.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[9].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/221-057s.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[10].serviceName}</a>
												</Link>
											</div>
										</motion.div>
										<motion.div variants={fadeInUp} className={styles.content}>
											<Link href="/">
												<a target="blank">
													<Image
														src="/img/stuk-organiser-white__1035115_pe837986_s5.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
														objectPosition="center"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="/">
													<a target="blank">{mainServicesDB[11].serviceName}</a>
												</Link>
											</div>
										</motion.div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={IndividualServicePageContent?.contactBanner?.title}
					paragraph={IndividualServicePageContent?.contactBanner?.paragraph}
					buttonLink={IndividualServicePageContent?.contactBanner?.buttonLink}
					backgroundImage={
						IndividualServicePageContent?.contactBanner?.image?.sourceUrl
					}
				/>
			</main>
		</motion.div>
	);
};

export default IndividualService;

export async function getStaticProps() {
	const getIndividualServicePageContent = gql`
		{
			pageTitle: pages(where: {id: 185, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 185, status: PUBLISH}) {
				edges {
					node {
						seo {
							metaDesc
						}
						IndividualServicePage {
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
		query: getIndividualServicePageContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();

	return {
		props: {
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			IndividualServicePageContent:
				response?.data?.mainContent?.edges[0]?.node?.IndividualServicePage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
