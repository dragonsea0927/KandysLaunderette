import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import SingleCard from "../components/Cards/SingleCard";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleGridContent.module.scss";

const TitleGridContentTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden  w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium leading-loose";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium ";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleGridContentTwo}>
			<div className="container mx-auto p-0">
				<div className="flex flex-col px-4">
					<motion.div variants={fadeInUp} className="py-28">
						<h2 className="text-white text-center leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
					<motion.div
						variants={stagger}
						className="mx-auto mb-8 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 px-0 gap-4 justify-center items-start"
					>
						{props.gridContent.map((keys) => (
							<SingleCard
								Key={keys?.id}
								link={keys?.link}
								image={keys?.image}
								title={keys?.title}
								buttonLink={keys?.link}
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleGridContentTwo;
