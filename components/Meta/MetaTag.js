import Head from "next/head";

const MetaTag = (props) => {
	return (
		<Head>
			{/* <!-- Website Title --> */}
			<title key="title">{`${props?.title} | Professional Dry Cleaning Solutions`}</title>
			<meta name="description" content={props?.seo?.metaDesc} />
			<link rel="icon" href="../img/Logo.png" />
			<meta
				name="robots"
				content={`${props?.seo?.metaRobotsNoindex} , ${props?.seo?.metaRobotsNofollow}`}
				key="metaRobots"
			/>
			<link rel="canonical" href={props?.seo?.canonical} key="metaCanonical" />

			{/* OpenGraph */}
			<meta
				property="og:title"
				content={props?.seo?.opengraphTitle}
				key="ogTitle"
			/>
			<meta name="og:url" content={props?.seo?.opengraphUrl} key="ogUrl" />
			<meta
				name="og:image"
				content={props?.seo?.opengraphImage?.mediaItemUrl}
				key="ogImage"
			/>
			<meta
				name="image"
				property="og:image"
				content={props?.seo?.opengraphImage?.mediaItemUrl}
				key="ogLinkedInImage"
			/>
			<meta
				name="og:description"
				content={props?.seo?.opengraphDescription}
				key="ogDesc"
			/>

			{/* Twitter */}
			<meta
				name="twitter:title"
				content={props?.seo?.twitterTitle}
				key="twitterTitle"
			/>
			<meta
				name="twitter:description"
				content={props?.seo?.twitterDescription}
				key="twitterDesc"
			/>
			<meta
				name="twitter:image"
				content={props?.seo?.twitterImage?.mediaItemUrl}
				key="twitterImage"
			/>
			<meta
				name="twitter:card"
				content="summary_large_image"
				key="twitterCard"
			/>
		</Head>
	);
};

export default MetaTag;
