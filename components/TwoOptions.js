/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/TwoOptions.module.scss";

const TwoOptions = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-4 py-8 px-4 text-black text-center text-base";
		} else {
			contentStyling = "block mt-4 py-8 px-4  text-black text-center text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink) {
		let contentStyling;
		const tailwindStyling =
			"w-[fit-content] rounded-[50px] bg-white py-2 px-8 hover:bg-fadedPink hover:text-white hover:ease-in-out hover:duration-[0.5s]";
		if (isButtonLink === null) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	return (
		<section className={styles.twoOptions}>
			<div className="container mx-auto p-0">
				<motion.div variants={fadeInUp} className="py-28">
					<h2 className="text-black text-center font-[600] text-3xl lg:text-5xl">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</motion.div>
				<div className="flex flex-col justify-between items-center lg:grid lg:grid-cols-2 gap-4">
					<div>
						<Link href={`${props?.content?.buttonLink?.url}`}>
							<a>
								<Image
									width={1000}
									height={1000}
									objectFit="cover"
									objectPosition="center"
									className="w-[1000px] h-[1000px] object-cover object-center"
									src={props?.content?.image?.sourceUrl}
									alt={`${props?.content?.title} Image`}
								/>
							</a>
						</Link>
						<motion.div
							variants={stagger}
							className="relative px-4 ml-5 bottom-[140px]"
						>
							<motion.h2
								variants={fadeInUp}
								className="text-white text-left text-base py-4"
							>
								{props?.content?.title}
							</motion.h2>
							<button className={isButtonLink(props?.content?.buttonLink?.url)}>
								<Link
									href={`${props?.content?.buttonLink?.url}`}
									target={`${props?.content?.buttonLink?.target}`}
								>
									<a className="font-[400] text-tiny hover:text-white hover:ease-in-out hover:duration-[0.5s]">
										{props?.content?.buttonLink?.title}
									</a>
								</Link>
							</button>
						</motion.div>
					</div>
					<div>
						<Link href={`${props?.content?.buttonLinkTwo?.url}`}>
							<a>
								<Image
									width={1000}
									height={1000}
									objectFit="cover"
									objectPosition="center"
									className="w-[1000px] h-[1000px] object-cover object-center"
									src={props?.content?.imageTwo?.sourceUrl}
									alt={`${props?.content?.titleTwo} Image`}
								/>
							</a>
						</Link>
						<motion.div
							variants={stagger}
							className="relative px-4 ml-5 bottom-[140px]"
						>
							<motion.h2
								variants={fadeInUp}
								className="text-white text-left text-base py-4"
							>
								{props?.content?.titleTwo}
							</motion.h2>
							<button
								className={isButtonLink(props?.content?.buttonLinkTwo?.url)}
							>
								<Link
									href={`${props?.content?.buttonLinkTwo?.url}`}
									target={`${props?.content?.buttonLinkTwo?.target}`}
								>
									<a className="font-[400] text-tiny hover:text-white hover:ease-in-out hover:duration-[0.5s]">
										{props?.content?.buttonLinkTwo?.title}
									</a>
								</Link>
							</button>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TwoOptions;
