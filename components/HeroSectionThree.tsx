import Link from "next/link";
import {FunctionComponent} from "react";
import styles from "../styles/components/HeroSection.module.scss";

interface IProps {
	title: string;
	subtitle: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImage: {
		altText: string;
		sourceUrl: string;
	};
	titleTwo: string;
	subtitleTwo: string;
	buttonLinkThree: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImageTwo: {
		altText: string;
		sourceUrl: string;
	};
	titleThree: string;
	subtitleThree: string;
	buttonLinkFour: {
		url: string;
		title: string;
		target: string;
	};
	backgroundImageThree: {
		altText: string;
		sourceUrl: string;
	};
}

const HeroSectionThree: FunctionComponent<IProps> = ({
	title,
	subtitle,
	buttonLink,
	buttonLinkTwo,
	backgroundImage,
	titleTwo,
	subtitleTwo,
	buttonLinkThree,
	backgroundImageTwo,
	titleThree,
	subtitleThree,
	buttonLinkFour,
	backgroundImageThree,
}) => {
	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink: string) {
		let contentStyling: string;
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden`;
		} else {
			contentStyling = `block`;
		}
		return contentStyling;
	}

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
													),url("${backgroundImage}")`,
								}}
							>
								<div className="relative">
									<span className="block mb-9 text-base tracking-widest uppercase text-white font-[600]">
										{subtitle}
									</span>
									<h1 className="mb-16 text-white text-5xl md:text-6xl xl:text-[3.5rem] leading-[3.5rem]">
										{title}
									</h1>
									<div className="flex flex-col sm:flex-row justify-start items-start gap-4">
										<div className={isButtonLink(buttonLink?.url)}>
											<Link
												href={`${buttonLink?.url}`}
												target={`${buttonLink?.target}`}
												className="inline-block py-2 px-8 w-[fit-content] mx-auto lg:mx-0 md:mr-6 mb-2 md:mb-0 leading-8 text-tiny font-[600] rounded-xl text-white text-center bg-pink focus:ring-2 focus:ring-fadedPinkThree hover:bg-fadedPinkThree"
											>
												{buttonLink?.title}
											</Link>
										</div>
										<div className={isButtonLink(buttonLinkTwo?.url)}>
											<Link
												href={`${buttonLinkTwo?.url}`}
												target={`${buttonLinkTwo?.target}`}
												className="inline-block py-2 px-8 w-[fit-content] mx-auto lg:mx-0 leading-8 text-tiny font-[600] rounded-xl text-center bg-white focus:ring-2 focus:ring-fadedPinkThree hover:text-white hover:bg-fadedPinkThree"
											>
												{buttonLinkTwo?.title}
											</Link>
										</div>
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
													),url(${backgroundImageTwo})`,
								}}
							>
								<div className="relative w-full">
									<span className="block mb-2 text-sm tracking-widest uppercase text-white">
										{subtitleTwo}
									</span>
									<h2 className="mb-8 text-white text-4xl leading-[2.25rem]">
										{titleTwo}
									</h2>
									<div className={isButtonLink(buttonLinkThree?.url)}>
										<Link
											href={`${buttonLinkThree?.url}`}
											target={`${buttonLinkThree?.target}`}
											className="inline-block py-2 px-6 w-[fit-content] mx-auto lg:mx-0 leading-8 text-tiny font-[600] rounded-xl text-center bg-white focus:ring-2 focus:ring-fadedPinkThree hover:text-white hover:bg-fadedPinkThree"
										>
											{buttonLinkThree?.title}
										</Link>
									</div>
								</div>
							</div>
							<div
								className="relative flex items-end px-8 md:px-16 py-16 xl:pb-16 xl:h-1/2 overflow-hidden rounded-lg bg-center bg-cover bg-[no-repeat]"
								style={{
									backgroundImage: `linear-gradient(
														0deg,
														rgba(149, 14, 59, 0.35),
														rgba(149, 14, 59, 0.05)
													),url(${backgroundImageThree})`,
								}}
							>
								<div className="relative w-full">
									<span className="block mb-2 text-sm tracking-widest uppercase text-xs text-white">
										{subtitleThree}
									</span>
									<h2 className="mb-8 text-white text-4xl leading-[2.25rem]">
										{titleThree}
									</h2>
									<div className={isButtonLink(buttonLinkFour?.url)}>
										<Link
											href={`${buttonLinkFour?.url}`}
											target={`${buttonLinkFour?.target}`}
											className="inline-block py-2 px-6 w-[fit-content] mx-auto lg:mx-0 leading-8 text-tiny font-[600] rounded-xl text-center bg-white focus:ring-2 focus:ring-fadedPinkThree hover:text-white hover:bg-fadedPinkThree"
										>
											{buttonLinkFour?.title}
										</Link>
									</div>
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
