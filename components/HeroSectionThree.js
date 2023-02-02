/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/HeroSection.module.scss";

const HeroSectionThree = (props) => {
	return (
		<section className={styles.heroSectionThree}>
			<div className="container mx-auto relative">
				<div className="pb-10 xl:pb-20">
					<div className="flex flex-wrap items-stretch px-2 sm:px-4">
						<div className="w-full lg:w-3/5 px-0 sm:px-1 mb-2 lg:mb-0">
							<div
								className="flex items-end relative h-full px-8 md:px-16 py-16 xl:pb-36 xl:pt-80 rounded-5xl overflow-hidden rounded-lg bg-center bg-cover bg-[no-repeat]"
								style={{
									backgroundImage: `linear-gradient(
														0deg,
														rgba(149, 14, 59, 0.35),
														rgba(149, 14, 59, 0.05)
													),url(${props.backgroundImage})`,
								}}
							>
								<div className="relative">
									<span className="block mb-9 text-base tracking-widest uppercase text-white font-[600]">
										{props?.subtitle}
									</span>
									<h1 className="mb-16 text-white text-5xl md:text-6xl xl:text-[3.5rem] leading-[3.5rem]">
										{props?.title}
									</h1>
									<div className="flex flex-col sm:flex-row justify-start items-start gap-4">
										<Link
											href={`${props?.buttonLink?.url}`}
											target={`${props?.buttonLink?.target}`}
										>
											<a className="inline-block py-2 px-8 w-[fit-content] mx-auto lg:mx-0 md:mr-6 mb-2 md:mb-0 leading-8 text-tiny font-[600] rounded-xl text-white text-center bg-pink focus:ring-2 focus:ring-fadedPinkThree hover:bg-fadedPinkThree ">
												{props?.buttonLink?.title}
											</a>
										</Link>
										<Link
											href={`${props?.buttonLinkTwo?.url}`}
											target={`${props?.buttonLinkTwo?.target}`}
										>
											<a className="inline-block py-2 px-8 w-[fit-content] mx-auto lg:mx-0 leading-8 text-tiny font-[600] rounded-xl text-center bg-white focus:ring-2 focus:ring-yellow hover:text-blue hover:bg-yellow ">
												{props?.buttonLinkTwo?.title}
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="hidden lg:block w-full lg:w-2/5 px-1">
							<div
								className="relative flex items-end px-8 md:px-16 py-16 xl:pb-16 mb-2 xl:h-1/2 overflow-hidden rounded-lg bg-center bg-cover bg-[no-repeat]"
								style={{
									backgroundImage: `linear-gradient(
														0deg,
														rgba(149, 14, 59, 0.35),
														rgba(149, 14, 59, 0.05)
													),url(${props.backgroundImageTwo})`,
								}}
							>
								<div className="relative w-full">
									<span className="block mb-2 text-sm tracking-widest uppercase text-white">
										{props?.subtitleTwo}
									</span>
									<h2 className="mb-8 text-white text-4xl leading-[2.25rem]">
										{props?.titleTwo}
									</h2>
									<Link
										href={`${props?.buttonLinkThree?.url}`}
										target={`${props?.buttonLinkThree?.target}`}
									>
										<a className="inline-block py-2 px-6 w-[fit-content] mx-auto lg:mx-0 leading-8 text-tiny font-[600] rounded-xl text-center bg-white focus:ring-2 focus:ring-yellow hover:text-white hover:bg-fadedPinkThree ">
											{props?.buttonLinkThree?.title}
										</a>
									</Link>
								</div>
							</div>
							<div
								className="relative flex items-end px-8 md:px-16 py-16 xl:pb-16 xl:h-1/2 overflow-hidden rounded-lg bg-center bg-cover bg-[no-repeat]"
								style={{
									backgroundImage: `linear-gradient(
														0deg,
														rgba(149, 14, 59, 0.35),
														rgba(149, 14, 59, 0.05)
													),url(${props.backgroundImageThree})`,
								}}
							>
								<div className="relative w-full">
									<span className="block mb-2 text-sm tracking-widest uppercase text-xs text-white">
										{props?.subtitleThree}
									</span>
									<h2 className="mb-8 text-white text-4xl leading-[2.25rem]">
										{props?.titleThree}
									</h2>
									<Link
										href={`${props?.buttonLinkFour?.url}`}
										target={`${props?.buttonLinkFour?.target}`}
									>
										<a className="inline-block py-2 px-6 w-[fit-content] mx-auto lg:mx-0 leading-8 text-tiny font-[600] rounded-xl text-center bg-white focus:ring-2 focus:ring-yellow hover:text-white hover:bg-fadedPinkThree ">
											{props?.buttonLinkFour?.title}
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionThree;
