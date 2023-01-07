import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";

// Custom reusable Animation Properties/variables
const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {duration: 0.5, ease: "easeOut"},
	},
};

const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 0.5, ease: "easeOut"},
	},
};

const fadeIn2 = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 2, ease: "easeOut"},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};
const ContactForm = () => {
	return (
		<>
			<section className={styles.contactForm}>
				<div className="container mx-auto p-0">
					<div className={styles.content}>
						<div className={styles.leftSide}>
							<h2>Get in touch with us</h2>
							<div className={styles.contactForm}>
								<form action="">
									<div className={styles.nameInfo}>
										<input
											type="text"
											placeholder="FirstName"
											id="FirstName"
											name="FirstName"
											required
										/>
										<input
											type="text"
											placeholder="lastName"
											id="lastName"
											name="lastName"
											required
										/>
									</div>
									<input
										type="email"
										id="email"
										placeholder="Email Address"
										name="email"
										required
									/>
									<textarea
										placeholder="Message"
										id="message"
										required
									></textarea>

									<button type="submit">
										<strong>Send Email</strong>
									</button>
								</form>
							</div>
						</div>
						<div className={styles.storeMap}>
							{/* <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9907.997021073143!2d-3.9420236!3d51.6232228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x919fb6f2312ca92b!2sKandys%20Launderette%20%26%20Dry%20Cleaner!5e0!3m2!1sen!2suk!4v1637884674092!5m2!1sen!2suk"
                                width="600"
                                height="450"
                                style="border:0;"
                                allowfullscreen="true"
                                loading="lazy"
                            ></iframe> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactForm;
