/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import fadeInUp from "../animations/animations";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const TitleParagraphImage: FunctionComponent<IProps> = ({
	title,
	image,
	subtitle,
	paragraph,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-center lg:text-left text-medium text-darkGrey";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-center lg:text-left text-medium text-darkGrey";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="relative py-20">
			<div className="container relative px-0 mx-auto">
				<div className="flex flex-wrap items-center">
					<div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
						<div className="flex flex-col w-full lg:max-w-lg">
							<span className="text-base text-center lg:text-left text-pink font-[600]">
								{subtitle}
							</span>
							<h2 className="mt-8 text-center lg:text-left tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
								{title}
							</h2>
							<motion.div
								variants={fadeInUp}
								className={isParagraphContent(paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
							/>
						</div>
					</div>
					<motion.div
						variants={fadeInUp}
						className="relative w-full px-4 lg:w-1/2"
					>
						<Image
							width={550}
							height={550}
							src={`${image?.sourceUrl}`}
							alt={`${image?.altText} Image`}
							className="rounded-lg object-cover object-center w-full h-[300px]"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphImage;
