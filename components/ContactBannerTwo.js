/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/ContactBanner.module.scss";

const ContactBannerTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-white text-center text-base leading-8";
		} else {
			contentStyling = "block text-white text-center text-base leading-8";
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
			id="#contactBannerTwo"
			className={styles.contactBannerTwo}
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.45),
							rgba(221, 69, 119, 0.45)
						),url(${props.backgroundImage}`,
			}}
		>
			<div className="container mx-auto p-0">
				<motion.div
					variants={stagger}
					className="flex flex-col lg:flex-row py-8 gap-y-28 lg:gap-10 px-8 justify-between items-center"
				>
					<motion.div variants={fadeInUp}>
						<h2 className="pb-10 text-white text-center leading-[2rem] text-2xl">
							{props?.title}
						</h2>
						<span className="gap-2 flex flex-row text-base text-white items-center justify-center">
							Email:
							<Link
								href={`mailto:${props?.themesOptions?.email}`}
								target="blank"
								className="flex flex-row justify-center items-center gap-2 text-white text-base text-center hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]"
							>
								{props?.themesOptions?.email}
							</Link>
						</span>

						<div className="flex flex-row justify-center items-center text-white gap-2 py-4">
							<span className="text-white text-center text-base ">
								Tel:
								<Link
									href={`tel:${props?.themesOptions?.phoneNumberOptionTwo}`}
								>
									{props?.themesOptions?.phoneNumberOptionTwo}
								</Link>
							</span>
							|
							<span className="text-white text-center text-base">
								<Link href={`tel:${props?.themesOptions?.phoneNumber}`}>
									{props?.themesOptions?.phoneNumber}
								</Link>
							</span>
						</div>
						<div
							className={isParagraphContent(props?.themesOptions?.openingHours)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</motion.div>
					<motion.button
						variants={fadeIn}
						className="font-[700] uppercase text-white text-tiny"
					>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a className="py-4 px-6 lg:py-6 lg:px-20  rounded-lg bg-pink  hover:bg-yellow hover:ease-in-out hover:duration-[0.5s]">
								{props?.buttonLink?.title}
							</a>
						</Link>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactBannerTwo;