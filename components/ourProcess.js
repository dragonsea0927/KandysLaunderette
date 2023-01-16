import Image from "next/image";
import {motion} from "framer-motion";
import styles from "../styles/components/OurProcess.module.scss";
import {fadeIn, fadeInUp, fadeInTwo, stagger} from "../animations/animations";
import SingleCardTwo from "./SingleCardTwo";

const ourProcess = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full xl:w-[45rem] mt-4 mx-auto text-center text-base text-black font-[300]";
		} else {
			contentStyling =
				"block w-full xl:w-[45rem] mt-4 mx-auto text-center text-base text-black font-[300]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<section className={styles.ourProcess}>
			<div className="container mx-auto p-0">
				<div className="py-20">
					<motion.div variants={fadeInUp}>
						<h2 className="text-black text-center text-4xl py-6 md:text-5xl">
							{props?.title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
					<div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
						{props.gridContent.map((keys) => (
							<SingleCardTwo
								key={keys.id}
								title={keys?.title}
								paragraph={keys?.paragraph}
								image={keys?.image?.sourceUrl}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ourProcess;
