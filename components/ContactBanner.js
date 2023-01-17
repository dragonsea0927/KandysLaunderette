import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";
import styles from "../styles/components/ContactBanner.module.scss";

const ContactBanner = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full xl:w-[45rem] mt-4 text-center lg:text-left text-white font-[400] text-base";
		} else {
			contentStyling =
				"block w-full xl:w-[45rem] mt-4 text-center lg:text-left text-white font-[400] text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section
			className={styles.contactBanner}
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.65),
							rgba(221, 69, 119, 0.15)
						),url(${props.backgroundImage}`,
			}}
		>
			<div className="container mx-auto p-0">
				<div className="flex flex-col lg:flex-row py-8 gap-10 px-8 justify-between items-center">
					<div className="flex flex-col gap-4 justify-between items-center">
						<h2 className="text-center lg:text-left text-white text-4xl font-[600]">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
					<motion.button
						variants={fadeIn}
						className="font-[700] uppercase text-white text-tiny"
					>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a className="py-4 px-6 lg:py-6 lg:px-20 bg-pink rounded-lg bg-pink hover:bg-yellow hover:ease-in-out hover:duration-[0.5s]">
								{props?.buttonLink?.title}
							</a>
						</Link>
					</motion.button>
				</div>
			</div>
		</section>
	);
};

export default ContactBanner;
