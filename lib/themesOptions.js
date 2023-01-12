import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Themes Options Content
export async function getThemesOptionsContent() {
	const content = gql`
		{
			themesOptions(where: {id: 187, status: PUBLISH, name: "Themes Options"}) {
				edges {
					node {
						themesOptions {
							email
							openingHours
							twitterLink
							phoneNumber
							linkedinLink
							contactAddress
							contactPostcode
							contactPostcodeText
							phoneNumberOptionTwo
							instagramLink
							facebookLink
							emailOptionTwo
							companyLogo {
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
		themesOptions: response?.data?.themesOptions?.edges[0]?.node?.themesOptions,
	};
}
