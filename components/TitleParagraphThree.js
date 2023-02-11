/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/TitleParagraph.module.scss";

const TitleParagraphThree = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium leading-normal";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium leading-normal";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphThree}>
			<div className="container mx-auto p-0">
				<div className="flex flex-col px-4">
					<motion.div variants={fadeInUp} className="py-28">
						<h2 className="text-white text-center font-[600] text-xl sm:text-4xl lg:text-5xl">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphThree;
