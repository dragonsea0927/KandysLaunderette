import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn} from "../../animations/animations";

const PricingPlansCard = (props) => {
	/* Calculates How many iterations and sets
    the third card to a different color. */
	let tierColor;
	let textColor;
	let buttonColor;
	let paragraphColor;
	let backgroundColor;
	let buttonTextColor;
	let buttonHoverColor;

	switch (props?.numberCount) {
		case 1:
			buttonColor = "yellow";
			textColor = "text-white";
			backgroundColor = "blue";
			buttonTextColor = "white";
			tierColor = "text-yellow";
			paragraphColor = "text-white";
			buttonHoverColor = "fadedYellow";
			break;
		case 2:
			buttonColor = "pink";
			tierColor = "text-pink";
			textColor = "text-black";
			buttonTextColor = "white";
			backgroundColor = "lightGrey";
			buttonHoverColor = "darkPink";
			paragraphColor = "text-darkGrey";
			break;
	}

	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = `hidden w-full lg:max-w-[55rem] py-8 text-left ${paragraphColor} text-base font-[400]`;
		} else {
			contentStyling = `block w-full lg:max-w-[55rem] py-8 text-left ${paragraphColor} text-base font-[400]`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full lg:w-1/2 p-4">
			<div
				className={`flex flex-col justify-between p-8 h-full bg-${backgroundColor} rounded-3xl`}
			>
				<div className="flex-initial mb-8">
					<span
						className={`inline-block mb-6 ${tierColor} font-[600] uppercase tracking-widest`}
					>
						{props?.tier}
					</span>
					<h2
						className={`mb-2 text-4xl ${textColor} tracking-tight font-[600]`}
					>
						{props?.price}
					</h2>
					<motion.h5
						variants={fadeIn}
						className={`mb-8 text-sm ${textColor} font-medium leading-relaxed`}
					>
						{props?.billingInfo}
					</motion.h5>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(props?.paragraphTop)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraphTop)}
					/>
					<div className="flex flex-wrap">
						<motion.button
							variants={fadeInUp}
							className={`py-3 px-9 w-full font-medium text-${buttonTextColor} hover:text-${buttonTextColor} rounded-lg bg-${buttonColor} hover:bg-${buttonHoverColor} transition-all ease-in-out duration-[0.5s]`}
						>
							<Link
								href={`${props?.buttonLink?.url}`}
								target={`${props?.buttonLink?.target}`}
							>
								<a>{props?.buttonLink?.title}</a>
							</Link>
						</motion.button>
					</div>
				</div>
				<div className="flex-initial">
					<h4 className={`${textColor}`}>What&rsquo;s included:</h4>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(props?.paragraphBottom)}
						dangerouslySetInnerHTML={createParagraphMarkup(
							props?.paragraphBottom
						)}
					/>
				</div>
			</div>
		</div>
	);
};

export default PricingPlansCard;
