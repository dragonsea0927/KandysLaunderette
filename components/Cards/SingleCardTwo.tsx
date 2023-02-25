import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "../../styles/components/OurProcess.module.scss";
import {
	fadeIn,
	fadeInUp,
	fadeInTwo,
	stagger,
} from "../../animations/animations";

interface IProps {
	title: string;
	textColor: string;
	paragraph: string;
	paragraphColor: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const SingleCardTwo: FunctionComponent<IProps> = ({
	title,
	image,
	paragraph,
	textColor,
	paragraphColor,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = `"hidden mt-8 text-center lg:text-left text-${paragraphColor} text-medium"`;
		} else {
			contentStyling = `block mt-8 text-center lg:text-left text-${paragraphColor} text-medium`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className={styles.singleCardTwo}>
			<motion.div
				variants={fadeIn}
				className="flex items-center justify-center w-full"
			>
				<Image
					width={500}
					height={500}
					src={`${image?.sourceUrl}`}
					alt={`${image?.altText} Image`}
					className="w-full h-[500px] rounded-lg object-cover object-center"
				/>
			</motion.div>
			<motion.div variants={stagger} className="px-4 py-8">
				<motion.h2
					variants={fadeInUp}
					className={`py-8 w-full text-center text-${textColor} leading-[2.75rem] font-[600] text-2xl`}
				>
					{title}
				</motion.h2>
				<motion.div
					variants={fadeInTwo}
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</motion.div>
		</div>
	);
};

export default SingleCardTwo;
