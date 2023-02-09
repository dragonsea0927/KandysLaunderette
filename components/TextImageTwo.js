import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/TextImage.module.scss";

const TextImageTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-darkGrey text-medium";
		} else {
			contentStyling = "block text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Displays left or Right Image depending on 
    what the user selected in the dashboard */
	let rightImageDisplay = "block";
	let leftImageDisplay = "none";

	if (props.displayImageLocation === "Left") {
		rightImageDisplay = "none ";
		leftImageDisplay = "block";
	}

	return (
		<section className={styles.textImageTwo}>
			<div className="container mx-auto px-4">
				<div className="flex flex-col lg:flex-row gap-y-4 gap-x-8 lg:gap-x-12 justify-between items-center">
					<motion.div
						variants={fadeIn}
						className="mt-10 md:mt-0 w-full md:w-1/2"
						style={{display: leftImageDisplay}}
					>
						<Image
							width={700}
							height={600}
							objectFit="cover"
							objectPosition="center"
							src={`${props?.image?.sourceUrl}`}
							alt={`${props?.image?.altText} Image`}
							className="w-full h-[600px] rounded-lg object-cover object-center"
						/>
					</motion.div>
					<motion.div variants={fadeInUp} className="w-full md:w-1/2">
						<motion.h3
							variants={fadeInUp}
							className="text-black text-left py-6 font-[600] text-3xl lg:text-5xl"
						>
							{props?.title}
						</motion.h3>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
					<motion.div
						variants={fadeIn}
						className="mt-10 md:mt-0 w-full md:w-1/2"
						style={{display: rightImageDisplay}}
					>
						<Image
							width={700}
							height={600}
							objectFit="cover"
							objectPosition="center"
							src={`${props?.image?.sourceUrl}`}
							alt={`${props?.image?.altText} Image`}
							className="w-full h-[600px] rounded-lg object-cover object-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TextImageTwo;
