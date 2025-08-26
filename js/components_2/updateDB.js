import { db } from "./db.js";
// export const db = {
// 	roomX: +inputRoomWidthX_id.value,
// 	roomY: +inputRoomHeightY_id.value,
// 	panelLength: +inputPanelLengthX_id.value / 1000,
// 	panelWidth: +inputPanelWidthY_id.value / 1000,
// 	svgX: 0,
// 	svgY: 0,

// 	get drawRectWidth() {
// 		return (this.svgX * this.panelLength) / this.roomX;
// 	},
// 	get drawRectHeight() {
// 		return (this.svgY * this.panelWidth) / this.roomY;
// 	},
// };
export function updateDB() {
	document.addEventListener("DOMContentLoaded", function () {
		const { width, height } = svg_id.getBoundingClientRect();
		db.svgX = width;
		db.svgY = height;
		// console.log(width, height);
		//
		// console.log(db.drawRectWidth);
		// console.log(db.drawRectHeight);
		console.log(db);
	});
}
// debounce window resizing
let resizeTimeout;
window.addEventListener("resize", function () {
	this.clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(() => {
		const { width, height } = svg_id.getBoundingClientRect();
		db.svgX = width;
		db.svgY = height;
		console.log(db);
	}, 1000);
});
//
