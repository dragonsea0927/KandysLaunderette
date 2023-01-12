import Link from "next/link";

const NavbarMenuSublinks = (props) => {
	return (
		<>
			<Link href={`${props?.linkUrl}`}>
				<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
					{props?.linkName}
				</a>
			</Link>
		</>
	);
};

export default NavbarMenuSublinks;
