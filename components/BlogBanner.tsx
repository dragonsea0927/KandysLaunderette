import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, stagger} from "../animations/animations";
import BlogCard from "./Cards/BlogCard";

interface IProps {
	title: string;
	paragraph: string;
	buttonLink: {
		url: string;
		target: string;
		title: string;
	};
	latestTwoPosts: [
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

const BlogBanner: FunctionComponent<IProps> = ({
	title,
	paragraph,
	buttonLink,
	latestTwoPosts,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mb-11 text-center lg:text-left text-medium text-darkGrey font-[400]";
		} else {
			contentStyling =
				"block mb-11 text-center lg:text-left text-medium text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink: string) {
		let contentStyling: string;
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden`;
		} else {
			contentStyling = `block`;
		}
		return contentStyling;
	}

	return (
		<section className="py-12 lg:py-32 px-4 bg-white overflow-hidden">
			<div className="container mx-auto px-0">
				<div className="flex flex-wrap">
					<div className="w-full md:w-5/12 py-8">
						<div className="flex flex-col justify-center h-full">
							<h2 className="mb-5 text-center lg:text-left tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
								{title}
							</h2>
							<motion.div
								variants={fadeIn}
								className={isParagraphContent(paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
							/>
							<motion.div
								variants={fadeIn}
								className={isButtonLink(buttonLink?.url)}
							>
								<Link
									href={`${buttonLink?.url}`}
									target={`${buttonLink?.target}`}
									className="mt-8 inline-flex items-center text-pink hover:text-yellow  transition-all ease-in-out duration-[0.5s]"
								>
									<span className="mr-2 font-[600]">{buttonLink?.title}</span>
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
								</Link>
							</motion.div>
						</div>
					</div>
					<div className="w-full lg:flex-1 py-8 px-0 lg:p-8">
						<motion.div
							variants={stagger}
							className="flex flex-col lg:flex-row justify-center items-start gap-4"
						>
							{latestTwoPosts.map((keys) => (
								<BlogCard
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
				</div>
			</div>
		</section>
	);
};

export default BlogBanner;
