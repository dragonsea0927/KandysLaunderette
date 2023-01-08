/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/TitleParagraphGridContent.module.scss";

const TitleParagraphGridCard = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden p-4 mx-auto text-black text-center font-[400] text-sm";
		} else {
			contentStyling =
				"block p-4 mx-auto text-black text-center font-[400] text-sm";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}
	return (
		<div className="flex flex-row gap-4 justify-between items-center">
			<motion.div variants={fadeIn} className="w-1/2">
				<img
					className="w-[300px] h-[300px] object-cover object-center"
					src={`${props?.image}`}
					alt={props?.image?.altText}
					width={props?.mediaDetails?.width}
					height={props?.mediaDetails?.height}
				/>
			</motion.div>
			<motion.div variants={fadeInUp} className="w-1/2">
				<h2 className="text-[1.05rem] text-center font-[700]">
					{props?.title}
				</h2>
				<div
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup()}
				/>
			</motion.div>
		</div>
	);
};

export default TitleParagraphGridCard;
