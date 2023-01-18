/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/FourGridContent.module.scss";
import FourGridContentCard from "./FourGridContentCard";

const FourGridContent = (props) => {
	return (
		<section className={styles.fourGridContent}>
			<div className="pt-10 pb-16 bg-fadedPinkThree overflow-hidden">
				<div className="container mx-auto px-4">
					<span className="inline-block mb-3 text-tiny text-white font-[600] uppercase tracking-widest">
						What we found
					</span>
					<h2 className="my-5 mb-12 text-2xl lg:text-4xl text-white font-[600] tracking-tight">
						Here&rsquo;s what you get with Kandy&rsquo;s Launderette.
					</h2>
					{/* <div className="flex flex-wrap -m-4">
						{props?.gridContent.map((keys) => (
							<FourGridContentCard
								Key={keys?.id}
								image={keys?.image}
								title={keys?.title}
								paragraph={keys?.paragraph}
							/>
						))}
					</div> */}
					<div className="flex flex-wrap -m-4">
						<div className="w-full md:w-1/2 p-4">
							<div className="p-8 md:p-16 text-center h-full bg-white rounded-3xl hover:ease-in-out hover:duration-[0.5s]">
								<Image
									className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
									src={props?.Image}
									width={1000}
									height={650}
									objectFit="cover"
									objectPosition="center"
									alt={`Image`}
								/>
								<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
									Schedule your collection
								</h3>
								<p className="mb-10 text-base text-center font-[400] text-black">
									Plan your day with ease. Choose a collection and delivery time
									at your convenience.
								</p>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-4">
							<div className="p-8 md:p-16 text-center h-full bg-white rounded-3xl hover:ease-in-out hover:duration-[0.5s]">
								<Image
									className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
									src={props?.ImageTwo}
									width={1000}
									height={650}
									objectFit="cover"
									objectPosition="center"
									alt={`Image`}
								/>
								<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
									Pack your laundry
								</h3>
								<p className="mb-10 text-base text-center font-[400] text-black">
									Pack your items in a disposable bag. Use one bag per service.
									Our driver will transfer them to reusable Laundryheap bags
									which you can keep for your next order.
								</p>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-4">
							<div className="p-8 md:p-16 text-center h-full bg-white rounded-3xl hover:ease-in-out hover:duration-[0.5s]">
								<Image
									className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
									src={props?.ImageThree}
									width={1000}
									height={650}
									objectFit="cover"
									objectPosition="center"
									alt={`Image`}
								/>
								<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
									Wait for our driver
								</h3>
								<p className="mb-10 text-base text-center font-[400] text-black">
									You’ll receive a notification when our driver is nearby. They
									will collect your bags and take them to your local cleaning
									facility.
								</p>
							</div>
						</div>
						<div className="w-full md:w-1/2 p-4">
							<div className="p-8 md:p-16 text-center h-full bg-white rounded-3xl hover:ease-in-out hover:duration-[0.5s]">
								<Image
									className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
									src={props?.ImageFour}
									width={1000}
									height={650}
									alt={`Image`}
									objectFit="cover"
									objectPosition="center"
								/>
								<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
									Relax while we take care of your laundry
								</h3>
								<p className="mb-10 text-base text-center font-[400] text-black">
									Your local partner facility will clean your items with utmost
									care. Our driver will then deliver them back to you whenever
									you like. You’re in full control of your delivery and can
									always reschedule if not at home.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FourGridContent;
