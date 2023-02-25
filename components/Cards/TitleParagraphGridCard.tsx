/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const TitleParagraphGridCard: FunctionComponent<IProps> = ({
	title,
	image,
	paragraph,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden py-4 px-0 sm:p-4 w-full mx-auto text-darkGrey text-center font-[400] text-medium";
		} else {
			contentStyling =
				"block py-4 px-0 sm:p-4 mx-auto text-darkGrey text-center font-[400] text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<div className="flex flex-col items-center justify-center py-4 sm:flex-row gap-y-8 gap-x-0 sm:gap-10">
			<motion.div
				variants={fadeIn}
				className="flex items-center justify-center w-full lg:w-1/2"
			>
				<Image
					width={350}
					height={350}
					alt={image?.altText}
					src={`${image?.sourceUrl}`}
					className="w-[350px] h-[350px] mx-auto lg:mx-0 rounded-lg object-cover object-center"
				/>
			</motion.div>
			<motion.div variants={fadeInUp} className="w-full lg:w-1/2">
				<h2 className="text-black text-lg text-center font-[700]">{title}</h2>
				<div
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</motion.div>
		</div>
	);
};

export default TitleParagraphGridCard;
