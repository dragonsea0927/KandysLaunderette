import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/AlterationsRepairs.module.scss";

const AlterationsRepairs = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center text-white text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center text-white text-medium";
		}
		return contentStyling;
	}
	function isParagraphContentTwo(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center lg:text-left text-white text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center lg:text-left text-white text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.alterationsRepairs}>
			<div className="container mx-auto px-4 py-20">
				<div className="py-20">
					<motion.div variants={fadeInUp} className="flex flex-col">
						<h2 className="text-center text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full">
							{props?.title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
				</div>
			</div>
			<div
				className="flex items-center w-full h-[40rem] bg-center bg-cover bg-[no-repeat]"
				style={{
					backgroundImage: `url("${props.imageBanner}")`,
				}}
			></div>
			<div className="container py-20 px-4 mx-auto">
				<div className="flex flex-col justify-between items-center gap-14">
					<div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-14">
						<Image
							width={`600px`}
							height={`600px`}
							objectFit="cover"
							objectPosition="center"
							src={props?.imageTwo?.sourceUrl}
							alt={`${props?.imageTwo?.altText} Image`}
							className="w-full h-[600px] rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
						/>
						<motion.div variants={stagger} className="p-4">
							<motion.h3
								variants={fadeInUp}
								className="text-center text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full"
							>
								{props?.titleTwo}
							</motion.h3>
							<motion.div
								variants={fadeIn}
								className={isParagraphContentTwo(props?.paragraphTwo)}
								dangerouslySetInnerHTML={createParagraphMarkup(
									props?.paragraphTwo
								)}
							/>
						</motion.div>
					</div>
					<div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-14">
						<motion.div variants={stagger} className="p-4">
							<motion.h3
								variants={fadeInUp}
								className="text-center text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full"
							>
								{props?.titleThree}
							</motion.h3>
							<motion.div
								variants={fadeIn}
								className={isParagraphContentTwo(props?.paragraphThree)}
								dangerouslySetInnerHTML={createParagraphMarkup(
									props?.paragraphThree
								)}
							/>
						</motion.div>
						<Image
							width={`600px`}
							height={`600px`}
							objectFit="cover"
							objectPosition="center"
							src={props?.imageThree?.sourceUrl}
							alt={`${props?.imageThree?.altText} Image`}
							className="w-full h-[600px] rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AlterationsRepairs;
