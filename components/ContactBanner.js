import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";

const ContactBanner = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white font-[400] text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white font-[400] text-medium";
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
			className="py-20 px-0 lg:px-8 "
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
			<div className="container mx-auto p-0">
				<div className="flex flex-col lg:flex-row py-8 gap-10 px-0 lg:px-8 justify-between items-center">
					<div className="flex flex-col gap-4 justify-between items-start">
						<h2 className="text-center lg:text-left text-white text-4xl font-[600]">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
					<motion.button variants={fadeIn}>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a className="py-4 px-6 sm:px-12 md:py-6 xl:px-20 font-[700] text-white text-base bg-pink rounded-lg hover:bg-yellow transition-all ease-in-out duration-[0.5s]">
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
