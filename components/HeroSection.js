import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp} from "../animations/animations";
import styles from "../styles/components/HeroSection.module.scss";

const HeroSection = (props) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-4 text-white text-center text-base";
		} else {
			contentStyling = "block mt-4 text-white text-center text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section
			className={styles.heroSection}
			style={{
				backgroundImage: `linear-gradient(
							0deg,
							rgba(0, 0, 0, 0.30),
							rgba(0, 0, 0, 0.30)
						),url(${props.backgroundImage})`,
			}}
		>
			<div className="h-[100vh] flex flex-col justify-between">
				<div className="flex flex-row justify-center gap-4">
					<div className="container mx-auto">
						<ul className="py-8">
							<Link href="/">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-white font-[700] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Home
								</a>
							</Link>
							<Link href="/services">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-white font-[700] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									All Services
								</a>
							</Link>
							<Link href="/LaundryDryCleaning">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-white font-[700] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Laundry & Dry Cleaning
								</a>
							</Link>
							<Link href="/suitsOxfordShirts">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-white font-[700] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Suits & Oxford Shirts
								</a>
							</Link>
							<Link href="/WeddingDressesBridal">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-white font-[700] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Wedding Dresses
								</a>
							</Link>
							<Link href="/AlterationsRepairs">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-white font-[700] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Alterations & Repairs
								</a>
							</Link>
							<Link href="/ourStory">
								<a className="my-auto px-2 text-base tracking-[0.05rem] text-white font-[700] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Our Story
								</a>
							</Link>
						</ul>
					</div>
				</div>
				<div className="py-20 px-0">
					<motion.h1
						variants={fadeIn}
						className="text-white text-center mx-auto text-7xl w-full lg:w-[50rem] font-[900]"
					>
						{props?.title}
					</motion.h1>
				</div>
				<div className="flex flex-col">
					<div className="bg-fadedPinkThree p-4">
						<div className="container mx-auto">
							<div className="flex justify-between items-center">
								<div className="flex flex-col justify-center">
									<h2 className="text-white text-left text-4xl font-[900]">
										{props?.subtitle}
									</h2>
									<div
										className={isParagraphContent(props?.paragraph)}
										dangerouslySetInnerHTML={createParagraphMarkup()}
									/>
								</div>
								<motion.div variants={fadeInUp} className="w-auto p-0">
									<span className="mx-auto flex w-[8.5rem] h-[8.5rem] items-center justify-center bg-pink rounded-full text-white text-2xl">
										<Image
											src="/img/icons/washing-machine.png"
											className="object-contain"
											alt="Icon"
											width={100}
											height={100}
										/>
									</span>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
