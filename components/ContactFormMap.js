import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
const ContactFormMap = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-darkGrey text-base leading-relaxed mb-5";
		} else {
			contentStyling = "block text-darkGrey text-base leading-relaxed mb-5";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="relative text-grey body-font">
			<div className="absolute inset-0 bg-grey">
				<iframe
					title="map"
					width="100%"
					height="100%"
					scrolling="no"
					loading="lazy"
					marginWidth="0"
					frameBorder="0"
					marginHeight="0"
					allowFullScreen={true}
					style={{
						filter: "grayscale(1) contrast(1.2) opacity(0.4)",
					}}
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9907.997021073143!2d-3.9420236!3d51.6232228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x919fb6f2312ca92b!2sKandys%20Launderette%20%26%20Dry%20Cleaner!5e0!3m2!1sen!2suk!4v1637884674092!5m2!1sen!2suk"
				/>
			</div>
			<div className="container flex px-5 py-24 mx-auto">
				<div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
					<h2 className="mb-3 text-xl font-medium text-pink">{props?.title}</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
					<div className="relative mb-4">
						<label className="text-sm leading-7 text-darkGrey">
							First &amp; last name
						</label>
						<input
							id="text"
							type="text"
							name="First &amp; last name"
							className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
						/>
					</div>
					<div className="relative mb-4">
						<label className="text-sm leading-7 text-darkGrey">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
						/>
					</div>
					<div className="relative mb-4">
						<label className="text-sm leading-7 text-darkGrey">Message</label>
						<textarea
							id="message"
							name="message"
							className="p-4 w-full h-48 font-[400] text-darkGrey placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink resize-none rounded-lg focus:ring-[1px] focus:ring-pink"
						/>
					</div>
					<button
						className="py-4 px-9 w-full text-white text-medium font-[400] border-[1px] border-pink rounded-xl shadow-4xl focus:ring focus:ring-yellow disabled:bg-opacity-50 disabled:cursor-not-allowed bg-pink hover:border-yellow active:bg-yellow hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
						type="submit"
					>
						Send Message
					</button>
					<div className="mt-5">
						<div
							className={isParagraphContent(props?.paragraphTwo)}
							dangerouslySetInnerHTML={createParagraphMarkup(
								props?.paragraphTwo
							)}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormMap;
