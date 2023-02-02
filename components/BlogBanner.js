/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";

const BlogBanner = (props) => {
	return (
		<section className="py-32 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap -m-8">
					<div className="w-full md:w-5/12 p-8">
						<div className="flex flex-col justify-between h-full">
							<div className="mb-8">
								<h2 className="mb-5 font-[600] text-3xl lg:text-5xl">
									Our Latest News and Articles
								</h2>
								<p className="text-darkGrey text-medium">
									Lorem ipsum dolor sit amet, consectetury adipiscing elit.
									Volutpat, tempor to after condimentum commodo
								</p>
							</div>
							<a
								className="inline-flex items-center text-pink hover:text-yellow leading-normal transition-all ease-in-out duration-[0.5s]"
								href="#"
							>
								<span className="mr-2 font-semibold">See all articles</span>
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
						</div>
					</div>
					<div className="w-full md:flex-1 p-8">
						<div className="flex flex-wrap -m-3">
							<div className="w-full md:w-1/2 p-3">
								<div className="max-w-sm mx-auto">
									<div className="mb-6 overflow-hidden rounded-lg">
										<img
											className="w-full h-[250px] object-cover transform hover:scale-105 transition ease-in-out duration-1000"
											src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-cottonbro-studio-4880411-min-scaled.jpg"
											alt=""
										/>
									</div>
									<p className="mb-4 max-w-max px-3 py-1.5 text-sm text-white font-semibold bg-blue uppercase rounded-lg">
										Productivity
									</p>
									<a
										className="mb-2 inline-block hover:text-pink hover:underline transition-all ease-in-out duration-[0.5s]"
										href="#"
									>
										<h3 className="text-xl font-[600] leading-normal">
											How startup company can help you to grow as a developer.
										</h3>
									</a>
									<p className="text-darkGrey text-medium">
										Lorem ipsum dolor sit amet, consectetury of a adipiscing
										elit. Volutpat to a main.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 p-3">
								<div className="max-w-sm mx-auto">
									<div className="mb-6 overflow-hidden rounded-lg">
										<img
											className="w-full h-[250px] object-cover transform hover:scale-105 transition ease-in-out duration-1000"
											src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-anastasia-shuraeva-8083846-scaled.jpg"
											alt=""
										/>
									</div>
									<p className="mb-4 max-w-max px-3 py-1.5 text-sm text-white font-semibold bg-blue uppercase rounded-lg">
										Productivity
									</p>
									<a
										className="mb-2 inline-block hover:text-pink hover:underline transition-all ease-in-out duration-[0.5s]"
										href="#"
									>
										<h3 className="text-xl font-[600] leading-normal">
											How startup company can help you to grow as a developer.
										</h3>
									</a>
									<p className="text-darkGrey text-medium">
										Lorem ipsum dolor sit amet, consectetury of a adipiscing
										elit. Volutpat to a main.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogBanner;
