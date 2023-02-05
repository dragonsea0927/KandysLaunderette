import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";

const SubscriptionsCard = (props) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mb-6 text-darkGrey font-[400] leading-relaxed";
		} else {
			contentStyling = "block mb-6 text-darkGrey font-[400] leading-relaxed";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className="w-full xl:w-1/4">
			<div
				className="px-9 pt-8 pb-11 h-full bg-white bg-opacity-90  rounded-lg"
				style={{backdropFilter: "blur(46px)"}}
			>
				<span className="mb-3 inline-block text-tiny text-pink font-semibold uppercase tracking-px leading-snug">
					Free
				</span>
				<motion.div
					variants={fadeIn}
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
				<h3 className="mb-1 text-4xl text-black font-bold leading-tight">
					<span>£0</span>
					<span className="text-black">/mo</span>
				</h3>
				<p className="mb-8 text-sm text-black font-medium leading-relaxed">
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
						<p className="font-semibold leading-normal">1200+ UI Blocks</p>
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
						<p className="font-semibold leading-normal">10 GB Cloud Storage</p>
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
						<p className="font-semibold leading-normal">Premium Support</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SubscriptionsCard;
