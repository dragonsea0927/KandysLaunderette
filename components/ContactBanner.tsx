import Link from "next/link";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const ContactBanner: FunctionComponent<IProps> = ({
	title,
	paragraph,
	buttonLink,
	backgroundImage,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white font-[400] text-medium";
		} else {
			contentStyling =
				"block w-full lg:max-w-[40rem] mt-4 text-center lg:text-left text-white font-[400] text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink: string) {
		let contentStyling: string;
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden`;
		} else {
			contentStyling = `block`;
		}
		return contentStyling;
	}

	return (
		<section
			className="px-4 py-20 lg:px-0"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.65),
							rgba(221, 69, 119, 0.15)
						),url("${backgroundImage}")`,
			}}
		>
			<div className="container p-0 mx-auto">
				<div className="flex flex-col items-center justify-between gap-10 px-0 py-8 lg:flex-row lg:px-8">
					<div className="flex flex-col items-center justify-between gap-4 lg:items-start">
						<h2 className="text-center lg:text-left text-white tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
						<div
							className={isParagraphContent(paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
						/>
					</div>
					<motion.div
						variants={fadeIn}
						className={isButtonLink(buttonLink?.url)}
					>
						<Link
							href={`${buttonLink?.url}`}
							target={`${buttonLink?.target}`}
							className="py-4 px-12 md:py-6 xl:px-20 font-[700] text-white text-base bg-pink rounded-lg hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
						>
							{buttonLink?.title}
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactBanner;
