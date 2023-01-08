/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/ContactInfoTwo.module.scss";

const ContactInfoTwo = (props) => {
	return (
		<section
			className={styles.contactInfoTwo}
			style={{
				padding: "7.5rem 5rem",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundImage: `url(${props.backgroundImage}`,
			}}
		>
			<div className="container mx-auto p-0">
				<motion.div
					variants={stagger}
					className="flex flex-col md:flex-row py-4 gap-12 md:gap-16 lg:gap-28 justify-between items-center"
					style={{
						gap: "10rem",
						display: "flex",
						padding: "1rem 0",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<motion.div variants={fadeInUp} className="">
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
					<motion.div variants={fadeIn} className={styles.button}>
						<Link
							href={`${props?.buttonLink?.url}`}
							target={`${props?.buttonLink?.target}`}
							style={{
								padding: "2rem 5rem",
							}}
						>
							{props?.buttonLink?.title}
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactInfoTwo;
