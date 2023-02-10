import Image from "next/image";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/TitleParagraphGridContent.module.scss";

const TitleParagraphGridContentTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden lg:pl-16 text-center md:text-left text-darkGrey text-medium";
		} else {
			contentStyling =
				"block lg:pl-16 text-center md:text-left text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphGridContentTwo}>
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row gap-8 items-center mb-20">
					<div className="w-full lg:w-1/2">
						<h2 className="text-center md:text-left text-4xl md:text-5xl tracking-tight font-[600] text-black">
							{props?.title}
						</h2>
					</div>
					<div className="w-full lg:w-1/2">
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
				</div>
				<div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row justify-between gap-4">
					<div className="w-full lg:w-1/4">
						<div className="h-full pt-8 px-6 pb-6 bg-white text-center rounded-lg border-[1px] border-solid border-fadedPinkTwo">
							<div className="mb-4">
								<Image
									src={`/img/icons/laundry (2).png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width="75px"
									height="75px"
								/>
							</div>
							<h3 className="my-2 text-lg text-black font-bold">
								High quality
							</h3>
							<p className="py-4 text-darkGrey text-medium">
								We work hard to make sure that the clothes you get back are
								spotless and ready for action.
							</p>
						</div>
					</div>
					<div className="w-full lg:w-1/4">
						<div className="h-full pt-8 px-6 pb-6 bg-white text-center rounded-lg border-[1px] border-solid border-fadedPinkTwo">
							<div className="mb-4">
								<Image
									src={`/img/icons/customer-service.png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width="75px"
									height="75px"
								/>
							</div>
							<h3 className="my-2 text-lg text-black font-bold">
								100% Happiness Guarantee
							</h3>
							<p className="py-4 text-darkGrey text-medium">
								If you&apos;re not completely satisfied with the wash or dry
								cleaning, we will re-process your clothes for free!
							</p>
						</div>
					</div>
					<div className="w-full lg:w-1/4">
						<div className="h-full pt-8 px-6 pb-6 bg-white text-center rounded-lg border-[1px] border-solid border-fadedPinkTwo">
							<div className="mb-4">
								<Image
									src={`/img/icons/basin.png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width="75px"
									height="75px"
								/>
							</div>
							<h3 className="my-2 text-lg text-black font-bold">
								It&apos;s fast!
							</h3>
							<p className="py-4 text-darkGrey text-medium">
								We pickup, wash, & deliver in less than 24 hours. with Heighest
								priority for every Customer
							</p>
						</div>
					</div>
					<div className="w-full lg:w-1/4">
						<div className="h-full pt-8 px-6 pb-6 bg-white text-center rounded-lg border-[1px] border-solid border-fadedPinkTwo">
							<div className="mb-4">
								<Image
									src={`/img/icons/natural-resources.png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width="75px"
									height="75px"
								/>
							</div>
							<h3 className="my-2 text-lg text-black font-bold">
								Cleaner & Greener
							</h3>
							<p className="py-4 text-darkGrey text-medium">
								We work with the environment in mind. No harsh chemicals.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphGridContentTwo;
