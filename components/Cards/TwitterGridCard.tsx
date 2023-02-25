/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn} from "../../animations/animations";

interface IProps {
	userTag: string;
	userName: string;
	hashTags: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const TwitterGridCard: FunctionComponent<IProps> = ({
	image,
	paragraph,
	userTag,
	userName,
	hashTags,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden text-base text-darkGrey font-[400]";
		} else {
			contentStyling = "block text-base text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="overflow-hidden bg-white w-full h-full rounded-lg">
			<div className="px-5 py-6">
				<div className="flex items-center justify-between">
					<Image
						width={550}
						height={550}
						src={`${image?.sourceUrl}`}
						alt={`${image?.altText} Profile Image`}
						className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
					/>
					<div className="min-w-0 ml-3 mr-auto">
						<motion.h2
							variants={fadeIn}
							className="text-base font-[600] text-black truncate"
						>
							{userName}
						</motion.h2>
						<motion.h3 variants={fadeIn} className="text-sm text-grey truncate">
							{userTag}
						</motion.h3>
					</div>
					<Link
						href={`https://twitter.com/kandyslaunderette`}
						className="inline-block text-[#5ac3ff]"
					>
						<svg
							className="w-6 h-6"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
						</svg>
					</Link>
				</div>
				<blockquote className="mt-5">
					<motion.div
						variants={fadeInUp}
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
					<p className="block font-[400] text-[#5ac3ff]">{hashTags}</p>
				</blockquote>
			</div>
		</div>
	);
};

export default TwitterGridCard;
