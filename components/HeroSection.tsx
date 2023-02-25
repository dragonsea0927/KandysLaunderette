/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {useState, FunctionComponent} from "react";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/HeroSection.module.scss";
import NavbarMenuSublinks from "./NavbarMenuSublinks";

interface IProps {
	title: string;
	subtitle: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		target: string;
		title: string;
	};
	CommercialServicesMenuLinks: [
		{
			node: {
				id: string;
				uri: string;
				label: string;
			};
		}
	];
	IndividualServicesMenuLinks: [
		{
			node: {
				id: string;
				uri: string;
				label: string;
			};
		}
	];
}

const HeroSection: FunctionComponent<IProps> = ({
	title,
	subtitle,
	paragraph,
	backgroundImage,
	buttonLink,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
}) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 max-w-[40rem] text-white text-center sm:text-left text-base  w-full lg:max-w-[75rem] font-[400]";
		} else {
			contentStyling =
				"block mt-4 max-w-[40rem] text-white text-center sm:text-left text-base  w-full lg:max-w-[75rem] font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	// Display Services sublinks
	const [servicesMenusOpen, setServicesMenuOpen]: any = useState(false);
	const [IndividualServicesMenuOpen, setIndividualServicesMenuOpen]: any =
		useState(false);
	const [CommercialServicesMenuOpen, setCommercialServicesMenuOpen]: any =
		useState(false);

	// Hides or Display Services sublinks
	function displayServicesMenu() {
		setServicesMenuOpen(!servicesMenusOpen);
	}

	// Hides or Display Commercial Services sublinks
	function displayCommercialServicesMenu() {
		setCommercialServicesMenuOpen(!CommercialServicesMenuOpen);
	}
	// Hides or Display Individual Services sublinks
	function displayIndividualServicesMenu() {
		setIndividualServicesMenuOpen(!IndividualServicesMenuOpen);
	}

	return (
		<section
			className={styles.heroSection}
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(149, 14, 59, 0.05),
							rgba(149, 14, 59, 0.05)
						),url("${backgroundImage}")`,
			}}
		>
			<div
				className="min-h-[100vh] flex flex-col justify-between relative z-[999]"
				style={{backdropFilter: "blur(3px)"}}
			>
				<div className="flex flex-row justify-center gap-4 w-full h-[fit-content]">
					<div className="container mx-auto">
						<div className="flex flex-row items-center justify-between">
							<div className="flex flex-row items-start justify-start gap-10 p-4">
								<Link href="/">
									<Image
										alt="Icon"
										width={75}
										height={75}
										src="/img/icons/skirt.png"
										className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] object-contain object-center"
									/>
								</Link>
								<ul className="flex-row items-start justify-start hidden gap-6 py-8 lg:flex">
									<Link
										href="https://mydummysite.co.uk/ToddLearning/HowItWorks"
										className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
									>
										How it works
									</Link>
									<div className="relative menuLink ">
										<span className="flex flex-row items-center justify-center">
											<Link
												href=" https://mydummysite.co.uk/ToddLearning/Services"
												className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
											>
												Services
											</Link>
											<Image
												width={550}
												height={550}
												alt="White Arrow Icon"
												className="cursor-pointer w-[25px] h-[25px]"
												src="/svg/Navigation Menu Dropdown Arrow.png"
												onClick={displayServicesMenu}
											/>
										</span>
										{servicesMenusOpen ? (
											<div className="flex flex-col justify-center absolute z-[999] w-[max-content] bg-pink rounded-lg mt-5">
												{/* Individual Services Menu Links*/}
												<div>
													<div className="hover:rounded-t-lg hover:bg-fadedPink transition-all ease-in-out duration-[0.5s]">
														<span className="flex flex-row items-center justify-center px-6 py-3">
															<Link
																href="https://mydummysite.co.uk/ToddLearning/LaundryAndDryCleaning/IndividualService"
																className="w-full text-white text-base text-left font-[400] tracking-[0.05rem]"
															>
																Individual Services
															</Link>
															<Image
																width={550}
																height={550}
																alt="white Arrow Icon"
																className="cursor-pointer w-[25px] h-[25px]"
																src="/svg/Navigation Menu Dropdown Arrow.png"
																onClick={displayIndividualServicesMenu}
															/>
														</span>
													</div>
													{IndividualServicesMenuOpen ? (
														<ul className="flex flex-col justify-center bg-darkPink">
															{/* Menu Array from Wordpress */}
															{IndividualServicesMenuLinks?.map((keys) => (
																<NavbarMenuSublinks
																	key={keys?.node?.id}
																	linkUrl={keys?.node?.uri}
																	linkName={keys?.node?.label}
																/>
															))}
														</ul>
													) : null}
												</div>
												{/* Commercial Services Menu Links*/}
												<div>
													<div className="hover:rounded-b-lg hover:bg-fadedPink transition-all ease-in-out duration-[0.5s]">
														<span className="flex flex-row items-center justify-center px-6 py-3">
															<Link
																href="https://mydummysite.co.uk/ToddLearning/LaundryAndDryCleaning/CommercialServices"
																className="w-full text-white text-base text-left font-[400] tracking-[0.05rem]"
															>
																Commercial Services
															</Link>
															<Image
																width={550}
																height={550}
																alt="white Arrow Icon"
																className="cursor-pointer w-[25px] h-[25px]"
																src="/svg/Navigation Menu Dropdown Arrow.png"
																onClick={displayCommercialServicesMenu}
															/>
														</span>
													</div>
													{CommercialServicesMenuOpen ? (
														<ul className="flex flex-col justify-center rounded-b-lg bg-darkPink">
															{/* Menu Array from Wordpress */}
															{CommercialServicesMenuLinks?.map((keys) => (
																<NavbarMenuSublinks
																	key={keys?.node?.id}
																	linkUrl={keys?.node?.uri}
																	linkName={keys?.node?.label}
																/>
															))}
														</ul>
													) : null}
												</div>
											</div>
										) : null}
									</div>
									<Link
										href="https://mydummysite.co.uk/ToddLearning/Prices"
										className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
									>
										Prices
									</Link>
									<Link
										href="https://mydummysite.co.uk/ToddLearning/AboutUs"
										className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
									>
										About us
									</Link>
								</ul>
							</div>
							<div className="items-center justify-center hidden gap-4 p-4 md:flex">
								<Link
									href="https://mydummysite.co.uk/ToddLearning/HowItWorks"
									className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
								>
									Log in
								</Link>
								<button className="rounded-lg py-3 px-8 text-white bg-pink hover:text-white hover:bg-yellow transition-all ease-in-out duration-[0.5s]">
									<Link
										href="/"
										className="text-right text-base font-[600] hover:text-white"
									>
										Create an account
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="px-0 pt-0 pb-20 my-auto md:py-20">
					<motion.h1
						variants={fadeIn}
						className=" p-4 lg:p-0 w-full mx-auto lg:w-[45rem] text-white text-center leading-[2.75rem] leading-[2.75rem] font-[600] text-4xl sm:text-6xl"
					>
						{title}
					</motion.h1>
				</div>
				<div className="flex flex-col">
					<div className="p-6 m-4 rounded-lg bg-pink">
						<div className="container mx-auto">
							<div className="flex flex-col items-center justify-between lg:flex-row">
								<div className="flex flex-col justify-center">
									<h2 className="text-white text-center lg:text-left text-lg sm:text-medium lg:text-lg xl:text-3xl font-[500]">
										{subtitle}
									</h2>
									<div
										className={isParagraphContent(paragraph)}
										dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
									/>
								</div>
								<motion.div
									variants={fadeInUp}
									className="flex-col items-center justify-center hidden gap-2 p-4 sm:flex lg:items-end"
								>
									<Image
										src="/svg/Rating Stars.svg"
										className="w-full h-[20px] object-contain"
										alt="Icon"
										width={550}
										height={550}
									/>
									<motion.button variants={fadeIn}>
										<Link
											href={`${buttonLink?.url}`}
											target={`${buttonLink?.target}`}
											className="text-white text-center lg:text-right text-tiny font-[500] hover:text-fadedYellow transition-all ease-in-out duration-[0.5s]"
										>
											{buttonLink?.title}
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
