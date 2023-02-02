/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleParagraph.module.scss";

const TitleParagraphTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto mt-4 mb-6 py-8 text-darkGrey text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto mt-4 mb-6 py-8 text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphTwo}>
			<div className="container px-0 mx-auto">
				<motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
					<h2 className="text-center font-[600] text-3xl lg:text-5xl py-8 leading-10 w-full">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default TitleParagraphTwo;
