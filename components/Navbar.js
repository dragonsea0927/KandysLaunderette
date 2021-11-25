import Link from "next/link";
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
								<h2>(Flag) Wales</h2>
							</ul>
						</div>
						<div className={styles.mainSection}>
							<div className={styles.title}>
								<h2>Kandys</h2>
							</div>
							<ul>
								<Link href="#home" target="blank">
									<a>Home</a>
								</Link>
								<Link href="#services" target="blank">
									<a>All Services</a>
								</Link>
								<Link href="#launderette" target="blank">
									<a>Laundry & Dry Cleaning</a>
								</Link>
								<Link href="#alterations" target="blank">
									<a>Suits & Oxford Shirts</a>
								</Link>
								<Link href="#alterations" target="blank">
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
