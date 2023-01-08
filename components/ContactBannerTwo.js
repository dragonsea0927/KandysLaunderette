/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/ContactBanner.module.scss";

const ContactBannerTwo = (props) => {
	return (
		<section
			className={styles.contactBannerTwo}
			style={{
				backgroundImage: `url(${props.backgroundImage}`,
			}}
		>
			<div className="container mx-auto p-0">
				<motion.div
					variants={stagger}
					className="flex flex-col lg:flex-row py-8 gap-y-28 lg:gap-10 px-8 justify-between items-center"
				>
					<motion.div variants={fadeInUp}>
						<h2
							className="text-white text-center text-2xl"
							style={{
								color: "#ffffff",
								fontSize: "1.75rem",
								textAlign: "center",
							}}
						>
							{props?.title}
						</h2>
						<span
							style={{
								gap: "0.5rem",
								display: "flex",
								color: "#ffffff",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							Email:
							<Link
								href={`mailto:${props?.themesOptions?.email}`}
								target="blank"
								className="flex flex-row justify-center items-center gap-2 text-white text-base text-center hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]"
							>
								{props?.themesOptions?.email}
							</Link>
						</span>

						<div
							className="flex flex-row justify-center items-center gap-2 py-4"
							style={{
								gap: "0.5rem",
								display: "flex",
								color: "#ffffff",
								padding: "1rem 0",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<span
								style={{
									color: "#ffffff",
									margin: "auto 0",
									textAlign: "center",
								}}
							>
								Tel:
								<Link
									href={`tel:${props?.themesOptions?.phoneNumberOptionTwo}`}
									className="text-white text-base text-center"
									style={{
										color: "#ffffff",
										margin: "auto 0",
										textAlign: "center",
									}}
								>
									{props?.themesOptions?.phoneNumberOptionTwo}
								</Link>
							</span>
							|
							<Link
								href={`tel:${props?.themesOptions?.phoneNumber}`}
								className="my-auto text-white text-base text-center"
								style={{
									color: "#ffffff",
									margin: "auto 0",
									textAlign: "center",
								}}
							>
								{props?.themesOptions?.phoneNumber}
							</Link>
						</div>
						<h5
							className="text-white text-base text-center"
							style={{
								color: "#ffffff",
								fontSize: "1rem",
								textAlign: "center",
							}}
						>
							Opening hours: Monday to Saturday: 8:30am – 7pm | Sunday: (9am -
							5pm)
						</h5>
					</motion.div>
					<motion.button variants={fadeIn}>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
						>
							<a className="py-6 px-20 font-[500] uppercase border-[1px] border-solid border-fadedPink text-white text-base  hover:bg-fadedPink hover:ease-in-out hover:duration-[0.5s]">
								{props?.buttonLink?.title}
							</a>
						</Link>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactBannerTwo;
