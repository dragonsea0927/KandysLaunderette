import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {FunctionComponent} from "react";
import BlogCardTwo from "./Cards/BlogCardTwo";
import {fadeIn, stagger} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	latestThreePosts: [
		{
			node: {
				id: string;
				link: string;
				title: string;
				content: string;
				categories: {
					nodes: {
						name: string;
					};
				};
				featuredImage: {
					node: {
						altText: string;
						sourceUrl: string;
					};
				};
			};
		}
	];
}

const Blogs: FunctionComponent<IProps> = ({
	title,
	paragraph,
	latestThreePosts,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="pt-20 pb-32 overflow-hidden bg-white">
			<div className="container px-4 mx-auto">
				<div className="mb-20 text-center">
					<h2 className="text-center mb-5 tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{title}
					</h2>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</div>
				<motion.div
					variants={stagger}
					className="flex flex-col lg:flex-row -m-9"
				>
					{latestThreePosts.map((keys) => (
						<BlogCardTwo
							key={keys?.node?.id}
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
