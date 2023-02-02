import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";

const FAQTwo = (props) => {
	return (
		<section className="py-32 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap -m-8">
					<div className="w-full md:w-1/2 p-8">
						<div className="md:max-w-md">
							<h2 className="mb-7 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
								Frequently Asked Questions
							</h2>
							<p className="mb-11 text-grey font-medium leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit olutpat
								tempor.
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
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
														stroke="#4F46E5"
														strokeWidth="1.5"
														strokeLinecap="round"
														strokeLinejoin="round"
													></path>
												</svg>
											</div>
											<div className="flex-1 p-1.5">
												<h3 className="mb-4 font-semibold leading-normal">
													How does App help people in problems?
												</h3>
												<p className="mb-5 text-grey font-medium leading-relaxed">
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Volutpat, tempor condimentum commodo tincidunt
													sit dictumst. Eu placerat to a arcu at sem vitae eros,
													purus nonprofit organizations for all,
												</p>
												<p className="text-grey font-medium leading-relaxed">
													Lorem ipsum dolor sit amet, to the consectr adipiscing
													elit. Volutpat to the full tempor to the condimentum
													vitae vel purus.
												</p>
											</div>
											<div className="w-auto p-1.5">
												<a href="#">
													<svg
														className="relative top-1"
														width="15"
														height="15"
														viewBox="0 0 15 15"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
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
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
																stroke="#4F46E5"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															></path>
														</svg>
													</div>
													<div className="flex-1 p-1.5">
														<h3 className="font-semibold leading-normal">
															What happens if i go over my subscription limits?
														</h3>
													</div>
												</div>
											</div>
											<div className="w-auto p-1.5">
												<svg
													className="relative top-1"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
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
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
																stroke="#4F46E5"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
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
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
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
															viewBox="0 0 15 15"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z"
																stroke="#4F46E5"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
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
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
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
	);
};

export default FAQTwo;
