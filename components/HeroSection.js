import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/HeroSection.module.scss";

const HeroSection = (props) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 text-white text-left text-base w-full w-[50rem]";
		} else {
			contentStyling =
				"block mt-4 text-white text-left text-base w-full w-[50rem]";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section
			className={styles.heroSection}
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(149, 14, 59, 0.05),
							rgba(149, 14, 59, 0.05)
						),url(${props.backgroundImage})`,
			}}
		>
			<div className="h-[100vh] flex flex-col justify-between">
				<div className="flex flex-row justify-center gap-4">
					<div className="container mx-auto">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row justify-start items-center gap-10">
								<Link href="/">
									<a>
										<Image
											src="/svg/Rating Stars.svg"
											className="w-full h-[200px] object-contain"
											alt="Icon"
											width={200}
											height="50"
										/>
									</a>
								</Link>
								<ul className="flex flex-row gap-6 py-8">
									<Link href="/howItWorks">
										<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
											How it works
										</a>
									</Link>
									<Link href="/services">
										<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
											Services
										</a>
									</Link>
									<Link href="/prices">
										<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
											Prices
										</a>
									</Link>
									<Link href="/aboutUs">
										<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
											About us
										</a>
									</Link>
								</ul>
							</div>
							<div className="flex justify-center items-center gap-4">
								<Link href="/howItWorks">
									<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
										How it works
									</a>
								</Link>
								<motion.button
									variants={fadeIn}
									className="rounded-lg py-3 px-8 text-white bg-pink hover:text-pink hover:bg-yellow hover:ease-in-out hover:duration-[0.5s]"
								>
									<Link href="/">
										<a className="text-right text-base font-[600] hover:text-pink hover:ease-in-out hover:duration-[0.5s]">
											Book Now
										</a>
									</Link>
								</motion.button>
							</div>
						</div>
					</div>
				</div>
				<div className="py-20 px-0">
					<motion.h1
						variants={fadeIn}
						className="text-white leading-[4.25rem] text-center mx-auto text-7xl w-full lg:w-[50rem] font-[500]"
					>
						{props?.title}
					</motion.h1>
				</div>
				<div className="flex flex-col">
					<div className="bg-pink p-6">
						<div className="container mx-auto">
							<div className="flex justify-between items-center">
								<div className="flex flex-col justify-center">
									<h2 className="text-yellow text-left text-3xl font-[500]">
										{props?.subtitle}
									</h2>
									<div
										className={isParagraphContent(props?.paragraph)}
										dangerouslySetInnerHTML={createParagraphMarkup()}
									/>
								</div>
								<motion.div
									variants={fadeInUp}
									className="flex flex-col justify-center items-end gap-2 p-4"
								>
									<Image
										src="/svg/Rating Stars.svg"
										className="w-full h-[200px] object-contain"
										alt="Icon"
										width={200}
										height="50"
									/>
									<motion.button variants={fadeIn}>
										<Link
											href={`${props?.buttonLink?.url}`}
											target={`${props?.buttonLink?.target}`}
										>
											<a className="text-yellow text-right text-base font-[500] hover:text-fadedYellow hover:ease-in-out hover:duration-[0.5s]">
												{props?.buttonLink?.title}
											</a>
										</Link>
									</motion.button>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
