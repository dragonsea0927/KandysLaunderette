import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

const NavbarMenuSublinks = (props) => {
	return (
		<Link href={`${props?.linkUrl}`}>
			<a className="py-3 px-6 text-white text-base text-left font-[400] tracking-[0.05rem] hover:bg-fadedPinkThree hover:text-white transition-all ease-in-out duration-[0.5s]">
				{props?.linkName}
			</a>
		</Link>
	);
};

export default NavbarMenuSublinks;
