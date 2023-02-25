import Link from "next/link";
import Image from "next/image";
import {FunctionComponent} from "react";
import FooterMenuLink from "./FooterMenuLinks";
import styles from "../styles/components/Footer.module.scss";

interface IProps {
	email: string;
	phoneNumber: string;
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

const Footer: FunctionComponent<IProps> = ({
	email,
	phoneNumber,
	IndividualServicesMenuLinks,
}) => {
	return (
		<footer className={styles.footer}>
			<div className="container mx-auto">
				<div className="flex flex-row items-center justify-center gap-8 mx-auto py-14">
					<Link href="/">
						<Image
							src="/svg/facebook.svg"
							alt="Product Image"
							width={20}
							height={20}
						/>
					</Link>
					<Link href="/">
						<Image
							src="/svg/instagram.svg"
							alt="Product Image"
							width={20}
							height={20}
						/>
					</Link>
					<Link href="/">
						<Image
							src="/svg/twitter.svg"
							alt="Product Image"
							width={20}
							height={20}
						/>
					</Link>
					<Link href={`https://wa.me/${phoneNumber}`}>
						<Image
							src="/svg/whatsapp.svg"
							alt="Product Image"
							width={20}
							height={20}
						/>
					</Link>
					<Link href="https://goo.gl/maps/pMZ677fPJ8kFjMug8">
						<Image
							src="/svg/google.svg"
							alt="Product Image"
							width={20}
							height={20}
						/>
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-6 border-t-solid border-t-[0.05rem] border-t-grey">
					<div className="flex flex-col mt-4 gap-x-3">
						<h2>
							<strong>Services</strong>
						</h2>
						<Link href="/LaundryAndDryCleaning/IndividualService">
							Individual Services
						</Link>
						<Link href="/LaundryAndDryCleaning/CommercialServices">
							Commercial Services
						</Link>
						{/* Menu Array from Wordpress */}
						{IndividualServicesMenuLinks?.map((keys) => (
							<FooterMenuLink
								key={keys?.node?.id}
								linkUrl={keys?.node?.uri}
								linkName={keys?.node?.label}
							/>
						))}
					</div>
					<div className="flex flex-col mt-4 gap-x-3">
						<h2>
							<strong>About Us</strong>
						</h2>
						<Link href="/Services/#twitterTestimonial">Customer Reviews</Link>
						<Link href="/HowItWorks">How It Works</Link>
						<Link href="/Services">Services</Link>
						<Link href="/Prices">Prices</Link>
						<Link href="/AboutUs">About Us</Link>
						<Link href="/ContactUs">Contact Us</Link>
					</div>
					<div className="flex flex-col mt-4 gap-x-3">
						<h2>
							<strong>Customer Support</strong>
						</h2>
						<Link href="/Support">Support</Link>
						<Link href="/PaymentOptions">Payment Options</Link>
						<Link href="/DiscountsPromotions">Discounts & Promotions</Link>
						<Link href="/CollectionDelivery">Collection & Delivery</Link>
					</div>
					<div className="flex flex-col mt-4 gap-x-3">
						<h2>
							<strong>Contact Us</strong>
						</h2>
						<Link href="/ContactUs">Opening Times</Link>
						<Link href={`mailto:${email}`}>{email}</Link>
						<Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
						<Link href="/ContactUs">Help</Link>
					</div>
				</div>
				<div className="mt-8 border-t-solid border-t-grey border-t-[0.05rem]">
					<div className="flex flex-row justify-center p-4">
						<Image
							src="/img/Wales Flag.png"
							alt="Product Image"
							width={20}
							height={20}
						/>
						<h4 className="px-3 text-sm text-black">Wales | </h4>
						<Image
							src="/img/United Kingdom Flag.png"
							alt="Product Image"
							width={20}
							height={20}
						/>
						<h4 className="px-3 text-sm text-black">United Kingdom (GBP)</h4>
					</div>
					<div className="mb-4 border-solid border-t-[0.05rem] border-t-grey">
						<ul className="flex flex-row items-center justify-center gap-4 py-4">
							<Link href="/TermsConditions">Terms & Conditions</Link>
							<div> | </div>
							<Link href="/PrivacyPolicy">Privacy Policy</Link>
							<div> | </div>
							<Link href="/Sustainability">Sustainability</Link>
						</ul>
						<div>
							<h5 className="mt-8 mb-4 text-sm text-center text-black">
								&copy; 2022 Kandy&apos;s Launderette. All Rights Reserved
								<br></br>
								High St, Swansea
							</h5>
							<Link href="https://todd-owen-mpeli.github.io/Web-Developer-Portfolio-Final-/src/index.html">
								<span className="flex flex-row items-center justify-center gap-1 text-sm text-black">
									Website by
									<span className="text-sm text-fadedPink hover:text-pink transition-all ease-in-out duration-[0.5s]">
										ToddBlue Studio
									</span>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
