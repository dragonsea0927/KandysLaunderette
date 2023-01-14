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
				"hidden w-full xl:w-[45rem] mt-4 text-left text-white font-[500] text-base";
		} else {
			contentStyling =
				"block w-full xl:w-[45rem] mt-4 text-left text-white font-[500] text-base";
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
						<h2 className="text-left text-white text-4xl font-[600]">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
					<motion.button
						variants={fadeIn}
						className="py-6 px-20 font-[700] uppercase border-[1px] rounded-lg bg-pink border-solid border-pink text-white text-tiny hover:border-yellow hover:bg-yellow hover:ease-in-out hover:duration-[0.5s]"
					>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							{props?.buttonLink?.title}
						</Link>
					</motion.button>
				</div>
			</div>
		</section>
	);
};

export default ContactBanner;
