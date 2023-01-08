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
				"hidden mt-4 py-8 text-black text-center font-[500] text-base";
		} else {
			contentStyling =
				"block mt-4 py-8 text-black text-center font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className={styles.titleGridContent}>
			<div className="container mx-auto p-0">
				<div className="flex flex-col px-0 md:px-8">
					<motion.div variants={fadeInUp} className="py-28">
						<h2 className="text-black text-center text-4xl md:text-5xl">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</motion.div>
					<div className="flex justify-end items-center p-4">
						<Link
							href="/services"
							target=""
							className="border-none no-underline bg-transparent text-black text-2xl"
						>
							View All Services
						</Link>
					</div>
					<motion.div
						variants={stagger}
						className="mx-auto mb-8 grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-start"
					>
						{/* Array Loop */}
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

export default TitleGridContent;
