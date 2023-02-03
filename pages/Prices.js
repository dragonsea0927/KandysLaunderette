/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getLatestTwoPosts} from "../lib/blogBannerPosts";
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
				{/* PRICING */}

				{/* PRICING */}
				<section className="py-10 bg-white overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="py-16 px-8 bg-white rounded-3xl">
							<div className="max-w-7xl mx-auto">
								<div className="flex flex-wrap -m-8">
									<div className="w-full md:w-1/2 p-8">
										<div className="flex flex-col justify-between md:max-w-sm h-full">
											<div className="flex-initial mb-8">
												<h2 className="font-[600] text-3xl lg:text-5xl py-8">
													Affordable pricing plans
												</h2>
												<p className="text-grey text-medium">
													Amet minim mollit non deserunt ullamco an aliqua dolor
													elit officia consequat duis.Amet minim mollit non
													deserunt ullamco est sit aliqua.
												</p>
											</div>
											<div className="flex-initial">
												<p className="mb-2 text-base font-[600] text-black uppercase">
													Trusted by 30k users
												</p>
												<div className="flex flex-wrap -m-0.5 mb-2">
													<div className="w-auto">
														<svg
															width="22"
															height="22"
															viewBox="0 0 22 22"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
																fill="#3B82F6"
															></path>
														</svg>
													</div>
													<div className="w-auto">
														<svg
															width="22"
															height="22"
															viewBox="0 0 22 22"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
																fill="#3B82F6"
															></path>
														</svg>
													</div>
													<div className="w-auto">
														<svg
															width="22"
															height="22"
															viewBox="0 0 22 22"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
																fill="#3B82F6"
															></path>
														</svg>
													</div>
													<div className="w-auto">
														<svg
															width="22"
															height="22"
															viewBox="0 0 22 22"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
																fill="#3B82F6"
															></path>
														</svg>
													</div>
													<div className="w-auto">
														<svg
															width="22"
															height="22"
															viewBox="0 0 22 22"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M9.70724 4.21267C10.0284 3.22436 11.4266 3.22436 11.7477 4.21267L12.895 7.74387C13.0387 8.18586 13.4505 8.48511 13.9153 8.48511H17.6282C18.6674 8.48511 19.0994 9.81488 18.2587 10.4257L15.2549 12.6081C14.8789 12.8813 14.7216 13.3654 14.8652 13.8074L16.0126 17.3386C16.3337 18.327 15.2025 19.1488 14.3618 18.538L11.358 16.3556C10.982 16.0824 10.4729 16.0824 10.0969 16.3556L7.09311 18.538C6.2524 19.1488 5.12123 18.327 5.44236 17.3386L6.58971 13.8074C6.73332 13.3654 6.576 12.8813 6.20002 12.6081L3.1962 10.4257C2.35549 9.81488 2.78756 8.48511 3.82674 8.48511H7.53966C8.00439 8.48511 8.41627 8.18586 8.55988 7.74387L9.70724 4.21267Z"
																fill="#3B82F6"
															></path>
														</svg>
													</div>
												</div>
												<p className="flex gap-2 text-base text-black font-[600]">
													<span className="text-pink">4.2/5</span>
													<span>(45k Reviews)</span>
												</p>
											</div>
										</div>
									</div>
									<div className="w-full md:w-1/2 p-8">
										<div className="flex flex-wrap -m-4">
											<div className="w-full lg:w-1/2 p-4">
												<div className="flex flex-col justify-between p-8 h-full bg-lightGrey rounded-3xl">
													<div className="flex-initial mb-8">
														<span className="inline-block mb-6 text-pink font-[600] uppercase tracking-widest">
															Individual
														</span>
														<h2 className="mb-2 text-4xl text-black tracking-tight font-[600]">
															£19.99
														</h2>
														<p className="mb-6 text-tiny text-darkGrey">
															Starting from, best for the casual everyday needs.
														</p>
														<div className="flex flex-wrap -m-2">
															<div className="w-full p-2">
																<Link href={`/`} target={``}>
																	<a
																		className="block w-full px-8 py-2.5 text-base text-center text-white transition-all ease-in-out duration-[0.5s] bg-pink hover:bg-yellow focus:ring-4 focus:ring-pink rounded-lg"
																		href="#"
																	>
																		Sign up
																	</a>
																</Link>
															</div>
														</div>
													</div>
													<div className="flex-initial">
														<h4 className="mb-4 text-black">
															What&rsquo;s included:
														</h4>
														<p className="text-darkGrey">
															130+ Coded blocks Best for Developers Made with
															Tailwind CSS Premium Support Future Updates
														</p>
													</div>
												</div>
											</div>
											<div className="w-full lg:w-1/2 p-4">
												<div className="flex flex-col justify-between p-8 h-full bg-lightGrey rounded-3xl">
													<div className="flex-initial mb-8">
														<span className="inline-block mb-6 text-pink font-[600] uppercase tracking-widest">
															Commercial
														</span>
														<h2 className="mb-2 text-4xl text-black tracking-tight font-[600]">
															£49.99
														</h2>
														<p className="mb-6 text-tiny text-darkGrey">
															Starting from, best for hotels, restaurants,
															cafes, spas and salons.
														</p>
														<div className="flex flex-wrap -m-2">
															<div className="w-full p-2">
																<Link href={`/`} target={``}>
																	<a
																		className="block w-full px-8 py-2.5 text-base text-center text-white transition-all ease-in-out duration-[0.5s] bg-fadedPinkThree hover:bg-darkPink focus:ring-4 focus:ring-fadedPinkThree rounded-lg"
																		href="#"
																	>
																		Get in Touch
																	</a>
																</Link>
															</div>
														</div>
													</div>
													<div className="flex-initial">
														<h4 className="mb-4 text-black">
															What&rsquo;s included:
														</h4>
														<p className="text-darkGrey">
															130+ Coded blocks Best for Developers Made with
															Tailwind CSS Premium Support Future Updates
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pt-24 pb-28 bg-fadedPinkThree overflow-hidden">
					<div className="container px-4 mx-auto">
						<h2 className="mb-24 text-6xl md:text-7xl  text-center tracking-px-n leading-tight md:max-w-xl mx-auto">
							Choose a plan that suits you. Grow business fast.
						</h2>
						<div className="mb-24 md:max-w-6xl mx-auto">
							<div className="flex flex-wrap -m-4">
								<div className="w-full md:w-1/3 p-4">
									<div
										className="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-pink rounded-lg"
										style={{backdropFilter: "blur(46px)"}}
									>
										<div>
											<span className="mb-9 inline-block text-base text-pink font-semibold uppercase tracking-px leading-snug">
												Basic
											</span>
											<h3 className="mb-1 text-4xl font-[600] text-black leading-none">
												£19.99/mo
											</h3>
											<p className="mb-6 text-black text-medium">
												No credit card required
											</p>
											<p className="mb-9 text-black text-medium">
												Lorem ipsum dolor sit amet, consec tetur adipiscing
												elit. Egestas lacus, blan dit pellentesque.
											</p>
										</div>
										<button
											className="py-4 px-9 w-full font-semibold hover:text-white border border-white hover:border-yellow rounded-lg focus:ring focus:ring-yellow bg-white hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
											type="button"
										>
											Get Started Now
										</button>
									</div>
								</div>
								<div className="w-full md:w-1/3 p-4">
									<div
										className="relative flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-pink rounded-lg shadow-9xl"
										style={{backdropFilter: "blur(46px)"}}
									>
										<img
											className="absolute -top-11 -right-8"
											src="flaro-assets/images/pricing/popular.png"
											alt=""
										/>
										<img
											className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
											src="flaro-assets/images/pricing/gradient3.svg"
											alt=""
										/>
										<div className="relative z-10">
											<span className="mb-9 inline-block text-base text-pink font-semibold uppercase tracking-px leading-snug">
												Pro
											</span>
											<h3 className="mb-1 text-4xl font-[600] text-black leading-none">
												£29.99/mo
											</h3>
											<p className="mb-6 text-black text-medium">
												Billed Annually
											</p>
											<p className="mb-9 text-black text-medium">
												Lorem ipsum dolor sit amet, consec tetur adipiscing
												elit. Egestas lacus, blan dit pellentesque.
											</p>
											<button
												className="py-4 px-9 w-full font-semibold text-white border border-pink bg-pink hover:border-yellow rounded-lg focus:ring focus:ring-yellow hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
												type="button"
											>
												Get Started Now
											</button>
										</div>
									</div>
								</div>
								<div className="w-full md:w-1/3 p-4">
									<div
										className="flex flex-col px-9 pt-8 pb-9 h-full bg-white bg-opacity-90 border-pink rounded-lg"
										style={{backdropFilter: "blur(46px)"}}
									>
										<div>
											<span className="mb-9 inline-block text-base text-pink font-semibold uppercase tracking-px leading-snug">
												Enterprise
											</span>
											<h3 className="mb-1 text-4xl font-[600] text-black leading-none">
												£49.99/mo
											</h3>
											<p className="mb-6 text-black text-medium">
												Billed Annually
											</p>
											<p className="mb-9 text-black text-medium">
												Lorem ipsum dolor sit amet, consec tetur adipiscing
												elit. Egestas lacus, blan dit pellentesque.
											</p>
										</div>
										<button
											className="py-4 px-9 w-full font-semibold hover:text-white border border-white hover:border-yellow rounded-lg focus:ring focus:ring-yellow bg-white hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
											type="button"
										>
											Get Started Now
										</button>
									</div>
								</div>
							</div>
						</div>
						<p className="mb-4 text-white text-center text-medium">
							Trusted by secure payment service
						</p>
						<div className="flex flex-wrap justify-center">
							<div className="w-auto">
								<a href="#">
									<img src="flaro-assets/logos/brands/stripe.svg" alt="" />
								</a>
							</div>
							<div className="w-auto">
								<a href="#">
									<img src="flaro-assets/logos/brands/amex.svg" alt="" />
								</a>
							</div>
							<div className="w-auto">
								<a href="#">
									<img src="flaro-assets/logos/brands/mastercard.svg" alt="" />
								</a>
							</div>
							<div className="w-auto">
								<img src="flaro-assets/logos/brands/paypal.svg" alt="" />
							</div>
							<div className="w-auto">
								<a href="#">
									<img src="flaro-assets/logos/brands/visa.svg" alt="" />
								</a>
							</div>
							<div className="w-auto">
								<a href="#">
									<img src="flaro-assets/logos/brands/apple-pay.svg" alt="" />
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="relative pt-28 pb-36 bg-white overflow-hidden">
					<div className="relative z-10 container px-4 mx-auto">
						<h2 className="mb-6 text-6xl xl:text-7xl font-bold  tracking-px-n leading-none md:max-w-xl mx-auto">
							Select, Start, Grow
						</h2>
						<p className="mb-20 text-lg text-grey text-center font-medium leading-normal md:max-w-lg mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elemen tum.
						</p>
						<div className="md:max-w-4xl mx-auto">
							<div className="flex flex-wrap -m-5">
								<div className="w-full md:w-1/2 p-5">
									<div
										className="bg-white bg-opacity-90 border border-blue rounded-4xl shadow-9xl"
										style={{backdropFilter: "blur(46px)"}}
									>
										<div className="border-b border-blue">
											<div className="py-7 px-9">
												<h3 className="mb-3 text-xl text-grey font-bold leading-snug">
													Standard
												</h3>
												<p className="text-grey font-medium leading-relaxed">
													Lorem ipsum dolor sit amet, consect etur adipiscing
													maror.
												</p>
											</div>
										</div>
										<div className="pt-8 pb-9 px-9">
											<p className="mb-6 text-grey font-medium leading-relaxed">
												Features included:
											</p>
											<ul className="mb-11">
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
											<p className="mb-6 text-xl text-grey font-semibold leading-normal">
												<span>Starting from</span>
												<span className="text-grey">$49/mo</span>
											</p>
											<div className="md:inline-block">
												<button
													className="py-4 px-10 w-full text-white font-semibold rounded-lg focus:ring focus:ring-blue bg-blue hover:bg-blue transition-all ease-in-out duration-[0.5s]"
													type="button"
												>
													Start 14 days free trial
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="w-full md:w-1/2 p-5">
									<div
										className="bg-white bg-opacity-90 border border-blue rounded-4xl shadow-9xl"
										style={{backdropFilter: "blur(46px)"}}
									>
										<div className="border-b border-blue">
											<div className="py-7 px-9">
												<h3 className="mb-3 text-xl text-grey font-bold leading-snug">
													Pro
												</h3>
												<p className="text-grey font-medium leading-relaxed">
													Lorem ipsum dolor sit amet, consect etur adipiscing
													maror.
												</p>
											</div>
										</div>
										<div className="pt-8 pb-9 px-9">
											<p className="mb-6 text-grey font-medium leading-relaxed">
												Features included:
											</p>
											<ul className="mb-11">
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
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
											<p className="mb-6 text-xl text-grey font-semibold leading-normal">
												<span>Starting from</span>
												<span className="text-grey">$99/mo</span>
											</p>
											<div className="md:inline-block">
												<button
													className="py-4 px-10 w-full text-white font-semibold rounded-lg focus:ring focus:ring-blue bg-blue hover:bg-blue transition-all ease-in-out duration-[0.5s]"
													type="button"
												>
													Start 14 days free trial
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 w-full py-64 bg-blue"></div>
				</section>

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

				<section className="py-10 bg-white sm:py-16 lg:py-24">
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
				</section>

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

				{/* <!--===== BLOG BANNER =====--> */}
				<BlogBanner
					title={`Our Latest News and Articles`}
					paragraph={`<p>Discuss your needs with our team of experts! Contact us today. And If you book with Kandys Launderette, you can be sure that we work towards making your day an enjoyable and stress free occasion.</p>`}
					buttonLink={pricesPageContent?.contactBanner?.buttonLink}
					latestTwoPosts={latestTwoPosts?.latestTwoPosts}
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
														className="text-blue hover:text-indigo-700 font-medium leading-relaxed"
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
															<label
																className="ml-2 text-sm text-grey font-medium"
																for="default-checkbox"
															>
																<span>By signing up, I agree to the</span>
																<a
																	className="text-blue hover:text-indigo-700"
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
													className="mb-6 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-blue hover:bg-indigo-700 transition-all ease-in-out duration-[0.5s]"
													type="button"
												>
													Sign In
												</button>
												<div className="flex flex-wrap justify-center -m-2.5">
													<div className="w-full p-2.5">
														<button className="flex items-center justify-center w-full p-4 bg-white hover:bg-gray-50 border rounded-lg transition-all ease-in-out duration-[0.5s]">
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
														<button className="flex items-center justify-center w-full p-4 bg-white hover:bg-gray-50 border rounded-lg transition-all ease-in-out duration-[0.5s]">
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
