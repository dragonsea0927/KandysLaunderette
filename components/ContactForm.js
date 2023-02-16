import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, stagger} from "../animations/animations";

const ContactForm = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="relative overflow-hidden">
			<div className="container mx-auto px-4 lg:px-0">
				<div className="pt-28 mb-28 bg-white overflow-hidden">
					<div className="mb-20 text-center mx-auto">
						<h2 className="text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-4">
							{props?.title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
					<div className="flex flex-col justify-center gap-4 lg:flex-row lg:items-center">
						<div className="w-full lg:w-1/2 p-0 lg:p-8">
							<div className="max-w-max mx-auto overflow-hidden rounded-3xl">
								<Image
									width={1000}
									height={600}
									objectFit="cover"
									objectPosition="center"
									src={`${props?.image?.sourceUrl}`}
									alt={`${props?.image?.altText} Image`}
									className="transform hover:scale-105 transition ease-in-out duration-1000"
								/>
							</div>
						</div>
						<motion.div
							variants={stagger}
							className="w-full lg:w-1/2 p-0 pt-8 lg:p-8 flex flex-col justify-center items-center lg:items-start"
						>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Email
								</p>
								<ul className="mb-12">
									<li className="text-medium text-darkGrey font-[400]">
										<Link href={`mailto:${props?.email}`}>
											<a>{props?.email}</a>
										</Link>
									</li>
								</ul>
							</motion.div>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Phone
								</p>
								<ul className="mb-14">
									<li className="text-medium text-darkGrey font-[400]">
										<Link href={`tel:${props?.phoneNumber}`}>
											<a>{props?.phoneNumber}</a>
										</Link>
									</li>
								</ul>
							</motion.div>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Address
								</p>
								<ul>
									<li className="text-medium text-darkGrey font-[400]">
										High St, Swansea,
									</li>
									<li className="text-medium text-darkGrey font-[400]">
										SA1 1NW, Wales
									</li>
								</ul>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
			<div
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.65),
							rgba(221, 69, 119, 0.15)
						),url("${props.backgroundImage}")`,
				}}
			>
				<div className="relative z-10 px-4 lg:px-0 py-20 container mx-auto">
					<form
						className="px-11 pt-9 pb-11 bg-white bg-opacity-80 md:max-w-xl mx-auto rounded-lg shadow-12xl"
						style={{backdropFilter: "blur(5px)"}}
					>
						<h3 className="mb-8 text-xl text-center font-semibold leading-normal md:max-w-sm mx-auto">
							{props?.formText}
						</h3>
						<label className="block mb-4">
							<input
								className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
								id="contactInput5-1"
								type="text"
								placeholder="First &amp; last name"
							/>
						</label>
						<label className="block mb-4">
							<input
								className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
								id="contactInput5-2"
								type="text"
								placeholder="First &amp; last name"
							/>
						</label>
						<label className="block mb-4">
							<textarea
								className="p-4 w-full h-48 font-[400] text-darkGrey placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-pink resize-none rounded-lg focus:ring-[1px] focus:ring-pink"
								id="contactInput3-3"
								placeholder="Write message"
							></textarea>
						</label>
						<button
							className="py-4 px-9 w-full text-white text-medium font-[400] border border-pink rounded-xl shadow-4xl focus:ring focus:ring-fadedPinkThree bg-pink hover:border-fadedPinkThree hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
							type="button"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
