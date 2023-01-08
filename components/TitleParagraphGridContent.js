/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import TitleParagraphGridCard from "/components/TitleParagraphGridCard";
import styles from "../styles/components/TitleParagraphGridContent.module.scss";

const TitleParagraphGridContent = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:w-[45rem] my-12 py-8 mx-auto text-black text-center font-[500] text-base";
		} else {
			contentStyling =
				"block w-full lg:w-[45rem] my-12 py-8 mx-auto text-black text-center font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}
	return (
		<section>
			<div className={styles.titleParagraphGridContent}>
				<div>
					<div className="px-8 flex flex-col">
						<motion.div variants={fadeInUp} className="p-8">
							<h2 className="text-black text-center text-4xl md:text-5xl">
								{props?.title}
							</h2>
							<div
								className={isParagraphContent(props?.paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup()}
							/>
						</motion.div>
						<motion.div
							variants={stagger}
							className="py-22 mx-auto mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-start"
						>
							{/* Array Loop */}
							{props.gridContent.map((keys) => (
								<TitleParagraphGridCard
									Key={keys?.id}
									link={keys?.link}
									title={keys?.title}
									paragraph={keys?.paragraph}
									image={keys?.image?.sourceUrl}
									mediaDetails={keys?.image?.mediaDetails}
								/>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphGridContent;
