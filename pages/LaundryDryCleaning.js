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
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import HeroSectionTwo from "../components/HeroSectionTwo";
import ContactBannerThree from "/components/ContactBannerThree";
import TitleParagraph from "../components/TitleParagraph";

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
			<MetaTag title={pageTitle} seo={seo} />

			{/* <!--===== NAVBAR =====--> */}
			<Navbar
				serviceMenuLinks={serviceMenuLinks?.serviceMenuLinks}
				laundryDryCleaningMenuLinks={
					laundryDryCleaningMenuLinks?.laundryDryCleaningMenuLinks
				}
			/>

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
				<TitleParagraph
					title={laundryDryCleaningPageContent?.titleParagraph?.title}
					paragraph={laundryDryCleaningPageContent?.titleParagraph?.paragraph}
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
						LaundryDryCleaningPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							titleParagraph {
								title
								paragraph
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

export default LaundryDryCleaning;
