// import {gql} from "@apollo/client";
// import {client} from "./apollo";

// // Menu Links Content (Main Menu Links)
// export async function getMainMenuLinksContent() {
// 	const content = gql`
// 		{
// 			mainMenuLinks: menuItems(where: {location: PRIMARY}) {
// 				edges {
// 					node {
// 						url
// 						label
// 					}
// 				}
// 			}
// 		}
// 	`;

// 	const response = await client.query({
// 		query: content,
// 	});

// 	return {
// 		mainMenuLinks: response?.data?.mainMenuLinks?.edges,
// 	};
// }
