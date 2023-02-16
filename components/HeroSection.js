/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/HeroSection.module.scss";
import NavbarMenuSublinks from "./NavbarMenuSublinks";

const HeroSection = (props) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 max-w-[40rem] text-white text-center sm:text-left text-base  w-full lg:max-w-[75rem] font-[400]";
		} else {
			contentStyling =
				"block mt-4 max-w-[40rem] text-white text-center sm:text-left text-base  w-full lg:max-w-[75rem] font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	// Display Services sublinks
	const [servicesMenusOpen, setServicesMenuOpen] = useState(false);
	const [IndividualServicesMenuOpen, setIndividualServicesMenuOpen] =
		useState(false);
	const [CommercialServicesMenuOpen, setCommercialServicesMenuOpen] =
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
						),url("${props.backgroundImage}")`,
			}}
		>
			<div
				className="min-h-[100vh] flex flex-col justify-between relative z-[999]"
				style={{backdropFilter: "blur(3px)"}}
			>
				<div className="flex flex-row justify-center gap-4 w-full h-[fit-content]">
					<div className="container mx-auto">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row justify-start items-start gap-10 p-4">
								<Link href="/">
									<a>
										<img
											alt="Icon"
											width={75}
											height={75}
											src="/img/icons/skirt.png"
											className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] object-contain object-center"
										/>
									</a>
								</Link>
								<ul className="hidden lg:flex flex-row justify-start items-start gap-6 py-8">
									<Link href="/HowItWorks">
										<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]">
											How it works
										</a>
									</Link>
									<div className="menuLink relative">
										<span className="flex flex-row justify-center items-center">
											<Link href=" /Services">
												<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]">
													Services
												</a>
											</Link>
											<img
												width="25px"
												height="25px"
												alt="White Arrow Icon"
												className="cursor-pointer"
												src="/svg/Navigation Menu Dropdown Arrow.png"
												onClick={displayServicesMenu}
											/>
										</span>
										{servicesMenusOpen ? (
											<div className="flex flex-col justify-center absolute z-[999] w-[max-content] bg-pink rounded-lg mt-5">
												{/* Individual Services Menu Links*/}
												<div>
													<div className="hover:rounded-t-lg hover:bg-fadedPink transition-all ease-in-out duration-[0.5s]">
														<span className="flex flex-row py-3 px-6 justify-center items-center">
															<Link href="/LaundryAndDryCleaning/IndividualService">
																<a className="w-full text-white text-base text-left font-[400] tracking-[0.05rem] ">
																	Individual Services
																</a>
															</Link>
															<img
																width="25px"
																height="25px"
																alt="white Arrow Icon"
																className="cursor-pointer"
																src="/svg/Navigation Menu Dropdown Arrow.png"
																onClick={displayIndividualServicesMenu}
															/>
														</span>
													</div>
													{IndividualServicesMenuOpen ? (
														<ul className="flex flex-col justify-center bg-darkPink">
															{/* Menu Array from Wordpress */}
															{props?.IndividualServicesMenuLinks?.map(
																(keys) => (
																	<NavbarMenuSublinks
																		Key={keys?.id}
																		linkUrl={keys?.node?.uri}
																		linkName={keys?.node?.label}
																	/>
																)
															)}
														</ul>
													) : null}
												</div>
												{/* Commercial Services Menu Links*/}
												<div>
													<div className="hover:rounded-b-lg hover:bg-fadedPink transition-all ease-in-out duration-[0.5s]">
														<span className="flex flex-row py-3 px-6 justify-center items-center">
															<Link href="/LaundryAndDryCleaning/CommercialServices">
																<a className="w-full text-white text-base text-left font-[400] tracking-[0.05rem] ">
																	Commercial Services
																</a>
															</Link>
															<img
																width="25px"
																height="25px"
																alt="white Arrow Icon"
																className="cursor-pointer"
																src="/svg/Navigation Menu Dropdown Arrow.png"
																onClick={displayCommercialServicesMenu}
															/>
														</span>
													</div>
													{CommercialServicesMenuOpen ? (
														<ul className="flex flex-col justify-center bg-darkPink rounded-b-lg">
															{/* Menu Array from Wordpress */}
															{props?.CommercialServicesMenuLinks?.map(
																(keys) => (
																	<NavbarMenuSublinks
																		Key={keys?.id}
																		linkUrl={keys?.node?.uri}
																		linkName={keys?.node?.label}
																	/>
																)
															)}
														</ul>
													) : null}
												</div>
											</div>
										) : null}
									</div>
									<Link href="/Prices">
										<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]">
											Prices
										</a>
									</Link>
									<Link href="/AboutUs">
										<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]">
											About us
										</a>
									</Link>
								</ul>
							</div>
							<div className="hidden md:flex justify-center items-center gap-4 p-4">
								<Link href="/HowItWorks">
									<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]">
										Log in
									</a>
								</Link>
								<button className="rounded-lg py-3 px-8 text-white bg-pink hover:text-white hover:bg-yellow transition-all ease-in-out duration-[0.5s]">
									<Link href="/">
										<a className="text-right text-base font-[600] hover:text-white">
											Create an account
										</a>
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-0 pb-20 md:py-20 px-0 my-auto">
					<motion.h1
						variants={fadeIn}
						className=" p-4 lg:p-0 w-full mx-auto lg:w-[45rem] text-white text-center leading-[2.75rem] leading-[2.75rem] font-[600] text-4xl sm:text-6xl"
					>
						{props?.title}
					</motion.h1>
				</div>
				<div className="flex flex-col">
					<div className="bg-pink p-6">
						<div className="container mx-auto">
							<div className="flex flex-col lg:flex-row justify-between items-center">
								<div className="flex flex-col justify-center">
									<h2 className="text-white text-center lg:text-left text-lg sm:text-medium lg:text-lg xl:text-3xl font-[500]">
										{props?.subtitle}
									</h2>
									<div
										className={isParagraphContent(props?.paragraph)}
										dangerouslySetInnerHTML={createParagraphMarkup(
											props?.paragraph
										)}
									/>
								</div>
								<motion.div
									variants={fadeInUp}
									className="hidden sm:flex flex-col justify-center items-center lg:items-end gap-2 p-4"
								>
									<Image
										src="/svg/Rating Stars.svg"
										className="w-full h-[200px] object-contain"
										alt="Icon"
										width={125}
										height="25"
									/>
									<motion.button variants={fadeIn}>
										<Link
											href={`${props?.buttonLink?.url}`}
											target={`${props?.buttonLink?.target}`}
										>
											<a className="text-white text-center lg:text-right text-tiny font-[500] hover:text-fadedYellow transition-all ease-in-out duration-[0.5s]">
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
