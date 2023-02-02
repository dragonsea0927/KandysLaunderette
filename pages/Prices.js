/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {gql} from "@apollo/client";
import {client} from "../lib/apollo";
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../lib/themesOptions";
import {
	getCommercialServicesMenu,
	getIndividualServicesMenu,
} from "../lib/MenuLinks";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

// Components
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import SignUpTwo from "../components/SignUpTwo";
import MetaTag from "../components/Meta/MetaTag";
import TwoOptions from "../components/TwoOptions";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";
import ImageTextBulletPoints from "../components/ImageTextBulletPoints";
import TwitterTestimonialGrid from "../components/TwitterTestimonialGrid";

const Prices = ({
	seo,
	pageTitle,
	CommercialServicesMenuLinks,
	pricesPageContent,
	themesOptionsContent,
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
				<section className="bg-gradient-to-b from-[#2563eb] relative to-[#2563eb]">
					<header className="container mx-auto absolute inset-x-0 top-0 z-10 w-full">
						<div className="px-4 mx-auto sm:px-6 lg:px-8">
							<div className="flex items-center justify-between h-16 lg:h-20">
								<div className="flex-shrink-0">
									<a title="" className="flex">
										<img
											className="w-auto h-8"
											src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg"
											alt=""
										/>
									</a>
								</div>

								<div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
									<a
										title=""
										className="text-base text-white transition-all ease-in-out duration-[0.5s] hover:text-opacity-80"
									>
										Features
									</a>

									<a
										title=""
										className="text-base text-white transition-all ease-in-out duration-[0.5s] hover:text-opacity-80"
									>
										Solutions
									</a>

									<a
										title=""
										className="text-base text-white transition-all ease-in-out duration-[0.5s] hover:text-opacity-80"
									>
										Resources
									</a>

									<a
										title=""
										className="text-base text-white transition-all ease-in-out duration-[0.5s] hover:text-opacity-80"
									>
										Pricing
									</a>
								</div>

								<div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
									<a
										title=""
										className="hidden text-base text-white transition-all ease-in-out duration-[0.5s] lg:inline-flex hover:text-opacity-80"
									>
										Log in
									</a>

									<a
										title=""
										className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 sm:text-base font-semibold transition-all ease-in-out duration-[0.5s] text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
										role="button"
									>
										Create an account
									</a>
								</div>

								<button
									type="button"
									className="inline-flex p-2 ml-1 text-white transition-all ease-in-out duration-[0.5s] rounded-lg sm:ml-4 lg:hidden focus:bg-grey-800 hover:bg-grey-800"
								>
									{/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
									<svg
										className="block w-6 h-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16m-7 6h7"
										/>
									</svg>

									{/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
									<svg
										className="hidden w-6 h-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</header>

					<div className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
						<div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
							<img
								className="hidden w-full lg:block"
								src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png"
								alt=""
							/>
							<img
								className="block w-full lg:hidden"
								src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-cottonbro-studio-4881619-min-scaled.jpg"
								alt=""
							/>
						</div>

						<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
							<div className="max-w-xl mx-auto text-center">
								<h1 className="text-4xl sm:text-7xl">
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-babyBlue to-white">
										Simple pricing, no commitment.
									</span>
								</h1>
								<p className="mt-5 text-medium text-white">
									Everything you need nothing you dont. Pick a plan that best
									suits you needs https://www.tailbits.com/
								</p>

								<button>
									<Link href={`/`} target={``}>
										<a
											title=""
											className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all ease-in-out duration-[0.5s] bg-pink rounded-lg sm:mt-16 hover:bg-darkPink focus:bg-blue"
											role="button"
										>
											Create an account
											<svg
												className="w-6 h-6 ml-8 -mr-2"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</a>
									</Link>
								</button>
							</div>
						</div>
					</div>
				</section>

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
															viewbox="0 0 22 22"
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
															viewbox="0 0 22 22"
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
															viewbox="0 0 22 22"
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
															viewbox="0 0 22 22"
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
															viewbox="0 0 22 22"
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
						<h2 className="mb-24 text-6xl md:text-7xl font-heading text-center tracking-px-n leading-tight md:max-w-xl mx-auto">
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
												className="py-4 px-9 w-full font-semibold text-white border border-pink bg-pink hover:border-yellow rounded-lg focus:ring focus:ring-yellow bg-white hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
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
						<h2 className="mb-6 text-6xl xl:text-7xl font-bold font-heading tracking-px-n leading-none md:max-w-xl mx-auto">
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
														viewbox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
															stroke="#4F46E5"
															stroke-width="2"
															stroke-linecap="round"
															stroke-linejoin="round"
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
											<p className="mt-1.5 text-medium flex gap-2 text-base leading-tight text-black">
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
											<p className="mt-1.5 text-medium flex gap-2 text-base leading-tight text-black">
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
											<p className="mt-1.5 text-medium flex gap-2 text-base leading-tight text-black">
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
											<p className="mt-1.5 text-medium flex gap-2 text-base leading-tight text-black">
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

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={pricesPageContent?.ourLocation?.title}
					paragraph={pricesPageContent?.ourLocation?.paragraph}
				/>

				<section className="pt-10 sm:pt-16 lg:pt-24">
					<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
						<div className="max-w-2xl mx-auto text-center">
							<h2 className="font-[600] text-3xl lg:text-5xl py-2">
								Your Laundry and Dry cleaning solution just a click away
							</h2>
							<p className="mt-6 text-medium text-darkGrey">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint.
							</p>
							<a
								title=""
								className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all ease-in-out duration-[0.5s] bg-blue border border-transparent rounded-lg hover:bg-blue focus:bg-blue"
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
										d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
									/>
								</svg>
								Contact our support
							</a>
						</div>
					</div>

					<div className="container mx-auto 2xl:px-12">
						<img
							className="w-full mt-6"
							src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png"
							alt=""
						/>
					</div>
				</section>

				{/* <!--===== SIGN UP THREE =====--> */}
				<section className="bg-white">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
							<div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
								<motion.h2
									variants={fadeIn}
									className="text-3xl leading-tight text-black sm:text-4xl"
								>
									Sign up to today
								</motion.h2>
								<p className="mt-2 text-base text-grey">
									Already have an account?
									<a className="flex gap-2 text-base text-pink px-2 transition-all ease-in-out duration-[0.5s] hover:text-yellow focus:text-yellow hover:underline">
										Login
									</a>
								</p>

								<form action="#" method="POST" className="mt-8">
									<div className="space-y-5">
										<div>
											<label className="text-base flex gap-2 text-base text-grey">
												First & Last name
											</label>
											<div className="mt-2.5 relative text-grey focus-within:text-grey">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<svg
														className="w-5 h-5 text-pink"
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
												</div>

												<input
													type="text"
													name=""
													id=""
													placeholder="Enter your full name"
													className="block w-full py-4 pl-10 pr-4 text-black placeholder-darkGrey transition-all ease-in-out duration-[0.5s] border border-grey rounded-lg bg-white focus:outline-none focus:border-pink focus:bg-white caret-pink"
												/>
											</div>
										</div>

										<div>
											<label className="text-base flex gap-2 text-base text-grey">
												Email address
											</label>
											<div className="mt-2.5 relative text-grey focus-within:text-grey">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<svg
														className="w-5 h-5 text-pink"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
														/>
													</svg>
												</div>

												<input
													type="email"
													name=""
													id=""
													placeholder="Enter email to get started"
													className="block w-full py-4 pl-10 pr-4 text-black placeholder-darkGrey transition-all ease-in-out duration-[0.5s] border border-grey rounded-lg bg-white focus:outline-none focus:border-pink focus:bg-white caret-pink"
												/>
											</div>
										</div>

										<div>
											<label className="text-base flex gap-2 text-base text-grey">
												Password
											</label>
											<div className="mt-2.5 relative text-grey focus-within:text-grey">
												<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
													<svg
														className="w-5 h-5 text-pink"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
														/>
													</svg>
												</div>

												<input
													type="password"
													name=""
													id=""
													placeholder="Enter your password"
													className="block w-full py-4 pl-10 pr-4 text-black placeholder-darkGrey transition-all ease-in-out duration-[0.5s] border border-grey rounded-lg bg-white focus:outline-none focus:border-pink focus:bg-white caret-pink"
												/>
											</div>
										</div>

										<button
											type="submit"
											className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all ease-in-out duration-[0.5s] border border-transparent rounded-lg bg-pink focus:outline-none hover:bg-yellow"
										>
											<Link href={`/`} target={``}>
												<a
													title=""
													className="text-white transition-all ease-in-out duration-[0.5s] hover:underline hover:text-blue"
												>
													Sign up
												</a>
											</Link>
										</button>
									</div>
								</form>

								{/* Google & Facebook Sign Up */}
								<div className="mt-3 space-y-3">
									<button
										type="button"
										className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-darkGrey transition-all ease-in-out duration-[0.5s] bg-white border-2 border-grey rounded-lg hover:text-pink hover:border-pink focus:text-pink focus:outline-none"
									>
										<div className="absolute inset-y-0 left-0 p-4">
											<svg
												className="w-6 h-6 text-pink"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
											>
												<path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
											</svg>
										</div>
										<Link href={`/`} target={``}>
											<a title="" className="hover:text-pink">
												Sign up with Google
											</a>
										</Link>
									</button>

									<button
										type="button"
										className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-darkGrey transition-all ease-in-out duration-[0.5s] bg-white border-2 border-grey rounded-lg hover:text-pink hover:border-pink focus:text-pink focus:outline-none"
									>
										<div className="absolute inset-y-0 left-0 p-4">
											<svg
												className="w-6 h-6 text-pink"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
											>
												<path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
											</svg>
										</div>
										<Link href={`/`} target={``}>
											<a title="" className="hover:text-pink">
												Sign up with Facebook
											</a>
										</Link>
									</button>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-grey sm:px-6 lg:px-8">
							<div>
								<img
									className="w-full mx-auto"
									src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
									alt=""
								/>

								<div className="w-full max-w-md mx-auto xl:max-w-xl">
									<h3 className="text-2xl text-center text-black">
										Design your own card
									</h3>
									<p className="leading-relaxed text-center text-darkGrey mt-2.5">
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis.
									</p>

									<div className="flex items-center justify-center mt-10 space-x-3">
										<div className="bg-pink0 rounded-full w-20 h-1.5"></div>

										<div className="bg-grey rounded-full w-12 h-1.5"></div>

										<div className="bg-grey rounded-full w-12 h-1.5"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-10 bg-white sm:py-16 lg:py-24">
					<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-blue"
										width="72"
										height="75"
										viewBox="0 0 72 75"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Secured Payments
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-pink"
										width="62"
										height="64"
										viewBox="0 0 62 64"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Fast & Easy to Load
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-fadedPink"
										width="66"
										height="68"
										viewBox="0 0 66 68"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Light & Dark Version
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-yellow"
										width="66"
										height="68"
										viewBox="0 0 66 68"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Light & Dark Version
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-fadedPinkTwo"
										width="65"
										height="70"
										viewBox="0 0 65 70"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Fast & Easy to Load
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-yellow"
										width="78"
										height="78"
										viewBox="0 0 78 78"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Secured Payments
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-fadedPinkThree"
										width="62"
										height="64"
										viewBox="0 0 62 64"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Light & Dark Version
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-blue"
										width="72"
										height="75"
										viewBox="0 0 72 75"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
									</svg>
									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Secured Payments
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>

							<div>
								<div className="relative flex items-center justify-center mx-auto">
									<svg
										className="text-pink"
										width="62"
										height="65"
										viewBox="0 0 62 65"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z" />
									</svg>

									<svg
										className="absolute text-white w-9 h-9"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h3 className="mt-8 text-lg font-semibold text-black">
									Fast & Easy to Load
								</h3>
								<p className="mt-4 text-medium text-darkGrey">
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>
						</div>
					</div>
				</section>

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

				<section className="py-32 bg-white overflow-hidden">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap -m-8">
							<div className="w-full md:w-1/2 p-8">
								<div className="md:max-w-md">
									<h2 className="mb-7 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
										Frequently Asked Questions
									</h2>
									<p className="mb-11 text-grey font-medium leading-relaxed">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit
										olutpat tempor.
									</p>
									<div className="md:inline-block">
										<button
											className="py-4 px-6 w-full text-white font-semibold border border-blue rounded-xl shadow-4xl focus:ring focus:ring-blue bg-blue hover:bg-blue transition-all ease-in-out duration-[0.5s]"
											type="button"
										>
											Read Our Full FAQs
										</button>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 p-8">
								<div className="md:max-w-2xl ml-auto">
									<div className="flex flex-wrap">
										<div className="w-full">
											<div className="pb-5 border-b border-grey">
												<div className="flex flex-wrap -m-1.5">
													<div className="w-auto p-1.5">
														<svg
															className="relative top-1"
															width="15"
															height="15"
															viewbox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
																stroke="#4F46E5"
																stroke-width="1.5"
																stroke-linecap="round"
																stroke-linejoin="round"
															></path>
														</svg>
													</div>
													<div className="flex-1 p-1.5">
														<h3 className="mb-4 font-semibold leading-normal">
															How does App help people in problems?
														</h3>
														<p className="mb-5 text-grey font-medium leading-relaxed">
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit. Volutpat, tempor condimentum commodo
															tincidunt sit dictumst. Eu placerat to a arcu at
															sem vitae eros, purus nonprofit organizations for
															all,
														</p>
														<p className="text-grey font-medium leading-relaxed">
															Lorem ipsum dolor sit amet, to the consectr
															adipiscing elit. Volutpat to the full tempor to
															the condimentum vitae vel purus.
														</p>
													</div>
													<div className="w-auto p-1.5">
														<a href="#">
															<svg
																className="relative top-1"
																width="15"
																height="15"
																viewbox="0 0 15 15"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L7.5 6.43934L10.7197 3.21967C11.0126 2.92678 11.4874 2.92678 11.7803 3.21967C12.0732 3.51256 12.0732 3.98744 11.7803 4.28033L8.56066 7.5L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L7.5 8.56066L4.28033 11.7803C3.98744 12.0732 3.51256 12.0732 3.21967 11.7803C2.92678 11.4874 2.92678 11.0126 3.21967 10.7197L6.43934 7.5L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z"
																	fill="black"
																></path>
															</svg>
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="w-full">
											<a className="block border-b border-grey" href="#">
												<div className="flex flex-wrap justify-between py-7 -m-1.5">
													<div className="flex-1 p-1.5">
														<div className="flex flex-wrap -m-1.5">
															<div className="w-auto p-1.5">
																<svg
																	className="relative top-1"
																	width="15"
																	height="15"
																	viewbox="0 0 15 15"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
																		stroke="#4F46E5"
																		stroke-width="1.5"
																		stroke-linecap="round"
																		stroke-linejoin="round"
																	></path>
																</svg>
															</div>
															<div className="flex-1 p-1.5">
																<h3 className="font-semibold leading-normal">
																	What happens if i go over my subscription
																	limits?
																</h3>
															</div>
														</div>
													</div>
													<div className="w-auto p-1.5">
														<svg
															className="relative top-1"
															width="15"
															height="15"
															viewbox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V6.75H12C12.4142 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 12.4142 8.25 12 8.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75L6.75 6.75V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z"
																fill="black"
															></path>
														</svg>
													</div>
												</div>
											</a>
										</div>
										<div className="w-full">
											<a className="block border-b border-grey" href="#">
												<div className="flex flex-wrap justify-between py-7 -m-1.5">
													<div className="flex-1 p-1.5">
														<div className="flex flex-wrap -m-1.5">
															<div className="w-auto p-1.5">
																<svg
																	className="relative top-1"
																	width="15"
																	height="15"
																	viewbox="0 0 15 15"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
																		stroke="#4F46E5"
																		stroke-width="1.5"
																		stroke-linecap="round"
																		stroke-linejoin="round"
																	></path>
																</svg>
															</div>
															<div className="flex-1 p-1.5">
																<h3 className="font-semibold leading-normal">
																	Why we are so confident about the future?
																</h3>
															</div>
														</div>
													</div>
													<div className="w-auto p-1.5">
														<svg
															className="relative top-1"
															width="15"
															height="15"
															viewbox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V6.75H12C12.4142 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 12.4142 8.25 12 8.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75L6.75 6.75V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z"
																fill="black"
															></path>
														</svg>
													</div>
												</div>
											</a>
										</div>
										<div className="w-full">
											<a className="block border-b border-grey" href="#">
												<div className="flex flex-wrap justify-between py-7 -m-1.5">
													<div className="flex-1 p-1.5">
														<div className="flex flex-wrap -m-1.5">
															<div className="w-auto p-1.5">
																<svg
																	className="relative top-1"
																	width="15"
																	height="15"
																	viewbox="0 0 15 15"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
																		stroke="#4F46E5"
																		stroke-width="1.5"
																		stroke-linecap="round"
																		stroke-linejoin="round"
																	></path>
																</svg>
															</div>
															<div className="flex-1 p-1.5">
																<h3 className="font-semibold leading-normal">
																	Where&rsquo;s the funding goes?
																</h3>
															</div>
														</div>
													</div>
													<div className="w-auto p-1.5">
														<svg
															className="relative top-1"
															width="15"
															height="15"
															viewbox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																d="M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V6.75H12C12.4142 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 12.4142 8.25 12 8.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75L6.75 6.75V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z"
																fill="black"
															></path>
														</svg>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-32 bg-white overflow-hidden">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap -m-8">
							<div className="w-full md:w-5/12 p-8">
								<div className="flex flex-col justify-between h-full">
									<div className="mb-8">
										<h2 className="mb-5 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
											Our Latest News and Articles
										</h2>
										<p className="text-gray-600 font-medium leading-relaxed">
											Lorem ipsum dolor sit amet, consectetury adipiscing elit.
											Volutpat, tempor to after condimentum commodo
										</p>
									</div>
									<a
										className="inline-flex items-center text-indigo-600 hover:text-indigo-700 leading-normal"
										href="#"
									>
										<span className="mr-2 font-semibold">See all articles</span>
										<svg
											width="18"
											height="18"
											viewbox="0 0 18 18"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</a>
								</div>
							</div>
							<div className="w-full md:flex-1 p-8">
								<div className="flex flex-wrap -m-3">
									<div className="w-full md:w-1/2 p-3">
										<div className="max-w-sm mx-auto">
											<div className="mb-6 max-w-max overflow-hidden rounded-xl">
												<img
													className="transform hover:scale-105 transition ease-in-out duration-1000"
													src="flaro-assets/images/blog/blog-wide.png"
													alt=""
												/>
											</div>
											<p className="mb-4 font-sans max-w-max px-3 py-1.5 text-sm text-indigo-600 font-semibold bg-indigo-50 uppercase rounded-md">
												Business
											</p>
											<a
												className="mb-2 inline-block hover:text-gray-800 hover:underline"
												href="#"
											>
												<h3 className="text-xl font-bold font-heading leading-normal">
													How to handle your good employee for the business.
												</h3>
											</a>
											<p className="text-gray-600 font-medium leading-relaxed">
												Lorem ipsum dolor sit amet, consectetury of a adipiscing
												elit. Volutpat to a main.
											</p>
										</div>
									</div>
									<div className="w-full md:w-1/2 p-3">
										<div className="max-w-sm mx-auto">
											<div className="mb-6 max-w-max overflow-hidden rounded-xl">
												<img
													className="transform hover:scale-105 transition ease-in-out duration-1000"
													src="flaro-assets/images/blog/blog-wide2.png"
													alt=""
												/>
											</div>
											<p className="mb-4 font-sans max-w-max px-3 py-1.5 text-sm text-indigo-600 font-semibold bg-indigo-50 uppercase rounded-md">
												Productivity
											</p>
											<a
												className="mb-2 inline-block hover:text-gray-800 hover:underline"
												href="#"
											>
												<h3 className="text-xl font-bold font-heading leading-normal">
													How startup company can help you to grow as a
													developer.
												</h3>
											</a>
											<p className="text-gray-600 font-medium leading-relaxed">
												Lorem ipsum dolor sit amet, consectetury of a adipiscing
												elit. Volutpat to a main.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pt-20 pb-32 overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="md:max-w-lg mx-auto text-center mb-20">
							<h2 className="mb-4 font-heading font-semibold text-gray-900 text-6xl sm:text-7xl">
								Latest from our blog
							</h2>
							<p className="text-lg text-gray-500">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim.
							</p>
						</div>
						<div className="flex flex-wrap -m-9">
							<div className="w-full md:w-1/3 p-9">
								<a className="group" href="#">
									<div className="group flex flex-col mb-5 overflow-hidden rounded-xl">
										<img
											className="transform group-hover:scale-110 transition ease-out duration-500"
											src="gradia-assets/images/blog/blog-horizontal1.png"
											alt=""
										/>
									</div>
									<p className="mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline">
										You will never believe these bizarre truth of travel.
									</p>
									<h2 className="font-heading font-medium text-xs uppercase text-gray-500 tracking-px">
										Technology . 4 min read
									</h2>
								</a>
							</div>
							<div className="w-full md:w-1/3 p-9">
								<a className="group" href="#">
									<div className="group flex flex-col mb-5 overflow-hidden rounded-xl">
										<img
											className="transform group-hover:scale-110 transition ease-out duration-500"
											src="gradia-assets/images/blog/blog-horizontal2.png"
											alt=""
										/>
									</div>
									<p className="mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline">
										You will never believe these bizarre truth of travel.
									</p>
									<h2 className="font-heading font-medium text-xs uppercase text-gray-500 tracking-px">
										Technology . 4 min read
									</h2>
								</a>
							</div>
							<div className="w-full md:w-1/3 p-9">
								<a className="group" href="#">
									<div className="group flex flex-col mb-5 overflow-hidden rounded-xl">
										<img
											className="transform group-hover:scale-110 transition ease-out duration-500"
											src="gradia-assets/images/blog/blog-horizontal3.png"
											alt=""
										/>
									</div>
									<p className="mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline">
										You will never believe these bizarre truth of travel.
									</p>
									<h2 className="font-heading font-medium text-xs uppercase text-gray-500 tracking-px">
										Technology . 4 min read
									</h2>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="pt-24 pb-36 bg-white overflow-hidden">
					<div className="container px-4 mx-auto">
						<h2 className="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
							The team behind Flaro
						</h2>
						<p className="mb-20 text-lg text-gray-600 text-center font-medium md:max-w-xl mx-auto">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
						</p>
						<div className="flex flex-wrap max-w-7xl mx-auto -m-3">
							<div className="w-full md:w-1/2 lg:w-1/4 p-3">
								<div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
									<img
										className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
										src="flaro-assets/images/team/team.png"
										alt=""
									/>
									<div className="absolute bottom-0 left-0 w-full p-2">
										<div
											className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
											style="backdrop-filter: blur(3px);"
										>
											<h3 className="mb-1 text-lg text-white font-bold leading-snug">
												Floyd Miles
											</h3>
											<p className="text-gray-400 font-medium">CEO</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 p-3">
								<div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
									<img
										className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
										src="flaro-assets/images/team/team2.png"
										alt=""
									/>
									<div className="absolute bottom-0 left-0 w-full p-2">
										<div
											className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
											style="backdrop-filter: blur(3px);"
										>
											<div className="mb-4 pb-3 border-b border-gray-700">
												<h3 className="mb-1 text-lg text-white font-bold leading-snug">
													Theresa Webb
												</h3>
												<p className="text-gray-400 font-medium">CEO</p>
											</div>
											<div className="flex wrap items-center -m-2.5">
												<div className="w-auto p-2.5">
													<a
														className="text-white hover:text-opacity-80 transition ease-in-out duration-200"
														href="#"
													>
														<svg
															width="13"
															height="11"
															viewbox="0 0 13 11"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M12.7345 1.28185C12.257 1.4941 11.7529 1.62675 11.2223 1.70634C11.7529 1.38797 12.1774 0.883899 12.3631 0.273702C11.859 0.565535 11.3019 0.777778 10.6917 0.910429C10.2142 0.406353 9.52438 0.0879898 8.78153 0.0879898C7.34889 0.0879898 6.18156 1.25532 6.18156 2.68796C6.18156 2.9002 6.20809 3.08591 6.26115 3.27163C4.1122 3.1655 2.17548 2.13082 0.8755 0.539005C0.663258 0.936959 0.530606 1.36144 0.530606 1.83899C0.530606 2.74102 0.981621 3.53693 1.69794 4.01447C1.27345 3.98794 0.8755 3.88182 0.504076 3.69611V3.72264C0.504076 4.99609 1.40611 6.05731 2.59997 6.29608C2.38773 6.34914 2.14895 6.37567 1.91018 6.37567C1.751 6.37567 1.56529 6.34914 1.40611 6.32261C1.751 7.35729 2.70609 8.12667 3.84689 8.12667C2.94486 8.81646 1.83059 9.24094 0.610197 9.24094C0.397954 9.24094 0.185712 9.24094 0 9.21441C1.16733 9.95726 2.52038 10.3817 4.00608 10.3817C8.80806 10.3817 11.4346 6.4022 11.4346 2.95326C11.4346 2.84714 11.4346 2.71449 11.4346 2.60837C11.9386 2.26347 12.3897 1.81246 12.7345 1.28185Z"
																fill="currentColor"
															></path>
														</svg>
													</a>
												</div>
												<div className="w-auto p-2.5">
													<a
														className="text-white hover:text-opacity-80 transition ease-in-out duration-200"
														href="#"
													>
														<svg
															width="8"
															height="14"
															viewbox="0 0 8 14"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M2.86428 13.9048V7.57563H0.734375V5.10902H2.86428V3.28997C2.86428 1.17897 4.1536 0.0294952 6.03676 0.0294952C6.93881 0.0294952 7.71407 0.0966549 7.94001 0.126673V2.33279L6.63394 2.33338C5.60977 2.33338 5.41147 2.82005 5.41147 3.5342V5.10902H7.85401L7.53598 7.57563H5.41147V13.9048H2.86428Z"
																fill="currentColor"
															></path>
														</svg>
													</a>
												</div>
												<div className="w-auto p-2.5">
													<a
														className="text-white hover:text-opacity-80 transition ease-in-out duration-200"
														href="#"
													>
														<svg
															width="17"
															height="16"
															viewbox="0 0 17 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M8.66026 1.39113C10.7216 1.39113 10.9657 1.39885 11.78 1.43598C12.2696 1.44197 12.7546 1.53187 13.2138 1.70178C13.5468 1.83021 13.8492 2.02695 14.1016 2.27933C14.354 2.53171 14.5507 2.83415 14.6792 3.16717C14.8491 3.62638 14.939 4.11134 14.945 4.60094C14.9817 5.41525 14.9898 5.65936 14.9898 7.72068C14.9898 9.78201 14.9821 10.0261 14.945 10.8404C14.939 11.33 14.8491 11.815 14.6792 12.2742C14.5507 12.6072 14.354 12.9097 14.1016 13.162C13.8492 13.4144 13.5468 13.6112 13.2138 13.7396C12.7546 13.9095 12.2696 13.9994 11.78 14.0054C10.9661 14.0422 10.722 14.0502 8.66026 14.0502C6.59857 14.0502 6.35446 14.0425 5.54052 14.0054C5.05091 13.9994 4.56596 13.9095 4.10674 13.7396C3.77372 13.6112 3.47129 13.4144 3.21891 13.162C2.96652 12.9097 2.76978 12.6072 2.64135 12.2742C2.47145 11.815 2.38154 11.33 2.37555 10.8404C2.33879 10.0261 2.3307 9.78201 2.3307 7.72068C2.3307 5.65936 2.33842 5.41525 2.37555 4.60094C2.38154 4.11134 2.47145 3.62638 2.64135 3.16717C2.76978 2.83415 2.96652 2.53171 3.21891 2.27933C3.47129 2.02695 3.77372 1.83021 4.10674 1.70178C4.56596 1.53187 5.05091 1.44197 5.54052 1.43598C6.35483 1.39922 6.59893 1.39113 8.66026 1.39113V1.39113ZM8.66026 0C6.56474 0 6.30078 0.00882319 5.47728 0.0463219C4.83651 0.059067 4.20255 0.180391 3.60235 0.405133C3.08747 0.599121 2.62113 0.903117 2.23585 1.29591C1.8427 1.68133 1.53845 2.14794 1.34434 2.66314C1.1196 3.26334 0.998273 3.89731 0.985528 4.53808C0.948765 5.36084 0.939941 5.6248 0.939941 7.72032C0.939941 9.81583 0.948765 10.0798 0.986263 10.9033C0.999008 11.5441 1.12033 12.178 1.34507 12.7782C1.53897 13.2934 1.84297 13.76 2.23585 14.1455C2.62134 14.5383 3.08795 14.8423 3.60308 15.0362C4.20328 15.261 4.83725 15.3823 5.47802 15.395C6.30152 15.4318 6.56438 15.4414 8.66099 15.4414C10.7576 15.4414 11.0205 15.4325 11.844 15.395C12.4847 15.3823 13.1187 15.261 13.7189 15.0362C14.2316 14.8375 14.6972 14.534 15.0859 14.145C15.4745 13.7561 15.7778 13.2903 15.9762 12.7775C16.2009 12.1773 16.3222 11.5433 16.335 10.9026C16.3718 10.0798 16.3806 9.81583 16.3806 7.72032C16.3806 5.6248 16.3718 5.36084 16.3343 4.53734C16.3215 3.89657 16.2002 3.2626 15.9754 2.66241C15.7816 2.14727 15.4775 1.68067 15.0847 1.29517C14.6992 0.902292 14.2326 0.598291 13.7174 0.404397C13.1172 0.179656 12.4833 0.0583318 11.8425 0.0455867C11.0197 0.00882324 10.7558 0 8.66026 0Z"
																fill="currentColor"
															></path>
															<path
																d="M8.65842 3.75616C7.8743 3.75616 7.10779 3.98868 6.45582 4.42431C5.80385 4.85995 5.2957 5.47913 4.99563 6.20356C4.69557 6.92799 4.61705 7.72513 4.77003 8.49418C4.923 9.26323 5.30059 9.96965 5.85504 10.5241C6.4095 11.0786 7.11592 11.4561 7.88497 11.6091C8.65402 11.7621 9.45116 11.6836 10.1756 11.3835C10.9 11.0834 11.5192 10.5753 11.9548 9.92333C12.3905 9.27136 12.623 8.50485 12.623 7.72073C12.623 6.66926 12.2053 5.66086 11.4618 4.91736C10.7183 4.17386 9.70989 3.75616 8.65842 3.75616ZM8.65842 10.2942C8.14944 10.2942 7.65189 10.1432 7.22869 9.86047C6.80549 9.57769 6.47565 9.17578 6.28087 8.70554C6.08609 8.23531 6.03513 7.71788 6.13442 7.21868C6.23372 6.71948 6.47882 6.26094 6.83872 5.90104C7.19862 5.54113 7.65716 5.29604 8.15636 5.19674C8.65556 5.09744 9.17299 5.14841 9.64323 5.34318C10.1135 5.53796 10.5154 5.8678 10.7982 6.291C11.0809 6.7142 11.2319 7.21175 11.2319 7.72073C11.2319 8.40325 10.9607 9.05781 10.4781 9.54043C9.9955 10.023 9.34094 10.2942 8.65842 10.2942V10.2942Z"
																fill="currentColor"
															></path>
															<path
																d="M12.7829 4.52561C13.2945 4.52561 13.7093 4.11083 13.7093 3.59917C13.7093 3.08751 13.2945 2.67273 12.7829 2.67273C12.2712 2.67273 11.8564 3.08751 11.8564 3.59917C11.8564 4.11083 12.2712 4.52561 12.7829 4.52561Z"
																fill="currentColor"
															></path>
														</svg>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 p-3">
								<div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
									<img
										className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
										src="flaro-assets/images/team/team3.png"
										alt=""
									/>
									<div className="absolute bottom-0 left-0 w-full p-2">
										<div
											className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
											style="backdrop-filter: blur(3px);"
										>
											<h3 className="mb-1 text-lg text-white font-bold leading-snug">
												Devon Lane
											</h3>
											<p className="text-gray-400 font-medium">
												Marketing Manager
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2 lg:w-1/4 p-3">
								<div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
									<img
										className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
										src="flaro-assets/images/team/team4.png"
										alt=""
									/>
									<div className="absolute bottom-0 left-0 w-full p-2">
										<div
											className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
											style="backdrop-filter: blur(3px);"
										>
											<h3 className="mb-1 text-lg text-white font-bold leading-snug">
												Jane Cooper
											</h3>
											<p className="text-gray-400 font-medium">
												Business Representative
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-36 bg-white overflow-hidden">
					<div className="container px-4 mx-auto">
						<div className="flex flex-wrap md:max-w-xl lg:max-w-7xl mx-auto">
							<div className="w-full md:w-1/2">
								<div className="flex flex-col justify-between h-full">
									<div className="mb-16 md:max-w-md mx-auto">
										<p className="mb-6 font-sans text-sm text-indigo-600 font-semibold uppercase">
											Meet The Team
										</p>
										<h2 className="mb-8 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
											The team behind Flaro
										</h2>
										<p className="text-lg text-gray-600 font-medium leading-normal md:max-w-sm">
											Amet minim mollit non deserunt ullamco est sit aliqua
											dolor do amet sint.
										</p>
									</div>
									<div className="flex flex-wrap">
										<div className="w-full lg:w-1/2">
											<img
												className="mx-auto"
												src="flaro-assets/images/team/team-circle3.png"
												alt=""
											/>
										</div>
										<div className="w-full lg:w-1/2">
											<img
												className="mx-auto"
												src="flaro-assets/images/team/team-circle4.png"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2">
								<div className="flex flex-col justify-end h-full">
									<div className="flex flex-wrap">
										<div className="w-full lg:w-1/2">
											<img
												className="mx-auto"
												src="flaro-assets/images/team/team-circle.png"
												alt=""
											/>
										</div>
										<div className="w-full lg:w-1/2">
											<img
												className="mx-auto"
												src="flaro-assets/images/team/team-circle2.png"
												alt=""
											/>
										</div>
										<div className="w-full lg:w-1/2">
											<img
												className="mx-auto"
												src="flaro-assets/images/team/team-circle5.png"
												alt=""
											/>
										</div>
										<div className="w-full lg:w-1/2">
											<img
												className="mx-auto"
												src="flaro-assets/images/team/team-circle6.png"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
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
												<h2 className="mb-4 text-5xl font-bold font-heading tracking-px-n leading-tight">
													Create free account
												</h2>
												<p className="mb-9 text-gray-600 font-medium leading-relaxed">
													Lorem ipsum dolor sit amet, to the con adipiscing.
													Volutpat tempor to the condim entum.
												</p>
											</div>
											<form className="md:max-w-lg">
												<label className="block mb-5">
													<input
														className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
														id="signUpInput3-1"
														type="text"
														placeholder="Full name"
													/>
												</label>
												<label className="block mb-5">
													<input
														className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
														id="signUpInput3-2"
														type="text"
														placeholder="Email address"
													/>
												</label>
												<label className="block mb-5">
													<input
														className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
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
																className="ml-2 text-sm text-gray-900 font-medium"
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
													className="mb-6 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-blue hover:bg-indigo-700 transition ease-in-out duration-200"
													type="button"
												>
													Sign In
												</button>
												<div className="flex flex-wrap justify-center -m-2.5">
													<div className="w-full p-2.5">
														<button className="flex items-center justify-center w-full p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
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
														<button className="flex items-center justify-center w-full p-4 bg-white hover:bg-gray-50 border rounded-lg transition ease-in-out duration-200">
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

	const CommercialServicesMenuLinks = await getCommercialServicesMenu();
	const themesOptionsContent = await getThemesOptionsContent();
	const IndividualServicesMenuLinks = await getIndividualServicesMenu();

	return {
		props: {
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
