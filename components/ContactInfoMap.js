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

const fadeInTwo = {
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

const ContactInfoMap = () => {
	return (
		<>
			<section className={styles.contactInfoMap}>
				<div>
					<div className={styles.content}>
						<div className={styles.leftSide}>
							<div className={styles.item}>
								<h2>FIND US</h2>
								<p>
									<strong>Kandys Launderette</strong>
									<br></br>
									High St, Swansea
									<span>
										<Link
											href="https://www.google.co.uk/maps/place/Kandys+Launderette+%26+Dry+Cleaner/@51.6232257,-3.9442327,17z/data=!3m1!4b1!4m5!3m4!1s0x486ef5d2d58eace1:0x919fb6f2312ca92b!8m2!3d51.6232257!4d-3.942044"
											target="blank"
										>
											<a>SA1 1NW</a>
										</Link>
									</span>
								</p>
							</div>
							<div className={styles.item}>
								<h2>PHONE US</h2>
								<Link href="tel:01792 461111" target="blank">
									<a>+44 (0) 1792 46 11 11</a>
								</Link>
							</div>
							<div className={styles.item}>
								<h2>EMAIL US</h2>
								<Link href="mailto:KandysLaunderette@gmail.com" target="blank">
									<a>KandysLaunderette@gmail.com</a>
								</Link>
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

export default ContactInfoMap;
