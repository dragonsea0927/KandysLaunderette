/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import NavbarMenuSublinks from "./NavbarMenuSublinks";

const HeroSectionFour = (props) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 max-w-[65rem] mx-auto mb-5 md:mb-10 font-[400] text-medium sm:text-lg text-center text-white tracking-[0.10rem]";
		} else {
			contentStyling =
				"block mt-4 max-w-[65rem] mx-auto mb-5 md:mb-10 font-[400] text-medium sm:text-lg text-center text-white tracking-[0.10rem]";
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

	// Displays or Removes the Payment Info
	let contentStyling;
	if (props?.displayPaymentInfo === "Yes") {
		contentStyling = "block flex justify-center";
	} else if (props?.displayPaymentInfo === "No") {
		contentStyling = "hidden flex justify-center";
	}

	return (
		<section
			className="bg-cover bg-center bg-[no-repeat]"
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(149, 14, 59, 0.05),
							rgba(149, 14, 59, 0.05)
						),url("${props.backgroundImage}")`,
			}}
		>
			<div
				className="min-h-[40vh] flex flex-col justify-between relative z-[999]"
				style={{backdropFilter: "blur(3px)"}}
			>
				<div className="flex flex-row justify-center gap-4 w-full h-[fit-content]">
					<div className="container mx-auto">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row justify-start items-start gap-10 p-4">
								<Link href="/">
									<a>
										<Image
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
								<Link href="/Login">
									<a className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]">
										Log in
									</a>
								</Link>
								<motion.button
									variants={fadeIn}
									className="rounded-lg py-3 px-8 text-white bg-yellow hover:text-white hover:bg-pink transition-all ease-in-out duration-[0.5s]"
								>
									<Link href="/Login">
										<a className="text-right text-base font-[600] hover:text-white">
											Create an account
										</a>
									</Link>
								</motion.button>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-0 pb-20 md:py-20 md:pb-28 px-0 my-auto">
					<motion.h1
						variants={fadeIn}
						className="text-white text-center text-4xl sm:text-6xl font-[600]  p-4 pt-28 md:pt-20 md:p-0 lg:max-w-[45rem] mx-auto"
					>
						{props?.title}
					</motion.h1>
					<div className="mt-0 sm:mt-8 p-4 lg:p-0">
						<motion.div
							variants={fadeInUp}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
						<ul className={contentStyling}>
							<li className="flex items-center mr-6">
								<svg
									className="mr-2"
									width="19"
									height="19"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3.95831 10.2917L7.12498 13.4584L15.0416 5.54169"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<p className="text-white text-base">No credit card required</p>
							</li>
							<li className="flex items-center">
								<svg
									className="mr-2"
									width="19"
									height="19"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M3.95831 10.2917L7.12498 13.4584L15.0416 5.54169"
										stroke="white"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
								<p className="text-white text-base">Cancel anytime</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionFour;
