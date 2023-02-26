import {FunctionComponent} from "react";
import TextImageCard from "./Cards/TextImageCard";

interface IProps {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
				image: {
					altText: string;
					sourceUrl: string;
				};
				displayImageOption: string;
				displayButtonOption: string;
			};
		}
	];
}

const TextImageJumbo: FunctionComponent<IProps> = ({gridContent}) => {
	return (
		<section className="p-6 px-0 bg-white py-9 rounded-xl">
			<div className="container p-0 mx-auto">
				<div className="flex flex-col justify-center gap-4 item-center">
					{gridContent.map((keys) => (
						<TextImageCard
							key={keys?.card?.id}
							// Content
							title={keys?.card?.title}
							image={keys?.card?.image}
							subtitle={keys?.card?.subtitle}
							paragraph={keys?.card?.paragraph}
							buttonLink={keys?.card?.buttonLink}
							// DisplayOptions
							displayImage={keys?.card?.displayImageOption}
							displayButton={keys?.card?.displayButtonOption}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TextImageJumbo;
