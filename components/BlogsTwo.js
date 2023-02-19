/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import BlogsCardThree from "./Cards/BlogsCardThree";

const BlogsTwo = (props) => {
	return (
		<section className="py-20 px-4 lg:px-0 overflow-hidden">
			<div className="container mx-auto px-0">
				<div className="flex flex-wrap items-center -mx-4 mb-16">
					<div className="w-full xl:w-2/3 px-4 mb-8 xl:mb-0 flex flex-col justify-center">
						<span className="text-sm font-semibold uppercase text-pink text-center lg:text-left">
							Operational Insights
						</span>
						<h2 className="max-w-2xl text-black text-center lg:text-left mt-6 tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							Our Latest News and Articles
						</h2>
					</div>
					<div className="w-full xl:w-auto ml-auto px-4 xl:text-right">
						<Link href={`/Blogs`} target={``}>
							<a className="inline-block w-full sm:w-auto py-4 px-6 text-center font-[400] text-base text-darkGrey hover:text-pink border border-darkGrey hover:border-pink rounded-lg  transition-all ease-in-out duration-[0.5s]">
								Check all posts
							</a>
						</Link>
					</div>
				</div>
				<div className="flex">
					{props?.latestThreePosts.map((keys) => (
						<BlogsCardThree
							Key={props?.id}
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
