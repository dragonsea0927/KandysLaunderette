import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn} from "../../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	icon: {
		altText: string;
		sourceUrl: string;
	};
}

const FeatureGridCard: FunctionComponent<IProps> = ({
	title,
	icon,
	paragraph,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden text-center py-4 text-darkGrey text-medium";
		} else {
			contentStyling = "block text-center py-4 text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full lg:w-1/4">
			<div className="h-full pt-8 px-6 pb-6 bg-white text-center rounded-lg border-[1px] border-solid border-fadedPinkTwo">
				<motion.div variants={fadeIn} className="mb-4">
					<Image
						width={550}
						height={550}
						alt={icon?.altText}
						className="w-[75px] h-[75px]"
						src={`${icon?.sourceUrl}`}
					/>
				</motion.div>
				<motion.h3
					variants={fadeIn}
					className="my-2 text-lg text-black font-[600]"
				>
					{title}
				</motion.h3>
				<motion.div
					variants={fadeInUp}
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</div>
		</div>
	);
};

export default FeatureGridCard;
