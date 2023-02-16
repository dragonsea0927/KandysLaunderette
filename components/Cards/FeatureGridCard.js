import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../../animations/animations";
const FeatureGridCard = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-center py-4 text-darkGrey text-medium";
		} else {
			contentStyling = "block text-center py-4 text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full lg:w-1/4">
			<div className="h-full pt-8 px-6 pb-6 bg-white text-center rounded-lg border-[1px] border-solid border-fadedPinkTwo">
				<motion.div variants={fadeIn} className="mb-4">
					<Image
						width="75px"
						height="75px"
						objectFit="contain"
						objectPosition="center"
						alt={props?.icon?.altText}
						className="w-[75px] h-[75px]"
						src={`${props?.icon?.sourceUrl}`}
					/>
				</motion.div>
				<motion.h3
					variants={fadeIn}
					className="my-2 text-lg text-black font-[600]"
				>
					{props?.title}
				</motion.h3>
				<motion.div
					variants={fadeInUp}
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
			</div>
		</div>
	);
};

export default FeatureGridCard;
