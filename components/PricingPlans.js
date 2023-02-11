import Link from "next/link";
import link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn} from "../animations/animations";
import styles from "../styles/components/SignUp.module.scss";

const PricingPlans = (props) => {
	return (
		<section className="py-10 bg-lightGrey overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="py-16 px-8 bg-white rounded-3xl">
					<div className="flex flex-wrap">
						<div className="w-full md:w-1/2 p-8">
							<div className="flex flex-col justify-between md:max-w-sm h-full">
								<div className="flex-initial mb-8">
									<h2 className="font-[600] text-xl sm:text-5xl py-8">
										Affordable pricing plans
									</h2>
									<p className="text-darkGrey text-medium">
										Amet minim mollit non deserunt ullamco an aliqua dolor elit
										officia consequat duis.Amet minim mollit non deserunt
										ullamco est sit aliqua.
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
									<div className="flex flex-col justify-between p-8 h-full bg-blue rounded-3xl">
										<div className="flex-initial mb-8">
											<span className="inline-block mb-6 text-yellow font-[600] uppercase tracking-widest">
												Standard
											</span>
											<h2 className="mb-2 text-4xl text-white tracking-tight font-[600]">
												£19.99/mo
											</h2>
											<p
												className={`mb-8 text-sm text-white font-medium leading-relaxed`}
											>
												Monthly Yearly
											</p>
											<p className="mb-6 text-tiny text-white">
												Best for students, everyday nine to five workers and
												night shift workers.
											</p>
											<div className="flex flex-wrap -m-2">
												<div className="w-full p-2">
													<Link href={`/`} target={``}>
														<a className="block w-full px-8 py-2.5 text-base text-center text-white transition-all ease-in-out duration-[0.5s] bg-yellow hover:bg-fadedYellow focus:ring-4 focus:ring-pink rounded-lg">
															Sign up
														</a>
													</Link>
												</div>
											</div>
										</div>
										<div className="flex-initial">
											<h4 className="mb-4 text-white">
												What&rsquo;s included:
											</h4>
											<p className="text-white">
												130+ Coded blocks Best for Developers Made with Tailwind
												CSS Premium Support Future Updates
											</p>
										</div>
									</div>
								</div>
								<div className="w-full lg:w-1/2 p-4">
									<div className="flex flex-col justify-between p-8 h-full bg-lightGrey rounded-3xl">
										<div className="flex-initial mb-8">
											<span className="inline-block mb-6 text-pink font-[600] uppercase tracking-widest">
												Commercial Business
											</span>
											<h2 className="mb-2 text-4xl text-black tracking-tight font-[600]">
												Contact us
											</h2>
											<p
												className={`mb-8 text-sm text-black font-medium leading-relaxed`}
											>
												for custom offer
											</p>
											<p className="mb-6 text-tiny text-darkGrey">
												Starting from £49.99/mo, best for hotels, restaurants,
												cafes, spas and salons.
											</p>
											<div className="flex flex-wrap -m-2">
												<div className="w-full p-2">
													<Link href={`/`} target={``}>
														<a className="block w-full px-8 py-2.5 text-base text-center text-white transition-all ease-in-out duration-[0.5s] bg-pink hover:bg-darkPink focus:ring-4 focus:ring-fadedPinkThree rounded-lg">
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
												130+ Coded blocks Best for Developers Made with Tailwind
												CSS Premium Support Future Updates
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPlans;
