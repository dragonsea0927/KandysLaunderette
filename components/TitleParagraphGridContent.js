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
				"hidden w-full w-[35rem] my-12 mx-auto text-black font-[500] text-base";
		} else {
			contentStyling =
				"block w-full w-[35rem] my-12 mx-auto text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}
	return (
		<sections>
			<div className={styles.titleParagraphGridContent}>
				<div className="container mx-auto">
					<div className={styles.content}>
						<motion.div variants={fadeInUp} className={styles.titleSection}>
							<h2 className="text-black text-xl">{props?.title}</h2>
							<div
								className={isParagraphContent(props?.paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup()}
							/>
						</motion.div>
						<motion.div
							variants={stagger}
							className="grid grid-col-2 py-22 gap-5 justify-between items-center"
							style={{
								gap: "1.5rem",
								display: "grid",
								padding: "4.5rem 0",
								alignItems: "center",
								justifyContent: "space-between",
								gridTemplateColumns: "repeat(2, 1fr)",
							}}
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
		</sections>
	);
};

export default TitleParagraphGridContent;
