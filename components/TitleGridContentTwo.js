import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import SingleCardTwo from "/components/SingleCardTwo";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleGridContentTwo.module.scss";

const TitleGridContentTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-4 text-white font-[500] text-base";
		} else {
			contentStyling = "block mt-4 text-white font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className={styles.TitleGridContentTwo}>
			<div className="container mx-auto">
				<div className={styles.content}>
					<motion.div variants={fadeInUp} className={styles.title}>
						<h2 className="text-white text-xl">{props?.title}</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</motion.div>
					<motion.div
						variants={stagger}
						className="gap-4 grid grid-cols-4 mx-auto mb-8 justify-evenly"
						style={{
							gap: "1.25rem",
							display: "grid",
							margin: "0 auto",
							marginBottom: "2rem",
							justifyContent: "space-evenly",
							gridTemplateColumns: "repeat(4, 1fr)",
						}}
					>
						{/* Array Loop */}
						{props.gridContent.map((keys) => (
							<SingleCardTwo
								Key={keys?.id}
								link={keys?.link}
								title={keys?.title}
								image={keys?.image?.sourceUrl}
								mediaDetails={keys?.image?.mediaDetails}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleGridContentTwo;
