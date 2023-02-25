import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const HeroContentSection: FunctionComponent<IProps> = ({
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
				"hidden w-full lg:max-w-[75rem] text-left text-black font-[500] text-base";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-left text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="pt-6 pb-20 mt-24 overflow-hidden bg-white">
			<div className="container px-4 mx-auto">
				<div className="relative overflow-hidden bg-white rounded-t-3xl">
					<div className="absolute w-full h-full bg-white border-t border-l border-r border-grey rounded-t-3xl"></div>
					<div className="relative px-8 pt-20">
						<div className="mx-auto text-center md:max-w-2xl">
							<span className="inline-block mb-3 text-medium text-pink font-[600] uppercase tracking-widest">
								{subtitle}
							</span>
							<h1 className="my-12 text-5xl lg:text-6xl text-black text-center text-black tracking-tight font-[700] leading-[3.5rem]">
								{title}
							</h1>
							<div
								className={isParagraphContent(paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
							/>
							<div className="flex flex-wrap justify-center mb-20 -m-2">
								<div className="w-full p-2 md:w-auto">
									<Link
										href={`/`}
										className="block w-[fit-content] mx-auto px-8 py-3.5 text-base text-center text-white font-[600] bg-pink hover:bg-fadedPinkThree focus:ring-4 focus:ring-blue rounded-full"
									>
										Get Started
									</Link>
								</div>
							</div>
						</div>
					</div>
					<motion.div variants={fadeIn} className="relative">
						<div className="relative z-20 px-8 mx-auto max-w-max">
							<Image
								width={550}
								height={550}
								src={`${image?.sourceUrl}`}
								alt={`${image?.altText} image`}
								className="w-full h-[650px] rounded-lg object-cover object-center"
							/>
							<Link
								href={` https://mydummysite.co.uk/ToddLearning/Services`}
								target={``}
								className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-base text-center text-white font-[600] cursor-pointer bg-pink hover:bg-fadedPink focus:ring-4 focus:ring-fadedPink rounded-full"
							>
								Watch Video
							</Link>
						</div>
						<div className="absolute top-0 left-0 w-full bg-white h-1/2">
							<div className="h-full bg-white border-b border-l border-r border-grey rounded-b-3xl"></div>
						</div>
						<div className="absolute bottom-0 left-0 w-full bg-white h-1/2"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroContentSection;
