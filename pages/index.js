/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import styles from "../styles/Home.module.scss";
import {getThemesOptionsContent} from "../lib/themesOptions";
import mainServicesDB from "/lib/mainServicesDB.json";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import StoreLocation from "/components/storeLocation";
import ContactBannerTwo from "/components/ContactBannerTwo";
import ContactBanner from "../components/ContactBanner";
import TitleGridContent from "/components/TitleGridContent";
import TitleGridContentTwo from "/components/TitleGridContentTwo";
import TitleParagraphGridContent from "/components/TitleParagraphGridContent";
import SpecialOccasions from "../components/SpecialOccasions";

export default function Home({homePageContent, themesOptionsContent}) {
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
				<title>Kandys Launderette | Professional Dry Cleaning Solutions</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="img/Logo.png" />

				{/* <!-- AOS CDN.js Reveal Animation  --> */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
					integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
				{/* <!-- Icons for Mobile viewport --> */}
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
				/>
			</Head>

			<main>
				{/* <!--===== HERO =====--> */}
				<section className={styles.backgroundImage}>
					<div className="container mx-auto p-0">
						<div className={styles.content}>
							<motion.div variants={fadeInUp} className={styles.title}>
								<h2>Kandys Launderette</h2>
								<h5>Professional Dry Cleaning Specialist</h5>
							</motion.div>
						</div>
					</div>
				</section>

				<section className="container mx-auto p-0">
					{/* <!--===== MAIN SERVICES =====--> */}
					<div className={styles.introSection}>
						<div>
							<div className={styles.content}>
								<motion.div variants={fadeInUp} className={styles.description}>
									<h5>About Kandys Launderette</h5>
									<h2>Get to know us a little</h2>
									<p>
										Over 2 years ago, Kandys had a vision: to create a company
										that specialized in Professional Dry Cleaning Solutions,
										combining the highest quality with affordable prices.
									</p>
									<p>
										We are a family run business centrally based in Northampton,
										Northamptonshire, offering marquee hire and event management
										services in Northamptonshire, Leicestershire,
										Buckinghamshire, Bedfordshire, Cambridgeshire,
										Hertfordshire, Oxfordshire, Rutland, Warwickshire, London,
										the home counties, Birmingham and the whole midlands area.
									</p>
									<motion.div
										variants={fadeIn}
										className={styles.contactBannerButton}
									>
										<Link href="/">
											<a>
												<button>
													<strong>Our Story</strong>
												</button>
											</a>
										</Link>
									</motion.div>
								</motion.div>
								<motion.div variants={fadeIn} className={styles.image}>
									<Image
										src="/img/karsten-winegeart-Q7iB4Yixcfw-unsplash.jpg"
										alt="Product Image"
										width={400}
										height={400}
										objectFit="cover"
									></Image>
								</motion.div>
							</div>
						</div>
					</div>

					{/* <!--===== MAIN SERVICES =====--> */}
					<TitleGridContent
						title={homePageContent?.ourServices?.title}
						paragraph={homePageContent?.ourServices?.paragraph}
						gridContent={homePageContent?.ourServices?.gridContent}
					/>
				</section>

				{/* <!--===== SPECIAL OCCASIONS =====--> */}
				<SpecialOccasions
					title={homePageContent?.specialOccasions?.title}
					paragraph={homePageContent?.specialOccasions?.paragraph}
					content={homePageContent?.specialOccasions?.content}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={homePageContent?.contactBanner?.title}
					paragraph={homePageContent?.contactBanner?.paragraph}
					buttonLink={homePageContent?.contactBanner?.buttonLink}
					backgroundImage={homePageContent?.contactBanner?.image?.sourceUrl}
				/>

				<section>
					{/* <!--===== WHY CHOOSE US =====--> */}
					<TitleParagraphGridContent
						title={homePageContent?.whyChooseUs?.title}
						paragraph={homePageContent?.whyChooseUs?.paragraph}
						gridContent={homePageContent?.whyChooseUs?.gridContent}
					/>
				</section>

				{/* <!--===== HOTEL & RESTAURANT =====--> */}
				<TitleGridContentTwo
					title={homePageContent?.hotelRestaurantServices?.title}
					paragraph={homePageContent?.hotelRestaurantServices?.paragraph}
					gridContent={homePageContent?.hotelRestaurantServices?.gridContent}
				/>

				{/* <!--===== INFORMATION SECTION =====--> */}
				<ContactBannerTwo
					title={homePageContent?.contactBannerTwo?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					paragraph={homePageContent?.contactBannerTwo?.paragraph}
					buttonLink={homePageContent?.contactBannerTwo?.buttonLink}
					backgroundImage={homePageContent?.contactBannerTwo?.image?.sourceUrl}
				/>

				<section className="container mx-auto p-0">
					{/* <!--===== OUT STORE LOCATION =====--> */}
					<StoreLocation
						title={homePageContent?.ourLocation?.title}
						paragraph={homePageContent?.ourLocation?.paragraph}
					/>
				</section>
			</main>
		</motion.div>
	);
}

export async function getStaticProps() {
	const getHomePageContent = gql`
		{
			mainContent: pages(where: {id: 168, status: PUBLISH}) {
				edges {
					node {
						homePage {
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
								displayImageOption
								displayButtonOption
								buttonLink {
									url
									title
									target
								}
								image {
									sourceUrl
									mediaDetails {
										width
										height
									}
								}
							}
							ourServices {
								title
								paragraph
								gridContent {
									title
									link {
										url
										title
										target
									}
									image {
										sourceUrl
										mediaDetails {
											width
											height
										}
									}
								}
							}
							specialOccasions {
								title
								paragraph
								content {
									titleTwo
									title
									buttonLinkTwo {
										url
										title
										target
									}
									buttonLink {
										url
										title
										target
									}
									imageTwo {
										sourceUrl
										mediaDetails {
											width
											height
										}
									}
									image {
										sourceUrl
										mediaDetails {
											width
											height
										}
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
							whyChooseUs {
								title
								paragraph
								gridContent {
									title
									paragraph
									image {
										sourceUrl
										mediaDetails {
											width
											height
										}
									}
								}
							}
							hotelRestaurantServices {
								title
								paragraph
								gridContent {
									title
									link {
										url
										title
										target
									}
									image {
										sourceUrl
										mediaDetails {
											width
											height
										}
									}
								}
							}
							contactBannerTwo {
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
		query: getHomePageContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();

	return {
		props: {
			homePageContent: response?.data?.mainContent?.edges[0]?.node?.homePage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
