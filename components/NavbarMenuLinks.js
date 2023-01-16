import Link from "next/link";

const NavbarMenuLinks = (props) => {
	return (
		<Link href={`${props?.linkUrl}`}>
			<a className="p-3 text-black text-sm text-left font-[300] tracking-[0.05rem] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
				{props?.linkName}
			</a>
		</Link>
	);
};

export default NavbarMenuLinks;
