import { exampleDataSets } from "./data";
import { WidgetData } from "./types";

// Fonction pour simuler une requête à une API et récupérer les données d'activité industrielle
export const fetchActivityData = async (): Promise<WidgetData[]> => {
    // Simulez une attente asynchrone (par exemple, si vous avez besoin de simuler une requête réseau)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Retourne les données d'exemple
    return exampleDataSets.flat();
};
