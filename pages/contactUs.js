import Head from "next/head";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import ContactInfoMap from "../components/ContactInfoMap";
import {fadeInUp} from "../animations/animations";
import {getThemesOptionsContent} from "../lib/themesOptions";

// Components
import ContactBanner from "../components/ContactBanner";

const contactUs = ({
	pageTitle,
	seo,
	contactUsPageContent,
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
				{/* // <========== BACKGROUND IMAGE ==========> */}
				<div className={styles.backgroundImageContactUs}></div>

				{/* // <========== PAGE TITLE ==========> */}
				<div className={styles.pageTitle}>
					<div>
						<div className={styles.content}>
							<motion.div variants={fadeInUp} className={styles.title}>
								<h2>Contact Us</h2>
								<h5>Lets get In Touch</h5>
							</motion.div>
						</div>
					</div>
				</div>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactInfoMap />
			</main>
		</motion.div>
	);
};

export default contactUs;

export async function getStaticProps() {
	const getContactUsPageContent = gql`
		{
			pageTitle: pages(where: {id: 175, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 175, status: PUBLISH}) {
				edges {
					node {
						seo {
		
							fullHead
						}
						contactUsPage {
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getContactUsPageContent,
	});

	const themesOptionsContent = await getThemesOptionsContent();

	return {
		props: {
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			contactUsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.contactUsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
