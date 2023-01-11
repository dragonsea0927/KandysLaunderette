import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/HeroSection.module.scss";

const HeroSectionTwo = (props) => {
	/* Check if Subtitle content is null
	 And Displays content if it null */
	function isSubtitleContent(isSubtitleContent) {
		let contentStyling;
		if (isSubtitleContent === null) {
			contentStyling =
				"hidden mt-4 text-white text-center font-[500] tracking-[0.15rem] text-2xl  md:text-4xl";
		} else {
			contentStyling =
				"block mt-4 text-white text-center font-[500] tracking-[0.15rem] text-2xl md:text-4xl";
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
							rgba(149, 14, 59, 0.30),
							rgba(221, 69, 119, 0.30)
						),url(${props.backgroundImage})`,
			}}
		>
			<div className="container mx-auto p-0">
				<div className="flex flex-col justify-center items-center">
					<motion.div variants={fadeInUp} className="py-5 px-8">
						<h2 className="text-white text-center text-4xl font-[900] md:text-7xl">
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

export default HeroSectionTwo;
