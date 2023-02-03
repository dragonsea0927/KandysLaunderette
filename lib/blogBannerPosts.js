import {gql} from "@apollo/client";
import {client} from "./apollo";

// Commercial Services Menu Links
export async function getLatestTwoPosts() {
	const content = gql`
		{
			latestTwoPosts: posts(
				where: {status: PUBLISH, orderby: {field: AUTHOR, order: ASC}}
				first: 2
			) {
				edges {
					node {
						title
						link
						content(format: RENDERED)
						categories {
							nodes {
								name
							}
						}
						featuredImage {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: content,
	});

	return {
		latestTwoPosts: response?.data?.latestTwoPosts?.edges,
	};
}
