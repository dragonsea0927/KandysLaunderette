import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/TextImage.module.scss";

interface IProps {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
	displayImageLocation: string;
}

const TextImageTwo: FunctionComponent<IProps> = ({
	image,
	title,
	paragraph,
	displayImageLocation,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden text-darkGrey text-medium";
		} else {
			contentStyling = "block text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Displays left or Right Image depending on 
    what the user selected in the dashboard */
	let rightImageDisplay = "block";
	let leftImageDisplay = "none";

	if (displayImageLocation === "Left") {
		rightImageDisplay = "none ";
		leftImageDisplay = "block";
	}

	return (
		<section className={styles.textImageTwo}>
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center justify-between lg:flex-row gap-y-4 gap-x-8 lg:gap-x-12">
					<motion.div
						variants={fadeIn}
						className="w-full mt-10 md:mt-0 md:w-1/2"
						style={{display: leftImageDisplay}}
					>
						<Image
							width={700}
							height={600}
							src={`${image?.sourceUrl}`}
							alt={`${image?.altText} Image`}
							className="w-full h-[600px] rounded-lg object-cover object-center"
						/>
					</motion.div>
					<motion.div variants={fadeInUp} className="w-full md:w-1/2">
						<motion.h3
							variants={fadeInUp}
							className="text-black text-left py-6 tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl"
						>
							{title}
						</motion.h3>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</motion.div>
					<motion.div
						variants={fadeIn}
						className="w-full mt-10 md:mt-0 md:w-1/2"
						style={{display: rightImageDisplay}}
					>
						<Image
							width={700}
							height={600}
							src={`${image?.sourceUrl}`}
							alt={`${image?.altText} Image`}
							className="w-full h-[600px] rounded-lg object-cover object-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TextImageTwo;
