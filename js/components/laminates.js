export function laminates() {
	panelWidth_id.addEventListener("input", (e) => {
		// console.log("hello from laminates.js");
		// console.log(e.target.value);
		let roomX = inputWidth_id.value;
		let roomY = inputHeight_id.value;
		// console.log(roomX, roomY);
		// let panelsAmount =
		let tracksAmount = Math.ceil((roomY * 1000) / panelHeight_id.value);
	});
}
