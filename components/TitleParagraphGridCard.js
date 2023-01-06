/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/TitleParagraphGridContent.module.scss";

const TitleParagraphGridCard = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden p-4 mx-auto text-black font-[400] text-sm";
		} else {
			contentStyling = "block p-4 mx-auto text-black font-[400] text-sm";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}
	return (
		<>
			<div
				className="flex flex-row gap-4 justify-between items-center"
				style={{
					gap: "1.25rem",
					display: "flex",
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<motion.div variants={fadeIn} className={styles.imageDiv}>
					<img
						className="w-[354px] h-[354px] object-cover object-center"
						style={{
							width: "354px",
							height: "354px",
							objectFit: "cover",
							objectPosition: "center",
						}}
						objectFit="cover"
						src={`${props?.image}`}
						alt={props?.image?.altText}
						width={props?.mediaDetails?.width}
						height={props?.mediaDetails?.height}
					/>
				</motion.div>
				<motion.div variants={fadeInUp} className={styles.description}>
					<h2
						className="text-[1.05rem] text-center font-Bold"
						style={{
							fontWeight: "700",
							textAlign: "center",
							fontSize: "1.05rem",
						}}
					>
						{props?.title}
					</h2>
					<p
						style={{
							padding: "1rem",
							margin: "0 auto",
							fontSize: "0.8rem",
						}}
					>
						{props?.paragraph}
					</p>
					{/* <div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup()}
					/> */}
				</motion.div>
			</div>
		</>
	);
};

export default TitleParagraphGridCard;
