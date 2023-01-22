/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useState} from "react";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";
import NavbarMenuSublinks from "./NavbarMenuSublinks";
import styles from "../styles/components/Navbar.module.scss";

const Navbar = (props) => {
	// Display Services sublinks
	const [servicesMenusOpen, setServicesMenuOpen] = useState(false);
	const [laundryDryCleaningMenuOpen, setLaundryDryCleaningMenuOpen] =
		useState(false);

	function displayServicesMenu() {
		setServicesMenuOpen(!servicesMenusOpen);
	}

	function displayLaundryDryCleaningMenu() {
		setLaundryDryCleaningMenuOpen(!laundryDryCleaningMenuOpen);
	}

	return (
		<section className={styles.navbar}>
			<div className="w-full z-[999] bg-white h-[fit-content]">
				<div className="container mx-auto py-5">
					<div className="flex justify-between">
						<div className="flex flex-row justify-start items-center gap-10">
							<div className="my-auto">
								<Link href="/">
									<a className="uppercase my-auto px-2 text-3xl font-[500] text-fadedPinkThree hover:text-fadedPinkThree hover:ease-in-out hover:duration-[0.5s]">
										Kandys
									</a>
								</Link>
							</div>
							<ul className="hidden my-auto py-3 lg:flex justify-center gap-8 text-sm text-black">
								<Link href="/HowItWorks">
									<a className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree hover:ease-in-out hover:duration-[0.5s]">
										How it works
									</a>
								</Link>
								<div className="menuLink relative">
									<span className="flex flex-row justify-center items-center gap-2 ">
										<Link href="/services">
											<a className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree hover:ease-in-out hover:duration-[0.5s]">
												Services
											</a>
										</Link>
										<img
											width="21px"
											height="21px"
											alt="black Arrow Icon"
											className="cursor-pointer"
											src="/svg/Navigation Menu Dropdown Arrow bLACK.png"
											onClick={displayServicesMenu}
										/>
									</span>
									{servicesMenusOpen ? (
										<div className="flex flex-col justify-center absolute z-[999] w-[max-content] bg-pink rounded-lg mt-5">
											{/* Laundry Dry Cleaning Menu Links*/}
											<div>
												<div className="hover:rounded-t-lg hover:bg-fadedPink hover:ease-in-out hover:duration-[0.5s]">
													<span className="flex flex-row py-3 px-6 justify-center items-center">
														<Link href="/LaundryDryCleaning">
															<a className="w-full text-white text-base text-left font-[400] tracking-[0.05rem] ">
																Laundry Dry Cleaning
															</a>
														</Link>
														<img
															width="25px"
															height="25px"
															alt="white Arrow Icon"
															className="cursor-pointer"
															src="/svg/Navigation Menu Dropdown Arrow.png"
															onClick={displayLaundryDryCleaningMenu}
														/>
													</span>
												</div>
												{laundryDryCleaningMenuOpen ? (
													<div className="flex flex-col justify-center bg-darkPink">
														{/* Menu Array from Wordpress */}
														{props?.laundryDryCleaningMenuLinks?.map((keys) => (
															<NavbarMenuSublinks
																Key={keys?.id}
																linkUrl={keys?.node?.uri}
																linkName={keys?.node?.label}
															/>
														))}
													</div>
												) : null}
											</div>
											{/* Menu Array from Wordpress */}
											{props?.serviceMenuLinks?.map((keys) => (
												<NavbarMenuSublinks
													Key={keys?.id}
													linkUrl={keys?.node?.uri}
													linkName={keys?.node?.label}
												/>
											))}
										</div>
									) : null}
								</div>
								<Link href="/prices">
									<a className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree hover:ease-in-out hover:duration-[0.5s]">
										Prices
									</a>
								</Link>
								<Link href="/aboutUs">
									<a className="text-black text-base text-left font-[400] tracking-[0.05rem] hover:text-fadedPinkThree hover:ease-in-out hover:duration-[0.5s]">
										About us
									</a>
								</Link>
							</ul>
						</div>
						<div className="hidden md:flex justify-center items-center gap-4">
							<Link href="/HowItWorks">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-black hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Log in
								</a>
							</Link>
							<motion.button
								variants={fadeIn}
								className="rounded-lg py-3 px-8 text-white bg-pink hover:text-white hover:bg-yellow hover:ease-in-out hover:duration-[0.5s]"
							>
								<Link href="/">
									<a className="text-right text-base font-[600] hover:text-white hover:ease-in-out hover:duration-[0.5s]">
										Book Now
									</a>
								</Link>
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
