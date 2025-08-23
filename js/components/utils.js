export function inputToSpanText() {
	inputWidth_id.addEventListener("input", () => {
		// inputWidthText_id.textContent = inputWidth_id.value + " m";
		roomWidthSpan.textContent = "Room X, " + inputWidth_id.value + "m";
	});
	inputHeight_id.addEventListener("input", () => {
		// inputHeightText_id.textContent = inputHeight_id.value + " m";
		roomHeightSpan.textContent = "Room Y, " + inputHeight_id.value + "m";
	});
	//
}
//
export function setAspectRatioToSvg() {
	inputWidth_id.addEventListener("input", () => {
		const width = parseFloat(inputWidth_id.value);
		const height = parseFloat(inputHeight_id.value);
		svg_id.style.aspectRatio = `${width}/${height}`;
	});
	inputHeight_id.addEventListener("input", () => {
		const width = parseFloat(inputWidth_id.value);
		const height = parseFloat(inputHeight_id.value);
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
		} else if (btn.textContent === "Reset") {
			console.log("Reset logic");
			form_id.reset();
		}
	});
	form_id.addEventListener("reset", () => {
		setTimeout(() => {
			//
			roomWidthSpan.textContent = "Room X, " + inputWidth_id.value + "m";
			roomHeightSpan.textContent = "Room Y, " + inputHeight_id.value + "m";

			//
			const width = parseFloat(inputWidth_id.value);
			const height = parseFloat(inputHeight_id.value);
			svg_id.style.aspectRatio = `${width}/${height}`;
		}, 0);
	});
}
