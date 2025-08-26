export const db = {
	roomX: +inputRoomWidthX_id.value,
	roomY: +inputRoomHeightY_id.value,
	panelLength: +inputPanelLengthX_id.value / 1000,
	panelWidth: +inputPanelWidthY_id.value / 1000,
	svgX: 0,
	svgY: 0,

	get drawRectWidth() {
		return (this.svgX * this.panelLength) / this.roomX;
	},
	get drawRectHeight() {
		return (this.svgY * this.panelWidth) / this.roomY;
	},
};
