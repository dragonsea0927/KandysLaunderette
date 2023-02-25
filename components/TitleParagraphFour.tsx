/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/TitleParagraph.module.scss";

interface IProps {
	title: string;
	paragraph: string;
}

const TitleParagraphFour: FunctionComponent<IProps> = ({title, paragraph}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto mt-4 py-8 text-darkGrey text-left text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto mt-4 py-8 text-darkGrey text-left text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphFour}>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div variants={fadeInUp} className="py-16 sm:py-20 md:py-28">
						<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
						<div
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphFour;
