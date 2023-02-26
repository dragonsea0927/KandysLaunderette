import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/AlterationsRepairs.module.scss";

interface IProps {
	title: string;
	titleTwo: string;
	titleThree: string;
	paragraph: string;
	paragraphTwo: string;
	paragraphThree: string;
	imageThree: {
		altText: string;
		sourceUrl: string;
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
	};
	imageBanner: {
		sourceUrl: string;
	};
}

const AlterationsRepairs: FunctionComponent<IProps> = ({
	title,
	titleTwo,
	titleThree,
	paragraph,
	paragraphTwo,
	paragraphThree,
	imageTwo,
	imageThree,
	imageBanner,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 text-center text-white text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 text-center text-white text-medium";
		}
		return contentStyling;
	}

	function isParagraphContentTwo(isParagraphContent) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 text-center lg:text-left text-white text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 text-center lg:text-left text-white text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.alterationsRepairs}>
			<div className="container px-4 py-20 mx-auto">
				<div className="py-20">
					<div className="flex flex-col">
						<h2 className="text-center text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full">
							{title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</div>
				</div>
			</div>
			<div
				className="flex items-center w-full h-[40rem] bg-center bg-cover bg-[no-repeat]"
				style={{
					backgroundImage: `url("${imageBanner}")`,
				}}
			></div>
			<div className="container px-4 py-20 mx-auto">
				<div className="flex flex-col items-center justify-between gap-14">
					<div className="flex flex-col-reverse items-center justify-between sm:flex-row gap-14">
						<Image
							width={550}
							height={550}
							src={imageTwo?.sourceUrl}
							alt={`${imageTwo?.altText} Image`}
							className="w-full lg:w-[600px] h-[600px] object-cover rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
						/>
						<motion.div variants={stagger} className="p-4">
							<motion.h3
								variants={fadeInUp}
								className="text-center text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full"
							>
								{titleTwo}
							</motion.h3>
							<motion.div
								variants={fadeIn}
								className={isParagraphContentTwo(paragraphTwo)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraphTwo)}
							/>
						</motion.div>
					</div>
					<div className="flex flex-col items-center justify-between sm:flex-row gap-14">
						<motion.div variants={stagger} className="p-4">
							<motion.h3
								variants={fadeInUp}
								className="text-center text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 leading-[2.75rem] w-full"
							>
								{titleThree}
							</motion.h3>
							<motion.div
								variants={fadeIn}
								className={isParagraphContentTwo(paragraphThree)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraphThree)}
							/>
						</motion.div>
						<Image
							width={550}
							height={550}
							src={imageThree?.sourceUrl}
							alt={`${imageThree?.altText} Image`}
							className="w-full lg:w-[600px] h-[600px] object-cover rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AlterationsRepairs;
