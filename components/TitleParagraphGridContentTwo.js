import Image from "next/image";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

const TitleParagraphGridContentTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden lg:pl-16 text-left text-black font-[500] text-base leading-loose";
		} else {
			contentStyling =
				"block lg:pl-16 text-left text-black font-[500] text-base leading-loose";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="pt-16 pb-20">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap items-center mb-12">
					<div className="w-full lg:w-1/2 mb-6 lg:mb-0">
						<h2 className="text-4xl font-bold text-black">{props?.title}</h2>
					</div>
					<div className="w-full lg:w-1/2">
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 -mb-6">
					<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
						<div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
							<div className="mb-4">
								<Image
									src={`/img/icons/laundry (2).png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width={75}
									height={75}
								/>
							</div>
							<h3 className="mb-2 font-bold">High quality</h3>
							<p className="text-sm text-black">
								We work hard to make sure that the clothes you get back are
								spotless and ready for action.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
						<div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
							<div className="mb-4">
								<Image
									src={`/img/icons/customer-service.png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width={75}
									height={75}
								/>
							</div>
							<h3 className="mb-2 font-bold">100% Happiness Guarantee</h3>
							<p className="text-sm text-black">
								If you're not completely satisfied with the wash or dry
								cleaning, we will re-process your clothes for free!
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
						<div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
							<div className="mb-4">
								<Image
									src={`/img/icons/basin.png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width={75}
									height={75}
								/>
							</div>
							<h3 className="mb-2 font-bold">Category Example</h3>
							<p className="text-sm text-black">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
						<div className="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
							<div className="mb-4">
								<Image
									src={`/img/icons/natural-resources.png`}
									className="w-full h-[4px] object-contain"
									alt="Icon"
									width={75}
									height={75}
								/>
							</div>
							<h3 className="mb-2 font-bold">Cleaner & Greener</h3>
							<p className="text-sm text-black">
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
