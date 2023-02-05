import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";
import NavbarMenuSublinks from "./NavbarMenuSublinks";

const Subscriptions = (props) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-darkGrey text-center text-medium";
		} else {
			contentStyling = "block text-darkGrey text-center text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="pt-24 pb-32 bg-lightGrey overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="max-w-[75rem] mx-auto mb-28 flex flex-col justify-between m-4">
					<h2 className="font-[600] text-black text-center text-3xl lg:text-5xl py-8">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</div>
				<div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-8 overflow-hidden rounded-lg">
					<div className="w-full xl:w-1/4">
						<div
							className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90  rounded-lg"
							style={{backdropFilter: "blur(46px)"}}
						>
							<span className="mb-3 inline-block text-tiny text-pink font-semibold uppercase tracking-px leading-snug">
								Free
							</span>
							<p className="mb-6 text-darkGrey font-[400] leading-relaxed">
								Best for everyday laundry, bedsheets and towels. For delicate
								items and fabrics.
							</p>
							<h3 className="mb-1 text-4xl text-black font-bold leading-tight">
								<span>£0</span>
								<span className="text-black">/mo</span>
							</h3>
							<p className="mb-8 text-sm text-black font-medium leading-relaxed">
								No credit card required
							</p>
							<button
								className="mb-9 py-4 px-9 w-full font-medium text-black border border-pink hover:border-fadedPinkThree rounded-xl focus:ring focus:ring-fadedPinkThree bg-white hover:text-white hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
								type="button"
							>
								<Link href={`/Login`} target={``}>
									<a>Get Started Now</a>
								</Link>
							</button>
							<ul>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">3 Team Members</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										1200+ UI Blocks
									</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										10 GB Cloud Storage
									</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										Individual Email Account
									</p>
								</li>
								<li className="flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										Premium Support
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full xl:w-1/4">
						<div
							className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90 rounded-lg"
							style={{backdropFilter: "blur(46px)"}}
						>
							<div className="relative z-10">
								<span className="mb-3 inline-block text-tiny text-pink font-semibold uppercase tracking-px leading-snug">
									Standard
								</span>
								<p className="mb-6 text-darkGrey font-[400] leading-relaxed">
									Best for everyday laundry, bedsheets and towels. For delicate
									items and fabrics.
								</p>
								<h3 className="mb-1 text-4xl text-black font-bold leading-tight">
									<span>£19.99</span>
									<span className="text-black">/mo</span>
								</h3>
								<p className="mb-8 text-sm text-black font-[400] leading-relaxed">
									Monthly Yearly
								</p>
								<button
									className="mb-9 py-4 px-9 w-full font-medium text-black border border-pink hover:border-fadedPinkThree rounded-xl focus:ring focus:ring-fadedPinkThree bg-white hover:text-white hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
									type="button"
								>
									<Link href={`/Login`} target={``}>
										<a>Get Started Now</a>
									</Link>
								</button>
								<ul>
									<li className="mb-4 flex items-center">
										<svg
											className="mr-2"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
												stroke="#dd4577"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
										<p className="font-semibold leading-normal">
											3 Team Members
										</p>
									</li>
									<li className="mb-4 flex items-center">
										<svg
											className="mr-2"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
												stroke="#dd4577"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
										<p className="font-semibold leading-normal">
											1200+ UI Blocks
										</p>
									</li>
									<li className="mb-4 flex items-center">
										<svg
											className="mr-2"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
												stroke="#dd4577"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
										<p className="font-semibold leading-normal">
											10 GB Cloud Storage
										</p>
									</li>
									<li className="mb-4 flex items-center">
										<svg
											className="mr-2"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
												stroke="#dd4577"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
										<p className="font-semibold leading-normal">
											Individual Email Account
										</p>
									</li>
									<li className="flex items-center">
										<svg
											className="mr-2"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
												stroke="#dd4577"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
										<p className="font-semibold leading-normal">
											Premium Support
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-1/4">
						<div
							className="px-9 pt-8 pb-11 h-full bg-blue bg-opacity-90 rounded-lg"
							style={{backdropFilter: "blur(46px)"}}
						>
							<span className="mb-3 inline-block text-tiny text-fadedYellow font-semibold uppercase tracking-px leading-snug">
								Pro
							</span>
							<p className="mb-6 text-white font-[400] leading-relaxed">
								Best for everyday laundry, bedsheets and towels. For delicate
								items and fabrics.
							</p>
							<h3 className="mb-1 text-4xl text-white font-bold leading-tight">
								<span>£29.99</span>
								<span className="text-white">/mo</span>
							</h3>
							<p className="mb-8 text-sm text-white font-medium leading-relaxed">
								Billed Yearly
							</p>
							<button
								className="mb-9 py-4 px-9 w-full text-white font-semibold rounded-xl focus:ring focus:ring-yellow bg-yellow hover:bg-fadedYellow transition-all ease-in-out duration-[0.5s]"
								type="button"
							>
								<Link href={`/Login`} target={``}>
									<a>Get Started Now</a>
								</Link>
							</button>
							<ul>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#fff"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold text-white leading-normal">
										3 Team Members
									</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#fff"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold text-white leading-normal">
										1200+ UI Blocks
									</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#fff"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold text-white leading-normal">
										10 GB Cloud Storage
									</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#fff"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold text-white leading-normal">
										Individual Email Account
									</p>
								</li>
								<li className="flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#fff"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold text-white leading-normal">
										Premium Support
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full xl:w-1/4">
						<div
							className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90 rounded-lg"
							style={{backdropFilter: "blur(46px)"}}
						>
							<span className="mb-3 inline-block text-tiny text-pink font-semibold uppercase tracking-px leading-snug">
								Commercial Business
							</span>
							<p className="mb-6 text-darkGrey font-[400] leading-relaxed">
								Starting from £49.99, best for hotels, restaurants, cafes, spas
								and salons.
							</p>
							<h3 className="mb-1 text-4xl text-black font-bold leading-tight">
								Contact us
							</h3>
							<p className="mb-8 text-sm text-black font-medium leading-relaxed">
								for custom offer
							</p>
							<button
								className="mb-9 py-4 px-9 w-full font-medium text-black border border-pink hover:border-fadedPinkThree rounded-xl focus:ring focus:ring-fadedPinkThree bg-white hover:text-white hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
								type="button"
							>
								<Link href={`/Login`} target={``}>
									<a>Get Started Now</a>
								</Link>
							</button>
							<ul>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">3 Team Members</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										1200+ UI Blocks
									</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										10 GB Cloud Storage
									</p>
								</li>
								<li className="mb-4 flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										Individual Email Account
									</p>
								</li>
								<li className="flex items-center">
									<svg
										className="mr-2"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
											stroke="#dd4577"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										></path>
									</svg>
									<p className="font-semibold leading-normal">
										Premium Support
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscriptions;
