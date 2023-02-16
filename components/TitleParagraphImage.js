/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import fadeInUp from "../animations/animations";

const TitleParagraphImage = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-center lg:text-left text-medium text-darkGrey";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-center lg:text-left text-medium text-darkGrey";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="relative py-20">
			<div className="relative container mx-auto px-0">
				<div className="flex flex-wrap items-center">
					<div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
						<div className="w-full lg:max-w-lg flex flex-col">
							<span className="text-base text-center lg:text-left text-pink font-[600]">
								{props?.subtitle}
							</span>
							<h2 className="mt-8 text-center lg:text-left tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
								{props?.title}
							</h2>
							<motion.div
								variants={fadeInUp}
								className={isParagraphContent(props?.paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(
									props?.paragraph
								)}
							/>
						</div>
					</div>
					<motion.div
						variants={fadeInUp}
						className="relative w-full lg:w-1/2 px-4"
					>
						<img
							className="rounded-lg object-cover w-full h-[300px]"
							src={`${props?.image?.sourceUrl}`}
							alt={`${props?.image?.altText} Image`}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphImage;
