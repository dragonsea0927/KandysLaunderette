/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/SignUp.module.scss";

const SignUpTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-5 text-sm text-grey";
		} else {
			contentStyling = "block mt-5 text-sm text-grey";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}
	return (
		<section className={styles.signUpTwo}>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-grey sm:px-6 lg:px-8">
					<div className="absolute inset-0">
						<img
							className="object-cover w-full h-full"
							src={`${props?.Image?.sourceUrl}`}
							alt={`${props?.Image?.altText} Image`}
						/>
					</div>
					<div className="absolute inset-0 bg-gradient-to-t from-blue to-transparent"></div>

					<div className="relative">
						<div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-2xl">
							<motion.h2
								variants={fadeIn}
								className="text-4xl font-bold text-white"
							>
								{props?.title}
							</motion.h2>
							<motion.ul
								variants={stagger}
								className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4"
							>
								<motion.li
									variants={fadeInUp}
									className="flex items-center space-x-3"
								>
									<div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue0 rounded-full">
										<svg
											className="w-3.5 h-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
									<span className="text-medium text-white">
										{props?.pointOne}
									</span>
								</motion.li>
								<motion.li
									variants={fadeInUp}
									className="flex items-center space-x-3"
								>
									<div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue0 rounded-full">
										<svg
											className="w-3.5 h-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
									<span className="text-medium text-white">
										{props?.pointTwo}
									</span>
								</motion.li>
								<motion.li
									variants={fadeInUp}
									className="flex items-center space-x-3"
								>
									<div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue0 rounded-full">
										<svg
											className="w-3.5 h-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
									<span className="text-medium text-white">
										{props?.pointThree}
									</span>
								</motion.li>
								<motion.li
									variants={fadeInUp}
									className="flex items-center space-x-3"
								>
									<div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue0 rounded-full">
										<svg
											className="w-3.5 h-3.5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</div>
									<span className="text-medium text-white">
										{props?.pointFour}
									</span>
								</motion.li>
							</motion.ul>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
					<div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
						<motion.h2
							variants={fadeIn}
							className="text-3xl font-bold leading-tight text-black sm:text-4xl"
						>
							{props?.titleTwo}
						</motion.h2>
						<p className="mt-2 text-base text-grey">
							Already have an account?
							<Link href="/Login">
								<a className="font-medium text-pink px-2 transition-all ease-in-out duration-[0.5s] hover:text-yellow focus:text-yellow hover:underline">
									Login
								</a>
							</Link>
						</p>

						<form action="#" method="POST" className="mt-8">
							<div className="space-y-5">
								<div>
									<label className="text-base font-medium text-grey">
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
									<label className="text-base font-medium text-grey">
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
									<label className="text-base font-medium text-grey">
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
									<Link href={`/Login`}>
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
								<Link href={`/Login`}>
									<a className="font-[400] hover:text-pink">
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
								<Link href={`/Login`}>
									<a className=" font-[400] hover:text-pink">
										Sign up with Facebook
									</a>
								</Link>
							</button>
						</div>

						<motion.div
							variants={fadeInUp}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUpTwo;
