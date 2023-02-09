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
		<section className="text-grey body-font relative">
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
			<div className="container px-5 py-24 mx-auto flex">
				<div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
					<h2 className="text-pink text-xl mb-3 font-medium">{props?.title}</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
					<div className="relative mb-4">
						<label className="leading-7 text-sm text-grey">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-white rounded border border-grey focus:border-pink focus:ring-2 focus:ring-pink text-base outline-none text-grey py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label className="leading-7 text-sm text-grey">Message</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-white rounded border border-grey focus:border-pink focus:ring-2 focus:ring-pink h-32 text-base outline-none text-grey py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<button className="inline-block py-2 px-6 bg-pink hover:bg-yellow text-white font-[600] leading-loose transition-all ease-in-out duration-[0.5s] rounded-lg">
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a>Get In touch</a>
						</Link>
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
