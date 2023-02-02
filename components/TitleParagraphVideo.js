/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/TitleParagraphVideo.module.scss";

const TitleParagraphVideo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mb-10 text-darkGrey text-medium text-center";
		} else {
			contentStyling = "block mb-10 text-darkGrey text-medium text-center";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className={styles.titleParagraphVideo}>
			<div className="pt-6 pb-20 bg-white overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="relative bg-white overflow-hidden rounded-t-3xl">
						<div className="absolute w-full h-full bg-white border-t border-l border-r border-fadedYellow rounded-t-3xl"></div>
						<div className="relative px-8 pt-20">
							<div className="md:max-w-2xl text-center mx-auto">
								<span className="inline-block mb-3 text-medium text-pink font-[600] uppercase tracking-widest">
									{props?.subtitle}
								</span>
								<h2 className="my-12 text-5xl lg:text-6xl text-black text-center tracking-tight font-[700] leading-[3.5rem]">
									{props?.title}
								</h2>
								<div
									className={isParagraphContent(props?.paragraph)}
									dangerouslySetInnerHTML={createParagraphMarkup(
										props?.paragraph
									)}
								/>
								<div className="flex flex-wrap justify-center mb-20 -m-2">
									<div className="w-full md:w-auto p-2">
										<Link
											href={`${props?.buttonLink?.url}`}
											target={`${props?.buttonLink?.target}`}
										>
											<a className="block w-[fit-content] mx-auto px-8 py-3.5 text-base text-center text-white font-bold bg-pink hover:bg-fadedPinkThree focus:ring-4 focus:ring-blue rounded-full">
												{props?.buttonLink?.title}
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-20 px-8 max-w-max mx-auto">
								<Image
									width={1000}
									height={650}
									objectFit="cover"
									objectPosition="center"
									alt={`Image`}
									src={props?.backgroundImage}
									className="w-full h-[650px] rounded-lg object-cover object-center"
								/>
								<Link href={` /Services`} target={``}>
									<motion.a
										variants={fadeIn}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-base text-center text-white font-[600] cursor-pointer bg-pink hover:bg-fadedPink focus:ring-4 focus:ring-fadedPink rounded-full"
									>
										Watch Video
									</motion.a>
								</Link>
							</div>
							<div className="absolute left-0 top-0 w-full h-1/2 bg-white">
								<div className="h-full bg-white border-b border-l border-r border-fadedYellow rounded-b-3xl"></div>
							</div>
							<div className="absolute left-0 bottom-0 w-full h-1/2 bg-white"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TitleParagraphVideo;
