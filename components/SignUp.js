/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn} from "../animations/animations";
import styles from "../styles/components/SignUp.module.scss";

const SignUp = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto mb-8 text-darkGrey text-medium leading-loose";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto mb-8 text-darkGrey text-medium leading-loose";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Sets the Background Color */
	let backgroundColor = props?.backgroundColor;
	if (backgroundColor === "White") {
		backgroundColor = "white";
	} else if (backgroundColor === "LightGrey") {
		backgroundColor = "lightGrey";
	}

	return (
		<section className={styles.signUp}>
			<div className={`py-20 bg-${backgroundColor}`}>
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap items-center justify-center -mx-4">
						<div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
							<motion.h2
								variants={fadeIn}
								className="mb-4 font-[600] text-xl sm:text-3xl lg:text-5xl leading-14"
							>
								{props?.title}
							</motion.h2>
							<motion.div
								variants={fadeInUp}
								className={isParagraphContent(props?.paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup(
									props?.paragraph
								)}
							/>
							<motion.button
								variants={fadeIn}
								className="w-full flex justify-center sm:justify-start"
							>
								<Link
									href={`${props?.buttonLink?.url}`}
									target={`${props?.buttonLink?.target}`}
								>
									<a className="inline-block py-2 px-6 bg-pink hover:bg-yellow text-white font-[600] leading-loose transition-all ease-in-out duration-[0.5s] rounded-l-xl rounded-t-xl">
										{props?.buttonLink?.title}
									</a>
								</Link>
							</motion.button>
						</div>
						<div className="w-full lg:w-1/2 px-4">
							<div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
								<motion.div
									variants={fadeInUp}
									className="mb-6 py-8 px-6 bg-white shadow rounded-3xl text-center border border-pink"
								>
									<form action="">
										<div className="mb-6">
											<span className="text-tiny text-grey text-center">
												Sign Up
											</span>
											<h4 className="text-2xl py-6 text-center font-[600]">
												Create an account
											</h4>
										</div>
										<div className="mb-4 flex flex-wrap -mx-2">
											<div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
												<input
													className="py-2 px-3 w-full bg-lightGrey rounded leading-loose text-base"
													type="text"
													placeholder="First Name"
												/>
											</div>
											<div className="w-full lg:w-1/2 px-2">
												<input
													className="py-2 px-3 w-full bg-lightGrey rounded leading-loose text-base"
													type="text"
													placeholder="Last Name"
												/>
											</div>
										</div>
										<input
											className="mb-4 py-2 px-3 w-full bg-lightGrey rounded leading-loose text-base"
											type="email"
											placeholder="hello@example.com"
										/>
										<input
											className="mb-6 py-2 px-3 w-full bg-lightGrey rounded leading-loose text-base"
											type="password"
											placeholder="Enter your password"
										/>
										<motion.button
											variants={fadeIn}
											className="mb-4 py-4 w-full rounded text-sm bg-pink hover:bg-yellow text-white font-bold leading-normal transition-all ease-in-out duration-[0.5s]"
										>
											<Link href={`/`} target={``}>
												<a className="text-white text-base font-[600] tracking-loose">
													Sign Up
												</a>
											</Link>
										</motion.button>
									</form>
									<p className="text-tiny text-grey flex justify-center gap-2 pt-4">
										<span className="text-tiny">Already have an account?</span>
										<Link href={`/login`} target={`/`}>
											<a className="text-pink text-tiny hover:text-yellow transition-all ease-in-out duration-[0.5s]">
												Sign In
											</a>
										</Link>
									</p>
								</motion.div>
								<p className="flex justify-center gap-2 text-center text-grey text-tiny">
									<Link href={`/PolicePrivacy`} target={`/`}>
										<a className="text-pink text-tiny hover:text-yellow transition-all ease-in-out duration-[0.5s]">
											Police privacy
										</a>
									</Link>
									<span className="text-tiny">and</span>
									<Link href={`/TermsOfUse`} target={`/`}>
										<a className="text-pink text-tiny hover:text-yellow transition-all ease-in-out duration-[0.5s]">
											Terms of Use
										</a>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
