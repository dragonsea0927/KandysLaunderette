/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
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
		<section className={styles.Navbar}>
			<div className="container mx-auto p-0">
				<div className="flex justify-between">
					<div className="my-auto">
						<Link href="/">
							<a className="uppercase my-auto px-2 text-3xl font-[500] text-white hover:text-fadedPinkTwo hover:ease-in-out hover:duration-[0.5s]">
								Kandys
							</a>
						</Link>
					</div>
					<ul className="my-auto py-3 flex justify-center gap-4 text-sm text-white">
						<Link href="/aboutUs">
							<a className="p-3 text-white text-sm text-left font-[400] tracking-[0.05rem] hover:text-yellow hover:ease-in-out hover:duration-[0.5s]">
								About us
							</a>
						</Link>
						<Link href="/HowItWorks">
							<a className="p-3 text-white text-sm text-left font-[400] tracking-[0.05rem] hover:text-yellow hover:ease-in-out hover:duration-[0.5s]">
								How it works
							</a>
						</Link>
						<div className="menuLink relative">
							<span className="flex flex-row justify-center items-center">
								<Link href="/services">
									<a className="p-3 text-white text-sm text-left font-[400] tracking-[0.05rem] hover:text-yellow hover:ease-in-out hover:duration-[0.5s]">
										Services
									</a>
								</Link>
								<img
									width="21px"
									height="21px"
									alt="White Arrow Icon"
									className="cursor-pointer"
									src="/svg/Navigation Menu Dropdown Arrow.png"
									onClick={displayServicesMenu}
								/>
							</span>
							{servicesMenusOpen ? (
								<div className="flex flex-col justify-center absolute w-[max-content] bg-pink rounded-b-lg mt-5">
									{/* Laundry Dry Cleaning Menu Links*/}
									<div>
										<div className="hover:rounded-t-lg hover:bg-fadedPink hover:ease-in-out hover:duration-[0.5s]">
											<span className="flex flex-row py-3 px-6 justify-center items-center">
												<Link href="/LaundryDryCleaning">
													<a className="w-full text-white text-tiny text-left font-[400] tracking-[0.05rem] ">
														Laundry Dry Cleaning
													</a>
												</Link>
												<img
													width="25px"
													height="25px"
													alt="White Arrow Icon"
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
							<a className="p-3 text-white text-sm text-left font-[400] tracking-[0.05rem] hover:text-yellow hover:ease-in-out hover:duration-[0.5s]">
								Prices
							</a>
						</Link>
						<Link href="/contactUs">
							<a className="p-3 text-white text-sm text-left font-[400] tracking-[0.05rem] hover:text-yellow hover:ease-in-out hover:duration-[0.5s]">
								Contact Us
							</a>
						</Link>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
