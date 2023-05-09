import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
}

const TitleParagraphTwo: FunctionComponent<IProps> = ({title, paragraph}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto mt-4 mb-6 py-8 text-center text-darkGrey text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto mt-4 mb-6 py-8 text-center text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="py-20 px-4 lg:px-0">
			<div className="container px-0 mx-auto">
				<motion.div variants={fadeInUp} className="max-w-6xl mx-auto">
					<h2 className="text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full">
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

export default TitleParagraphTwo;
