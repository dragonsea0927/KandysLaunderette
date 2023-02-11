/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn} from "../animations/animations";
import TwitterGridCard from "./Cards/TwitterGridCard";

const TwitterTestimonialGrid = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden max-w-lg mx-auto mt-4 text-medium leading-relaxed text-darkGrey font-[400]";
		} else {
			contentStyling =
				"block max-w-lg mx-auto mt-4 text-medium leading-relaxed text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="py-10 bg-lightGrey sm:py-16 lg:py-24">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="font-[600] text-center text-xl sm:text-3xl lg:text-5xl py-8 leading-14">
						{props?.title}
					</h2>
					<motion.div
						variants={fadeInUp}
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</div>

				<div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
					{props.gridContent.map((keys) => (
						<TwitterGridCard
							Key={keys?.singleCard?.id}
							image={keys?.singleCard?.image}
							userTag={keys?.singleCard?.userTag}
							userName={keys?.singleCard?.userName}
							hashTags={keys?.singleCard?.hashTags}
							paragraph={keys?.singleCard?.paragraph}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TwitterTestimonialGrid;
