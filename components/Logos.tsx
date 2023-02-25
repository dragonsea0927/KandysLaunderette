/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import LogoCardTwo from "./Cards/LogoCardTwo";
import {fadeIn, stagger} from "../animations/animations";

interface IProps {
	title: string;
	backgroundColor: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const Logos: FunctionComponent<IProps> = ({
	title,
	logoGrid,
	backgroundColor,
}) => {
	/* Sets the Background Color */
	let backgroundColorTailwind: string;
	if (backgroundColor === "White") {
		backgroundColorTailwind = "white";
	} else if (backgroundColor === "LightGrey") {
		backgroundColorTailwind = "lightGrey";
	}

	return (
		<section className={`py-20 px-4 lg:px-0 bg-${backgroundColorTailwind}`}>
			<div className="container px-0 mx-auto">
				<motion.h2
					variants={fadeIn}
					className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl mb-24"
				>
					{title}
				</motion.h2>
				<div className="max-w-6xl mx-auto">
					<motion.div
						variants={stagger}
						className="flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-5 lg:justify-between gap-y-8"
					>
						{logoGrid.map((keys) => (
							<LogoCardTwo key={keys?.id} image={keys?.image} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Logos;
