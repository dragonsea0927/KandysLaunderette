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
				"hidden mt-4 max-w-[65rem] mx-auto mb-5 md:mb-10 font-[400] text-medium sm:text-lg text-center text-white tracking-[0.10rem]";
		} else {
			contentStyling =
				"block mt-4 max-w-[65rem] mx-auto mb-5 md:mb-10 font-[400] text-medium sm:text-lg text-center text-white tracking-[0.10rem]";
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
							rgba(0, 0, 0, 0.30),
							rgba(0, 0, 0, 0.30)
						),url(${props.backgroundImage})`,
			}}
		>
			<div className="container mx-auto p-0">
				<div className="flex flex-col justify-center items-center">
					<motion.div variants={fadeInUp} className="py-5 px-8">
						<h1 className="text-white text-center text-4xl font-[600] sm:text-6xl">
							{props?.title}
						</h1>
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
