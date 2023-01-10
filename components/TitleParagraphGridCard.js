/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";

const TitleParagraphGridCard = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden p-4 mx-auto text-black text-center font-[400] text-base";
		} else {
			contentStyling =
				"block p-4 mx-auto text-black text-center font-[400] text-base";
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
				<Image
					width={300}
					height={300}
					alt={props?.image?.altText}
					src={`${props?.image?.sourceUrl}`}
					className="w-[300px] h-[300px] object-cover object-center"
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
