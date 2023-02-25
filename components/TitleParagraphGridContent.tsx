/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import TitleParagraphGridCard from "../components/Cards/TitleParagraphGridCard";
import styles from "../styles/components/TitleParagraphGridContent.module.scss";

interface IProps {
	title: string;
	paragraph: string;
	gridContent: [
		{
			id: string;
			title: string;
			paragraph: string;
			image: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const TitleParagraphGridContent: FunctionComponent<IProps> = ({
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
				"hidden w-full lg:w-[45rem] my-12 py-8 mx-auto text-center text-darkGrey text-medium font-[400]";
		} else {
			contentStyling =
				"block w-full lg:w-[45rem] my-12 py-8 mx-auto text-center text-darkGrey text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphGridContent}>
			<div className="container flex flex-col px-4 mx-auto">
				<motion.div variants={fadeInUp}>
					<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{title}
					</h2>
					<div
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</motion.div>
				<motion.div
					variants={stagger}
					className="grid items-start justify-center grid-cols-1 gap-4 mx-auto mb-8 py-22 lg:grid-cols-2"
				>
					{gridContent.map((keys) => (
						<TitleParagraphGridCard
							key={keys?.id}
							image={keys?.image}
							title={keys?.title}
							paragraph={keys?.paragraph}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default TitleParagraphGridContent;
