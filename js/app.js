import { db } from "./components_2/db.js";
import { updateDB } from "./components_2/updateDB.js";
import { inputToSvgLabels } from "./components_2/utils_2.js";
import { setAspectRatioToSvg } from "./components_2/utils_2.js";
//
updateDB();
inputToSvgLabels();
setAspectRatioToSvg();
//
