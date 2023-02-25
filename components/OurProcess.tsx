import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import SingleCardTwo from "./Cards/SingleCardTwo";

interface IProps {
	title: string;
	paragraph: string;
	backgroundColor: string;
	backgroundLetter: string;
	gridContent: [
		{
			id: string;
			title: string;
			paragraph: string;
			image: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const OurProcess: FunctionComponent<IProps> = ({
	title,
	paragraph,
	gridContent,
	backgroundColor,
	backgroundLetter,
}) => {
	/* Sets the Background Color
	 a different color per */
	let textColor: string;
	let paragraphColor: string;
	let backgroundColorHex: string;
	let linearGradientColor: string;

	switch (backgroundColor) {
		case "Red":
			textColor = "white";
			paragraphColor = "white";
			backgroundColorHex = "#950e3b";
			linearGradientColor = `0deg,
			rgba(149, 14, 59, 0.85),
			rgba(221, 69, 119, 0.5)`;
			break;
		case "Blue":
			textColor = "white";
			paragraphColor = "white";
			backgroundColorHex = "#3375fa";
			linearGradientColor = `0deg,
			rgba(36, 14, 149, 0.85),
			rgba(36, 14, 149, 0.5)`;
			break;
		case "None":
			textColor = "black";
			paragraphColor = "darkGrey";
			backgroundColorHex = "#fff";
			linearGradientColor = `0deg,
                        rgba(255,255,255, 1),
                        rgba(255,255,255, 1)`;
			break;
	}

	/* Sets the Background Letter */
	let backgroundLetterSvg: string;
	if (backgroundLetter === "W") {
		backgroundLetterSvg = `w`;
	} else if (backgroundLetter === "E") {
		backgroundLetterSvg = `e`;
	}

	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = `hidden w-full lg:max-w-[75rem] mx-auto mt-4 text-center text-${paragraphColor} text-medium`;
		} else {
			contentStyling = `block w-full lg:max-w-[75rem] mx-auto mt-4 text-center text-${paragraphColor} text-medium`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundColor: `${backgroundColorHex}`,
				backgroundImage: `linear-gradient(${linearGradientColor}), url("/svg/${backgroundLetterSvg}.svg")`,
			}}
		>
			<div className="container p-0 mx-auto">
				<div className="px-4 py-20 lg:px-0">
					<motion.div variants={fadeInUp}>
						<h2
							className={` py-8 w-full text-center text-${textColor} tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl`}
						>
							{title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</motion.div>
					<div className="grid grid-cols-1 gap-4 px-4 mt-20 lg:grid-cols-3">
						{gridContent.map((keys) => (
							<SingleCardTwo
								key={keys.id}
								title={keys?.title}
								image={keys?.image}
								textColor={textColor}
								paragraph={keys?.paragraph}
								paragraphColor={paragraphColor}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurProcess;
