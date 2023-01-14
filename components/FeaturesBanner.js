/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/FeaturesBanner.module.scss";

const FeaturesBanner = (props) => {
	return (
		<section className={styles.featuresBanner}>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col px-0 md:px-8">
					<motion.div variants={fadeInUp} className="py-8">
						<h2 className="w-full lg:w-[45rem] mx-auto leading-[3rem] text-black text-center font-[600] text-4xl md:text-5xl">
							{props?.title}
						</h2>
					</motion.div>
					<div className="flex flex-col lg:flex-row justify-between items-center">
						<div className="w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
							<div className={styles.iconsWrap}>
								<div className="flex flex-col lg:flex-row items-center m-0 sm:m-3">
									<div className="w-auto p-3">
										<span className="mx-auto flex w-[7rem] h-[7rem] items-center justify-center bg-flatLightBlue rounded-full text-white text-2xl">
											<Image
												alt=""
												width="175px"
												height="175px"
												objectFit="cover"
												src={props.iconOne}
												className="object-contain"
											/>
										</span>
									</div>
									<div className="flex-1 p-3">
										<h3 className="text-base text-center font-[600] lg:text-left">
											{props.textOne}
										</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
							<div className={styles.iconsWrap}>
								<div className="flex flex-col lg:flex-row items-center m-0 sm:m-3">
									<div className="w-auto p-3">
										<span className="mx-auto flex w-[7rem] h-[7rem] items-center justify-center bg-blue rounded-full text-white text-2xl">
											<Image
												alt=""
												width="175px"
												height="175px"
												objectFit="cover"
												src={props.iconTwo}
												className="object-contain"
											/>
										</span>
									</div>
									<div className="flex-1 p-3">
										<h3 className="text-base text-center font-[600] lg:text-left">
											{props.textTwo}
										</h3>
									</div>
								</div>
							</div>
						</div>
						<div className=" w-full lg:w-1/3 py-8 px-6 sm:p-8 sm:px-0">
							<div className={styles.iconsWrap}>
								<div className="flex flex-col lg:flex-row items-center m-0 sm:m-3">
									<div className="w-auto p-3">
										<span className="mx-auto flex w-[7rem] h-[7rem] items-center justify-center bg-darkBlue rounded-full text-white text-2xl">
											<Image
												alt=""
												width="175px"
												height="175px"
												objectFit="cover"
												src={props.iconThree}
												className="object-contain"
											/>
										</span>
									</div>
									<div className="flex-1 p-3">
										<h3 className="text-base text-center font-[600] lg:text-left">
											{props.textThree}
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesBanner;
