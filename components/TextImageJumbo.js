import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/TextImage.module.scss";
import TextImageCard from "./TextImageCard";

const TextImageJumbo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full xl:w-[45rem] text-left text-black font-[500] text-base";
		} else {
			contentStyling =
				"block w-full xl:w-[45rem] text-left text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.textImageJumbo}>
			<div className="container mx-auto p-0">
				{/* Array Loop */}
				{props.gridContent.map((keys) => (
					<TextImageCard
						Key={keys?.id}
						// Content
						title={keys?.title}
						image={keys?.image}
						subtitle={keys?.subtitle}
						paragraph={keys?.paragraph}
						buttonLink={keys?.buttonLink}
						// DisplayOptions
						displayImage={keys?.displayImageOption}
						displayButton={keys?.displayButtonOption}
					/>
				))}
			</div>
		</section>
	);
};

export default TextImageJumbo;
