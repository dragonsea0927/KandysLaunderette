import Link from "next/link";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn} from "../../animations/animations";

interface IProps {
	tier: string;
	price: string;
	numberCount: number;
	billingInfo: string;
	paragraphTop: string;
	paragraphBottom: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const PricingPlansCard: FunctionComponent<IProps> = ({
	tier,
	price,
	buttonLink,
	billingInfo,
	numberCount,
	paragraphTop,
	paragraphBottom,
}) => {
	/* Calculates How many iterations and sets
    the third card to a different color. */
	let tierColor: string;
	let textColor: string;
	let buttonColor: string;
	let paragraphColor: string;
	let backgroundColor: string;
	let buttonTextColor: string;
	let buttonHoverColor: string;

	switch (numberCount) {
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
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = `hidden w-full lg:max-w-[55rem] py-8 text-left ${paragraphColor} text-base font-[400]`;
		} else {
			contentStyling = `block w-full lg:max-w-[55rem] py-8 text-left ${paragraphColor} text-base font-[400]`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full lg:w-1/2">
			<div
				className={`flex flex-col justify-between p-8 h-full bg-${backgroundColor} rounded-3xl`}
			>
				<div className="flex-initial mb-8">
					<span
						className={`inline-block mb-6 ${tierColor} font-[600] uppercase tracking-widest`}
					>
						{tier}
					</span>
					<h2
						className={`mb-2 text-4xl ${textColor} tracking-tight font-[600]`}
					>
						{price}
					</h2>
					<motion.h5
						variants={fadeIn}
						className={`mb-8 text-sm ${textColor} font-medium leading-relaxed`}
					>
						{billingInfo}
					</motion.h5>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(paragraphTop)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraphTop)}
					/>
					<div className="flex flex-wrap">
						<motion.button
							variants={fadeInUp}
							className={`py-3 px-9 w-full font-medium text-${buttonTextColor} hover:text-${buttonTextColor} rounded-lg bg-${buttonColor} hover:bg-${buttonHoverColor} transition-all ease-in-out duration-[0.5s]`}
						>
							<Link
								href={`${buttonLink?.url}`}
								target={`${buttonLink?.target}`}
							>
								{buttonLink?.title}
							</Link>
						</motion.button>
					</div>
				</div>
				<div className="flex-initial">
					<h4 className={`${textColor}`}>What&rsquo;s included:</h4>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(paragraphBottom)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraphBottom)}
					/>
				</div>
			</div>
		</div>
	);
};

export default PricingPlansCard;
