import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const Navbar = () => {
	return (
		<div>
			<div className={styles.Navbar}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.topSection}>
							<ul>
								<Link href="#findStore" target="blank">
									<a>Find Store</a>
								</Link>
								<div> | </div>
								<Link href="#contactUs" target="blank">
									<a>Contact Us</a>
								</Link>
								<div> | </div>
								<div className={styles.flag}>
									<Image
										src="/img/Wales Flag.png"
										alt="Product Image"
										width={20}
										height={20}
										objectFit="contain"
									></Image>
									<h2>Wales</h2>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.borderDivider}></div>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.mainSection}>
							<div className={styles.title}>
								<Link href="/" target="blank">
									<a>Kandys</a>
								</Link>
							</div>
							<ul>
								<Link href="/" target="blank">
									<a>Home</a>
								</Link>
								<Link href="#services" target="blank">
									<a>All Services</a>
								</Link>
								<Link href="/LaundryDryCleaning" target="blank">
									<a>Laundry & Dry Cleaning</a>
								</Link>
								<Link href="/suitsOxfordShirts" target="blank">
									<a>Suits & Oxford Shirts</a>
								</Link>
								<Link href="/WeddingDressesBridal" target="blank">
									<a>Wedding Dresses & Bridal</a>
								</Link>
								<Link href="#selfService" target="blank">
									<a>Alterations & Repairs</a>
								</Link>
								<Link href="#ourStory" target="blank">
									<a>Our Story</a>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
