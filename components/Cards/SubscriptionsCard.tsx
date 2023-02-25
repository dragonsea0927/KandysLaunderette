import Link from "next/link";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, stagger} from "../../animations/animations";
import SubscriptionsCardPoints from "./SubscriptionsCardPoints";

interface IProps {
	tier: string;
	price: string;
	points: [
		{
			id: string;
			point: string;
		}
	];
	buttonLink: {
		url: string;
		target: string;
		title: string;
	};
	paragraph: string;
	billingInfo: string;
	numberCount: number;
}

const SubscriptionsCard: FunctionComponent<IProps> = ({
	tier,
	price,
	points,
	buttonLink,
	paragraph,
	billingInfo,
	numberCount,
}) => {
	/* Calculates How many iterations and sets
    the third card to a different color. */
	let tierColor: string;
	let textColor: string;
	let borderColor: string;
	let buttonColor: string;
	let paragraphColor: string;
	let textHoverColor: string;
	let backgroundColor: string;
	let buttonHoverColor: string;

	switch (numberCount) {
		case 1:
			textColor = "black";
			buttonColor = "white";
			tierColor = "text-pink";
			textHoverColor = "white";
			backgroundColor = "white";
			paragraphColor = "darkGrey";
			borderColor = "fadedPinkThree";
			buttonHoverColor = "fadedPinkThree";
			break;
		case 2:
			textColor = "black";
			buttonColor = "white";
			tierColor = "text-pink";
			textHoverColor = "white";
			backgroundColor = "white";
			paragraphColor = "darkGrey";
			borderColor = "fadedPinkThree";
			buttonHoverColor = "fadedPinkThree";
			break;
		case 3:
			textColor = "white";
			borderColor = "yellow";
			buttonColor = "yellow";
			paragraphColor = "white";
			textHoverColor = "white";
			backgroundColor = "blue";
			tierColor = "text-yellow";
			buttonHoverColor = "yellow";
			break;
		case 4:
			textColor = "black";
			buttonColor = "white";
			tierColor = "text-pink";
			textHoverColor = "white";
			backgroundColor = "white";
			paragraphColor = "darkGrey";
			borderColor = "fadedPinkThree";
			buttonHoverColor = "fadedPinkThree";
			break;
	}

	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = `hidden mb-6 text-${paragraphColor} font-[400] leading-relaxed`;
		} else {
			contentStyling = `block mb-6 text-${paragraphColor} font-[400] leading-relaxed`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full xl:w-1/4">
			<div
				className={`flex flex-col justify-between gap-y-4 px-9 pt-8 pb-11 w-full h-full bg-${backgroundColor} bg-opacity-90 rounded-lg`}
				style={{backdropFilter: "blur(46px)"}}
			>
				<div>
					<span
						className={`mb-3 inline-block text-tiny ${tierColor} font-[600] uppercase tracking-px leading-snug`}
					>
						{tier}
					</span>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</div>
				<div>
					<h3
						className={`mb-1 text-4xl text-${textColor} font-[600] leading-tight`}
					>
						<span>{price}</span>
					</h3>
					<p
						className={`mb-6 text-sm text-${textColor} font-medium leading-relaxed`}
					>
						{billingInfo}
					</p>
					<button
						className={`py-4 px-9 w-full font-medium text-${textColor} hover:text-${textHoverColor} border border-${borderColor} hover:border-${borderColor} rounded-xl focus:ring focus:ring-${borderColor} bg-${buttonColor} hover:bg-${buttonHoverColor} transition-all ease-in-out duration-[0.5s]"
					type="button`}
					>
						<Link href={`${buttonLink?.url}`} target={`${buttonLink?.target}`}>
							{buttonLink?.title}
						</Link>
					</button>
				</div>
				<div>
					<motion.ul variants={stagger} className="flex flex-col mt-6">
						{points.map((keys) => (
							<SubscriptionsCardPoints
								key={keys?.id}
								point={keys?.point}
								numberCount={numberCount}
							/>
						))}
					</motion.ul>
				</div>
			</div>
		</div>
	);
};

export default SubscriptionsCard;
