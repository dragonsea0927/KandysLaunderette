import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../../animations/animations";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
	};
	displayImage: string;
	displayButton: string;
}

const TextImageCard: FunctionComponent<IProps> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	displayImage,
	displayButton,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] text-center lg:text-left text-darkGrey text-medium font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-center lg:text-left text-darkGrey text-medium font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink: string) {
		let contentStyling: string;
		const tailwindStyling: string =
			"mt-5 w-[fit-content] flex flex-col justify-left";
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	/* Displays left or Right Image depending on 
    what the user selected in the dashboard */
	let rightImageDisplay: string = "block";
	let leftImageDisplay: string = "none";

	if (displayImage === "Left") {
		rightImageDisplay = "none ";
		leftImageDisplay = "block";
	}

	return (
		<div className="flex flex-col items-center justify-center gap-16 px-4 py-10 my-4 lg:flex-row rounded-xl">
			<motion.div
				variants={fadeIn}
				className="w-full px-0 xl:px-10 lg:w-1/2"
				style={{display: leftImageDisplay}}
			>
				<Image
					width={550}
					height={550}
					src={`${image?.sourceUrl}`}
					alt={`${image?.altText} Image`}
					className="w-full h-[400px] rounded-lg object-cover object-center"
				/>
			</motion.div>
			<motion.div
				variants={fadeInUp}
				className="flex flex-col items-center justify-center w-full px-6 lg:w-1/2 lg:items-start"
			>
				<h5 className="text-grey text-center lg:text-left text-tiny font-[600] uppercase tracking-[0.15rem]">
					{subtitle}
				</h5>
				<h2 className="text-black text-center lg:text-left py-8 tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
					{title}
				</h2>
				<div
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
				<motion.button
					variants={fadeIn}
					className={isButtonLink(buttonLink?.url)}
				>
					<Link
						href={`${buttonLink?.url}`}
						target={`${buttonLink?.target}`}
						className="text-fadedPink font-[600] text-medium hover:text-blue transition-all ease-in-out duration-[0.5s]"
					>
						{buttonLink?.title}
					</Link>
				</motion.button>
			</motion.div>
			<motion.div
				variants={fadeIn}
				className="w-full px-0 xl:px-10 lg:w-1/2"
				style={{display: rightImageDisplay}}
			>
				<Image
					width={550}
					height={550}
					alt={`${image?.altText} Image`}
					src={`${image?.sourceUrl}`}
					className="w-full h-[400px] rounded-lg object-cover object-center"
				/>
			</motion.div>
		</div>
	);
};

export default TextImageCard;
