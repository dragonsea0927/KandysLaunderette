import {gql} from "@apollo/client";
import {client} from "./apollo";

// Menu Links Content (Main Menu Links)
export async function getMainMenuLinksContent() {
	const content = gql`
		{
			mainMenuLinks: menuItems(where: {location: PRIMARY}) {
				edges {
					node {
						url
						label
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: content,
	});

	return {
		mainMenuLinks: response?.data?.mainMenuLinks?.edges,
	};
}

// Individual Services Menu Links
export async function getIndividualServicesMenu() {
	const content = gql`
		{
			IndividualServicesMenuLinks: menuItems(
				where: {location: INDIVIDUAL_SERVICES}
			) {
				edges {
					node {
						label
						uri
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: content,
	});

	return {
		IndividualServicesMenuLinks:
			response?.data?.IndividualServicesMenuLinks?.edges,
	};
}

// Commercial Services Menu Links
export async function getCommercialServicesMenu() {
	const content = gql`
		{
			CommercialServicesMenuLinks: menuItems(
				where: {location: COMMERCIAL_SERVICES}
			) {
				edges {
					node {
						label
						uri
					}
				}
			}
		}
	`;

	const response = await client.query({
		query: content,
	});

	return {
		CommercialServicesMenuLinks:
			response?.data?.CommercialServicesMenuLinks?.edges,
	};
}
