import styles from "../styles/components/TextImage.module.scss";
import TextImageCard from "./Cards/TextImageCard";

const TextImageJumbo = (props) => {
	return (
		<section className={styles.textImageJumbo}>
			<div className="container mx-auto p-0">
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
		</section>
	);
};

export default TextImageJumbo;
