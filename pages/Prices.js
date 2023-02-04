/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getLatestTwoPosts} from "../lib/blogPosts";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import FAQTwo from "../components/FAQTwo";
import SignUpTwo from "../components/SignUpTwo";
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import BlogBanner from "../components/BlogBanner";
import HeroSection from "../components/HeroSection";
import TeamMembers from "../components/TeamMembers";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TwitterTestimonialGrid from "../components/TwitterTestimonialGrid";

const Prices = ({
	seo,
	pageTitle,
	latestTwoPosts,
	pricesPageContent,
	themesOptionsContent,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
}) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			{/* <!--===== NAVBAR =====--> */}
			<Navbar
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
				IndividualServicesMenuLinks={
					IndividualServicesMenuLinks?.IndividualServicesMenuLinks
				}
			/>

			<main>
				<section className="bg-darkPink background-animate overflow-hidden">
					<div className="flex items-center justify-between px-8 py-5">
						<div className="w-auto">
							<div className="flex flex-wrap items-center">
								<div className="w-auto mr-14">
									<a href="#">
										<img
											src="gradia-assets/logos/gradia-name-white.svg"
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="w-auto hidden lg:block">
							<ul className="flex items-center mr-10">
								<li className="mr-9 text-white hover:text-gray-200 text-lg">
									<a href="#">Features</a>
								</li>
								<li className="mr-9 text-white hover:text-gray-200 text-lg">
									<a href="#">Solutions</a>
								</li>
								<li className="mr-9 text-white hover:text-gray-200 text-lg">
									<a href="#">Resources</a>
								</li>
								<li className="text-white hover:text-gray-200 text-lg">
									<a href="#">Pricing</a>
								</li>
							</ul>
						</div>
						<div className="w-auto">
							<div className="flex flex-wrap items-center">
								<div className="w-auto hidden lg:block">
									<button className="block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10">
										Start Free Trial
									</button>
								</div>
								<div className="w-auto lg:hidden">
									<a href="#">
										<svg
											className="navbar-burger text-gray-800"
											width="51"
											height="51"
											viewBox="0 0 56 56"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<rect
												width="56"
												height="56"
												rx="28"
												fill="currentColor"
											></rect>
											<path
												d="M37 32H19M37 24H19"
												stroke="white"
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="relative container mx-auto px-4">
						<img
							className="hidden xl:block absolute bottom-64 left-56 transform -translate-y-4"
							src="gradia-assets/elements/hero/line2.svg"
							alt=""
						/>
						<img
							className="hidden xl:block absolute bottom-64 right-56 transform -translate-y-28"
							src="gradia-assets/elements/hero/line3.svg"
							alt=""
						/>
						<div className="relative z-10 flex flex-wrap justify-center items-center -m-6 lg:pt-32 pb-36">
							<div className="w-full lg:w-auto p-6 self-start">
								<img
									className="xl:relative xl:-top-20 mx-auto"
									src="gradia-assets/images/hero/avatar-message.png"
									alt=""
								/>
							</div>
							<div className="flex-1 p-6">
								<div className="lg:max-w-2xl mx-auto">
									<div className="mb-6 flex items-center max-w-max mx-auto px-5 py-2.5 uppercase font-semibold text-xs tracking-px text-white bg-white bg-opacity-20 rounded-lg">
										<svg
											className="mr-2"
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M6.33427 2.74895C6.54382 2.10403 7.45621 2.10403 7.66575 2.74895L8.41445 5.0532C8.50816 5.34162 8.77693 5.53689 9.08019 5.53689H11.503C12.1811 5.53689 12.4631 6.40462 11.9145 6.8032L9.95436 8.22731C9.70902 8.40556 9.60636 8.72152 9.70007 9.00994L10.4488 11.3142C10.6583 11.9591 9.92018 12.4954 9.37158 12.0968L7.41146 10.6727C7.16612 10.4945 6.8339 10.4945 6.58856 10.6727L4.62844 12.0968C4.07985 12.4954 3.34171 11.9591 3.55126 11.3142L4.29995 9.00994C4.39367 8.72152 4.29101 8.40556 4.04566 8.22731L2.08555 6.8032C1.53695 6.40462 1.81889 5.53689 2.497 5.53689H4.91984C5.22309 5.53689 5.49186 5.34162 5.58558 5.0532L6.33427 2.74895Z"
												fill="white"
											></path>
										</svg>
										<p>Rated #2 on G2</p>
									</div>
									<h1 className="mb-6 text-center text-white text-7xl md:text-9xl xl:text-12xl font-bold">
										Customer service that actually works
									</h1>
									<p className="mb-10 font-medium text-xl text-center text-white">
										Velit officia consequat duis enim velit mollit. Exercitation
										veniam consequat.
									</p>
									<button className="group mb-9 relative flex items-center justify-center px-24 py-5 mx-auto w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-grey overflow-hidden rounded-md">
										<div className="absolute transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gradient-fuchsia"></div>
										<p className="relative z-10 mr-2">Get started now</p>
										<svg
											className="relative z-10"
											width="19"
											height="18"
											viewBox="0 0 19 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M9.49999 16.2C13.4764 16.2 16.7 12.9764 16.7 8.99999C16.7 5.02354 13.4764 1.79999 9.49999 1.79999C5.52354 1.79999 2.29999 5.02354 2.29999 8.99999C2.29999 12.9764 5.52354 16.2 9.49999 16.2ZM12.8364 8.36359L10.1364 5.66359C9.78491 5.31212 9.21506 5.31212 8.86359 5.66359C8.51212 6.01506 8.51212 6.58491 8.86359 6.93638L10.0272 8.09999L6.79999 8.09999C6.30293 8.09999 5.89999 8.50293 5.89999 8.99999C5.89999 9.49704 6.30293 9.89999 6.79999 9.89999H10.0272L8.86359 11.0636C8.51212 11.4151 8.51212 11.9849 8.86359 12.3364C9.21506 12.6879 9.78491 12.6879 10.1364 12.3364L12.8364 9.63638C13.1879 9.28491 13.1879 8.71506 12.8364 8.36359Z"
												fill="white"
											></path>
										</svg>
									</button>
									<ul className="flex justify-center">
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
											<p className="text-white text-base">
												No credit card required
											</p>
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
							<div className="w-full lg:w-auto p-6 self-end">
								<img
									className="xl:relative xl:-bottom-10 mx-auto"
									src="gradia-assets/images/hero/avatar-message2.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</section>

				{/* PRICING */}
				<section className="pt-24 pb-32 bg-darkPink overflow-hidden">
					<div className="container px-4 mx-auto">
						<div className="mb-16 flex flex-col justify-between m-4">
							<h2 className="font-[600] text-white text-center text-3xl lg:text-5xl py-8">
								Try Flaro, Grow Fast
							</h2>
							<p className="text-white text-center text-medium">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elemen tum.
							</p>
						</div>
						<div className="overflow-hidden rounded-lg">
							<div className="flex flex-row gap-8">
								<div className="w-full md:w-1/2 lg:w-1/4">
									<div
										className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90  rounded-lg"
										style={{backdropFilter: "blur(46px)"}}
									>
										<span className="mb-3 inline-block text-tiny text-pink font-semibold uppercase tracking-px leading-snug">
											Free
										</span>
										<p className="mb-6 text-darkGrey font-[400] leading-relaxed">
											For everyday laundry, bedsheets and towels. For delicate
											items and fabrics.
										</p>
										<h3 className="mb-1 text-4xl text-black font-bold leading-tight">
											<span>£0</span>
											<span className="text-black">/mo</span>
										</h3>
										<p className="mb-8 text-sm text-grey font-medium leading-relaxed">
											No credit card required
										</p>
										<button
											className="mb-9 py-4 px-9 w-full font-medium text-white border border-pink hover:border-fadedPinkThree rounded-xl focus:ring focus:ring-fadedPinkThree bg-pink hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
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
												<p className="text-blue font-semibold leading-normal">
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
												<p className="text-blue font-semibold leading-normal">
													Premium Support
												</p>
											</li>
										</ul>
									</div>
								</div>
								<div className="w-full md:w-1/2 lg:w-1/4">
									<div
										className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90 rounded-lg"
										style={{backdropFilter: "blur(46px)"}}
									>
										<div className="relative z-10">
											<span className="mb-3 inline-block text-tiny text-pink font-semibold uppercase tracking-px leading-snug">
												Standard
											</span>
											<p className="mb-6 text-darkGrey font-[400] leading-relaxed">
												For everyday laundry, bedsheets and towels. For delicate
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
												className="mb-9 py-4 px-9 w-full font-medium text-white border border-pink hover:border-fadedPinkThree rounded-xl focus:ring focus:ring-fadedPinkThree bg-pink hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
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
								<div className="w-full md:w-1/2 lg:w-1/4">
									<div
										className="px-9 pt-8 pb-11 h-full bg-blue bg-opacity-90 rounded-lg"
										style={{backdropFilter: "blur(46px)"}}
									>
										<span className="mb-3 inline-block text-tiny text-white font-semibold uppercase tracking-px leading-snug">
											Pro
										</span>
										<p className="mb-6 text-white font-[400] leading-relaxed">
											Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
											Egestas lacus, blan dit pellentesque.
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
											Get Started Now
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
								<div className="w-full md:w-1/2 lg:w-1/4">
									<div
										className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90 rounded-lg"
										style={{backdropFilter: "blur(46px)"}}
									>
										<span className="mb-3 inline-block text-tiny text-pink font-semibold uppercase tracking-px leading-snug">
											Enterprise
										</span>
										<p className="mb-6 text-darkGrey font-[400] leading-relaxed">
											Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
											Egestas lacus, blan dit pellentesque.
										</p>
										<h3 className="mb-1 text-4xl text-black font-bold leading-tight">
											Contact us
										</h3>
										<p className="mb-8 text-sm text-grey font-medium leading-relaxed">
											for custom offer
										</p>
										<button
											className="mb-9 py-4 px-9 w-full font-medium text-white border border-pink hover:border-fadedPinkThree rounded-xl focus:ring focus:ring-fadedPinkThree bg-pink hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
											type="button"
										>
											Get Started Now
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
						</div>
					</div>
				</section>

				{/* JOIN COMMUNITY */}
				{/* <section className="py-10 bg-white sm:py-16 lg:py-24">
					<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
						<div className="max-w-2xl mx-auto text-center">
							<div className="flex items-center justify-center">
								<div className="w-20 h-20 -mr-6 overflow-hidden bg-grey rounded-full">
									<img
										className="object-cover w-full h-full"
										src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-zen-chung-5745169-min-scaled.jpg"
										alt=""
									/>
								</div>

								<div className="relative overflow-hidden bg-grey border-8 border-white rounded-full w-28 h-28">
									<img
										className="object-cover w-full h-full"
										src="http://kandyslaunderette.local/wp-content/uploads/2023/01/karsten-winegeart-bwDnRf-r4u8-unsplash.jpg"
										alt=""
									/>
								</div>

								<div className="w-20 h-20 -ml-6 overflow-hidden bg-grey rounded-full">
									<img
										className="object-cover w-full h-full"
										src="http://kandyslaunderette.local/wp-content/uploads/2023/01/joseph-kellner-aDkBeKmNFYM-unsplash-scaled.jpg"
										alt=""
									/>
								</div>
							</div>

							<h2 className="font-[600] text-3xl lg:text-5xl pt-4">
								Join <span className="border-b-4 border-yellow">5,482 </span>
								community members
							</h2>
							<p className="max-w-xl mx-auto mt-6 text-medium text-darkGrey md:mt-10">
								Your laundry and dry cleaning solution just a click away.
							</p>

							<Link href={`/`} target={``}>
								<a
									title=""
									className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all ease-in-out duration-[0.5s] bg-pink border border-transparent rounded-lg lg:mt-12 hover:bg-yellow focus:bg-blue"
									role="button"
								>
									<svg
										className="w-5 h-5 mr-2 -ml-1"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
									Get instant access
								</a>
							</Link>
						</div>
					</div>
				</section> */}

				{/* OUR PERFORMANCE */}
				<section className="py-10 bg-white sm:py-16 lg:py-24">
					<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="text-center">
							<h2 className="font-[600] text-3xl lg:text-5xl">
								Numbers tell the hard works we’ve done in last 2+ years
							</h2>
						</div>

						<div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
							<div className="overflow-hidden bg-white border border-grey rounded-lg">
								<div className="px-4 py-6">
									<div className="flex items-start">
										<svg
											className="flex-shrink-0 w-12 h-12 text-pink"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1"
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
										<div className="ml-4">
											<h4 className="text-4xl text-pink">2+</h4>
											<p className="mt-1.5 text-medium flex gap-2 leading-tight text-black">
												Years in business
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="overflow-hidden bg-white border border-grey rounded-lg">
								<div className="px-4 py-6">
									<div className="flex items-start">
										<svg
											className="flex-shrink-0 w-12 h-12 text-pink"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1"
												d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
											/>
										</svg>
										<div className="ml-4">
											<h4 className="text-4xl text-pink">27+</h4>
											<p className="mt-1.5 text-medium flex gap-2 leading-tight text-black">
												Team members
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="overflow-hidden bg-white border border-grey rounded-lg">
								<div className="px-4 py-6">
									<div className="flex items-start">
										<svg
											className="flex-shrink-0 w-12 h-12 text-pink"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1"
												d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
										<div className="ml-4">
											<h4 className="text-4xl text-pink">13,274</h4>
											<p className="mt-1.5 text-medium flex gap-2 leading-tight text-black">
												Items cleaned
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="overflow-hidden bg-white border border-grey rounded-lg">
								<div className="px-4 py-6">
									<div className="flex items-start">
										<svg
											className="flex-shrink-0 w-12 h-12 text-pink"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1"
												d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
											/>
										</svg>
										<div className="ml-4">
											<h4 className="text-4xl text-pink">98.7%</h4>
											<p className="mt-1.5 text-medium flex gap-2 leading-tight text-black">
												Customer success
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20">
					<div className="relative container px-4 mx-auto">
						<div className="flex flex-wrap items-center -mx-4">
							<div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
								<div className="max-w-lg">
									<span className="text-base text-pink font-semibold">
										Creating an Account
									</span>
									<h2 className="font-[600] text-3xl lg:text-5xl py-8">
										User account Benefits
									</h2>
									<p className="text-medium text-darkGrey">
										Creating an account will provides you access to many our
										perks. Online Booking with ease, scheduling your home
										collection or delivery at a specific time slot. A real-time
										order status with hourly updates.
									</p>
								</div>
							</div>
							<div className="relative w-full lg:w-1/2 px-4">
								<img
									className="rounded-lg object-cover w-full h-[250px]"
									src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-andrea-piacquadio-3768890-scaled.jpg"
									alt=""
								/>
							</div>
						</div>
					</div>
				</section>

				{/* <!--===== SIGN UP TWO =====--> */}
				<SignUpTwo
					title={pricesPageContent?.signUp?.title}
					titleTwo={pricesPageContent?.signUp?.titleTwo}
					pointOne={pricesPageContent?.signUp?.pointOne}
					pointTwo={pricesPageContent?.signUp?.pointTwo}
					pointThree={pricesPageContent?.signUp?.pointThree}
					pointFour={pricesPageContent?.signUp?.pointFour}
					paragraph={pricesPageContent?.signUp?.paragraph}
					Image={pricesPageContent?.signUp?.image}
				/>

				{/* // <========== OUR OPTIONS ==========> */}
				<TwoOptions
					title={pricesPageContent?.ourOptions?.title}
					paragraph={pricesPageContent?.ourOptions?.paragraph}
					content={pricesPageContent?.ourOptions?.content}
				/>

				<TeamMembers
					title={pricesPageContent?.teamMembers?.title}
					paragraph={pricesPageContent?.teamMembers?.paragraph}
					profileGrid={pricesPageContent?.teamMembers?.profileGrid}
				/>

				{/* <!--===== REINVENTING THE FUTURE =====--> */}
				<ImageTextBulletPoints
					title={pricesPageContent?.imageTextBulletPoints?.title}
					buttonLink={pricesPageContent?.imageTextBulletPoints?.buttonLink}
					Image={pricesPageContent?.imageTextBulletPoints?.image}
					bulletPoints={pricesPageContent?.imageTextBulletPoints?.bulletPoints}
					// Display Options
					backgroundColor={
						pricesPageContent?.imageTextBulletPoints?.backgroundColor
					}
				/>

				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={pricesPageContent?.contactBanner?.title}
					paragraph={pricesPageContent?.contactBanner?.paragraph}
					buttonLink={pricesPageContent?.contactBanner?.buttonLink}
					backgroundImage={pricesPageContent?.contactBanner?.image?.sourceUrl}
				/>

				{/* <!--===== TWITTER TESTIMONIAL =====--> */}
				<TwitterTestimonialGrid
					title={pricesPageContent?.twitterTestimonial?.title}
					paragraph={pricesPageContent?.twitterTestimonial?.paragraph}
					gridContent={pricesPageContent?.twitterTestimonial?.gridContent}
				/>

				{/* <!--===== BLOG BANNER =====--> */}
				<BlogBanner
					title={pricesPageContent?.blogBanner?.title}
					paragraph={pricesPageContent?.blogBanner?.paragraph}
					buttonLink={pricesPageContent?.blogBanner?.buttonLink}
					latestTwoPosts={latestTwoPosts?.latestTwoPosts}
				/>

				{/* <!--===== FAQ TWO =====--> */}
				<FAQTwo
					title={pricesPageContent?.faq?.title}
					paragraph={pricesPageContent?.faq?.paragraph}
					buttonLink={pricesPageContent?.faq?.buttonLink}
					faqContent={pricesPageContent?.faq?.faqContent}
				/>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={pricesPageContent?.ourLocation?.title}
					paragraph={pricesPageContent?.ourLocation?.paragraph}
				/>

				<section className="py-10 bg-lightGrey sm:py-16 lg:py-24">
					<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
						<div className="flex items-end justify-between">
							<div className="flex-1 text-center lg:text-left">
								<h2 className="font-[600] text-3xl lg:text-5xl">
									Latest from blog
								</h2>
								<p className="max-w-xl mx-auto lg:mx-0 pt-6 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis.
								</p>
							</div>

							<div className="hidden lg:flex lg:items-center lg:space-x-3">
								<button
									type="button"
									className="flex items-center justify-center text-grey transition-all ease-in-out duration-[0.5s] bg-transparent border border-grey rounded-lg w-9 h-9 hover:bg-fadedPink hover:text-white focus:bg-fadedPink hover:border-fadedPink focus:text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>

								<button
									type="button"
									className="flex items-center justify-center text-grey transition-all ease-in-out duration-[0.5s] bg-transparent border border-grey rounded-lg w-9 h-9 hover:bg-fadedPink hover:text-white focus:bg-fadedPink hover:border-fadedPink focus:text-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							</div>
						</div>

						<div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
							<div className="overflow-hidden bg-white rounded-lg shadow">
								<div className="p-5">
									<div className="relative">
										<a title="" className="block aspect-w-4 aspect-h-3">
											<img
												className="object-cover w-full h-[350px] rounded-lg"
												src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-karolina-grabowska-4959868-scaled.jpg"
												alt=""
											/>
										</a>

										<div className="absolute top-4 left-4">
											<span className="px-4 py-2 text-xs font-semibold tracking-widest text-grey uppercase bg-white rounded-full">
												Lifestyle
											</span>
										</div>
									</div>
									<span className="block mt-6 font-semibold tracking-widest text-darkGrey uppercase">
										March 21, 2020
									</span>
									<p className="mt-5 text-2xl font-semibold">
										<a title="" className="text-black">
											How to build coffee inside your home in 5 minutes.
										</a>
									</p>
									<p className="mt-4 text-medium text-darkGrey">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
									<a
										title=""
										className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-pink transition-all ease-in-out duration-[0.5s] hover:text-yellow"
									>
										Continue Reading
										<svg
											className="w-5 h-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</div>

							<div className="overflow-hidden bg-white rounded shadow">
								<div className="p-5">
									<div className="relative">
										<a title="" className="block aspect-w-4 aspect-h-3">
											<img
												className="object-cover w-full h-[350px] rounded-lg"
												src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-max-vakhtbovych-7746574-scaled.jpg"
												alt=""
											/>
										</a>

										<div className="absolute top-4 left-4">
											<span className="px-4 py-2 text-xs font-semibold tracking-widest text-grey uppercase bg-white rounded-full">
												Marketing
											</span>
										</div>
									</div>
									<span className="block mt-6 font-semibold tracking-widest text-darkGrey uppercase">
										April 04, 2020
									</span>
									<p className="mt-5 text-2xl font-semibold">
										<a title="" className="text-black">
											Ho7 Tips to run your remote team faster and better.
										</a>
									</p>
									<p className="mt-4 text-medium text-darkGrey">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
									<a
										title=""
										className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-pink transition-all ease-in-out duration-[0.5s] hover:text-yellow"
									>
										Continue Reading
										<svg
											className="w-5 h-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</div>

							<div className="overflow-hidden bg-white rounded shadow">
								<div className="p-5">
									<div className="relative">
										<a title="" className="block aspect-w-4 aspect-h-3">
											<img
												className="object-cover w-full h-[350px] rounded-lg"
												src="http://kandyslaunderette.local/wp-content/uploads/2023/01/alexandra-gorn-WF0LSThlRmw-unsplash-scaled.jpg"
												alt=""
											/>
										</a>

										<div className="absolute top-4 left-4">
											<span className="px-4 py-2 text-xs font-semibold tracking-widest text-grey uppercase bg-white rounded-full">
												Productivity
											</span>
										</div>
									</div>
									<span className="block mt-6 font-semibold tracking-widest text-darkGrey uppercase">
										May 12, 2020
									</span>
									<p className="mt-5 text-2xl font-semibold">
										<a title="" className="text-black">
											5 Productivity tips to write faster at morning.
										</a>
									</p>
									<p className="mt-4 text-medium text-darkGrey">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit.
									</p>
									<a
										title=""
										className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-pink transition-all ease-in-out duration-[0.5s] hover:text-yellow"
									>
										Continue Reading
										<svg
											className="w-5 h-5"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
							<button
								type="button"
								className="flex items-center justify-center text-grey transition-all ease-in-out duration-[0.5s] bg-transparent border border-grey rounded w-9 h-9 hover:bg-blue hover:text-white focus:bg-blue focus:text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>

							<button
								type="button"
								className="flex items-center justify-center text-grey transition-all ease-in-out duration-[0.5s] bg-transparent border border-grey rounded w-9 h-9 hover:bg-blue hover:text-white focus:bg-blue focus:text-white"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>
						</div>
					</div>
				</section>

				<section className="bg-white overflow-hidden">
					<div className="flex flex-wrap -m-8">
						<div className="w-full md:w-1/2 p-8">
							<div className="container px-4 mx-auto">
								<div className="flex flex-wrap">
									<div className="w-full">
										<div className="md:max-w-lg mx-auto pt-16 md:pb-24">
											<div className="flex flex-wrap items-center justify-between -m-2 mb-24">
												<div className="w-auto p-2">
													<a className="inline-block" href="#">
														<img
															src="flaro-assets/logos/flaro-logo-black-xl.svg"
															alt=""
														/>
													</a>
												</div>
												<div className="w-auto p-2">
													<a
														className="text-blue hover:text-yellow font-medium leading-relaxed"
														href="#"
													>
														Sign In
													</a>
												</div>
											</div>
											<div className="md:max-w-sm">
												<h2 className="mb-4 text-5xl font-bold tracking-px-n leading-tight">
													Create free account
												</h2>
												<p className="mb-9 text-grey font-medium leading-relaxed">
													Lorem ipsum dolor sit amet, to the con adipiscing.
													Volutpat tempor to the condim entum.
												</p>
											</div>
											<form className="md:max-w-lg">
												<label className="block mb-5">
													<input
														className="px-4 py-3.5 w-full text-grey font-medium placeholder-grey bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
														id="signUpInput3-1"
														type="text"
														placeholder="Full name"
													/>
												</label>
												<label className="block mb-5">
													<input
														className="px-4 py-3.5 w-full text-grey font-medium placeholder-grey bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
														id="signUpInput3-2"
														type="text"
														placeholder="Email address"
													/>
												</label>
												<label className="block mb-5">
													<input
														className="px-4 py-3.5 w-full text-grey font-medium placeholder-grey bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
														id="signUpInput3-3"
														type="password"
														placeholder="Password"
													/>
												</label>
												<div className="flex flex-wrap justify-between mb-4">
													<div className="w-full">
														<div className="flex items-center">
															<input
																className="w-4 h-4"
																id="default-checkbox"
																type="checkbox"
																value=""
															/>
															<label className="ml-2 text-sm text-grey font-medium">
																<span>By signing up, I agree to the</span>
																<a
																	className="text-blue hover:text-yellow"
																	href="#"
																>
																	Terms &amp; Conditions
																</a>
																<span>of Flaro</span>
															</label>
														</div>
													</div>
												</div>
												<button
													className="mb-6 py-4 px-9 w-full text-white font-semibold border border-yellow rounded-xl focus:ring focus:ring-indigo-300 bg-blue hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
													type="button"
												>
													Sign In
												</button>
												<div className="flex flex-wrap justify-center -m-2.5">
													<div className="w-full p-2.5">
														<button className="flex items-center justify-center w-full p-4 bg-white hover:bg-grey border rounded-lg transition-all ease-in-out duration-[0.5s]">
															<img
																className="mr-3"
																src="flaro-assets/logos/brands/google.svg"
																alt=""
															/>
															<span className="font-semibold leading-normal">
																Sign in with Google
															</span>
														</button>
													</div>
													<div className="w-full p-2.5">
														<button className="flex items-center justify-center w-full p-4 bg-white hover:bg-grey border rounded-lg transition-all ease-in-out duration-[0.5s]">
															<img
																className="mr-3"
																src="flaro-assets/logos/brands/fb.svg"
																alt=""
															/>
															<span className="font-semibold leading-normal">
																Sign in with Facebook
															</span>
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-8">
							<div className="flex flex-col justify-center h-full bg-blue">
								<div className="p-16 text-center">
									<img
										className="mx-auto w-full h-[750px] transform hover:scale-105 transition ease-in-out duration-1000"
										src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-ron-lach-10557070-min-scaled.jpg"
										alt=""
									/>
									<h2 className="mb-5 text-5xl text-white font-semibold tracking-px-n leading-tight">
										A special card for you
									</h2>
									<p className="mb-24 text-lg text-white text-opacity-80 font-medium leading-normal md:max-w-md mx-auto">
										Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat
										tempor to the condim entum.
									</p>
									<div className="flex flex-wrap justify-center items-center -m-1.5">
										<div className="w-auto p-1.5">
											<a
												className="inline-block w-2 h-2 bg-blue rounded-full"
												href="#"
											></a>
										</div>
										<div className="w-auto p-1.5">
											<a
												className="inline-block w-2 h-2 bg-white rounded-full"
												href="#"
											></a>
										</div>
										<div className="w-auto p-1.5">
											<a
												className="inline-block w-2 h-2 bg-blue rounded-full"
												href="#"
											></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* <!--===== FOOTER =====--> */}
			<Footer
				email={themesOptionsContent?.themesOptions?.email}
				phoneNumber={themesOptionsContent?.themesOptions?.phoneNumber}
				CommercialServicesMenuLinks={
					CommercialServicesMenuLinks?.CommercialServicesMenuLinks
				}
			/>
		</motion.div>
	);
};

