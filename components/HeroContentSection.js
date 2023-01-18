/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/HeroContentSection.module.scss";

const HeroContentSection = (props) => {
	return (
		<section className={styles.heroContentSection}>
			<div className="mt-24 pt-6 pb-20 bg-white overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="relative bg-white overflow-hidden rounded-t-3xl">
						<div className="absolute w-full h-full bg-white border-t border-l border-r border-grey rounded-t-3xl"></div>
						<div className="relative px-8 pt-20">
							<div className="md:max-w-2xl text-center mx-auto">
								<span className="inline-block mb-3 text-medium text-pink font-[600] uppercase tracking-widest">
									Quick. Clean. Fresh.
								</span>
								<h1 className="my-12 text-5xl lg:text-6xl text-black text-center text-black tracking-tight font-[700] leading-[3.5rem]">
									Relax while we take care of your laundry
								</h1>
								<p className="mb-10 text-base lg:text-medium text-center font-[400] text-black">
									We always ensure the quality of laundry and dry cleaning. Our
									fleet team are efficient enough to ensure your schedule
									collection and delivery. On facility we have expert inspection
									process to make sure the quality of wash and Iron. For
									laundry, Dry cleaning or Ironing, we are the most reliable
									company in your area.
								</p>
								<div className="flex flex-wrap justify-center mb-20 -m-2">
									<div className="w-full md:w-auto p-2">
										<Link href={`/`} target={``}>
											<a className="block w-[fit-content] mx-auto px-8 py-3.5 text-base text-center text-white font-bold bg-pink hover:bg-fadedPinkThree focus:ring-4 focus:ring-blue rounded-full">
												Get Started
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="relative z-20 px-8 max-w-max mx-auto">
								<Image
									width={1000}
									height={650}
									objectFit="cover"
									objectPosition="center"
									alt={`Image`}
									src={props?.backgroundImage}
									className="w-full h-[650px] rounded-lg object-cover object-center"
								/>
								<Link href={`/services`} target={``}>
									<motion.a
										variants={fadeIn}
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-base text-center text-white font-[600] cursor-pointer bg-pink hover:bg-fadedPink focus:ring-4 focus:ring-fadedPink rounded-full"
									>
										Watch Video
									</motion.a>
								</Link>
							</div>
							<div className="absolute left-0 top-0 w-full h-1/2 bg-white">
								<div className="h-full bg-white border-b border-l border-r border-grey rounded-b-3xl"></div>
							</div>
							<div className="absolute left-0 bottom-0 w-full h-1/2 bg-white"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroContentSection;
