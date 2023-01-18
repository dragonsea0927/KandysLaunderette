import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";
import styles from "../styles/components/FeaturesBanner.module.scss";

const FeaturesBannerTwo = (props) => {
	return (
		<div className={styles.featuresBannerTwo}>
			<section className="py-10 bg-fadedPinkTwo overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="py-16 px-8 bg-white rounded-3xl">
						<div className="max-w-7xl mx-auto">
							<h2 className="max-w-xl mb-20 text-4xl md:text-5xl text-black tracking-tight font-[600]">
								The Process Simplified
							</h2>
							<div className="flex flex-wrap -m-3">
								<div className="w-full md:w-1/2 lg:w-1/4 p-3">
									<div className="flex flex-wrap items-center -m-3 mb-2">
										<div className="w-auto p-3">
											<Image
												src={`/img/icons/laundry (1).png`}
												className="w-full h-[4px] object-contain"
												alt="Icon"
												width={40}
												height={40}
											/>
										</div>
										<div className="flex-1 p-3">
											<div className="bg-pink h-px"></div>
										</div>
									</div>
									<div className="md:w-3/4">
										<h3 className="mb-4 text-2xl text-pink font-[500] leading-[2.25rem]">
											Schedule a Collection Date
										</h3>
										<p className="text-black text-left font-[400]">
											Book online or with our mobile app. Weekend and evening
											slots available
										</p>
									</div>
								</div>
								<div className="w-full md:w-1/2 lg:w-1/4 p-3">
									<div className="flex flex-wrap items-center -m-3 mb-2">
										<div className="w-auto p-3">
											<Image
												src={`/img/icons/customer.png`}
												className="w-full h-[4px] object-contain"
												alt="Icon"
												width={40}
												height={40}
											/>
										</div>
										<div className="flex-1 p-3">
											<div className="bg-pink h-px"></div>
										</div>
									</div>
									<div className="md:w-3/4">
										<h3 className="mb-4 text-2xl text-pink font-[500] leading-[2.25rem]">
											A Driver Pickup the Clothes
										</h3>
										<p className="text-black text-left font-[400]">
											Pack one bag per service. No need to count or weigh your
											items.
										</p>
									</div>
								</div>
								<div className="w-full md:w-1/2 lg:w-1/4 p-3">
									<div className="flex flex-wrap items-center -m-3 mb-2">
										<div className="w-auto p-3">
											<Image
												src={`/img/icons/washing-machine.png`}
												className="w-full h-[4px] object-contain"
												alt="Icon"
												width={40}
												height={40}
											/>
										</div>
										<div className="flex-1 p-3">
											<div className="bg-pink h-px"></div>
										</div>
									</div>
									<div className="md:w-3/4">
										<h3 className="mb-4 text-2xl text-pink font-[500] leading-[2.25rem]">
											Expert Processing Cleaning
										</h3>
										<p className="text-black text-left font-[400]">
											Regular order updates. Live driver tracking.
										</p>
									</div>
								</div>
								<div className="w-full md:w-1/2 lg:w-1/4 p-3">
									<div className="flex flex-wrap items-center -m-3 mb-2">
										<div className="w-auto p-3">
											<Image
												src={`/img/icons/delivery.png`}
												className="w-full h-[4px] object-contain"
												alt="Icon"
												width={40}
												height={40}
											/>
										</div>
										<div className="flex-1 lg:hidden p-3">
											<div className="bg-pink h-px"></div>
										</div>
									</div>
									<div className="md:w-3/4">
										<h3 className="mb-4 text-2xl text-pink font-[500] leading-[2.25rem]">
											Return Clothes
										</h3>
										<p className="text-black text-left font-[400]">
											24h turnaround time. Real-time order status. Easy to
											reschedule
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default FeaturesBannerTwo;
