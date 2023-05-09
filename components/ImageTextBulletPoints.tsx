import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeIn, fadeInUp} from "../animations/animations";

// Components
import IconTextCard from "./Cards/IconTextCard";

interface IProps {
	title: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	backgroundColor: string;
	bulletPoints: [
		{
			id: string;
			text: string;
			icon: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const ImageTextBulletPoints: FunctionComponent<IProps> = ({
	title,
	image,
	buttonLink,
	bulletPoints,
	backgroundColor,
}) => {
	/* Calculates How many iterations and sets the 
    Icons Background Color a different color per iteration */
	let textColor: string;
	let backgroundColorHex: string;
	let buttonHoverColor: string;

	switch (backgroundColor) {
		case "Pink":
			textColor = "text-white";
			backgroundColorHex = "#dd4577";
			buttonHoverColor = "yellow";
			break;
		case "Blue":
			textColor = "text-white";
			backgroundColorHex = "#2563eb";
			buttonHoverColor = "pink";
			break;
		case "Yellow":
			textColor = "text-pink";
			backgroundColorHex = "#ffc915";
			buttonHoverColor = "pink";
			break;
		case "DarkPink":
			textColor = "text-white";
			backgroundColorHex = "#950e3b";
			buttonHoverColor = "pink";
			break;
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink: string) {
		let contentStyling: string;
		let tailwindStyling: string = `mt-5 w-[fit-content] flex flex-col justify-center lg:justify-left mx-auto lg:mx-0 bg-white rounded-lg  text-blue hover:text-white hover:bg-${buttonHoverColor} transition-all ease-in-out duration-[0.5s]`;
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	return (
		<section
			className="px-4 lg:px-0"
			style={{backgroundColor: backgroundColorHex}}
		>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row">
					<motion.div variants={fadeIn} className="px-0">
						<Image
							width={550}
							height={850}
							src={`${image?.sourceUrl}`}
							alt={`${image?.altText} Image`}
							className="w-full lg:w-[650px] h-[400px] sm:h-[500px] object-cover object-center"
							style={{
								clipPath:
									"polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
							}}
						/>
					</motion.div>
					<motion.div variants={fadeInUp} className="px-4 py-20 px-0">
						<h2
							className={`py-8 w-full md:max-w-[35rem] mx-auto lg:mx-0 ${textColor} uppercase text-center lg:text-left leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl`}
						>
							{title}
						</h2>
						<div className="flex flex-col gap-4 py-8">
							{bulletPoints.map((keys) => (
								<IconTextCard
									key={keys?.id}
									// Content
									text={keys?.text}
									textColor={textColor}
									icon={keys?.icon}
								/>
							))}
						</div>
						<motion.button
							variants={fadeIn}
							className={isButtonLink(buttonLink?.url)}
						>
							<Link
								href={`${buttonLink?.url}`}
								target={`${buttonLink?.target}`}
								className="hover:text-white text-base font-[600] py-4 px-8"
							>
								{buttonLink?.title}
							</Link>
						</motion.button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ImageTextBulletPoints;
