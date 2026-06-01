import { GenerateGraph } from "./VisualisePoints.js";
import { DisplayPlayerHistory } from "./PlayerHistoryDisplay.js";

document.addEventListener('DOMContentLoaded', async () => {

    GenerateGraph('player_data/Nilesh.csv');
    DisplayPlayerHistory('player_data/Nilesh.json');
})