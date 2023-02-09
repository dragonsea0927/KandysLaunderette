import Image from "next/image";

const FeaturesBannerCardTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-left text-white text-medium text-white";
		} else {
			contentStyling = "block text-left text-white text-medium text-white";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full md:w-1/2 lg:w-1/4 p-3">
			<div className="flex flex-wrap items-center mb-2">
				<div className="w-auto p-3">
					<Image
						width="75px"
						height="75px"
						src={props.icon?.sourceUrl}
						alt={`${props.icon?.altText} Icon`}
						className="w-full h-[4px] object-contain"
					/>
				</div>
				<div className="flex-1 p-3">
					<div className="bg-darkPink h-px"></div>
				</div>
			</div>
			<div className="md:w-3/4">
				<h3 className="mb-4 text-xl text-white font-[600] leading-[2.15rem]">
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
