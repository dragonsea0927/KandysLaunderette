/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/FourGridContent.module.scss";
import FourGridContentCard from "./FourGridContentCard";

const FourGridContent = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mb-10 text-base lg:text-medium text-center font-[400] text-black";
		} else {
			contentStyling =
				"block mb-10 text-base lg:text-medium text-center font-[400] text-black";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<section className={styles.fourGridContent}>
			<div className="py-16 bg-fadedPinkThree overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col justify-center items-center">
						<span className="inline-block mb-3 text-tiny text-white text-center mx-auto font-[600] uppercase tracking-widest">
							{props?.subtitle}
						</span>
						<h2 className="my-12 text-5xl lg:text-6xl text-white text-center tracking-tight font-[700] leading-[3.5rem]">
							{props?.title}
						</h2>
					</div>
					<div className="flex flex-col sm:grid sm:grid-cols-2 justify-between items-center gap-4 m-4 p-4 lg:py-8 px-28">
						{props?.gridContent.map((keys) => (
							<FourGridContentCard
								Key={keys?.id}
								image={keys?.image}
								title={keys?.title}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FourGridContent;
