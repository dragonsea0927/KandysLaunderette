import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

const BlogCard = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mb-5 mb-11 text-medium text-darkGrey font-[400]";
		} else {
			contentStyling = "block mb-11 text-medium text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
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
						width={500}
						height={350}
						objectFit="cover"
						objectPosition="center"
						src={`${props?.image?.sourceUrl}`}
						alt={`${props?.image?.altText} Image`}
						className="w-full h-[250px] rounded-lg object-cover transform hover:scale-105 transition ease-in-out duration-1000"
					/>
				</div>
				<h4 className="mb-4 max-w-max px-3 py-1.5 text-sm text-white font-[600] bg-blue uppercase rounded-lg">
					{props?.categories}
				</h4>
				<Link href={`${props?.link}`}>
					<a>
						<h2 className="text-xl font-[600]  mb-2 hover:text-pink hover:underline transition-all ease-in-out duration-[0.5s]">
							{props?.title}
						</h2>
					</a>
				</Link>
				<motion.div
					variants={fadeIn}
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
			</div>
		</motion.div>
	);
};

export default BlogCard;
