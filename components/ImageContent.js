/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/CTA.module.scss";

const ImageContent = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden md:max-w-xl py-8 px-0 text-darkGrey text-medium";
		} else {
			contentStyling = "block md:max-w-xl py-8 px-0 text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="py-20 bg-white overflow-hidden">
			<div className="container mx-auto px-0">
				<div className="flex flex-col-reverse lg:flex-row justify-center items-center">
					<div className="w-full lg:w-1/2 p-0 lg:p-8">
						<div className="overflow-hidden">
							<Image
								width={`750px`}
								height={`750px`}
								objectFit="cover"
								objectPosition="center"
								src={`${props?.Image?.sourceUrl}`}
								alt={`${props?.Image?.altText} Image`}
								className="w-full h-[750px] object-cover rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
							/>
						</div>
					</div>
					<div className="w-full lg:w-1/2 p-0 lg:p-8">
						<div className="md:max-w-2xl">
							<div className="flex flex-col">
								<div className="flex flex-col">
									<div className="flex flex-row mt-8 gap-4">
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
											<h3 className="text-lg font-[600]">{props?.title}</h3>
										</div>
									</div>
									<div className="w-full">
										<div className="pb-8 border-b">
											<div
												className={isParagraphContent(props?.paragraph)}
												dangerouslySetInnerHTML={createParagraphMarkup(
													props?.paragraph
												)}
											/>
										</div>
									</div>
								</div>
								<div className="flex flex-col">
									<div className="flex flex-row mt-8 gap-4">
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
											<h3 className="text-lg font-[600]">{props?.titleTwo}</h3>
										</div>
									</div>
									<div className="w-full">
										<div className="pb-8 border-b">
											<div
												className={isParagraphContent(props?.paragraphTwo)}
												dangerouslySetInnerHTML={createParagraphMarkup(
													props?.paragraphTwo
												)}
											/>
										</div>
									</div>
								</div>
								<div className="flex flex-col">
									<div className="flex flex-row mt-8 gap-4">
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
											<h3 className="text-lg font-[600]">
												{props?.titleThree}
											</h3>
										</div>
									</div>
									<div className="w-full">
										<div
											className={isParagraphContent(props?.paragraphThree)}
											dangerouslySetInnerHTML={createParagraphMarkup(
												props?.paragraphThree
											)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageContent;
