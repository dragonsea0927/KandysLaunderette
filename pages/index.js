/* eslint-disable react/no-unknown-property */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<>
			{/* <!--===== HEAD =====--> */}
			<Head>
				{/* <!-- Website Title --> */}
				<title>Kandys Launderette | Professional Dry Cleaning Solutions</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="img/Logo.png" />

				{/* <!-- AOS CDN.js Reveal Animation  --> */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
					integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w=="
					crossOrigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				{/* <!-- Bootstrap CSS --> */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossOrigin="anonymous"
				/>
				{/* <!-- Bootstrap Icon Link --> */}
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
				/>
				{/* <!-- Icons for Mobile viewport --> */}
				<link
					rel="stylesheet"
					href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
				/>
			</Head>

			{/* <!--===== NAVIGATION =====--> */}
			<Navbar />

			{/* <!--===== HERO =====--> */}
			<div className={styles.backgroundImage}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Kandy's Launderette</h2>
							<h5>Professional Dry Cleaning Specialist</h5>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== MAIN SERVICES =====--> */}
			<div className={styles.services}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Our Services</h2>
							<h5>From Individual to Business Solutions</h5>
						</div>
						<div className={styles.moreOptions}>
							<newButton>
								<Link href="">
									<a>
										View All Services <i class="bi bi-arrow-right-circle"></i>
									</a>
								</Link>
							</newButton>
						</div>
						<div className={styles.gridDisplay}>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/8b0c89140159be4416593876eeefd470.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Laundry & Dry Cleaning</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/7e2461b51ed38f933ff6794e44025826.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Groom's Suit Cleaning & Alterations</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/8ee51b5c1c83023731f8c9ca972a9c3e.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Bridal Dress Cleaning & Alterations</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/trousers-alterations.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Alterations & Repairs</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/22679eb6cd65c24b2d14f7910980ec95.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Professional Ironing Services</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/f46c1141fb97af8cc03149945a4f19c4.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Self-Services</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/supersoft_duvet_1_8.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Duvet & Quilts Cleaning</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/cashmere-care-step3.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Stain Removing</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/209-116s2.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Oxford Shirts</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/ORGANICFC02_15_T.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Restaurant Laundry & Linen Cleaning</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/920015s12.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Jacket & Coat Alterations</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/pexels-sarah-chai-7282372.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>
								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Kids Clothing Alterations</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== SPECIAL OCCASIONS =====--> */}
			<div className={styles.specialOccasions}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Special Occasions</h2>
							<h5>Remove the stress from your special day</h5>
						</div>

						<div className={styles.innerContent}>
							<div className={styles.productDisplay}>
								<Link href="#suit" target="blank">
									<a>
										<Image
											src="/img/2f7f5644b96ce5f477f1522efa614d32.jpg"
											alt="Product Image"
											width={300}
											height={400}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								<div className={styles.content}>
									<h2>Dress & Dinner Suits, Oxford Shirts</h2>
									<newButton className={styles.shopButton}>
										<Link href="#" target="blank">
											<a>More Info</a>
										</Link>
									</newButton>
								</div>
							</div>
							<div className={styles.productDisplay}>
								<Link href="#" target="blank">
									<a>
										<Image
											src="/img/2dadbbf0777ed8a16b24ccde6a6f90dd.jpg"
											alt="Product Image"
											width={300}
											height={400}
											layout="responsive"
											objectFit="cover"
										/>
									</a>
								</Link>
								<div className={styles.content}>
									<h2>Wedding, Bridesmaids & Evening Dresses </h2>
									<newButton className={styles.shopButton}>
										<Link href="#" target="blank">
											<a>More Info</a>
										</Link>
									</newButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== WHY CHOOSE US =====--> */}
			<div className={styles.whyChooseUs}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Why Choose Us</h2>
							<h5>Finishing touches for the perfect occasion</h5>
							<p>
								Over 2 years ago, Kandys had a vision: to create a company that
								specialized in Professional Dry Cleaning Solutions, combining
								the highest quality with affordable prices.
							</p>
						</div>
						<div className={styles.gridDisplay}>
							<div className={styles.imageDiv}>
								<Image
									src="/img/cashmere-care-how-to-store-1.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Personalized Experience</strong>
								</h2>
								<p>
									We take utmost care of your clothes, segregating based on the
									clothing type and giving you instant relief to make your day
									better.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/cashmere-care-how-to-store-2.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Affordable Pricing</strong>
								</h2>
								<p>
									Prices that suits your pocket is one of our USP. An option of
									choosing between 2 types of pricing is available.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/skubb-storage-case-dark-grey__0954862_pe803520_s5.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Convenience</strong>
								</h2>
								<p>
									With just a tap of a button your laundry get done. Giving you
									leisure time to spend with friends and family.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/stuk-clothes-cover-set-of-3-white-grey__0909410_pe709744_s5.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Quality</strong>
								</h2>
								<p>
									We use the best in class laundry products to assure you, that
									your favorite clothes are always taken care of.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/skubb-storage-case-dark-grey__0940614_pe795076_s5.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="contain"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Express Delivery</strong>
								</h2>
								<p>
									Forgot to wash your favorite clothes for an event, function or
									a night out. With our super same day service and express free
									delivery.
								</p>
							</div>
							<div className={styles.imageDiv}>
								<Image
									src="/img/920015s10.webp"
									alt="Product Image"
									width={400}
									height={400}
									objectFit="cover"
								></Image>
							</div>
							<div className={styles.description}>
								<h2>
									<strong>Alterations</strong>
								</h2>
								<p>
									Damn it, you ripped your favorite clothes. No problem! we can
									handle that for you. If you need altering for your clothes we
									can cover it.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== HOTEL & RESTAURANT =====--> */}
			<div className={styles.hotelAndRestaurant}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Hotel & Restaurant Services</h2>
							<h5>
								Attention To Detail, Affordable Professionalism & Perfect
								Simplicity
							</h5>
						</div>
						<div className={styles.gridDisplay}>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/Bath_Linen_Buying_Guide.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Table & Bath Towels Dry Cleaning</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/supersoft_duvet_1_8.jpg"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Duvet & Quilts Dry Cleaning </a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/Size-Chart-LP_Bed-Essentials.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Bed & Table Linen Dry Cleaning</a>
									</Link>
								</div>
							</div>
							<div className={styles.content}>
								<Link href="#launderette" target="blank">
									<a>
										<Image
											src="/img/cashmere-care-step4.webp"
											alt="Product Image"
											width={400}
											height={400}
											objectFit="cover"
										></Image>
									</a>
								</Link>

								<div className={styles.header}>
									<Link href="#launderette" target="blank">
										<a>Professional Laundering & Ironing</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== Background Image Divider =====--> */}
			<div className={styles.backgroundImageDivider}></div>

			{/* <!--===== OUT STORE LOCATION =====--> */}
			<div className={styles.storeLocation}>
				<div className="container">
					<div className={styles.title}>
						<h2>Our Location</h2>
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

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</>
	);
}
