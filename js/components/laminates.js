export function laminates() {
	inputPanelLengthX_id.addEventListener("input", (e) => {
		// console.log("hello from laminates.js");
		// console.log(e.target.value);
		// console.log(roomX, roomY);
		// let panelsAmount =
	});
	let roomX = inputRoomWidthX_id.value; // m
	let roomY = inputRoomHeightY_id.value; // m
	let tracksAmount = Math.ceil((roomY * 1000) / inputPanelWidthY_id.value); // ok
	// console.log(`tracksAmount: ${tracksAmount}`);
	let pathLength = roomX * tracksAmount; // m
	// console.log(`pathLength, m: ${pathLength}`);
	let panelsAmount = Math.ceil(
		pathLength / (inputPanelLengthX_id.value / 1000)
	); // ok
	// console.log(`panelsAmount: ${panelsAmount}`);
	// inputPanelLengthX_id.value
	return panelsAmount;
}
