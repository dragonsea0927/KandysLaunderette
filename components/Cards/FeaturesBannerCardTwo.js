/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const FeaturesBannerCardTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden text-white text-medium text-center lg:text-left font-[400]";
		} else {
			contentStyling =
				"block text-white text-medium text-center lg:text-left font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full md:w-1/2 lg:w-1/4 py-8 px-0">
			<div className="flex flex-wrap items-center mb-2">
				<div className="mx-auto lg:mx-0 mb-6">
					<img
						src={props.icon?.sourceUrl}
						alt={`${props.icon?.altText} Icon`}
						className="w-[75px] h-[75px] object-contain object-center"
					/>
				</div>
				<div className="hidden lg:block lg:flex-1 p-3">
					<div className="bg-darkPink mx-4 h-[1px]"></div>
				</div>
			</div>
			<div className="md:w-3/4">
				<h3 className="mb-4 text-lg lg:text-xl text-white text-center lg:text-left font-[600]">
					{props.title}
				</h3>
				<div
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
			</div>
		</div>
	);
};

export default FeaturesBannerCardTwo;
