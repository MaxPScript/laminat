export function inputToSvgLabels() {
	inputRoomWidthX_id.addEventListener("input", () => {
		roomWidthSpan.textContent = "Room X, " + inputRoomWidthX_id.value + "m";
	});
	inputRoomHeightY_id.addEventListener("input", () => {
		roomHeightSpan.textContent = "Room Y, " + inputRoomHeightY_id.value + "m";
	});
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
