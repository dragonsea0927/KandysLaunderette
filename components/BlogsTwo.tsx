import Link from "next/link";
import {FunctionComponent} from "react";
import BlogsCardThree from "./Cards/BlogsCardThree";

interface IProps {
	title: string;
	subtitle: string;
	latestThreePosts: [
		{
			node: {
				id: string;
				link: string;
				title: string;
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

const BlogsTwo: FunctionComponent<IProps> = ({
	title,
	subtitle,
	latestThreePosts,
}) => {
	return (
		<section className="px-4 py-20 overflow-hidden lg:px-0">
			<div className="container px-0 mx-auto">
				<div className="flex flex-wrap items-center mb-16 -mx-4">
					<div className="flex flex-col justify-center w-full px-4 mb-8 lg:w-2/3 xl:mb-0">
						<span className="text-sm font-semibold text-center uppercase text-pink lg:text-left">
							{subtitle}
						</span>
						<h2 className="max-w-2xl text-black text-center lg:text-left mt-6 tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
					</div>
					<div className="flex items-center justify-center w-full px-4 mx-auto ml-auto lg:w-auto lg:text-right ">
						<Link
							href={`/Blogs`}
							className="inline-block w-[fit-content] lg:w-auto py-4 px-6 text-center font-[400] text-base text-darkGrey hover:text-pink border border-darkGrey hover:border-pink rounded-lg  transition-all ease-in-out duration-[0.5s]"
						>
							Check all posts
						</Link>
					</div>
				</div>
				<div className="flex">
					{latestThreePosts.map((keys) => (
						<BlogsCardThree
							key={keys?.node?.id}
							link={keys?.node?.link}
							title={keys?.node?.title}
							image={keys?.node?.featuredImage?.node}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogsTwo;
