/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../../animations/animations";

interface IProps {
	link: string;
	title: string;
	paragraph: string;
	categories: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const BlogCardTwo: FunctionComponent<IProps> = ({
	link,
	title,
	image,
	paragraph,
	categories,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden mb-5 mb-11 text-medium text-darkGrey font-[400]";
		} else {
			contentStyling = "block mb-11 text-medium text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		const sanitizedContent = DOMPurify.sanitize(paragraphContent);
		return {
			__html: `${sanitizedContent.substring(0, 200)}...`,
		};
	}

	return (
		<div className="w-full lg:w-1/3 p-9">
			<Link href={`${link}`} className="group">
				<div className="group flex flex-col mb-5 overflow-hidden rounded-xl">
					<Image
						width={500}
						height={350}
						src={`${image?.sourceUrl}`}
						alt={`${image?.altText} Image`}
						className="w-full h-[250px] rounded-lg object-cover transform hover:scale-105 transition ease-in-out duration-1000"
					/>
				</div>
				<div className="w-full flex flex-col justify-between gap-4">
					<h3 className="mb-4 font-medium text-xl text-black group-hover:underline group-hover:text-pink transition-all ease-in-out duration-[0.5s]">
						{title}
					</h3>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
					<h5 className="font-medium text-xs uppercase text-black tracking-px">
						{categories}
					</h5>
				</div>
			</Link>
		</div>
	);
};

export default BlogCardTwo;
