/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";

interface IProps {
	title: string;
	titleTwo: number;
	titleThree: number;
	paragraph: string;
	paragraphTwo: string;
	paragraphThree: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const ImageContent: FunctionComponent<IProps> = ({
	title,
	image,
	titleTwo,
	titleThree,
	paragraph,
	paragraphTwo,
	paragraphThree,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden md:max-w-xl py-8 px-0 text-darkGrey text-medium";
		} else {
			contentStyling = "block md:max-w-xl py-8 px-0 text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="px-4 py-20 overflow-hidden bg-white lg:px-0">
			<div className="container px-0 mx-auto">
				<div className="flex flex-col-reverse items-center justify-center lg:flex-row">
					<div className="w-full p-0 lg:w-1/2 lg:p-8">
						<motion.div variants={fadeIn} className="overflow-hidden">
							<Image
								width={550}
								height={550}
								src={`${image?.sourceUrl}`}
								alt={`${image?.altText} Image`}
								className="w-full h-[750px] object-cover rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
							/>
						</motion.div>
					</div>
					<div className="w-full p-0 lg:w-1/2 lg:p-8">
						<div className="md:max-w-2xl">
							<motion.div variants={stagger} className="flex flex-col">
								<motion.div variants={fadeInUp} className="flex flex-col">
									<div className="flex flex-row gap-4 mt-8">
										<div className="w-auto">
											<svg
												width="28"
												height="28"
												viewBox="0 0 28 28"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3.5 11.6666H24.5M8.16667 17.4999H9.33333M14 17.4999H15.1667M7 22.1666H21C22.933 22.1666 24.5 20.5996 24.5 18.6666V9.33325C24.5 7.40026 22.933 5.83325 21 5.83325H7C5.067 5.83325 3.5 7.40026 3.5 9.33325V18.6666C3.5 20.5996 5.067 22.1666 7 22.1666Z"
													stroke="#ff8fb4"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-[600]">{title}</h3>
										</div>
									</div>
									<div className="w-full">
										<div className="pb-8 border-b">
											<div
												className={isParagraphContent(paragraph)}
												dangerouslySetInnerHTML={createParagraphMarkup(
													paragraph
												)}
											/>
										</div>
									</div>
								</motion.div>
								<motion.div variants={fadeInUp} className="flex flex-col">
									<div className="flex flex-row gap-4 mt-8">
										<div className="w-auto">
											<svg
												width="28"
												height="28"
												viewBox="0 0 28 28"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3.5 11.6666H24.5M8.16667 17.4999H9.33333M14 17.4999H15.1667M7 22.1666H21C22.933 22.1666 24.5 20.5996 24.5 18.6666V9.33325C24.5 7.40026 22.933 5.83325 21 5.83325H7C5.067 5.83325 3.5 7.40026 3.5 9.33325V18.6666C3.5 20.5996 5.067 22.1666 7 22.1666Z"
													stroke="#ff8fb4"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-[600]">{titleTwo}</h3>
										</div>
									</div>
									<div className="w-full">
										<div className="pb-8 border-b">
											<div
												className={isParagraphContent(paragraphTwo)}
												dangerouslySetInnerHTML={createParagraphMarkup(
													paragraphTwo
												)}
											/>
										</div>
									</div>
								</motion.div>
								<motion.div variants={fadeInUp} className="flex flex-col">
									<div className="flex flex-row gap-4 mt-8">
										<div className="w-auto">
											<svg
												width="28"
												height="28"
												viewBox="0 0 28 28"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M3.5 11.6666H24.5M8.16667 17.4999H9.33333M14 17.4999H15.1667M7 22.1666H21C22.933 22.1666 24.5 20.5996 24.5 18.6666V9.33325C24.5 7.40026 22.933 5.83325 21 5.83325H7C5.067 5.83325 3.5 7.40026 3.5 9.33325V18.6666C3.5 20.5996 5.067 22.1666 7 22.1666Z"
													stroke="#ff8fb4"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>
											</svg>
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-[600]">{titleThree}</h3>
										</div>
									</div>
									<div className="w-full">
										<div
											className={isParagraphContent(paragraphThree)}
											dangerouslySetInnerHTML={createParagraphMarkup(
												paragraphThree
											)}
										/>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageContent;
