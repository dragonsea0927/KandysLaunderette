import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Navbar from "/components/Navbar";
import OurProcess from "/components/ourProcess";
import Footer from "/components/Footer";
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

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const AlterationsRepairs = () => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== HEAD =====--> */}
			<Head>
				{/* <!-- Website Title --> */}
				<title>Alterations & Repairs | Kandys Launderette</title>
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

			{/* // <========== ABOUT US DESCRIPTIONS ==========> */}
			<div className={styles.alterationsRepairsSection}>
				{/* // <========== PAGE TITLE ==========> */}
				<div className={styles.pageTitle}>
					<div className="container">
						<div className={styles.content}>
							<div className={styles.title}>
								<h2>Alterations & Repairs</h2>
								<h5>Garments Repairs And Alterations By Experts</h5>
							</div>
						</div>
					</div>
				</div>

				{/* // <========== BACKGROUND IMAGE ==========> */}
				<div className={styles.backgroundImageAlterationsRepairs}></div>

				<div className={styles.aboutUs}>
					<div className="container">
						<div className={styles.content}>
							<h2>We may be new to you</h2>
							<p>
								But We believe in making the most of life's simple pleasures -
								it's the little things that matter. Precious moments of
								uncomplicated happiness are our constant inspiration, and it is
								with these in mind that we create collections of services that
								are built to last and become an intimate part of your everyday
								lives.
								<br></br>
								<br></br>I cannot emphasize enough how much thought, care, and
								attention to detail goes into every service we make at The White
								Company - I hope you'll cherish your purchases as much as we do.
								<br></br>
								<br></br>
								<span>We're delighted to meet you</span>
							</p>
						</div>
					</div>
				</div>

				{/* <!--===== WEDDING SUITS =====--> */}
				<div className={styles.suitsBridal}>
					<div className="container">
						<div className={styles.content}>
							<div className={styles.title}>
								<h2>Wedding Suits & Bridal Dresses</h2>
								<h5>We make your special day simple.</h5>
							</div>
							<div className={styles.gridDisplay}>
								<div className={styles.innerContent}>
									<div className={styles.Image}>
										<Image
											src="/img/tengyart-Q5jO8wxYnys-unsplash.jpg"
											alt="Product Image"
											width={600}
											height={800}
											objectFit="cover"
										></Image>
									</div>
									<div className={styles.description}>
										<h2>Suits</h2>
										<p>
											We offer suit cleaning & alterations for everyday and
											special day occasions. We specialize in wedding suits, 2
											Piece & 3 Piece suits and in 2 Piece Dress & Dinner Suit.
										</p>
									</div>
								</div>
							</div>
							<div className={styles.gridDisplay}>
								<div className={styles.innerContent}>
									<div className={styles.description}>
										<h2>Bridal Dresses</h2>
										<p>
											We offer suit cleaning & alterations for everyday and
											special day occasions. We specialize in wedding suits, 2
											Piece & 3 Piece suits and in 2 Piece Dress & Dinner Suit.
										</p>
									</div>
									<div className={styles.Image}>
										<Image
											src="/img/w920_q60.webp"
											alt="Product Image"
											width={600}
											height={800}
											objectFit="cover"
										></Image>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!--===== OUR PROCESS INFORMATION =====--> */}
			<OurProcess />

			{/* <!--===== FOOTER =====--> */}
			<Footer />
		</motion.div>
	);
};

export default AlterationsRepairs;
