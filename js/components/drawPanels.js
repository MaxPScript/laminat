import { laminates } from "./laminates.js";
//
export function drawPanels() {
	let len = laminates();
	// for (let i = 1; i <= len; i++) {}
	//
	const svg = document.getElementById("svg_id");
	const rect = svg.getBoundingClientRect();
	// console.log(rect);
	const { width, height } = rect;
	// console.log(typeof width, typeof inputPanelLengthX_id.value);
	// console.log(svg, width, height);
	const svgNS = "http://www.w3.org/2000/svg"; // SVG namespace

	const fragment = document.createDocumentFragment();

	for (let i = 0; i < len; i++) {
		const svgRect = document.createElementNS(svgNS, "rect");
		let drawRectWidth =
			(width * inputPanelLengthX_id.value) / (+inputRoomWidth_id.value * 1000);
		// console.log(`drawRectWidth: ${drawRectWidth}`);
		let drawRectHeight =
			(height * inputPanelWidthY_id.value) / (+inputRoomHeight_id.value * 1000);
		// rectWidth * panelX / roomX
		// svgRect.setAttribute("x", 0 + (i * inputPanelLengthX_id.value) / 1000);
		svgRect.setAttribute("x", 0 + i * +drawRectWidth);
		//
		svgRect.setAttribute("y", 0);
		svgRect.setAttribute("width", drawRectWidth);
		// svgRect.setAttribute("width", width);
		//
		svgRect.setAttribute("height", drawRectHeight);
		svgRect.setAttribute("fill", "lightblue");
		svgRect.setAttribute("stroke", "black");

		fragment.appendChild(svgRect);
	}

	svg.appendChild(fragment); // append all at once
}
