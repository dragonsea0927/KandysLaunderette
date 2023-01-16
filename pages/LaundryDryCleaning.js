import Head from "next/head";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getServiceLinksContent,
	getLaundryDryCleaningLinksContent,
} from "../lib/MenuLinks";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import TwoOptions from "../components/TwoOptions";
import HeroSectionTwo from "../components/HeroSectionTwo";
import ContactBannerThree from "/components/ContactBannerThree";

const LaundryDryCleaning = ({
	seo,
	pageTitle,
	serviceMenuLinks,
	themesOptionsContent,
	laundryDryCleaningMenuLinks,
	laundryDryCleaningPageContent,
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
				<link rel="icon" href="img/Logo.png" />
			</Head>

			{/* <!--===== NAVBAR =====--> */}
			<Navbar serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks} />

			<main>
				{/* <!--===== HERO =====--> */}
				<HeroSectionTwo
					title={laundryDryCleaningPageContent?.heroSection?.title}
					subtitle={laundryDryCleaningPageContent?.heroSection?.subtitle}
					backgroundImage={
						laundryDryCleaningPageContent?.heroSection?.backgroundImage
							?.sourceUrl
					}
				/>
				{/* // <========== OPTIONS ==========> */}
				<TwoOptions
					title={laundryDryCleaningPageContent?.ourOptions?.title}
					paragraph={laundryDryCleaningPageContent?.ourOptions?.paragraph}
					content={laundryDryCleaningPageContent?.ourOptions?.content}
				/>

				{/* <!--===== CONTACT BANNER THREE =====--> */}
				<ContactBannerThree
					title={laundryDryCleaningPageContent?.contactBanner?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={laundryDryCleaningPageContent?.contactBanner?.buttonLink}
					backgroundImage={
						laundryDryCleaningPageContent?.contactBanner?.image?.sourceUrl
					}
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

export default LaundryDryCleaning;

export async function getStaticProps() {
	const getLaundryDryCleaningPageContent = gql`
		{
			pageTitle: pages(where: {id: 177, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 177, status: PUBLISH}) {
				edges {
					node {
						seo {
							metaDesc
						}
						LaundryDryCleaningPage {
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
									titleTwo
									title
									image {
										sourceUrl
									}
									imageTwo {
										sourceUrl
									}
									buttonLink {
										url
										title
										target
									}
									buttonLinkTwo {
										url
										title
										target
									}
								}
							}
							contactBanner {
								title
								image {
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getLaundryDryCleaningPageContent,
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
			laundryDryCleaningPageContent:
				response?.data?.mainContent?.edges[0]?.node?.LaundryDryCleaningPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}
