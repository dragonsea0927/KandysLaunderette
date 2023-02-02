import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import SingleCard from "/components/SingleCard";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TitleGridContent.module.scss";

const TitleGridContent = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden  w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium font-[400]";
		} else {
			contentStyling =
				"block  w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-4 text-white text-center text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
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
						),url(${props.backgroundImage})`,
			}}
		>
			<div className="container mx-auto flex flex-col px-4">
				<motion.div variants={fadeInUp} className="py-28">
					<h2 className="text-white text-center font-[600] text-3xl lg:text-5xl">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</motion.div>
				<div className="flex justify-end items-center p-4">
					<Link
						href=" /Services"
						target=""
						className="border-none no-underline bg-transparent text-white text-2xl hover:text-yellow transition-all ease-in-out duration-[0.5s]"
					>
						View All Services
					</Link>
				</div>
				<motion.div
					variants={stagger}
					className="mx-auto mb-8 px-0 grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 justify-center items-start"
				>
					{/* Array Loop */}
					{props?.gridContent.map((keys) => (
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
		</section>
	);
};

export default TitleGridContent;
