import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

const ContactBannerThree = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-white text-center text-medium leading-8";
		} else {
			contentStyling = "block text-white text-center text-medium leading-8";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.themesOptions?.openingHours}`),
		};
	}
	return (
		<section
			className="py-20 px-4 lg:px-0"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundImage: `url("${props.backgroundImage}"`,
			}}
		>
			<div className="container mx-auto p-0">
				<motion.div
					variants={stagger}
					className="flex flex-col py-8 gap-y-24  px-8 justify-between items-center"
				>
					<motion.div variants={fadeInUp}>
						<h2 className="pb-10 text-white text-center  text-2xl sm:text-3xl lg:text-5xl">
							{props?.title}
						</h2>
						<span className="gap-2 flex flex-row text-medium text-white items-center justify-center">
							Email:
							<Link href={`mailto:${props?.themesOptions?.email}`}>
								<a className="text-white text-medium text-center hover:text-pink transition-all ease-in-out duration-[0.5s]">
									{props?.themesOptions?.email}
								</a>
							</Link>
						</span>

						<div className="flex flex-row justify-center items-center text-white gap-2 py-4">
							<span className="text-white text-center text-medium">
								Tel:
								<Link
									href={`tel:${props?.themesOptions?.phoneNumberOptionTwo}`}
								>
									<a className="text-white text-medium hover:text-pink transition-all ease-in-out duration-[0.5s]">
										{props?.themesOptions?.phoneNumberOptionTwo}
									</a>
								</Link>
							</span>
							|
							<span className="text-white text-center text-medium">
								<Link href={`tel:${props?.themesOptions?.phoneNumber}`}>
									<a className="text-white text-medium hover:text-pink transition-all ease-in-out duration-[0.5s]">
										{props?.themesOptions?.phoneNumber}
									</a>
								</Link>
							</span>
						</div>
						<div
							className={isParagraphContent(props?.themesOptions?.openingHours)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
					<motion.div variants={fadeIn}>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a className="py-4 px-12 md:py-6 xl:px-20 font-[700] text-black text-base bg-white rounded-lg hover:text-white hover:bg-fadedPink transition-all ease-in-out duration-[0.5s]">
								{props?.buttonLink?.title}
							</a>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactBannerThree;
