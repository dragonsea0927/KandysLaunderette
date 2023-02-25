import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/TextImage.module.scss";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		target: string;
		title: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const TextImage: FunctionComponent<IProps> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] text-left text-black font-[500] text-base";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] text-left text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.textImage}>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
					<motion.div variants={fadeInUp} className="w-full md:w-1/2">
						<h5 className="text-left text-fadedPink text-tiny">{subtitle}</h5>
						<h2 className="text-black text-left py-6 tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
						<div
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
						<motion.button
							variants={fadeIn}
							className="mt-5 w-[fit-content] flex flex-col justify-left border-b-fadedPink border-b-[2.5px] border-solid  text-fadedPink hover:text-white hover:bg-fadedPink"
						>
							<Link
								href={`${buttonLink?.url}`}
								target={`${buttonLink?.target}`}
								className="px-4 py-2 text-base text-fadedPink hover:text-white"
							>
								{buttonLink?.title}
							</Link>
						</motion.button>
					</motion.div>
					<motion.div
						variants={fadeIn}
						className="w-full mt-10 md:mt-0 md:w-1/2"
					>
						<Image
							width={550}
							height={550}
							src={`${image?.sourceUrl}`}
							alt={`${image?.altText} image`}
							className="w-full h-[650px] rounded-full object-cover object-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
