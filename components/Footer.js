import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const Footer = () => {
	return (
		<div>
			{/* <!--===== FOOTER =====--> */}
			<footer className={styles.footer}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.topSection}>
							<div className={styles.content}>
								<div className={styles.emailSignUp}>
									<h2>
										<strong>Don’t miss our latest updates</strong>
									</h2>
									<p>
										Be the first to know about new discounts, services and
										offers. By choosing to sign up, you will join our mailing
										list. You can opt out at any time.
									</p>
								</div>
								<div className={styles.signUp}>
									<form>
										<input
											type="email"
											id="email"
											placeholder="Enter email address"
											name="email"
											required
										/>
									</form>
									<button type="submit">
										<strong>Sign Up</strong>
									</button>
								</div>
								<div className={styles.socialLinks}>
									<Link href="#" target="blank">
										<a>
											<i className="bi bi-facebook"></i>
										</a>
									</Link>
									<Link href="#" target="blank">
										<a>
											<i className="bi bi-instagram"></i>
										</a>
									</Link>
									<Link href="#" target="blank">
										<a>
											<i className="bi bi-twitter"></i>
										</a>
									</Link>
									<Link href="#" target="blank">
										<a>
											<i className="bi bi-whatsapp"></i>
										</a>
									</Link>
									<Link href="#" target="blank">
										<a>
											<i className="bi bi-google"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.middleSection}>
							<div className={styles.content}>
								<div className={styles.links}>
									<h2>
										<strong>Contact Us</strong>
									</h2>
									<Link href="#openingTimes" target="blank">
										<a>Opening Times</a>
									</Link>
									<Link href="#email" target="blank">
										<a>KandysLaunderette@gmail.com</a>
									</Link>
									<Link href="#phone" target="blank">
										<a>01792 461111</a>
									</Link>
									<Link
										href="https://www.google.co.uk/maps/place/Kandys+Launderette+%26+Dry+Cleaner/@51.6232257,-3.9442327,17z/data=!3m1!4b1!4m5!3m4!1s0x486ef5d2d58eace1:0x919fb6f2312ca92b!8m2!3d51.6232257!4d-3.942044"
										target="blank"
									>
										<a>Our Store Location</a>
									</Link>
									<Link href="#help" target="blank">
										<a>Help</a>
									</Link>
								</div>
								<div className={styles.links}>
									<h2>
										<strong>Services</strong>
									</h2>
									<Link href="#launderette" target="blank">
										<a>Laundry & Dry Cleaning</a>
									</Link>
									<Link href="#alterations" target="blank">
										<a>Wedding Dresses & Bridal</a>
									</Link>
									<Link href="#selfService" target="blank">
										<a>Alterations & Repairs</a>
									</Link>
									<Link href="#professionalIroning" target="blank">
										<a>Professional Ironing</a>
									</Link>
									<Link href="#moreServices" target="blank">
										<a>More Services</a>
									</Link>
								</div>
								<div className={styles.links}>
									<h2>
										<strong>About Us</strong>
									</h2>
									<Link href="#ourStory" target="blank">
										<a>Our Story</a>
									</Link>
									<Link href="#customerReviews" target="blank">
										<a>Customer Reviews</a>
									</Link>
									<Link href="#howItWorks" target="blank">
										<a>How It Works</a>
									</Link>
									<Link href="#selfService" target="blank">
										<a>Self-Service</a>
									</Link>
									<Link href="#prices" target="blank">
										<a>Prices</a>
									</Link>
								</div>
								<div className={styles.links}>
									<h2>
										<strong>Other</strong>
									</h2>
									<Link href="#support" target="blank">
										<a>Support</a>
									</Link>
									<Link href="#privacy" target="blank">
										<a>Privacy</a>
									</Link>
									<Link href="#paymentOptions" target="blank">
										<a>Payment Options</a>
									</Link>
									<Link href="#studentDiscounts" target="blank">
										<a>Discounts & Promotions</a>
									</Link>
									<Link href="#termsAndConditions" target="blank">
										<a>Collection & Delivery</a>
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.bottomSection}>
							<div className={styles.topSide}>
								<Image
									src="/img/Wales Flag.png"
									alt="Product Image"
									width={20}
									height={20}
									objectFit="contain"
								></Image>
								<h2>Wales | </h2>
								<Image
									src="/img/United Kingdom Flag.png"
									alt="Product Image"
									width={20}
									height={20}
									objectFit="contain"
								></Image>
								<h2>United Kingdom (GBP)</h2>
							</div>
							<div className={styles.bottomSide}>
								<ul>
									<Link href="#" target="blank">
										<a>Terms & Conditions</a>
									</Link>
									<div> | </div>
									<Link href="#" target="blank">
										<a>Privacy Policy</a>
									</Link>
									<div> | </div>
									<Link href="#" target="blank">
										<a>Accessibility</a>
									</Link>
								</ul>
								<div className={styles.copyright}>
									<h5>&copy; 2021 Kandys Launderette. All Rights Reserved</h5>
									<h5>High St, Swansea SA1 1NW</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
