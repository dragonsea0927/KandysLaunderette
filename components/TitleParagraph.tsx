/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import fadeInUp from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
}

const TitleParagraph: FunctionComponent<IProps> = ({title, paragraph}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center text-darkGrey text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="px-4 py-20 bg-white lg:px-0">
			<div className="container p-0 mx-auto">
				<motion.div variants={fadeInUp}>
					<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{title}
					</h2>
					<div
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default TitleParagraph;
