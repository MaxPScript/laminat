import { laminates } from "./laminates.js";
import { drawPanels } from "./drawPanels.js";
//
export function inputToSpanText() {
	inputRoomWidthX_id.addEventListener("input", () => {
		// inputWidthText_id.textContent = inputRoomWidthX_id.value + " m";
		roomWidthSpan.textContent = "Room X, " + inputRoomWidthX_id.value + "m";
	});
	inputRoomHeightY_id.addEventListener("input", () => {
		// inputHeightText_id.textContent = inputRoomHeightY_id.value + " m";
		roomHeightSpan.textContent = "Room Y, " + inputRoomHeightY_id.value + "m";
	});
	//
}
//
export function setAspectRatioToSvg() {
	inputRoomWidthX_id.addEventListener("input", () => {
		const width = parseFloat(inputRoomWidthX_id.value);
		const height = parseFloat(inputRoomHeightY_id.value);
		svg_id.style.aspectRatio = `${width}/${height}`;
	});
	inputRoomHeightY_id.addEventListener("input", () => {
		const width = parseFloat(inputRoomWidthX_id.value);
		const height = parseFloat(inputRoomHeightY_id.value);
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
			roomWidthSpan.textContent = "Room X, " + inputRoomWidthX_id.value + "m";
			roomHeightSpan.textContent = "Room Y, " + inputRoomHeightY_id.value + "m";

			//
			const width = parseFloat(inputRoomWidthX_id.value);
			const height = parseFloat(inputRoomHeightY_id.value);
			svg_id.style.aspectRatio = `${width}/${height}`;
		}, 500);
	});
}
