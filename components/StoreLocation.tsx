import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
}

const StoreLocation: FunctionComponent<IProps> = ({title, paragraph}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 text-center text-darkGrey text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 text-center text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<section className="p-4 bg-white lg:px-0">
			<div className="container p-0 mx-auto">
				<motion.div variants={fadeInUp} className="flex flex-col py-28">
					<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{title}
					</h2>
					<div
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</motion.div>
			</div>
			<div>
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
