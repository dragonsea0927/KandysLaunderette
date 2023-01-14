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
				"hidden p-4 w-full lg:w-[30rem] mx-auto text-black text-center font-[400] text-base";
		} else {
			contentStyling =
				"block p-4 w-full lg:w-[30rem] mx-auto text-black text-center font-[400] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<div className="flex flex-row gap-10 justify-center items-center">
			<motion.div variants={fadeIn}>
				<Image
					width={350}
					height={350}
					objectFit="cover"
					alt={props?.image?.altText}
					src={`${props?.image?.sourceUrl}`}
					className="w-[350px] h-[300px] object-cover object-center"
				/>
			</motion.div>
			<motion.div variants={fadeInUp}>
				<h2 className="text-fadedPink text-[1.05rem] text-center font-[700]">
					{props?.title}
				</h2>
				<div
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
			</motion.div>
		</div>
	);
};

export default TitleParagraphGridCard;
