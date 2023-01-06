import {gql} from "@apollo/client";
import {client} from "../lib/apollo";

// Themes Options Content (Menu Links)
export async function getThemesOptionsContent() {
	const content = gql`
		{
			themesOptions(where: {id: 116, status: PUBLISH, name: "Themes Options"}) {
				edges {
					node {
						themesOptions {
							email
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
