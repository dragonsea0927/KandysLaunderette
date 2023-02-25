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
// import styles from "/styles/Home.module.scss";
import {fadeInUp, fadeIn, stagger} from "../../animations/animations";
import BusinessServicesListDB from "../../lib/IndividualServicesListDB.json";

// Components
import Footer from "../../components/Footer";
import MetaTag from "../../components/Meta/MetaTag";
import ContactBanner from "../../components/ContactBanner";
import TitleParagraph from "../../components/TitleParagraph";
import HeroSectionFour from "../../components/HeroSectionFour";

const CommercialServices = ({
	seo,
	pageTitle,
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
	commercialServicesPageContent,
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
					title={commercialServicesPageContent?.heroSection?.title}
					paragraph={commercialServicesPageContent?.heroSection?.paragraph}
					backgroundImage={
						commercialServicesPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
					displayPaymentInfo={
						commercialServicesPageContent?.heroSection?.displayPaymentInfo
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
					title={commercialServicesPageContent?.titleParagraph?.title}
					paragraph={commercialServicesPageContent?.titleParagraph?.paragraph}
				/>

				{/* // <========== PAGE TITLE ==========> */}
				<section className="container py-20 mx-auto">
					<div className={styles.mainContent}>
						<div>
							<div className={styles.previousButton}>
								<Link href="https://mydummysite.co.uk/ToddLearning/LaundryDryCleaning">
									<i className="bi bi-arrow-left-circle"></i>
								</Link>
							</div>
							<div className={styles.content}>
								<motion.div variants={fadeIn} className={styles.subtitle}>
									<h2>All Our Services</h2>
								</motion.div>
								<div className="flex flex-row">
									<div className="flex flex-col items-start justify-between gap-4 text-left w-full lg:w-[20%]">
										<motion.div variants={stagger} className={styles.List}>
											<h2>Duvet Cleaning</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[0].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[1].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[2].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[3].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[4].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[5].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[6].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[7].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Tops & Shirts</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[8].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[9].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Trousers</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[10].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[11].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Bar & Restaurant</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[12].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[13].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[14].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[15].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[16].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[17].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[18].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[19].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Throw-over</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[20].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[21].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[22].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Accessories</h2>
											<ul>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[23].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[24].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[25].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[26].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[27].serviceName}
													</motion.span>
												</Link>
												<Link href={`/`}>
													<motion.span variants={fadeInUp}>
														{BusinessServicesListDB[28].serviceName}
													</motion.span>
												</Link>
											</ul>
										</motion.div>
									</div>
									<div className="flex flex-col items-center justify-between gap-4 text-center w-full lg:w-[80%]">
										<div className={styles.ImageBSDivider}></div>
										<motion.div
											variants={stagger}
											className="flex flex-row items-center justify-between gap-4"
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/supersoft_duvet_1_8.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href={`/`}>Duvet Cleaning</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/UK_BuyingGuide_Duvet.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href={`/`}>Bed Linen</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/UK_BuyingGuide_Pillows.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href={`/`}>Bed Single Blanket</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/Size-Chart-LP_Bed-Linen.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href={`/`}>King & Queen Bed</Link>
												</div>
											</motion.div>
										</motion.div>
										<div className={styles.ImageBSDividerTwo}></div>
										<motion.div
											variants={stagger}
											className="flex flex-row items-center justify-between gap-4"
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/491-325s5.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg object-cover rounded-lg"
													/>
												</Link>

												<div className={styles.header}>
													<Link href={`/`}>Staff Tops & Shirts</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/skubb-storage-case-dark-grey__0940614_pe795076_s5.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>

												<div className={styles.header}>
													<Link href={`/`}>Money Pouch Waist Apron</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/pants-cleaning.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>

												<div className={styles.header}>
													<Link href={`/`}>Staff Trousers</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/attention-to-detail.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>

												<div className={styles.header}>
													<Link href={`/`}>Waist Coat</Link>
												</div>
											</motion.div>
										</motion.div>
										<div className={styles.ImageBSDividerThree}></div>
										<motion.div
											variants={stagger}
											className="flex flex-row items-center justify-between gap-4"
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/a210e29d04087417d25f542234b19422.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>

												<div className={styles.header}>
													<Link href={`/`}>Waiters Uniforms Set</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/26d4c8388751821fbdea71c0c26f46f0.jpg"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>

												<div className={styles.header}>
													<Link href={`/`}>Kitchen Staff Shirts</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/PH165543-crop001.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>

												<div className={styles.header}>
													<Link href={`/`}>Bar Staff Aprons</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href={`/`}>
													<Image
														src="/img/Multislider_Barnham_Collection.webp"
														alt="Product Image"
														width={400}
														height={400}
														className="w-[300px] h-[300px] object-cover rounded-lg"
													/>
												</Link>
												<div className={styles.header}>
													<Link href={`/`}>Kitchen Cloths</Link>
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
					title={commercialServicesPageContent?.contactBanner?.title}
					paragraph={commercialServicesPageContent?.contactBanner?.paragraph}
					buttonLink={commercialServicesPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						commercialServicesPageContent?.contactBanner?.image?.sourceUrl
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
	const getCommercialServicesPageContent: any = gql`
		{
			pageTitle: pages(where: {id: 183, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 183, status: PUBLISH}) {
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
						commercialServicesPage {
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
		query: getCommercialServicesPageContent,
	});

	const themesOptionsContent: object = await getThemesOptionsContent();
	const CommercialServicesMenuLinks: object = await getCommercialServicesMenu();
	const IndividualServicesMenuLinks: object = await getIndividualServicesMenu();

	return {
		props: {
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			commercialServicesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.commercialServicesPage,
			themesOptionsContent,
		},
		revalidate: 60,
	};
}

export default CommercialServices;
