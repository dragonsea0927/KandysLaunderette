import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "/styles/Home.module.scss";
import {fadeIn, fadeInUp} from "../animations/animations";

interface IProps {
	title: string;
	subtitle: string;
	personName: string;
	paragraph: string;
}

const testimonialQuotes: FunctionComponent<IProps> = ({
	title,
	subtitle,
	personName,
	paragraph,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] text-left text-black font-[500] text-base";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-left text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<>
			<section className={styles.testimonialQuotes}>
				<div className="container flex flex-col p-0 mx-auto">
					<div className="content">
						<div className="topSection">
							<h5>{subtitle}</h5>
							<motion.div variants={fadeIn} className="titleSection">
								<div className="borderLine"></div>
								<h2>{title}</h2>
								<div className="borderLine"></div>
							</motion.div>
						</div>
						<motion.div variants={fadeIn} className="bottomSection">
							<div className={styles.images}></div>
							<div className="testimonialContentSlide">
								<div className="flex flex-col details">
									<motion.div
										variants={fadeInUp}
										className={isParagraphContent(paragraph)}
										dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
									/>
									<motion.h2
										variants={fadeInUp}
										id="testimonialTitle"
										className="title"
									>
										{personName}
									</motion.h2>
								</div>
							</div>
							<div className={styles.images}></div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default testimonialQuotes;
