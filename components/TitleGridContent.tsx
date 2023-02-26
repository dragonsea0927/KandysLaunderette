import Link from "next/link";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import SingleCard from "../components/Cards/SingleCard";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleGridContent.module.scss";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: {
		sourceUrl: string;
	};
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

const TitleGridContent: FunctionComponent<IProps> = ({
	title,
	paragraph,
	gridContent,
	backgroundImage,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden  w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium font-[400]";
		} else {
			contentStyling =
				"block  w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section
			className={styles.titleGridContent}
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(149, 14, 59, 0.85),
							rgba(221, 69, 119, 0.50)
						),url("${backgroundImage}")`,
			}}
		>
			<div className="container flex flex-col px-0 mx-auto">
				<motion.div variants={fadeInUp} className="py-28">
					<h2 className="text-white text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{title}
					</h2>
					<div
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</motion.div>
				<div className="flex items-center justify-end p-4">
					<Link
						href=" /LaundryAndDryCleaning/IndividualService"
						target=""
						className="border-none no-underline bg-transparent text-white text-medium hover:text-yellow transition-all ease-in-out duration-[0.5s]"
					>
						View All Services
					</Link>
				</div>
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
		</section>
	);
};

export default TitleGridContent;
