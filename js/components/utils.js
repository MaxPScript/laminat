import { laminates } from "./laminates.js";
import { drawPanels } from "./drawPanels.js";
//
export function inputToSpanText() {
	inputRoomWidth_id.addEventListener("input", () => {
		// inputWidthText_id.textContent = inputRoomWidth_id.value + " m";
		roomWidthSpan.textContent = "Room X, " + inputRoomWidth_id.value + "m";
	});
	inputRoomHeight_id.addEventListener("input", () => {
		// inputHeightText_id.textContent = inputRoomHeight_id.value + " m";
		roomHeightSpan.textContent = "Room Y, " + inputRoomHeight_id.value + "m";
	});
	//
}
//
export function setAspectRatioToSvg() {
	inputRoomWidth_id.addEventListener("input", () => {
		const width = parseFloat(inputRoomWidth_id.value);
		const height = parseFloat(inputRoomHeight_id.value);
		svg_id.style.aspectRatio = `${width}/${height}`;
	});
	inputRoomHeight_id.addEventListener("input", () => {
		const width = parseFloat(inputRoomWidth_id.value);
		const height = parseFloat(inputRoomHeight_id.value);
		svg_id.style.aspectRatio = `${width}/${height}`;
	});
}
//
export function handleFormSubmit() {
	form_id.addEventListener("submit", (event) => {
		event.preventDefault();
		const btn = event.submitter;

		if (btn.textContent === "Apply") {
			console.log("Apply logic");
			// console.log(laminates());
			drawPanels();
		} else if (btn.textContent === "Reset") {
			console.log("Reset logic");
			form_id.reset();
		}
	});
	form_id.addEventListener("reset", () => {
		setTimeout(() => {
			//
			roomWidthSpan.textContent = "Room X, " + inputRoomWidth_id.value + "m";
			roomHeightSpan.textContent = "Room Y, " + inputRoomHeight_id.value + "m";

			//
			const width = parseFloat(inputRoomWidth_id.value);
			const height = parseFloat(inputRoomHeight_id.value);
			svg_id.style.aspectRatio = `${width}/${height}`;
		}, 500);
	});
}
