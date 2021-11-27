import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import styles from "/styles/Home.module.scss";

const businessService = () => {
	return (
		<>
			<div>
				{/* <!--===== HEAD =====--> */}
				<Head>
					{/* <!-- Website Title --> */}
					<title>Business Tailored Service | Kandys Launderette</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/img/Logo.png" />

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

				{/* // <========== PAGE TITLE ==========> */}
				<div className={styles.mainContent}>
					<div className="container">
						<div className={styles.previousButton}>
							<Link href="/LaundryDryCleaning">
								<a>
									<i className="bi bi-arrow-left-circle"></i>
								</a>
							</Link>
						</div>
						<div className={styles.content}>
							<div className={styles.title}>
								<h2>Business Tailored Service</h2>
								<p>
									Our services provides our business partners professional
									solution to their various requirements. Prior booking is
									required. <br></br>
								</p>
							</div>
							<div className={styles.subtitle}>
								<h2>All Our Services</h2>
							</div>
							<div className={styles.innerContent}>
								<div className={styles.servicesList}>
									<div className={styles.List}>
										<h2>Duvet Cleaning</h2>
										<ul>
											<Link href="">
												<a>Single</a>
											</Link>
											<Link href="">
												<a>Double</a>
											</Link>
											<Link href="">
												<a>Single Blanket</a>
											</Link>
											<Link href="">
												<a>Bed Sheets</a>
											</Link>
											<Link href="">
												<a>Duvet Cover</a>
											</Link>
											<Link href="">
												<a>Duvet Insert</a>
											</Link>
											<Link href="">
												<a>Bed Linen (Single & Double)</a>
											</Link>
											<Link href="">
												<a>Bed Linen (King & Queen)</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Tops & Shirts</h2>
										<ul>
											<Link href="">
												<a>Male Staff Shirts</a>
											</Link>
											<Link href="">
												<a>Female Staff Shirts</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Trousers</h2>
										<ul>
											<Link href="">
												<a>Regular Staff Trousers</a>
											</Link>
											<Link href="">
												<a>Silk Staff Trousers</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Bar & Restaurant</h2>
										<ul>
											<Link href="">
												<a>Waiters Uniforms Set</a>
											</Link>
											<Link href="">
												<a>Kitchen Male Staff Shirts</a>
											</Link>
											<Link href="">
												<a>Kitchen Female Staff Shirts</a>
											</Link>
											<Link href="">
												<a>Bar Staff Aprons</a>
											</Link>
											<Link href="">
												<a>Short Staff Apron</a>
											</Link>
											<Link href="">
												<a>Long Canvas Apron Clip</a>
											</Link>
											<Link href="">
												<a>Women's Waistcoat Staff Shirts</a>
											</Link>
											<Link href="">
												<a>Kitchen Cloths</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Throw-over</h2>
										<ul>
											<Link href="">
												<a>Single</a>
											</Link>
											<Link href="">
												<a>Double</a>
											</Link>
											<Link href="">
												<a>Bed Runner / Throw</a>
											</Link>
										</ul>
									</div>
									<div className={styles.List}>
										<h2>Accessories</h2>
										<ul>
											<Link href="">
												<a>Tie</a>
											</Link>
											<Link href="">
												<a>Scarf</a>
											</Link>
											<Link href="">
												<a>Money Pouch Waist Apron</a>
											</Link>
											<Link href="">
												<a>Tabletop Cloths</a>
											</Link>
											<Link href="">
												<a>Hats</a>
											</Link>
											<Link href="">
												<a>Waist Coat</a>
											</Link>
										</ul>
									</div>
								</div>
								<div className={styles.servicesDisplays}>
									<div className={styles.ImageBSDivider}></div>
									<div className={styles.servicesDisplay}>
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
													<a>Duvet Cleaning</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/UK_BuyingGuide_Duvet.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Bed Linen</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/UK_BuyingGuide_Pillows.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Bed Single Blanket</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/Size-Chart-LP_Bed-Linen.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>King & Queen Bed</a>
												</Link>
											</div>
										</div>
									</div>
									<div className={styles.ImageBSDividerTwo}></div>
									<div className={styles.servicesDisplay}>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/491-325s5.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Staff Tops & Shirts</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/skubb-storage-case-dark-grey__0940614_pe795076_s5.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Money Pouch Waist Apron</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/pants-cleaning.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Staff Trousers</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/attention-to-detail.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Waist Coat</a>
												</Link>
											</div>
										</div>
									</div>
									<div className={styles.ImageBSDividerThree}></div>
									<div className={styles.servicesDisplay}>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/a210e29d04087417d25f542234b19422.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Waiters Uniforms Set</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/26d4c8388751821fbdea71c0c26f46f0.jpg"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Kitchen Staff Shirts</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/PH165543-crop001.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>

											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Bar Staff Aprons</a>
												</Link>
											</div>
										</div>
										<div className={styles.content}>
											<Link href="#launderette" target="blank">
												<a>
													<Image
														src="/img/Multislider_Barnham_Collection.webp"
														alt="Product Image"
														width={400}
														height={400}
														objectFit="cover"
													></Image>
												</a>
											</Link>
											<div className={styles.header}>
												<Link href="#launderette" target="blank">
													<a>Kitchen Cloths</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--===== FOOTER =====--> */}
				<Footer />
			</div>
		</>
	);
};

export default businessService;
