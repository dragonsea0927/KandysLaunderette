import styles from "../styles/components/TextImage.module.scss";
import TextImageCard from "./TextImageCard";

const TextImageJumbo = (props) => {
	return (
		<section className={styles.textImageJumbo}>
			<div className="container mx-auto p-0">
				{/* Array Loop */}
				{props.gridContent.map((keys) => (
					<TextImageCard
						Key={keys?.id}
						// Content
						title={keys?.title}
						image={keys?.image}
						subtitle={keys?.subtitle}
						paragraph={keys?.paragraph}
						buttonLink={keys?.buttonLink}
						// DisplayOptions
						displayImage={keys?.displayImageOption}
						displayButton={keys?.displayButtonOption}
					/>
				))}
			</div>
		</section>
	);
};

export default TextImageJumbo;
