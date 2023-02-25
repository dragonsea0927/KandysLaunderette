import Link from "next/link";
import {FunctionComponent} from "react";

interface IProps {
	linkUrl: string;
	linkName: string;
}

const FooterMenuLinks: FunctionComponent<IProps> = ({linkUrl, linkName}) => {
	return (
		<Link
			href={`${linkUrl}`}
			className="text-black text-sm text-left py-1 hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
		>
			{linkName}
		</Link>
	);
};

export default FooterMenuLinks;
