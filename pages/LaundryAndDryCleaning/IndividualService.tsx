import Link from "next/link";
import Image from "next/image";
import {gql} from "@apollo/client";
import {motion} from "framer-motion";
import {client} from "../../lib/apollo";
import styles from "../../styles/Home.module.scss";
import {getThemesOptionsContent} from "../../lib/themesOptions";

import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../../lib/MenuLinks";
import mainServicesDB from "../../lib/mainServicesDB.json";
import {fadeInUp, fadeIn, stagger} from "../../animations/animations";
import IndividualServicesListDB from "../../lib/IndividualServicesListDB.json";

// Components
import Footer from "../../components/Footer";
import MetaTag from "../../components/Meta/MetaTag";
import ContactBanner from "../../components/ContactBanner";
import TitleParagraph from "../../components/TitleParagraph";
import HeroSectionFour from "../../components/HeroSectionFour";

const IndividualService = ({
	seo,
	pageTitle,
	CommercialServicesMenuLinks,
	themesOptionsContent,
	IndividualServicesMenuLinks,
	IndividualServicePageContent,
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
					title={IndividualServicePageContent?.heroSection?.title}
					paragraph={IndividualServicePageContent?.heroSection?.paragraph}
					backgroundImage={
						IndividualServicePageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
					displayPaymentInfo={
						IndividualServicePageContent?.heroSection?.displayPaymentInfo
					}
					CommercialServicesMenuLinks={
						CommercialServicesMenuLinks?.CommercialServicesMenuLinks
					}
					IndividualServicesMenuLinks={
						IndividualServicesMenuLinks?.IndividualServicesMenuLinks
					}
				/>

				{/* // <========== TITLE & PARAGRAPH ==========> */}
				<TitleParagraph
					title={IndividualServicePageContent?.titleParagraph?.title}
					paragraph={IndividualServicePageContent?.titleParagraph?.paragraph}
				/>

				{/* // <========== PAGE TITLE ==========> */}
				<section className="py-20 px-4 lg:px-0">
					<div className="container px-0 mx-auto">
						<div>
							<div className={styles.previousButton}>
								<Link href="/LaundryDryCleaning">
									<i className="bi bi-arrow-left-circle"></i>
								</Link>
							</div>
							<div className={styles.content}>
								<motion.div variants={fadeIn} className={styles.subtitle}>
									<h2>All Our Services</h2>
								</motion.div>
								<div className="flex flex-col items-start justify-between gap-4 lg:flex-row">
									<div className="flex flex-col items-start justify-between gap-4 text-left w-full lg:w-[20%]">
										<motion.div variants={stagger} className={styles.List}>
											<h2>Suits</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[0].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[1].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[2].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[3].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Trousers</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[4].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[5].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Skirts</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[6].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[7].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[8].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[9].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Dresses</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[10].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[11].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[12].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[13].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[14].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[15].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[16].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Coats</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[17].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[18].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[19].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[20].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[21].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Tops & Shirts</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[22].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[23].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[24].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[25].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[26].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[27].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Jackets</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[28].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Throw-over</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[29].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[30].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Wedding Items</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[31].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[32].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[33].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[34].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[35].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Accessories</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[36].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[37].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[38].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[39].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[40].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[41].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[42].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[43].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Duvet Cleaning</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[44].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[45].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[46].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Sleeping Bag</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[46].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[47].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[48].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Full Bags</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[49].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{IndividualServicesListDB[50].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
									</div>
									<div className="flex flex-col items-center justify-between gap-4 text-center w-full lg:w-[80%]">
										<div
											className="w-full h-[25rem] my-8 bg-cover bg-center bg-[no-repeat]"
											style={{
												backgroundImage: `url(${IndividualServicePageContent?.mainContentGrid?.imageBanner?.sourceUrl})`,
											}}
										/>
										<motion.div
											variants={stagger}
											className="flex flex-col items-start justify-between gap-4 lg:flex-row items-center justify-between gap-4"
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-amina-filkins-5427302-min-scaled.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">Everyday laundry</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="/img/benjamin-rascoe-WdhmRPvMn7A-unsplash.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[1].serviceName}</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/anna-docking-p7v6X41PP4w-unsplash.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[2].serviceName}</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pina-messina-qQKv7r1BaRw-unsplash-scaled.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[3].serviceName}</Link>
												</div>
											</motion.div>
										</motion.div>
										<div
											className="w-full h-[25rem] my-8 bg-cover bg-center bg-[no-repeat]"
											style={{
												backgroundImage: `url(${IndividualServicePageContent?.mainContentGrid?.imageBannerTwo?.sourceUrl})`,
											}}
										/>
										<motion.div
											variants={stagger}
											className="flex flex-col items-start justify-between gap-4 lg:flex-row items-center justify-between gap-4"
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="/img/572e21864592e57f4a6d121be547b12d.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[4].serviceName}</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="/img/f46c1141fb97af8cc03149945a4f19c4.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[5].serviceName}</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="/img/supersoft_duvet_2_2_2.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[6].serviceName}</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/kinn-living-YoAZKZqLnAM-unsplash-scaled.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[7].serviceName}</Link>
												</div>
											</motion.div>
										</motion.div>
										<div
											className="w-full h-[25rem] my-8 bg-cover bg-center bg-[no-repeat]"
											style={{
												backgroundImage: `url(${IndividualServicePageContent?.mainContentGrid?.imageBannerThree?.sourceUrl})`,
											}}
										/>
										<motion.div
											variants={stagger}
											className="flex flex-col items-start justify-between gap-4 lg:flex-row items-center justify-between gap-4"
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/nimble-made-NS2BZsGxOLE-unsplash-scaled.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">{mainServicesDB[8].serviceName}</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/laura-d-vargas-eHtif1W56v4-unsplash-scaled.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">Plain Day & Evening Dresses</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-karolina-grabowska-4498551-scaled-e1674820398834.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">Gym wear & Accessories</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="/img/stuk-organiser-white__1035115_pe837986_s5.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">
														Baby & {mainServicesDB[11].serviceName}
													</Link>
												</div>
											</motion.div>
										</motion.div>
										<div
											className="w-full h-[25rem] my-8 bg-cover bg-center bg-[no-repeat]"
											style={{
												backgroundImage: `url(${IndividualServicePageContent?.mainContentGrid?.imageBannerFour?.sourceUrl})`,
											}}
										/>
										<motion.div
											variants={stagger}
											className="flex flex-col items-start justify-between gap-4 lg:flex-row items-center justify-between gap-4"
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/ORGANICFC02_15_T.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">Towels</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/cd39e3e27956d708b939ccc66c8ba241.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">Single & Double Blanket</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/kateryna-hliznitsova-pxUky4mk0FI-unsplash-scaled.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">Lightweight Jumpers</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<Image
														src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-kate-gundareva-8652788-min-scaled.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href="/">Denim Jeans</Link>
												</div>
											</motion.div>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

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

export async function getStaticProps() {
	const getIndividualServicePageContent: any = gql`
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
						IndividualServicePage {
							heroSection {
								title
								paragraph
								displayPaymentInfo
								backgroundImage {
									sourceUrl
								}
							}
							titleParagraph {
								title
								paragraph
							}
							mainContentGrid {
								imageBanner {
									sourceUrl
								}
								imageBannerTwo {
									sourceUrl
								}
								imageBannerThree {
									sourceUrl
								}
								imageBannerFour {
									sourceUrl
								}
								squares {
									visibleContent {
										text
										image {
											altText
											sourceUrl
										}
									}
									hiddenContent {
										title
										price
									}
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
						}
					}
				}
			}
		}
	`;

	const response: any = await client.query({
		query: getIndividualServicePageContent,
	});

	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			themesOptionsContent,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			IndividualServicePageContent:
				response?.data?.mainContent?.edges[0]?.node?.IndividualServicePage,
		},
		revalidate: 60,
	};
}

export default IndividualService;
