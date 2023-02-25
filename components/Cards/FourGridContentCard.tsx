import Image from "next/image";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "../styles/components/FourGridContent.module.scss";

interface IProps {
	title: string;
	paragraph: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const FourGridContentCard: FunctionComponent<IProps> = ({
	title,
	image,
	paragraph,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mb-10 text-base text-center font-[400] text-black";
		} else {
			contentStyling =
				"block mb-10 text-base text-center font-[400] text-black";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className={styles.fourGridContentCard}>
			<div className="p-8 lg:p-16 text-center h-full bg-white rounded-3xl transition-all ease-in-out duration-[0.5s]">
				<Image
					className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
					width={650}
					height={450}
					src={image?.sourceUrl}
					alt={`${image?.altText} Image`}
				/>
				<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
					{title}
				</h3>
				<div
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
			</div>
		</div>
	);
};

export default FourGridContentCard;
