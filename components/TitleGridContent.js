import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import SingleCard from "/components/SingleCard";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleGridContent.module.scss";

const TitleGridContent = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-4 text-black font-[500] text-base";
		} else {
			contentStyling = "block mt-4 text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className={styles.titleGridContent}>
			<div className="container mx-auto">
				<div className={styles.content}>
					<motion.div variants={fadeInUp} className={styles.title}>
						<h2 className="text-black text-xl">{props?.title}</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</motion.div>
					<div
						className="flex p-4 justify-right text-base"
						style={{
							display: "flex",
							padding: "1rem",
							justifyContent: "right",
						}}
					>
						<button
							className="border-none text-decoration-none py-2 px-4 bg-transparent"
							style={{
								border: "none",
								textDecoration: "none",
								padding: "0.5rem 1rem",
								background: "transparent",
							}}
						>
							<Link href="/" target="" className="text-black text-base">
								View All Services
							</Link>
						</button>
					</div>
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
							<SingleCard
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

export default TitleGridContent;
