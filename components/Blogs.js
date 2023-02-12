/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {fadeIn, stagger} from "../animations/animations";
import BlogCardTwo from "./Cards/BlogCardTwo";

const Blogs = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-medium text-darkGrey text-center font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-medium text-darkGrey text-center font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="pt-20 pb-32 overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="text-center mb-20">
					<h2 className="text-center mb-5 leading-[2.75rem] font-[800] text-2xl sm:text-3xl lg:text-5xl">
						{props?.title}
					</h2>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</div>
				<motion.div variants={stagger} className="flex flex-wrap -m-9">
					{props?.latestThreePosts.map((keys) => (
						<BlogCardTwo
							Key={props?.id}
							link={keys?.node?.link}
							title={keys?.node?.title}
							paragraph={keys?.node?.content}
							image={keys?.node?.featuredImage?.node}
							categories={keys?.node?.categories?.nodes[0]?.name}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Blogs;
