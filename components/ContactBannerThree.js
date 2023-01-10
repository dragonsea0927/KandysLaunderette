import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/ContactBanner.module.scss";

const ContactBannerThree = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-white text-center text-lg leading-8";
		} else {
			contentStyling = "block text-white text-center text-lg leading-8";
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
			className={styles.contactBannerThree}
			style={{
				backgroundImage: `url(${props.backgroundImage}`,
			}}
		>
			<div className="container mx-auto p-0">
				<motion.div
					variants={stagger}
					className="flex flex-col py-8 gap-y-24  px-8 justify-between items-center"
				>
					<motion.div variants={fadeInUp}>
						<h2 className="pb-10 text-white text-center text-4xl">
							{props?.title}
						</h2>
						<span className="gap-2 flex flex-row text-lg text-white items-center justify-center">
							Email:
							<Link
								href={`mailto:${props?.themesOptions?.email}`}
								target="blank"
								className="flex flex-row justify-center items-center gap-2 text-white text-medium text-center hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]"
							>
								{props?.themesOptions?.email}
							</Link>
						</span>

						<div className="flex flex-row justify-center items-center text-white gap-2 py-4">
							<span className="text-white text-center text-lg">
								Tel:
								<Link
									href={`tel:${props?.themesOptions?.phoneNumberOptionTwo}`}
								>
									{props?.themesOptions?.phoneNumberOptionTwo}
								</Link>
							</span>
							|
							<span className="text-white text-center text-lg">
								<Link href={`tel:${props?.themesOptions?.phoneNumber}`}>
									{props?.themesOptions?.phoneNumber}
								</Link>
							</span>
						</div>
						<div
							className={isParagraphContent(props?.themesOptions?.openingHours)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</motion.div>
					<motion.button
						variants={fadeIn}
						className="py-6 px-20 font-[700] uppercase bg-white text-black text-medium hover:text-white  hover:bg-fadedPink hover:ease-in-out hover:duration-[0.5s]"
					>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							{props?.buttonLink?.title}
						</Link>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactBannerThree;
