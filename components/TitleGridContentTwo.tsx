import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import SingleCard from "../components/Cards/SingleCard";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleGridContent.module.scss";

interface IProps {
	title: string;
	paragraph: string;
	gridContent: [
		{
			id: string;
			title: string;
			image: {
				altText: string;
				sourceUrl: string;
			};
			link: {
				url: string;
				title: string;
				target: string;
			};
		}
	];
}
const TitleGridContentTwo: FunctionComponent<IProps> = ({
	title,
	paragraph,
	gridContent,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden  w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium leading-loose";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium ";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleGridContentTwo}>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div variants={fadeInUp} className="py-28">
						<h2 className="text-white text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
						<div
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</motion.div>
					<motion.div
						variants={stagger}
						className="grid items-start justify-center grid-cols-2 gap-2 px-4 mb-8 lg:px-0 lg:grid-cols-4 lg:gap-4"
					>
						{gridContent.map((keys) => (
							<SingleCard
								key={keys?.id}
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
