/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeIn, stagger} from "../animations/animations";
import BlogCard from "./Cards/BlogCard";

const BlogBanner = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mb-11 text-medium text-darkGrey font-[400]";
		} else {
			contentStyling = "block mb-11 text-medium text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="py-32 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap -m-8">
					<div className="w-full md:w-5/12 p-8">
						<div className="flex flex-col justify-center h-full">
							<h2 className="mb-5 font-[600] text-xl sm:text-3xl lg:text-5xl">
								{props?.title}
							</h2>
							<motion.div
								variants={fadeIn}
								className={isParagraphContent(props?.paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(
									props?.paragraph
								)}
							/>
							<Link
								href={`${props?.buttonLink?.url}`}
								target={`${props?.buttonLink?.target}`}
							>
								<a className="mt-8 inline-flex items-center text-pink hover:text-yellow leading-normal transition-all ease-in-out duration-[0.5s]">
									<span className="mr-2 font-semibold">
										{props?.buttonLink?.title}
									</span>
									<svg
										width="18"
										height="18"
										viewBox="0 0 18 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
								</a>
							</Link>
						</div>
					</div>
					<div className="w-full md:flex-1 p-8">
						<motion.div variants={stagger} className="flex flex-row -m-3">
							{props?.latestTwoPosts.map((keys) => (
								<BlogCard
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
				</div>
			</div>
		</section>
	);
};

export default BlogBanner;
