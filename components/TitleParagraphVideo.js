/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";

const TitleParagraphVideo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mb-10 text-darkGrey text-medium font-[400] text-center";
		} else {
			contentStyling =
				"block mb-10 text-darkGrey text-medium font-[400] text-center";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section>
			<div className="pt-6 pb-20 bg-white overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="relative bg-white overflow-hidden rounded-t-3xl">
						<div className="absolute w-full h-full bg-white border-t border-l border-r border-fadedYellow rounded-t-3xl"></div>
						<div className="relative px-8 pt-20">
							<div className="md:max-w-2xl text-center mx-auto">
								<span className="inline-block mb-3 text-medium text-pink font-[600] uppercase tracking-widest">
									{props?.subtitle}
								</span>
								<h2 className="my-12 text-2xl sm:text-3xl lg:text-6xl text-black text-center tracking-tight font-[700]">
									{props?.title}
								</h2>
								<div
									className={isParagraphContent(props?.paragraph)}
									dangerouslySetInnerHTML={createParagraphMarkup(
										props?.paragraph
									)}
								/>
								<div className="flex flex-wrap justify-center mb-20 -m-2">
									<div className="w-full md:w-auto p-2">
										<Link
											href={`${props?.buttonLink?.url}`}
											target={`${props?.buttonLink?.target}`}
										>
											<a className="block w-[fit-content] mx-auto px-8 py-3.5 text-base text-center text-white font-bold bg-pink hover:bg-fadedPinkThree focus:ring-4 focus:ring-blue rounded-full">
												{props?.buttonLink?.title}
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-20 px-8 max-w-max mx-auto">
								<video
									loop
									muted
									autoPlay
									controls=""
									height={650}
									width={1000}
									className="rounded-lg w-full h-[650px] rounded-lg object-cover object-center"
								>
									<source src={props?.video} />
								</video>
							</div>
							<div className="absolute left-0 top-0 w-full h-1/2 bg-white">
								<div className="h-full bg-white border-b border-l border-r border-fadedYellow rounded-b-3xl"></div>
							</div>
							<div className="absolute left-0 bottom-0 w-full h-1/2 bg-white"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphVideo;
