/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";

interface IProps {
	title: string;
	paragraph: string;
	icon: {
		altText: string;
		sourceUrl: string;
	};
}

const FeaturesBannerCardTwo: FunctionComponent<IProps> = ({
	title,
	icon,
	paragraph,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden text-white text-medium text-center lg:text-left font-[400]";
		} else {
			contentStyling =
				"block text-white text-medium text-center lg:text-left font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full sm:w-1/2 lg:w-1/4 py-8 px-0">
			<div className="flex flex-wrap items-center mb-2">
				<div className="mx-auto lg:mx-0 mb-6">
					<Image
						width={550}
						height={550}
						src={icon?.sourceUrl}
						alt={`${icon?.altText} Icon`}
						className="w-[75px] h-[75px] object-contain object-center"
					/>
				</div>
				<div className="hidden lg:block lg:flex-1 p-3">
					<div className="bg-darkPink mx-4 h-[1px]"></div>
				</div>
			</div>
			<div className="mx-auto lg:mx-0 md:w-3/4">
				<h3 className="mb-4 text-lg lg:text-xl text-white text-center lg:text-left font-[600]">
					{title}
				</h3>
				<div
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</div>
		</div>
	);
};

export default FeaturesBannerCardTwo;
