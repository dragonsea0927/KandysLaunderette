import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import SingleCardTwo from "../components/Cards/SingleCardTwo";

const OurProcess = (props) => {
	/* Sets the Background Color
	 a different color per */
	let textColor;
	let paragraphColor;
	let backgroundColor;
	let linearGradientColor;

	switch (props?.backgroundColor) {
		case "Red":
			textColor = "white";
			paragraphColor = "white";
			backgroundColor = "#950e3b";
			linearGradientColor = `0deg,
			rgba(149, 14, 59, 0.85),
			rgba(221, 69, 119, 0.5)`;
			break;
		case "Blue":
			textColor = "white";
			paragraphColor = "white";
			backgroundColor = "#3375fa";
			linearGradientColor = `0deg,
			rgba(36, 14, 149, 0.85),
			rgba(36, 14, 149, 0.5)`;
			break;
		case "None":
			textColor = "black";
			paragraphColor = "darkGrey";
			backgroundColor = "#fff";
			linearGradientColor = `0deg,
                        rgba(255,255,255, 1),
                        rgba(255,255,255, 1)`;
			break;
	}

	/* Sets the Background Letter */
	let backgroundLetter = props?.backgroundLetter;
	if (backgroundLetter === "W") {
		backgroundLetter = `w`;
	} else if (backgroundLetter === "E") {
		backgroundLetter = `e`;
	}

	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = `hidden w-full lg:max-w-[75rem] mx-auto mt-4 text-center text-${paragraphColor} text-medium`;
		} else {
			contentStyling = `block w-full lg:max-w-[75rem] mx-auto mt-4 text-center text-${paragraphColor} text-medium`;
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
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
				backgroundColor: `${backgroundColor}`,
				backgroundImage: `linear-gradient(${linearGradientColor}), url("/svg/${backgroundLetter}.svg")`,
			}}
		>
			<div className="container mx-auto p-0">
				<div className="py-20 px-4 lg:px-0">
					<motion.div variants={fadeInUp}>
						<h2
							className={`text-center text-${textColor} font-[600] text-2xl sm:text-3xl lg:text-5xl py-8 w-full`}
						>
							{props?.title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
					<div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
						{props.gridContent.map((keys) => (
							<SingleCardTwo
								key={keys.id}
								title={keys?.title}
								textColor={textColor}
								paragraph={keys?.paragraph}
								image={keys?.image?.sourceUrl}
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
