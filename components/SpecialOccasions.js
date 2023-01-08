/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/SpecialOccasions.module.scss";

const SpecialOccasions = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-4 py-8 text-black text-center text-base";
		} else {
			contentStyling = "block mt-4 py-8 text-black text-center text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink) {
		let contentStyling;
		const tailwindStyling =
			"w-[fit-content] rounded-[50px] bg-white py-2 px-8 hover:bg-fadedPink hover:ease-in-out hover:duration-[0.5s]";
		if (isButtonLink === null) {
			contentStyling = `hidden ${tailwindStyling}`;
		} else {
			contentStyling = `block ${tailwindStyling}`;
		}
		return contentStyling;
	}

	return (
		<section className={styles.specialOccasions}>
			<div className="container mx-auto p-0">
				<motion.div variants={fadeInUp} className="py-28">
					<h2 className="text-black text-center text-4xl md:text-5xl">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup()}
					/>
				</motion.div>
				<div className="flex flex-col justify-between items-center lg:grid lg:grid-cols-2 gap-4">
					<div>
						<Link href={`${props?.content?.buttonLink?.url}`}>
							<a target={`${props?.content?.buttonLink?.target}`}>
								<img
									className="w-full h-[1000px] object-cover"
									src={props?.content?.image?.sourceUrl}
									alt={`${props?.content?.title} Image`}
									width={props?.content?.image?.mediaDetails?.width}
									height={props?.content?.image?.mediaDetails?.height}
								/>
							</a>
						</Link>
						<motion.div
							variants={stagger}
							className="relative px-4 ml-5 bottom-[140px]"
						>
							<motion.h2
								variants={fadeInUp}
								className="text-white text-left text-lg py-4"
							>
								{props?.content?.title}
							</motion.h2>
							<button className={isButtonLink(props?.content?.buttonLink?.url)}>
								<Link
									href={`${props?.content?.buttonLink?.url}`}
									target={`${props?.content?.buttonLink?.target}`}
								>
									<a className="font-[700] text-medium hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s] ">
										{props?.content?.buttonLink?.title}
									</a>
								</Link>
							</button>
						</motion.div>
					</div>
					<div>
						<Link href={`${props?.content?.buttonLinkTwo?.url}`}>
							<a target={`${props?.content?.buttonLinkTwo?.target}`}>
								<img
									className="w-full h-[1000px] object-cover"
									src={props?.content?.imageTwo?.sourceUrl}
									alt={`${props?.content?.titleTwo} Image`}
									width={props?.content?.imageTwo?.mediaDetails?.width}
									height={props?.content?.imageTwo?.mediaDetails?.height}
								/>
							</a>
						</Link>
						<motion.div
							variants={stagger}
							className="relative px-4 ml-5 bottom-[140px]"
						>
							<motion.h2
								variants={fadeInUp}
								className="text-white text-left text-lg py-4"
							>
								{props?.content?.titleTwo}
							</motion.h2>
							<button
								className={isButtonLink(props?.content?.buttonLinkTwo?.url)}
							>
								<Link
									href={`${props?.content?.buttonLinkTwo?.url}`}
									className="text-black"
									target={`${props?.content?.buttonLinkTwo?.target}`}
								>
									<a className="font-[700] text-medium hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s] ">
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

export default SpecialOccasions;
