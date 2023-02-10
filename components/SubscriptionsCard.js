import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, stagger} from "../animations/animations";
import SubscriptionsCardPoints from "./SubscriptionsCardPoints";

const SubscriptionsCard = (props) => {
	/* Calculates How many iterations and sets
    the third card to a different color. */
	let tierColor;
	let textColor;
	let borderColor;
	let buttonColor;
	let paragraphColor;
	let textHoverColor;
	let backgroundColor;
	let buttonHoverColor;

	switch (props?.numberCount) {
		case 1:
			tierColor = "pink";
			textColor = "black";
			borderColor = "pink";
			buttonColor = "white";
			textHoverColor = "white";
			paragraphColor = "darkGrey";
			backgroundColor = "white";
			buttonHoverColor = "fadedPinkThree";
			break;
		case 2:
			tierColor = "pink";
			textColor = "black";
			borderColor = "pink";
			buttonColor = "white";
			textHoverColor = "white";
			paragraphColor = "darkGrey";
			backgroundColor = "white";
			buttonHoverColor = "fadedPinkThree";
			break;
		case 3:
			textColor = "white";
			buttonColor = "yellow";
			paragraphColor = "white";
			textHoverColor = "white";
			backgroundColor = "blue";
			tierColor = "fadedYellow";
			borderColor = "fadedYellow";
			buttonHoverColor = "fadedYellow";
			break;
		case 4:
			tierColor = "pink";
			textColor = "black";
			borderColor = "pink";
			buttonColor = "white";
			paragraphColor = "darkGrey";
			textHoverColor = "white";
			backgroundColor = "white";
			buttonHoverColor = "fadedPinkThree";
			break;
	}

	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = `hidden mb-6 text-${paragraphColor} font-[400] leading-relaxed`;
		} else {
			contentStyling = `block mb-6 text-${paragraphColor} font-[400] leading-relaxed`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full xl:w-1/4">
			<div
				className={`px-9 pt-8 pb-11 h-full bg-${backgroundColor} bg-opacity-90 rounded-lg`}
				style={{backdropFilter: "blur(46px)"}}
			>
				<span
					className={`mb-3 inline-block text-tiny text-${tierColor} font-semibold uppercase tracking-px leading-snug`}
				>
					{props?.tier}
				</span>
				<motion.div
					variants={fadeIn}
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
				<h3
					className={`mb-1 text-4xl text-${textColor} font-bold leading-tight`}
				>
					<span>{props?.price}</span>
				</h3>
				<p
					className={`mb-8 text-sm text-${textColor} font-medium leading-relaxed`}
				>
					{props?.billingInfo}
				</p>
				<button
					className={`mb-9 py-4 px-9 w-full font-medium text-${textColor} hover:text-${textHoverColor} border border-${borderColor} hover:border-${buttonHoverColor} rounded-xl focus:ring focus:ring-${buttonHoverColor} bg-${buttonColor} hover:bg-${buttonHoverColor} transition-all ease-in-out duration-[0.5s]"
					type="button`}
				>
					<Link
						href={`${props?.buttonLink?.url}`}
						target={`${props?.buttonLink?.target}`}
					>
						<a>{props?.buttonLink?.title}</a>
					</Link>
				</button>
				<motion.ul variants={stagger} className="flex flex-col">
					{props?.points.map((keys) => (
						<SubscriptionsCardPoints
							Key={keys?.id}
							point={keys?.point}
							numberCount={props?.numberCount}
						/>
					))}
				</motion.ul>
			</div>
		</div>
	);
};

export default SubscriptionsCard;
