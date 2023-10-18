import { register } from "../../api/auth/index.js";
import { displayMessage } from "../../ui/common/index.js";

export function registerListener() {
	const form = document.querySelector("#loginForm");

	if (form) {
		form.addEventListener("submit", async (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const user = Object.fromEntries(formData.entries());

			try {
				await register(user);
				form.reset();
				displayMessage("success", 'Registration successful. Please <a href="#">Login</a>', "#message");
			} catch (error) {
				displayMessage("danger", error.message, "#message");
				console.error(error);
			}
		});
	}
}
