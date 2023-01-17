import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, fadeInTwo, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import NavbarTwo from "/components/NavbarTwo";
import MetaTag from "../components/Meta/MetaTag";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";

const aboutUs = ({
	seo,
	pageTitle,
	serviceMenuLinks,
	aboutUsPageContent,
	themesOptionsContent,
	laundryDryCleaningMenuLinks,
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
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
				laundryDryCleaningMenuLinks={
					laundryDryCleaningMenuLinks?.laundryDryCleaningMenuLinks
				}
			/>

			<main>
				<div className={styles.aboutUsPage}>
					{/* // <========== ABOUT US DESCRIPTIONS ==========> */}
					{/* <div className={styles.aboutUs}>
						<div>
							<motion.div variants={stagger} className={styles.content}>
								<motion.h2 variants={fadeInUp}>We may be new to you</motion.h2>
								<motion.p variants={fadeIn}>
									But We believe in making the most of lifes simple pleasures -
									its the little things that matter. Precious moments of
									uncomplicated happiness are our constant inspiration, and it
									is with these in mind that we create collections of services
									that are built to last and become an intimate part of your
									everyday lives.
									<br></br>
									<br></br>I cannot emphasize enough how much thought, care, and
									attention to detail goes into every service we make at The
									White Company - I hope you will cherish your purchases as much
									as we do.
									<br></br>
									<br></br>
									<motion.span variants={fadeInTwo}>
										Were delighted to meet you
									</motion.span>
								</motion.p>
							</motion.div>
						</div>
					</div> */}

					{/* // <========== SUITS & OXFORD DESCRIPTIONS ==========> */}
					{/* <div className={styles.ourLeader}>
						<div>
							<motion.div variants={fadeIn} className={styles.gridDisplay}>
								<Image
									src="/img/karsten-winegeart-bwDnRf-r4u8-unsplash.jpg"
									alt="Product Image"
									width={400}
									height={800}
									objectFit="cover" objectPosition="center"
								></Image>
								<Image
									src="/img/karsten-winegeart-Q7iB4Yixcfw-unsplash.jpg"
									alt="Product Image"
									width={400}
									height={800}
									objectFit="cover" objectPosition="center"
								></Image>
							</motion.div>
							<div className={styles.content}>
								<motion.div variants={stagger} className={styles.description}>
									<motion.h2 variants={fadeInUp}>
										Kandy Chrissie Rucker
									</motion.h2>
									<motion.p variants={fadeIn}>
										Over 2 years ago, Kandy Chrissie Rucker had a vision: to
										create a company that specialized in Laundry & Dry Cleaning,
										Alterations & Repairs, amongst many other services combining
										the highest quality with affordable prices.
									</motion.p>
								</motion.div>
							</div>
						</div>
					</div> */}
				</div>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={aboutUsPageContent?.contactBanner?.title}
					paragraph={aboutUsPageContent?.contactBanner?.paragraph}
					buttonLink={aboutUsPageContent?.contactBanner?.buttonLink}
					backgroundImage={aboutUsPageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <div className={styles.aboutUsPage}>
					<div className={styles.ourCollections}>
						<div>
							<div className={styles.content}>
								<motion.div variants={fadeInUp} className={styles.title}>
									<h2>Our Attention to Detail</h2>
									<h5>Consistency, Efficiency & Perfection.</h5>
								</motion.div>
								<div className={styles.gridDisplay}>
									<div className={styles.innerContent}>
										<motion.div variants={fadeIn} className={styles.Image}>
											<Image
												src="/img/nimble-made-N0ke5zChVBU-unsplash.jpg"
												alt="Product Image"
												width={600}
												height={800}
												objectFit="cover" objectPosition="center"
											></Image>
										</motion.div>
										<motion.div
											variants={stagger}
											className={styles.description}
										>
											<motion.h2 variants={fadeInUp}>Service</motion.h2>
											<motion.p variants={fadeIn}>
												Our staff are highly skilled and trained to understand
												the complexity of clothes and household furnishings. You
												can be confident that your articles will always receive
												the greatest care in dry cleaning, wet cleaning and
												stain removal services.
												<br></br>
												<br></br>
												Equally we pride ourselves on our ability to iron and
												hand finish your garments to the highest standard, so
												they will look their best for your future enjoyment.
											</motion.p>
										</motion.div>
									</div>
								</div>
								<div className={styles.gridDisplayTwo}>
									<div className={styles.innerContent}>
										<motion.div
											variants={stagger}
											className={styles.description}
										>
											<motion.h2 variants={fadeInUp}>Convenience</motion.h2>
											<motion.p variants={fadeIn}>
												We are located in high Street downtown Swansea. However
												We also operate a collection and delivery service.
												<br></br>
												<br></br>
												We have a variety of vehicles on the road and in
												telephone contact, enabling a prompt response to your
												requests.
											</motion.p>
										</motion.div>
										<motion.div variants={fadeIn} className={styles.Image}>
											<Image
												src="/img/nimble-made-Jf7JqVazm-4-unsplash.jpg"
												alt="Product Image"
												width={800}
												height={800}
												objectFit="contain"
											></Image>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={aboutUsPageContent?.ourLocation?.title}
					paragraph={aboutUsPageContent?.ourLocation?.paragraph}
				/>
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

// Removes Global Navbar & Adds Custom Header and Footer Page layout Function
aboutUs.getLayout = function PageLayout(page) {
	return (
		<>
			<div className={styles.aboutUsPage}>
				<div className={styles.backgroundTopCover}>
					{/* <!--===== NAVIGATION =====--> */}
					<NavbarTwo />
				</div>
			</div>

			{/* <!--===== ONE TIME CUSTOM PAGE CONTENT =====--> */}
			{page}

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</>
	);
};

export async function getStaticProps() {
	const getAboutUsPageContent = gql`
		{
			pageTitle: pages(where: {id: 171, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 171, status: PUBLISH}) {
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
						aboutUsPage {
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
							ourLocation {
								title
								paragraph
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getAboutUsPageContent,
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
			aboutUsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.aboutUsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default aboutUs;
