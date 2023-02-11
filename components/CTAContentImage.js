/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/CTA.module.scss";

const CTAContentImage = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden md:max-w-xl py-8 text-darkGrey text-medium font-[400]";
		} else {
			contentStyling =
				"block md:max-w-xl py-8 text-darkGrey text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.ctaContentImage}>
			<div className="container mx-auto bg-white overflow-hidden">
				<div className="flex flex-col lg:flex-row justify-center xl:items-center gap-8 py-8 px-4">
					<div className="w-full md:w-1/2">
						<h2 className="mb-5 text-3xl lg:text-6xl font-[600] font-heading tracking-px-n leading-tight">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
						<div className="mt-4 mb-20 md:inline-block text-white font-semibold">
							<Link
								href={`${props?.buttonLink?.url}`}
								target={`${props?.buttonLink?.target}`}
							>
								<a className="py-4 px-6 lg:py-6 lg:px-8 text-base bg-pink rounded-lg hover:bg-yellow transition-all ease-in-out duration-[0.5s]">
									{props?.buttonLink?.title}
								</a>
							</Link>
						</div>
						<div className="flex flex-row justify-center items-center gap-8">
							<div className="w-full md:w-1/2 p-8">
								<div className="md:max-w-xs">
									<svg
										className="mb-6"
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.9998 12.8333C14.9998 12.281 14.5521 11.8333 13.9998 11.8333C13.4476 11.8333 12.9998 12.281 12.9998 12.8333H14.9998ZM9.9418 23.4673C9.64773 23.9348 9.7883 24.5521 10.2558 24.8462C10.7233 25.1403 11.3406 24.9997 11.6347 24.5322L9.9418 23.4673ZM6.83819 21.5149L5.99174 20.9824L5.99173 20.9824L6.83819 21.5149ZM5.9149 21.1081C5.63288 21.583 5.78921 22.1965 6.26406 22.4786C6.73892 22.7606 7.35248 22.6042 7.63449 22.1294L5.9149 21.1081ZM15.065 23.8696C14.8176 24.3634 15.0174 24.9643 15.5112 25.2116C16.005 25.459 16.6058 25.2593 16.8532 24.7655L15.065 23.8696ZM18.6614 20.1056C18.8118 19.5742 18.5029 19.0215 17.9715 18.8711C17.44 18.7207 16.8873 19.0296 16.737 19.561L18.6614 20.1056ZM17.4386 16.198C17.3639 16.7452 17.7469 17.2494 18.2941 17.3241C18.8413 17.3989 19.3455 17.0159 19.4202 16.4687L17.4386 16.198ZM21.2161 20.8802C21.0649 21.4114 21.373 21.9646 21.9042 22.1157C22.4354 22.2669 22.9885 21.9589 23.1397 21.4277L21.2161 20.8802ZM2.60052 17.4878C2.35919 17.9846 2.56626 18.583 3.06303 18.8243C3.5598 19.0656 4.15815 18.8585 4.39948 18.3618L2.60052 17.4878ZM8.83261 3.88303C8.35455 4.15957 8.19118 4.7713 8.46773 5.24936C8.74427 5.72742 9.356 5.89078 9.83406 5.61424L8.83261 3.88303ZM6.78091 8.66739C7.05745 8.18933 6.89409 7.5776 6.41603 7.30106C5.93797 7.02452 5.32624 7.18788 5.0497 7.66594L6.78091 8.66739ZM12.9998 12.8333C12.9998 16.7429 11.8791 20.3876 9.9418 23.4673L11.6347 24.5322C13.7668 21.1429 14.9998 17.1306 14.9998 12.8333H12.9998ZM19.6666 12.8333C19.6666 9.70372 17.1295 7.16667 13.9999 7.16667V9.16667C16.0249 9.16667 17.6666 10.8083 17.6666 12.8333H19.6666ZM8.33322 12.8333C8.33322 15.8382 7.47458 18.6252 5.99174 20.9824L7.68464 22.0474C9.36228 19.3805 10.3332 16.2259 10.3332 12.8333H8.33322ZM13.9999 7.16667C10.8703 7.16667 8.33322 9.70372 8.33322 12.8333H10.3332C10.3332 10.8083 11.9748 9.16667 13.9999 9.16667V7.16667ZM5.99173 20.9824C5.96552 21.0241 5.93991 21.066 5.9149 21.1081L7.63449 22.1294C7.6508 22.1019 7.66752 22.0746 7.68464 22.0474L5.99173 20.9824ZM16.8532 24.7655C17.5947 23.2853 18.2027 21.7265 18.6614 20.1056L16.737 19.561C16.3129 21.0595 15.7508 22.5008 15.065 23.8696L16.8532 24.7655ZM19.4202 16.4687C19.5827 15.279 19.6666 14.0653 19.6666 12.8333H17.6666C17.6666 13.9744 17.5889 15.0977 17.4386 16.198L19.4202 16.4687ZM24.3333 12.8333C24.3333 7.12639 19.7069 2.5 14 2.5V4.5C18.6024 4.5 22.3333 8.23096 22.3333 12.8333H24.3333ZM23.1397 21.4277C23.9174 18.6955 24.3333 15.8122 24.3333 12.8333H22.3333C22.3333 15.6252 21.9436 18.3244 21.2161 20.8802L23.1397 21.4277ZM3.66667 12.8333C3.66667 14.5041 3.28325 16.0825 2.60052 17.4878L4.39948 18.3618C5.21162 16.69 5.66667 14.8134 5.66667 12.8333H3.66667ZM14 2.5C12.1195 2.5 10.3535 3.00323 8.83261 3.88303L9.83406 5.61424C11.0588 4.90579 12.4805 4.5 14 4.5V2.5ZM5.0497 7.66594C4.16989 9.18685 3.66667 10.9528 3.66667 12.8333H5.66667C5.66667 11.3138 6.07245 9.8921 6.78091 8.66739L5.0497 7.66594Z"
											fill="#ff8fb4"
										></path>
									</svg>
									<h3 className="mb-3 text-xl font-semibold leading-normal">
										{props?.subtitleOne}
									</h3>
									<div
										className={isParagraphContent(props?.paragraphOne)}
										dangerouslySetInnerHTML={createParagraphMarkup(
											props?.paragraphOne
										)}
									/>
								</div>
							</div>
							<div className="w-full md:w-1/2 p-8">
								<div className="md:max-w-xs">
									<svg
										className="mb-6"
										width="28"
										height="28"
										viewBox="0 0 28 28"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.16667 8.16667H8.17833M8.16667 3.5H14C14.5972 3.49998 15.1943 3.72779 15.6499 4.18342L23.8166 12.3501C24.7279 13.2613 24.7279 14.7387 23.8166 15.6499L15.6499 23.8166C14.7387 24.7278 13.2613 24.7278 12.3501 23.8166L4.18342 15.6499C3.72781 15.1943 3.5 14.5972 3.5 14V8.16667C3.5 5.58934 5.58934 3.5 8.16667 3.5Z"
											stroke="#ff8fb4"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<h3 className="mb-3 text-xl font-semibold leading-normal">
										{props?.subtitleTwo}
									</h3>
									<div
										className={isParagraphContent(props?.paragraphTwo)}
										dangerouslySetInnerHTML={createParagraphMarkup(
											props?.paragraphTwo
										)}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2">
						<div className="max-w-max mx-auto overflow-hidden">
							<Image
								width={`750px`}
								height={`750px`}
								objectFit="cover"
								objectPosition="center"
								src={`${props?.Image?.sourceUrl}`}
								alt={`${props?.Image?.altText} Image`}
								className="w-full h-[750px] rounded-lg transform hover:scale-105 transition ease-in-out duration-1000"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTAContentImage;
