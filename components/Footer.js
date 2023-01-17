import Link from "next/link";
import Image from "next/image";
import FooterMenuLinks from "./FooterMenuLinks";
import styles from "../styles/components/Footer.module.scss";

const Footer = (props) => {
	return (
		<footer className={styles.footer}>
			<div className="container mx-auto">
				<div>
					<div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6 py-14">
						<div className="flex flex-col px-2">
							<h2 className="text-center lg:text-left">
								<strong>Don’t miss our latest updates</strong>
							</h2>
							<p className="text-center lg:text-left text-sm text-black mt-4">
								Be the first to know about new discounts, services and offers.
								By choosing to sign up, you will join our mailing list. You can
								opt out at any time.
							</p>
						</div>
						<div className="mx-auto">
							<form className="flex flex-row justify-center items-center">
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="Enter email address"
									className="p-2 text-left text-black text-sm w-auto lg:w-[350px] border-solid border-[0.05rem] border-black"
								/>
								<button
									className="border-none py-[0.60rem] px-4 tracking-[0.1rem] uppercase text-white text-sm font-[400] bg-black hover:bg-fadedPink hover:ease-in-out hover:duration-[0.5s]"
									type="submit"
								>
									Sign Up
								</button>
							</form>
						</div>
						<div className="flex flex-row justify-between items-center py-4 mx-auto gap-8">
							<Link href="/">
								<a className="text-medium" target="blank">
									<Image
										src="/svg/facebook.svg"
										alt="Product Image"
										width={20}
										height={20}
										objectFit="contain"
									/>
								</a>
							</Link>
							<Link href="/">
								<a target="blank">
									<Image
										src="/svg/instagram.svg"
										alt="Product Image"
										width={20}
										height={20}
										objectFit="contain"
									/>
								</a>
							</Link>
							<Link href="/">
								<a target="blank">
									<Image
										src="/svg/twitter.svg"
										alt="Product Image"
										width={20}
										height={20}
										objectFit="contain"
									/>
								</a>
							</Link>
							<Link href={`https://wa.me/${props?.phoneNumber}`}>
								<a target="blank">
									<Image
										src="/svg/whatsapp.svg"
										alt="Product Image"
										width={20}
										height={20}
										objectFit="contain"
									/>
								</a>
							</Link>
							<Link href="https://goo.gl/maps/pMZ677fPJ8kFjMug8">
								<a target="blank">
									<Image
										src="/svg/google.svg"
										alt="Product Image"
										width={20}
										height={20}
										objectFit="contain"
									/>
								</a>
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-6 border-t-solid border-t-[0.05rem] border-t-grey">
						<div className="flex flex-col mt-4 gap-x-3">
							<h2>
								<strong>Services</strong>
							</h2>
							<Link href="/LaundryDryCleaning">
								<a>Laundry Dry Cleaning</a>
							</Link>
							{/* Menu Array from Wordpress */}
							{props?.serviceMenuLinks?.map((keys) => (
								<FooterMenuLinks
									Key={keys?.id}
									linkUrl={keys?.node?.uri}
									linkName={keys?.node?.label}
								/>
							))}
							<Link href="/services" target="blank">
								<a>More Services</a>
							</Link>
						</div>
						<div className="flex flex-col mt-4 gap-x-3">
							<h2>
								<strong>About Us</strong>
							</h2>
							<Link href="#customerReviews" target="blank">
								<a>Customer Reviews</a>
							</Link>
							<Link href="/HowItWorks" target="blank">
								<a>How It Works</a>
							</Link>
							<Link href="/services" target="blank">
								<a>Self-Service</a>
							</Link>
							<Link href="/prices" target="blank">
								<a>Prices</a>
							</Link>
						</div>
						<div className="flex flex-col mt-4 gap-x-3">
							<h2>
								<strong>Customer Support</strong>
							</h2>
							<Link href="#support" target="blank">
								<a>Support</a>
							</Link>
							<Link href="#privacy" target="blank">
								<a>Privacy</a>
							</Link>
							<Link href="#paymentOptions" target="blank">
								<a>Payment Options</a>
							</Link>
							<Link href="#studentDiscounts" target="blank">
								<a>Discounts & Promotions</a>
							</Link>
							<Link href="/termsAndConditions" target="blank">
								<a>Collection & Delivery</a>
							</Link>
						</div>
						<div className="flex flex-col mt-4 gap-x-3">
							<h2>
								<strong>Contact Us</strong>
							</h2>
							<Link href="/#contactBannerTwo">
								<a>Opening Times</a>
							</Link>
							<Link href={`mailto:${props?.email}`} target="blank">
								<a>{props?.email}</a>
							</Link>
							<Link href={`tel:${props?.phoneNumber}`} target="blank">
								<a>{props?.phoneNumber}</a>
							</Link>
							<Link href="#help" target="blank">
								<a>Help</a>
							</Link>
						</div>
					</div>
					<div className="mt-8 border-t-solid border-t-grey border-t-[0.05rem]">
						<div className="flex flex-row p-4 justify-center">
							<Image
								src="/img/Wales Flag.png"
								alt="Product Image"
								width={20}
								height={20}
								objectFit="contain"
							/>
							<h4 className="px-3 text-sm text-black">Wales | </h4>
							<Image
								src="/img/United Kingdom Flag.png"
								alt="Product Image"
								width={20}
								height={20}
								objectFit="contain"
							/>
							<h4 className="px-3 text-sm text-black">United Kingdom (GBP)</h4>
						</div>
						<div className="mb-4 border-solid border-t-[0.05rem] border-t-grey">
							<ul className="flex flex-row justify-center items-center py-4 gap-4">
								<Link href="/TermsConditions" target="blank">
									<a>Terms & Conditions</a>
								</Link>
								<div> | </div>
								<Link href="/PrivacyPolicy" target="blank">
									<a>Privacy Policy</a>
								</Link>
								<div> | </div>
								<Link href="/Accessibility" target="blank">
									<a>Accessibility</a>
								</Link>
							</ul>
							<div>
								<h5 className="text-black text-sm text-center mb-4 mt-8">
									&copy; 2022 Kandy's Launderette. All Rights Reserved
									<br></br>
									High St, Swansea
								</h5>
								<Link href="https://todd-owen-mpeli.github.io/Web-Developer-Portfolio-Final-/src/index.html">
									<span className="text-sm flex flex-row justify-center items-center gap-1">
										Website by
										<a target="blank">
											<span className="text-sm text-fadedPink hover:text-pink hover:ease-in-out hover:duration-[0.5s]">
												ToddBlue Studio
											</span>
										</a>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
