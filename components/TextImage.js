import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/TextImage.module.scss";

const TextImage = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full xl:w-[45rem] text-left text-black font-[500] text-base";
		} else {
			contentStyling =
				"block w-full xl:w-[45rem] text-left text-black font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className={styles.textImage}>
			<div className="container mx-auto p-0">
				<div className="flex flex-col md:flex-row p-4 gap-4 justify-between items-center">
					<motion.div variants={fadeInUp} className="w-full md:w-1/2">
						<h5 className="text-fadedPink text-left text-batiny">
							{props?.subtitle}
						</h5>
						<h2 className="text-black text-left text-2xl py-6 md:text-3xl">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
						<motion.button
							variants={fadeIn}
							className="mt-5 w-[fit-content] flex flex-col justify-left border-b-fadedPink border-b-[2.5px] border-solid  text-fadedPink hover:text-white hover:bg-fadedPink"
						>
							<Link
								href={`${props?.buttonLink?.url}`}
								target={`${props?.buttonLink?.target}`}
							>
								<a className="text-fadedPink hover:text-white text-base py-2 px-4 ">
									{props?.buttonLink?.title}
								</a>
							</Link>
						</motion.button>
					</motion.div>
					<motion.div
						variants={fadeIn}
						className="mt-10 md:mt-0 w-full md:w-1/2"
					>
						<Image
							width={650}
							height={650}
							objectFit="cover"
							alt={`${props?.image?.altText} Image`}
							src={`${props?.image?.sourceUrl}`}
							className="w-full h-[650px] rounded-full object-cover object-center"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TextImage;
