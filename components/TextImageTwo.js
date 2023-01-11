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
			contentStyling =
				"hidden w-full xl:w-[45rem] text-left text-black font-[500] text-base";
		} else {
			contentStyling =
				"block w-full xl:w-[45rem] text-left text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
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
			<div className="container mx-auto p-0">
				<div className="flex flex-col lg:flex-row p-4 gap-y-4 gap-x-8 lg:gap-x-28 justify-between items-center">
					<motion.div
						variants={fadeIn}
						className="mt-10 md:mt-0 w-full md:w-1/2"
						style={{display: leftImageDisplay}}
					>
						<Image
							width="100%"
							height="100%"
							objectFit="contain"
							layout="responsive"
							src={`${props?.image}`}
							alt={`${props?.image?.altText} Image`}
							className="w-full h-[650px] object-contain object-center"
						/>
					</motion.div>
					<motion.div variants={fadeInUp} className="w-full md:w-1/2">
						<motion.h2
							variants={fadeInUp}
							className="text-black text-left text-4xl py-6 md:text-5xl"
						>
							{props?.title}
						</motion.h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</motion.div>
					<motion.div
						variants={fadeIn}
						className="mt-10 md:mt-0 w-full md:w-1/2"
						style={{display: rightImageDisplay}}
					>
						<Image
							width="100%"
							height="100%"
							objectFit="contain"
							layout="responsive"
							src={`${props?.image}`}
							alt={`${props?.image?.altText} Image`}
							className="w-full h-[650px] object-contain object-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TextImageTwo;
