/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

const BlogsCardThree = (props) => {
	return (
		<motion.div
			variants={fadeIn}
			className="relative flex-shrink-0 flex items-end w-72 sm:w-100 lg:w-[650px] h-[400px] p-8 mr-8"
		>
			<div>
				<img
					src={`${props?.image?.sourceUrl}`}
					alt={`${props?.image?.altText} Image`}
					className="absolute top-0 left-0 w-full h-full object-cover block rounded"
				/>
			</div>
			<div className="relative">
				<motion.h3
					variants={fadeIn}
					className="max-w-lg text-lg lg:text-xl text-white mb-6"
				>
					{props?.title}
				</motion.h3>
				<Link href={`${props?.link}`} target={``}>
					<a className="group text-white inline-flex items-center justify-center font-[400]">
						<motion.span
							variants={fadeIn}
							className="mr-4 text-white transition-all ease-in-out duration-[0.5s]"
						>
							<a className="text-white text-base py-2 px-4">Check project</a>
						</motion.span>
						<div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink group-hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]">
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</div>
					</a>
				</Link>
			</div>
		</motion.div>
	);
};

export default BlogsCardThree;
