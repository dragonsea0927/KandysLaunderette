import Link from "next/link";

const FooterMenuLinks = (props) => {
	return (
		<Link href={`${props?.linkUrl}`} target="blank">
			<a className="text-black text-sm text-left py-1 hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
				{props?.linkName}
			</a>
		</Link>
	);
};

export default FooterMenuLinks;
