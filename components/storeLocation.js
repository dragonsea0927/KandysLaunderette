import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/StoreLocation.module.scss";

const StoreLocation = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:w-[45rem] py-8 mx-auto text-black text-center font-[400] text-base";
		} else {
			contentStyling =
				"block w-full lg:w-[45rem] py-8 mx-auto text-black text-center font-[400] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<section className={styles.storeLocation}>
			<div className="container mx-auto p-0">
				<motion.div variants={fadeInUp} className="flex flex-col py-28">
					<h2 className="text-black text-center font-[600] text-3xl lg:text-5xl">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</motion.div>
			</div>
			<div className={styles.map}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9907.997021073143!2d-3.9420236!3d51.6232228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x919fb6f2312ca92b!2sKandys%20Launderette%20%26%20Dry%20Cleaner!5e0!3m2!1sen!2suk!4v1637884674092!5m2!1sen!2suk"
					width="100%"
					height="650"
					loading="lazy"
					allowFullScreen={true}
				/>
			</div>
		</section>
	);
};

export default StoreLocation;
