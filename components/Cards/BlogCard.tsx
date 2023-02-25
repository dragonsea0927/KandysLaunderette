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

const BlogCard: FunctionComponent<IProps> = ({
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
			__html: `${sanitizedContent.substring(0, 150)}...`,
		};
	}

	return (
		<motion.div variants={fadeIn} className="w-full lg:w-1/2">
			<div className="max-w-sm mx-auto">
				<div className="mb-6 overflow-hidden rounded-lg">
					<Image
						width={550}
						height={550}
						src={`${image?.sourceUrl}`}
						alt={`${image?.altText} image`}
						className="w-full h-[350px] rounded-lg object-cover transform hover:scale-105 transition ease-in-out duration-1000"
					/>
				</div>
				<h4 className="mb-4 max-w-max px-3 py-1.5 text-sm text-white font-[600] bg-blue uppercase rounded-lg">
					{categories}
				</h4>
				<Link href={`${link}`}>
					<h2 className="text-xl font-[600]  mb-2 hover:text-pink hover:underline transition-all ease-in-out duration-[0.5s]">
						{title}
					</h2>
				</Link>
				<motion.div
					variants={fadeIn}
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</div>
		</motion.div>
	);
};

export default BlogCard;
