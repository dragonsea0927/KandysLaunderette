import TextImageCard from "./Cards/TextImageCard";

const TextImageJumbo = (props) => {
	return (
		<section className="py-9 px-0 bg-lightGrey rounded-xl p-6">
			<div className="container mx-auto p-0">
				<div className="flex flex-col justify-center item-center gap-4">
					{props.gridContent.map((keys) => (
						<TextImageCard
							Key={keys?.id}
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
