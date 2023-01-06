import Link from "next/link";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";
import styles from "../styles/components/ContactBanner.module.scss";

const ContactBanner = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full w-[45rem] mt-4 text-left text-white font-[500] text-base";
		} else {
			contentStyling =
				"block w-full w-[45rem] mt-4 text-left text-white font-[500] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<>
			<div
				className={styles.contactBanner}
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage: `url(${props.backgroundImage}`,
				}}
			>
				<div className="container mx-auto">
					<div
						className={styles.content}
						style={{
							gap: "5rem",
							display: "flex",
							padding: "5rem 2rem",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<div className="flex flex-col">
							<h2
								className="text-white text-center text-2xl"
								style={{
									color: "#ffffff",
									fontSize: "1.75rem",
									textAlign: "center",
								}}
							>
								{props?.title}
							</h2>
							<p
								className="w-full w-[45rem] mt-4 text-left text-white font-[500] text-base"
								style={{
									width: "45rem",
									fontSize: "1rem",
									textAlign: "left",
								}}
							>
								{props?.paragraph}
							</p>
							{/* <div
								className={isParagraphContent(props?.paragraph)}
								dangerouslySetInnerHTML={createParagraphMarkup()}
							/> */}
						</div>
						<motion.div
							variants={fadeIn}
							className={styles.contactBannerButton}
						>
							<Link
								className="border-2 border-pink border-solid outline-none p-4 tracking-[0.1rem] text-center text-tiny text-white bg-transparent uppercase"
								href={`${props?.buttonLink?.url}`}
								target={`${props?.buttonLink?.target}`}
							>
								{props?.buttonLink?.title}
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactBanner;
