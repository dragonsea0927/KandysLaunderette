import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp} from "../animations/animations";
import TwitterGridCard from "./Cards/TwitterGridCard";

interface IProps {
	title: string;
	paragraph: string;
	gridContent: [
		{
			singleCard: {
				id: string;
				userTag: string;
				userName: string;
				hashTags: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
				};
			};
		}
	];
}

const TwitterTestimonialGrid: FunctionComponent<IProps> = ({
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
				"hidden max-w-lg mx-auto mt-4 text-medium leading-relaxed text-darkGrey font-[400]";
		} else {
			contentStyling =
				"block max-w-lg mx-auto mt-4 text-medium leading-relaxed text-darkGrey font-[400]";
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
			id="twitterTestimonial"
			className="py-10 bg-lightGrey sm:py-16 lg:py-24"
		>
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center">
					<h2 className="font-[600] text-center text-2xl sm:text-3xl lg:text-5xl py-8  ">
						{title}
					</h2>
					<motion.div
						variants={fadeInUp}
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</div>

				<div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
					{gridContent.map((keys) => (
						<TwitterGridCard
							key={keys?.singleCard?.id}
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
