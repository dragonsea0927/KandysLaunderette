import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import ContactInfoMap from "../components/ContactInfoMap";
import {fadeInUp} from "../animations/animations";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import MetaTag from "../components/Meta/MetaTag";

const contactUs = ({
	seo,
	pageTitle,
	serviceMenuLinks,
	contactUsPageContent,
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

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
			/>
		</motion.div>
	);
};

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
							heroSection {
								title
								subtitle
								backgroundImage {
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
		query: getContactUsPageContent,
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
			contactUsPageContent:
				response?.data?.mainContent?.edges[0]?.node?.contactUsPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default contactUs;
