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

// Service Menu Links Content
export async function getServiceLinksContent() {
	const content = gql`
		{
			serviceMenuLinks: menuItems(where: {location: SERVICES}) {
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
		serviceMenuLinks: response?.data?.serviceMenuLinks?.edges,
	};
}

// Laundry Dry Cleaning Submenu Links Content
export async function getLaundryDryCleaningLinksContent() {
	const content = gql`
		{
			laundryDryCleaningMenuLinks: menuItems(
				where: {location: LAUNDRY_DRY_CLEANING}
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
		laundryDryCleaningMenuLinks:
			response?.data?.laundryDryCleaningMenuLinks?.edges,
	};
}
