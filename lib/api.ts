import { generateExampleDataSet } from "./data";
import { WidgetData } from "./types";

export const fetchActivityData = async (): Promise<WidgetData[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Génère un nouvel ensemble de données d'exemple
    const data = generateExampleDataSet();

    return data;
};
