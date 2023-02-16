import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";
import styles from "../styles/components/TitleParagraphGridContent.module.scss";
import FeatureGridCard from "./Cards/FeatureGridCard";

const TitleParagraphGridContentTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden lg:pl-16 text-center md:text-left text-darkGrey text-medium";
		} else {
			contentStyling =
				"block lg:pl-16 text-center md:text-left text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphGridContentTwo}>
			<div className="container mx-auto px-4 lg:px-0">
				<div className="flex flex-col lg:flex-row gap-8 items-center mb-20">
					<div className="w-full lg:w-1/2">
						<motion.h2
							variants={fadeIn}
							className="text-center md:text-left text-4xl md:text-5xl tracking-tight font-[600] text-black"
						>
							{props?.title}
						</motion.h2>
					</div>
					<motion.div variants={fadeIn} className="w-full lg:w-1/2">
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
				</div>
				<div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between gap-4">
					{props.gridContent.map((keys) => (
						<FeatureGridCard
							Key={keys?.card?.id}
							icon={keys?.card?.icon}
							title={keys?.card?.title}
							paragraph={keys?.card?.paragraph}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphGridContentTwo;
