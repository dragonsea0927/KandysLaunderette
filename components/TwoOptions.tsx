/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	content: {
		title: string;
		titleTwo: string;
		image: {
			altText: string;
			sourceUrl: string;
		};
		imageTwo: {
			altText: string;
			sourceUrl: string;
		};
		buttonLink: {
			url: string;
			target: string;
			title: string;
		};
		buttonLinkTwo: {
			url: string;
			target: string;
			title: string;
		};
	};
}

const TwoOptions: FunctionComponent<IProps> = ({title, paragraph, content}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-0 text-center text-darkGrey text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto mt-4 py-8 px-0 text-center text-darkGrey text-medium";
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
			"w-[fit-content] rounded-[50px]  bg-white py-2 px-8 hover:bg-fadedPink hover:text-white transition-all ease-in-out duration-[0.5s]";
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	return (
		<section className="container p-0 mx-auto bg-white">
			<motion.div variants={fadeInUp} className="px-4 py-28">
				<h2 className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
					{title}
				</h2>
				<div
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</motion.div>
			<motion.div
				variants={stagger}
				className="flex flex-col items-center justify-between gap-4 px-4 lg:grid lg:grid-cols-2"
			>
				<div>
					<Link href={`${content?.buttonLink?.url}`}>
						<Image
							width={1000}
							height={1000}
							className="w-[1000px] h-[1000px] rounded-lg object-cover object-center"
							src={content?.image?.sourceUrl}
							alt={`${content?.image?.altText} Image`}
						/>
					</Link>
					<motion.div
						variants={stagger}
						className="relative px-4 ml-5 bottom-[140px]"
					>
						<motion.h2
							variants={fadeInUp}
							className="py-4 text-base text-left text-white"
						>
							{content?.title}
						</motion.h2>
						<button className={isButtonLink(content?.buttonLink?.url)}>
							<Link
								href={`${content?.buttonLink?.url}`}
								target={`${content?.buttonLink?.target}`}
								className="font-[400] text-tiny hover:text-white"
							>
								{content?.buttonLink?.title}
							</Link>
						</button>
					</motion.div>
				</div>
				<div>
					<Link href={`${content?.buttonLinkTwo?.url}`}>
						<Image
							width={1000}
							height={1000}
							className="w-[1000px] h-[1000px] rounded-lg object-cover object-center"
							src={content?.imageTwo?.sourceUrl}
							alt={`${content?.imageTwo?.altText} Image`}
						/>
					</Link>
					<motion.div
						variants={stagger}
						className="relative px-4 ml-5 bottom-[140px]"
					>
						<motion.h2
							variants={fadeInUp}
							className="py-4 text-base text-left text-white"
						>
							{content?.titleTwo}
						</motion.h2>
						<button className={isButtonLink(content?.buttonLinkTwo?.url)}>
							<Link
								href={`${content?.buttonLinkTwo?.url}`}
								target={`${content?.buttonLinkTwo?.target}`}
								className="font-[400] text-tiny hover:text-white"
							>
								{content?.buttonLinkTwo?.title}
							</Link>
						</button>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default TwoOptions;
