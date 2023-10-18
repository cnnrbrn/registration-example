export default function handleErrors(responseData) {
	if (responseData && responseData.errors && Array.isArray(responseData.errors)) {
		const errorMessage = responseData.errors.map((error) => error.message).join("\n");
		throw new Error(errorMessage);
	}

	throw new Error("There was an error processing the request.");
}