export async function getStaticProps() {
	const getPricesPageContent = gql`
		{
			pageTitle: pages(where: {id: 680, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 680, status: PUBLISH}) {
				edges {
					node {
						seo {
							canonical
							cornerstone
							focuskw
							fullHead
							metaDesc
							metaKeywords
							metaRobotsNofollow
							metaRobotsNoindex
							opengraphAuthor
							opengraphDescription
							opengraphImage {
								mediaItemUrl
							}
							opengraphModifiedTime
							opengraphPublishedTime
							opengraphPublisher
							opengraphSiteName
							opengraphTitle
							opengraphType
							opengraphUrl
							readingTime
							title
							twitterDescription
							twitterTitle
							twitterImage {
								mediaItemUrl
							}
						}
						PricesPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							ourOptions {
								title
								paragraph
								content {
									titleTwo
									title
									image {
										sourceUrl
									}
									imageTwo {
										sourceUrl
									}
									buttonLink {
										url
										title
										target
									}
									buttonLinkTwo {
										url
										title
										target
									}
								}
							}
							signUp {
								title
								titleTwo
								pointOne
								pointTwo
								pointThree
								pointFour
								paragraph
								image {
									altText
									sourceUrl
								}
							}
							teamMembers {
								title
								paragraph
								profileGrid {
									profileCard {
										title
										jobPosition
										twitter
										facebook
										instagram
										image {
											altText
											sourceUrl
										}
									}
								}
							}
							imageTextBulletPoints {
								title
								backgroundColor
								buttonLink {
									url
									title
									target
								}
								image {
									altText
									sourceUrl
								}
								bulletPoints {
									text
									icon {
										sourceUrl
									}
								}
							}
							contactBanner {
								title
								paragraph
								image {
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
							}
							twitterTestimonial {
								title
								paragraph
								gridContent {
									singleCard {
										userName
										userTag
										paragraph
										hashTags
										image {
											altText
											sourceUrl
										}
									}
								}
							}
							blogBanner {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
							}
							faq {
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								faqContent {
									title
									paragraph
								}
							}
							ourLocation {
								title
								paragraph
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getPricesPageContent,
	});

	const latestTwoPosts = await getLatestTwoPosts();
	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
			latestTwoPosts,
			CommercialServicesMenuLinks,
			IndividualServicesMenuLinks,
			pageTitle: response?.data?.pageTitle?.edges[0]?.node?.title,
			seo: response?.data?.mainContent?.edges[0]?.node?.seo,
			pricesPageContent:
				response?.data?.mainContent?.edges[0]?.node?.PricesPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default Prices;
