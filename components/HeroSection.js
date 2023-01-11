import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/HeroSection.module.scss";

const HeroSection = (props) => {
	/* Check if Subtitle content is null
	 And Displays content if it null */
	function isSubtitleContent(isSubtitleContent) {
		let contentStyling;
		if (isSubtitleContent === null) {
			contentStyling =
				"hidden mt-4 text-white text-center text-2xl md:text-3xl";
		} else {
			contentStyling = "block mt-4 text-white text-center text-2xl md:text-3xl";
		}
		return contentStyling;
	}

	function createSubtitleMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.subtitle}`),
		};
	}

	return (
		<section
			className={styles.heroSectionTwo}
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(149, 14, 59, 0.85),
							rgba(221, 69, 119, 0.50)
						),url(${props.backgroundImage})`,
			}}
		>
			<div className="container mx-auto p-0">
				<div className="flex flex-col justify-center items-center">
					<motion.div variants={fadeInUp} className="py-5 px-8">
						<h2 className="text-white text-center text-4xl md:text-6xl">
							{props?.title}
						</h2>
						<div
							className={isSubtitleContent(props?.subtitle)}
							dangerouslySetInnerHTML={createSubtitleMarkup()}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
