/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {useState, FunctionComponent} from "react";
import {fadeIn, fadeInUp} from "../animations/animations";

// Components
import NavbarMenuSublinks from "./NavbarMenuSublinks";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	displayPaymentInfo: string;
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

const HeroSectionFour: FunctionComponent<IProps> = ({
	title,
	paragraph,
	backgroundImage,
	displayPaymentInfo,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
}) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 max-w-[65rem] mx-auto mb-5 md:mb-10 font-[400] text-medium sm:text-lg text-center text-white";
		} else {
			contentStyling =
				"block mt-4 max-w-[65rem] mx-auto mb-5 md:mb-10 font-[400] text-medium sm:text-lg text-center text-white";
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

	// Displays or Removes the Payment Info
	let contentStyling: string;
	if (displayPaymentInfo === "Yes") {
		contentStyling = "block flex justify-center";
	} else if (displayPaymentInfo === "No") {
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
						),url("${backgroundImage}")`,
			}}
		>
			<div
				className="min-h-[40vh] flex flex-col justify-between relative z-[999]"
				style={{backdropFilter: "blur(3px)"}}
			>
				<div className="flex flex-row justify-center gap-4 w-full h-[fit-content]">
					<div className="container mx-auto">
						<div className="flex flex-row items-center justify-between">
							<div className="flex flex-row items-start justify-start gap-10 p-4">
								<Link href={`/`}>
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
										href="/HowItWorks"
										className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
									>
										How it works
									</Link>
									<div className="relative menuLink ">
										<span className="flex flex-row items-center justify-center">
											<Link
												href=" /Services"
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
																href="/LaundryAndDryCleaning/IndividualService"
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
																href="/LaundryAndDryCleaning/CommercialServices"
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
										href="/Prices"
										className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
									>
										Prices
									</Link>
									<Link
										href="/AboutUs"
										className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
									>
										About us
									</Link>
								</ul>
							</div>
							<div className="items-center justify-center hidden gap-4 p-4 md:flex">
								<Link
									href="/Login"
									className="my-auto px-2 text-base tracking-[0.05rem] text-white hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
								>
									Log in
								</Link>
								<button className="rounded-lg py-3 px-8 text-white bg-yellow hover:text-white hover:bg-pink transition-all ease-in-out duration-[0.5s]">
									<Link
										href="/Login"
										className="text-right text-base font-[600] hover:text-white"
									>
										Create an account
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="px-0 pt-0 pb-20 my-auto md:py-20 md:pb-28">
					<motion.h1
						variants={fadeIn}
						className="text-white text-center text-4xl sm:text-6xl font-[600]  p-4 pt-28 md:pt-20 md:p-0 lg:max-w-[45rem] mx-auto"
					>
						{title}
					</motion.h1>
					<div className="p-4 mt-0 sm:mt-8 lg:p-0">
						<motion.div
							variants={fadeInUp}
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
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
								<p className="text-base text-white">No credit card required</p>
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
								<p className="text-base text-white">Cancel anytime</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionFour;
