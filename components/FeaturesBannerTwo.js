import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";
import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCardTwo from "./Cards/FeaturesBannerCardTwo";

const FeaturesBannerTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden text-medium text-center text-white font-[400] lg:text-lg lg:text-left";
		} else {
			contentStyling =
				"block text-medium text-center text-white font-[400] lg:text-lg lg:text-left";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.featuresBannerTwo}>
			<div className="py-10 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="py-16 px-8 sm:p-16 bg-pink rounded-3xl">
						<h2 className="mb-10 text-4xl md:text-5xl text-white tracking-tight font-[600]">
							{props?.title}
						</h2>
						<div className="flex flex-wrap">
							{props.gridContent.map((keys) => (
								<FeaturesBannerCardTwo
									Key={keys?.id}
									icon={keys?.icon}
									title={keys?.title}
									paragraph={keys?.paragraph}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesBannerTwo;
