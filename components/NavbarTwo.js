import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const NavbarTwo = () => {
	return (
		<>
			<div className={styles.NavbarTwo}>
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
								<Link href="/services" target="blank">
									<a>All Services</a>
								</Link>
								<Link href="/LaundryDryCleaning" target="blank">
									<a>Laundry & Dry Cleaning</a>
								</Link>
								<Link href="/suitsOxfordShirts" target="blank">
									<a>Suits & Oxford Shirts</a>
								</Link>
								<Link href="/WeddingDressesBridal" target="blank">
									<a>Wedding Dresses</a>
								</Link>
								<Link href="/AlterationsRepairs" target="blank">
									<a>Alterations & Repairs</a>
								</Link>
								<Link href="/ourStory" target="blank">
									<a>Our Story</a>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
