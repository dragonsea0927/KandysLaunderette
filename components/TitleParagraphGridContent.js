/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import TitleParagraphGridCard from "../components/Cards/TitleParagraphGridCard";
import styles from "../styles/components/TitleParagraphGridContent.module.scss";

const TitleParagraphGridContent = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:w-[45rem] my-12 py-8 mx-auto text-center text-darkGrey text-medium font-[400]";
		} else {
			contentStyling =
				"block w-full lg:w-[45rem] my-12 py-8 mx-auto text-center text-darkGrey text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphGridContent}>
			<div className="container mx-auto px-4 flex flex-col">
				<motion.div variants={fadeInUp}>
					<h2 className="text-black text-center leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</motion.div>
				<motion.div
					variants={stagger}
					className="py-22 mx-auto mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-start"
				>
					{props.gridContent.map((keys) => (
						<TitleParagraphGridCard
							Key={keys?.id}
							link={keys?.link}
							image={keys?.image}
							title={keys?.title}
							paragraph={keys?.paragraph}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default TitleParagraphGridContent;
