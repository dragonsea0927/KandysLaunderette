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
import BusinessServicesListDB from "/lib/IndividualServicesListDB.json";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import MetaTag from "../../components/Meta/MetaTag";
import ContactBanner from "/components/ContactBanner";

const commercialServices = ({
	seo,
	pageTitle,
	CommercialServicesMenuLinks,
	themesOptionsContent,
	IndividualServicesMenuLinks,
	commercialServicesPageContent,
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
				{/* // <========== PAGE TITLE ==========> */}
				<section className="container mx-auto">
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
									<h2>Business Tailored Service</h2>
									<motion.p variants={fadeIn}>
										Our services provides our business partners professional
										solution to their various requirements. Prior booking is
										required. <br></br>
									</motion.p>
								</motion.div>
								<motion.div variants={fadeIn} className={styles.subtitle}>
									<h2>All Our Services</h2>
								</motion.div>
								<div className={styles.innerContent}>
									<div className={styles.servicesList}>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Duvet Cleaning</h2>
											<ul>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[0].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[1].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[2].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[3].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[4].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[5].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[6].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[7].serviceName}
													</motion.a>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Tops & Shirts</h2>
											<ul>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[8].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[9].serviceName}
													</motion.a>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Trousers</h2>
											<ul>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[10].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[11].serviceName}
													</motion.a>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Bar & Restaurant</h2>
											<ul>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[12].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[13].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[14].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[15].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[16].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[17].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[18].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[19].serviceName}
													</motion.a>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Throw-over</h2>
											<ul>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[20].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[21].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[22].serviceName}
													</motion.a>
												</Link>
											</ul>
										</motion.div>
										<motion.div variants={stagger} className={styles.List}>
											<h2>Accessories</h2>
											<ul>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[23].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[24].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[25].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[26].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[27].serviceName}
													</motion.a>
												</Link>
												<Link href="/">
													<motion.a variants={fadeInUp} target="blank">
														{BusinessServicesListDB[28].serviceName}
													</motion.a>
												</Link>
											</ul>
										</motion.div>
									</div>
									<div className={styles.servicesDisplays}>
										<div className={styles.ImageBSDivider}></div>
										<motion.div
											variants={stagger}
											className={styles.servicesDisplay}
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/supersoft_duvet_1_8.jpg"
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
														<a target="blank">Duvet Cleaning</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/UK_BuyingGuide_Duvet.webp"
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
														<a target="blank">Bed Linen</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/UK_BuyingGuide_Pillows.webp"
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
														<a target="blank">Bed Single Blanket</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/Size-Chart-LP_Bed-Linen.webp"
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
														<a target="blank">King & Queen Bed</a>
													</Link>
												</div>
											</motion.div>
										</motion.div>
										<div className={styles.ImageBSDividerTwo}></div>
										<motion.div
											variants={stagger}
											className={styles.servicesDisplay}
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/491-325s5.jpg"
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
														<a target="blank">Staff Tops & Shirts</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/skubb-storage-case-dark-grey__0940614_pe795076_s5.webp"
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
														<a target="blank">Money Pouch Waist Apron</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/pants-cleaning.jpg"
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
														<a target="blank">Staff Trousers</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/attention-to-detail.webp"
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
														<a target="blank">Waist Coat</a>
													</Link>
												</div>
											</motion.div>
										</motion.div>
										<div className={styles.ImageBSDividerThree}></div>
										<motion.div
											variants={stagger}
											className={styles.servicesDisplay}
										>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/a210e29d04087417d25f542234b19422.jpg"
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
														<a target="blank">Waiters Uniforms Set</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/26d4c8388751821fbdea71c0c26f46f0.jpg"
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
														<a target="blank">Kitchen Staff Shirts</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/PH165543-crop001.webp"
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
														<a target="blank">Bar Staff Aprons</a>
													</Link>
												</div>
											</motion.div>
											<motion.div
												variants={fadeInUp}
												className={styles.content}
											>
												<Link href="/">
													<a target="blank">
														<Image
															src="/img/Multislider_Barnham_Collection.webp"
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
														<a target="blank">Kitchen Cloths</a>
													</Link>
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
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
			/>
		</motion.div>
	);
};

export async function getStaticProps() {
	const getCommercialServicesPageContent = gql`
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
								subtitle
								backgroundImage {
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
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getCommercialServicesPageContent,
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
			commercialServicesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.commercialServicesPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default commercialServices;
