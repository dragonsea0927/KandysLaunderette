/* eslint-disable @next/next/no-img-element */
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
import MetaTag from "../components/Meta/MetaTag";
import StoreLocation from "/components/storeLocation";
import ContactBanner from "../components/ContactBanner";
import ContactBannerTwo from "/components/ContactBannerTwo";

const HotelRestaurantServices = ({
	seo,
	pageTitle,
	CommercialServicesMenuLinks,
	IndividualServicesMenuLinks,
	hotelRestaurantServicesPageContent,
	themesOptionsContent,
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
				{/* <!--===== CONTACT US BANNER =====--> */}
				<ContactBanner
					title={hotelRestaurantServicesPageContent?.contactBanner?.title}
					paragraph={
						hotelRestaurantServicesPageContent?.contactBanner?.paragraph
					}
					buttonLink={
						hotelRestaurantServicesPageContent?.contactBanner?.buttonLink
					}
					backgroundImage={
						hotelRestaurantServicesPageContent?.contactBanner?.image?.sourceUrl
					}
				/>

				<section className="relative py-20 overflow-x-hidden">
					<img
						className="hidden lg:block absolute top-0 left-0 mt-24"
						src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
						alt=""
					/>
					<img
						className="hidden lg:block absolute top-0 right-0 mt-40"
						src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
						alt=""
					/>
					<div className="container px-4 mx-auto">
						<div className="relative max-w-2xl mx-auto">
							<div className="absolute top-0 left-0 lg:-ml-20">
								{/* <svg width="552" height="414" viewBox="0 0 552 414" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M299 269.675C299 151.65 388.187 28.1937 528.224 0.154258C528.676 0.0636969 529.136 0.294669 529.33 0.713275L551.18 47.9217C551.424 48.449 551.174 49.0702 550.633 49.2812C500.445 68.8437 456.451 134.368 450.998 180.121C450.935 180.651 451.309 181.121 451.836 181.208C508.665 190.617 552 239.966 552 299.483C552 372.669 492.568 414 432.423 414C363.078 414 299 360.985 299 269.675ZM0 269.675C0 151.65 89.1865 28.1937 229.224 0.154258C229.676 0.0636969 230.136 0.294669 230.33 0.713274L252.18 47.9217C252.424 48.449 252.174 49.0702 251.633 49.2812C201.445 68.8437 157.451 134.368 151.998 180.121C151.935 180.651 152.309 181.121 152.836 181.208C209.665 190.617 253 239.966 253 299.483C253 372.669 193.568 414 133.423 414C64.078 414 0 360.985 0 269.675Z" fill="url(#paint0_linear)"></path>
          <defs><lineargradient id="paint0_linear" x1="648" y1="-418.5" x2="107.461" y2="354.11" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0"><stop offset="1" stop-color="#F2F5FA"></lineargradient></defs>
        </svg> */}
							</div>
							<div className="relative z-10 lg:py-10">
								<p className="mb-10 lg:mb-24 text-2xl leading-loose">
									On the other hand, perfection can also haunt some of us to the
									point of inaction. While some are too quick to act and end up
									wasting resources, others are completely paralyzed by the
									&ldquo;excessive&rdquo; amount of work behind building
									something new. There&rsquo;s just &ldquo;so much to get
									done&rdquo; before delivering the product to the user that we
									end up feeling frustrated and overwhelmed.
								</p>
								<p className="text-sm text-grey text-center">
									Danny Bailey, CEO &amp; Founder at Wireframes
								</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="py-20 bg-lightGrey overflow-hidden radius-for-skewed">
						<div className="container mx-auto px-4">
							<div className="mb-16 max-w-md text-center mx-auto">
								<span className="text-yellow0 font-bold">
									Dolor sit amet consectutar
								</span>
								<h2 className="mb-2 text-4xl lg:text-5xl font-bold text-black">
									Build &amp; Launch without problems
								</h2>
							</div>
							<div className="relative flex flex-wrap -mx-4 z-0">
								<img
									className="h-128 hidden xl:block absolute top-0 right-0 -mt-4 -mr-16"
									style={{zIndex: "-1"}}
									src="atis-assets/elements/line-light-grey.svg"
									alt=""
								/>
								<div className="mb-10 lg:mb-32 w-full md:w-1/2 lg:w-1/3 px-4">
									<div className="max-w-xs">
										<span className="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-yellow rounded-full font-bold text-2xl">
											1
										</span>
										<h3 className="mb-4 text-2xl font-bold text-black">
											Lorem ipsum dolor sit amet consectutar
										</h3>
										<p className="text-black leading-loose">
											Fusce quam tellus, placerat eu metus ut, viverra aliquet
											purus. Suspendisse potenti. Nulla non nibh feugiat.
										</p>
									</div>
								</div>
								<div className="mb-10 lg:mb-32 w-full md:w-1/2 lg:w-1/3 px-4">
									<div className="max-w-xs">
										<span className="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-pink rounded-full font-bold text-2xl">
											2
										</span>
										<h3 className="mb-4 text-2xl font-bold text-black">
											Lorem ipsum dolor sit amet consectutar
										</h3>
										<p className="text-black leading-loose">
											Fusce quam tellus, placerat eu metus ut, viverra aliquet
											purus. Suspendisse potenti. Nulla non nibh feugiat.
										</p>
									</div>
								</div>
								<div className="mb-10 lg:mb-32 w-full md:w-1/2 lg:w-1/3 px-4">
									<div className="max-w-xs">
										<span className="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-darkPink rounded-full font-bold text-2xl">
											3
										</span>
										<h3 className="mb-4 text-2xl font-bold text-black">
											Lorem ipsum dolor sit amet consectutar
										</h3>
										<p className="text-black leading-loose">
											Fusce quam tellus, placerat eu metus ut, viverra aliquet
											purus. Suspendisse potenti. Nulla non nibh feugiat.
										</p>
									</div>
								</div>
								<div className="mb-10 w-full md:w-1/2 lg:w-1/3 px-4 order-last lg:order-1">
									<div className="max-w-xs">
										<span className="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-darkPink rounded-full font-bold text-2xl">
											6
										</span>
										<h3 className="mb-4 text-2xl font-bold text-black">
											Lorem ipsum dolor sit amet consectutar
										</h3>
										<p className="text-black leading-loose">
											Fusce quam tellus, placerat eu metus ut, viverra aliquet
											purus. Suspendisse potenti. Nulla non nibh feugiat.
										</p>
									</div>
								</div>
								<div className="mb-10 md:mb-0 w-full md:w-1/2 lg:w-1/3 px-4 order-1 lg:order-0">
									<div className="max-w-xs">
										<span className="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-blue rounded-full font-bold text-2xl">
											5
										</span>
										<h3 className="mb-4 text-2xl font-bold text-black">
											Lorem ipsum dolor sit amet consectutar
										</h3>
										<p className="text-black leading-loose">
											Fusce quam tellus, placerat eu metus ut, viverra aliquet
											purus. Suspendisse potenti. Nulla non nibh feugiat.
										</p>
									</div>
								</div>
								<div className="w-full md:w-1/2 lg:w-1/3 px-4 lg:order-last">
									<div className="max-w-xs">
										<span className="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-yellow rounded-full font-bold text-2xl">
											4
										</span>
										<h3 className="mb-4 text-2xl font-bold text-black">
											Lorem ipsum dolor sit amet consectutar
										</h3>
										<p className="text-black leading-loose">
											Fusce quam tellus, placerat eu metus ut, viverra aliquet
											purus. Suspendisse potenti. Nulla non nibh feugiat.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20">
					<div className="container px-4 mx-auto">
						<div className="max-w-2xl mx-auto">
							<h2 className="mb-10 text-3xl font-semibold font-heading">
								When I was a developer, I often had a hundred questions when
							</h2>
							<p className="mb-10 text-xl text-grey">
								These types of questions led me to miss numerous deadlines, and
								I wasted time and energy in back-and-forth communication. Sadly,
								this situation could have been avoided if the wireframes had
								provided enough detail.
							</p>
							<div className="h-112 mb-10">
								<img
									className="w-full h-full object-cover rounded-lg"
									src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
									alt=""
								/>
							</div>
							<p className="mb-6 text-xl text-grey">
								These types of questions led me to miss numerous deadlines, and
								I wasted time and energy in back-and-forth communication. Sadly,
								this situation could have been avoided if the wireframes had
								provided enough detail.
							</p>
							<p className="mb-6 text-xl text-grey">
								Now that I am a UX designer, I notice that some designers tend
								to forget that wireframes are equally creative and technical. We
								are responsible for designing great ideas, but we are also
								responsible for creating product specifications. I admit that
								there can be so many details to remember that it&rsquo;s easy to
								lose track. To save time and energy for myself, I gathered all
								of my years of wireframing knowledge into a single checklist
								that I refer to throughout the process. And now I am sharing
								this knowledge with you, so that you can get back to being
								creative.
							</p>
						</div>
					</div>
				</section>

				{/* <!--===== INFORMATION SECTION =====--> */}
				<ContactBannerTwo
					title={hotelRestaurantServicesPageContent?.contactBannerTwo?.title}
					themesOptions={themesOptionsContent?.themesOptions}
					buttonLink={
						hotelRestaurantServicesPageContent?.contactBannerTwo?.buttonLink
					}
					backgroundImage={
						hotelRestaurantServicesPageContent?.contactBannerTwo?.image
							?.sourceUrl
					}
				/>

				<section className="relative py-36 bg-yellow overflow-hidden">
					<img
						className="absolute top-1/2 right-0 transform -translate-y-1/2"
						src="flaro-assets/images/pricing/gradient.svg"
						alt=""
					/>
					<div className="relative z-10 container px-4 mx-auto">
						<div className="flex flex-wrap lg:items-center -m-8">
							<div className="w-full md:w-1/2 p-8">
								<div className="md:max-w-md">
									<h2 className="mb-16 lg:mb-52 text-6xl md:text-5xl xl:text-6xl font-bold tracking-px-n leading-none">
										Pick a plan
									</h2>
									<h3 className="mb-6 text-lg text-black font-semibold leading-normal">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse varius enim in eros elemen.
									</h3>
									<p className="text-medium text-black leading-relaxed">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Volut pat tempor condimentum commodo tincidunt sit dictumst.
										Eu placerat arcu at sem vitae eros, purus non, eu.
										Adipiscing vitae amet nunc volutpat sit. Enim eu integer
										duis arcu.
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 p-8">
								<div className="md:max-w-md mx-auto overflow-hidden rounded-3xl shadow-5xl">
									<div className="p-9">
										<span className="mb-7 inline-block text-sm text-black font-semibold uppercase tracking-px">
											Features included:
										</span>
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
									</div>
									<div className="p-9 bg-white">
										<div className="flex flex-wrap -m-8">
											<div className="w-full sm:w-1/2 p-8">
												<span className="mb-2 inline-block text-sm text-black font-semibold uppercase tracking-px">
													Pro Package
												</span>
												<p className="text-black font-semibold leading-normal">
													Best for Startups &amp; Small Businesses
												</p>
											</div>
											<div className="w-full sm:w-1/2 p-8">
												<div className="sm:max-w-max ml-auto">
													<p className="font-bold">
														<span className="text-5xl leading-tight tracking-px-n">
															$49
														</span>
														<span className="text-lg text-black leading-snug tracking-px-n">
															/mo
														</span>
													</p>
													<p className="text-medium text-black leading-relaxed">
														Billed anually
													</p>
												</div>
											</div>
										</div>
										<div className="mt-9">
											<button
												className="py-4 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-pink bg-pink hover:bg-pink transition-all ease-in-out duration-[0.5s]"
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
				</section>

				<section className="py-36 overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="bg-gradient-cyan2 rounded-2xl shadow-9xl">
							<div className="flex flex-row">
								<div className="w-full lg:flex-1 px-12 py-14 lg:px-24 lg:py-28">
									<h2 className="mb-6 font-heading font-bold text-6xl sm:text-8xl xl:text-10xl text-black">
										Let&rsquo;s make things easier
									</h2>
									<p className="mb-9 lg:max-w-lg text-black text-lg">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Malesuada tellus vestibulum, commodo pulvinar.
									</p>
									<button className="group relative font-heading py-4 px-6 block w-full md:w-auto text-base text-white font-medium bg-grey overflow-hidden rounded-lg">
										<div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration0 bg-grey"></div>
										<p className="relative z-10">Download Mobile Now</p>
									</button>
								</div>
								<div className="w-full lg:w-auto ml-auto">
									<img
										className="mx-auto lg:mr-0 lg:ml-auto h-full object-cover"
										src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-kindel-media-8185803-scaled.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-36 overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="bg-gradient-cyan2 rounded-2xl shadow-9xl">
							<div className="flex flex-row">
								<div className="w-full lg:w-auto ml-auto">
									<img
										className="mx-auto lg:mr-0 lg:ml-auto h-full object-cover"
										src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-ron-lach-10566506-scaled.jpg"
										alt=""
									/>
								</div>
								<div className="w-full lg:flex-1 px-12 py-14 lg:px-24 lg:py-28">
									<h2 className="mb-6 font-heading font-bold text-6xl sm:text-8xl xl:text-10xl text-black">
										Let&rsquo;s make things easier
									</h2>
									<p className="mb-9 lg:max-w-lg text-black text-lg">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Malesuada tellus vestibulum, commodo pulvinar.
									</p>
									<button className="group relative font-heading py-4 px-6 block w-full md:w-auto text-base text-white font-medium bg-grey overflow-hidden rounded-lg">
										<div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration0 bg-grey"></div>
										<p className="relative z-10">Download Mobile Now</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-36 overflow-hidden">
					<div className="container mx-auto px-4">
						<div className="bg-gradient-cyan2 rounded-2xl shadow-9xl">
							<div className="flex flex-row">
								<div className="w-full lg:flex-1 px-12 py-14 lg:px-24 lg:py-28">
									<h2 className="mb-6 font-heading font-bold text-6xl sm:text-8xl xl:text-10xl text-black">
										Let&rsquo;s make things easier
									</h2>
									<p className="mb-9 lg:max-w-lg text-black text-lg">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Malesuada tellus vestibulum, commodo pulvinar.
									</p>
									<button className="group relative font-heading py-4 px-6 block w-full md:w-auto text-base text-white font-medium bg-grey overflow-hidden rounded-lg">
										<div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration0 bg-grey"></div>
										<p className="relative z-10">Download Mobile Now</p>
									</button>
								</div>
								<div className="w-full lg:w-auto ml-auto">
									<img
										className="mx-auto lg:mr-0 lg:ml-auto h-full object-cover"
										src="http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-point-and-shoot-5138752-scaled.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					className="pt-32 xl:pt-64 pb-16 bg-white bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden"
					style={{
						backgroundImage:
							"url('http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-magda-ehlers-4080043-scaled.jpg')",
					}}
				>
					<div className="container px-4 mx-auto">
						<div
							className="py-16 px-20 bg-white bg-opacity-40 rounded-lg"
							style={{backdropFilter: "blur(37px)"}}
						>
							<div className="flex flex-wrap xl:items-center -m-8">
								<div className="w-full md:w-1/2 p-8">
									<div className="md:max-w-xl">
										<h2 className="mb-14 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight">
											Build successful business together.
										</h2>
										<ul>
											<li className="mb-3 inline-flex flex-wrap items-center w-full text-white text-medium leading-relaxed">
												<svg
													className="mr-3"
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<circle
														cx="10"
														cy="10"
														r="10"
														fill="#4F46E5"
													></circle>
													<path
														d="M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337"
														stroke="white"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
												<span>Beautiful and awesome interface</span>
											</li>
											<li className="mb-3 inline-flex flex-wrap items-center w-full text-white text-medium leading-relaxed">
												<svg
													className="mr-3"
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<circle
														cx="10"
														cy="10"
														r="10"
														fill="#4F46E5"
													></circle>
													<path
														d="M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337"
														stroke="white"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
												<span>Online collaborative anytime, anywhere.</span>
											</li>
											<li className="inline-flex flex-wrap items-center w-full text-white text-medium leading-relaxed">
												<svg
													className="mr-3"
													width="20"
													height="20"
													viewBox="0 0 20 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<circle
														cx="10"
														cy="10"
														r="10"
														fill="#4F46E5"
													></circle>
													<path
														d="M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337"
														stroke="white"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
												<span>More Plugins</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="w-full md:w-1/2 self-end p-8">
									<div className="md:max-w-md ml-auto">
										<h3 className="mb-7 text-2xl text-white font-bold leading-snug">
											Join 3,953 other marketers
										</h3>
										<div className="flex flex-wrap -m-2">
											<div className="w-full p-2">
												<input
													className="px-4 py-4 w-full text-black text-medium text-center placeholder-grey outline-none border border-grey rounded-lg focus:ring focus:ring-pink"
													id="newsletterInput3-1"
													type="text"
													placeholder="Your email address"
												/>
											</div>
											<div className="w-full p-2">
												<button
													className="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-pink bg-pink hover:bg-pink transition-all ease-in-out duration-[0.5s]"
													type="button"
												>
													Join Now
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!--===== OUT STORE LOCATION =====--> */}
				<StoreLocation
					title={hotelRestaurantServicesPageContent?.ourLocation?.title}
					paragraph={hotelRestaurantServicesPageContent?.ourLocation?.paragraph}
				/>
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
	const getHotelRestaurantServicesPageContent = gql`
		{
			pageTitle: pages(where: {id: 685, status: PUBLISH}) {
				edges {
					node {
						title
					}
				}
			}
			mainContent: pages(where: {id: 685, status: PUBLISH}) {
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
						HotelRestaurantServicesPage {
							heroSection {
								title
								subtitle
								backgroundImage {
									sourceUrl
								}
							}
							titleParagraph {
								title
								paragraph
							}
							ourOptions {
								title
								paragraph
								content {
									title
									titleTwo
									image {
										altText
										sourceUrl
									}
									imageTwo {
										altText
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
							contactBanner {
								title
								image {
									sourceUrl
								}
								buttonLink {
									url
									title
									target
								}
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: getHotelRestaurantServicesPageContent,
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
			hotelRestaurantServicesPageContent:
				response?.data?.mainContent?.edges[0]?.node
					?.HotelRestaurantServicesPage,
			themesOptionsContent,
		},
		revalidate: 1,
	};
}

export default HotelRestaurantServices;
