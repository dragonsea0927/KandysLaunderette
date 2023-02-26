import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeIn} from "../../animations/animations";

interface IProps {
	link: string;
	title: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const BlogsCardThree: FunctionComponent<IProps> = ({link, title, image}) => {
	return (
		<motion.div
			variants={fadeIn}
			className="relative flex-shrink-0 flex items-end w-full lg:w-[650px] h-[400px] p-4 lg:p-8 mr-0 lg:mr-8"
		>
			<div>
				<Image
					width={550}
					height={550}
					src={`${image?.sourceUrl}`}
					alt={`${image?.altText} Image`}
					className="absolute top-0 left-0 block object-cover w-full h-full rounded-lg"
				/>
			</div>
			<div className="relative">
				<motion.h3
					variants={fadeIn}
					className="max-w-lg mb-6 text-lg text-white lg:text-xl"
				>
					{title}
				</motion.h3>
				<Link
					href={`${link}`}
					target={``}
					className="group text-white inline-flex items-center justify-center font-[400]"
				>
					<motion.span
						variants={fadeIn}
						className="mr-4 text-white transition-all ease-in-out duration-[0.5s]"
					>
						<span className="px-4 py-2 text-base text-white">
							Check project
						</span>
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
				</Link>
			</div>
		</motion.div>
	);
};

export default BlogsCardThree;
