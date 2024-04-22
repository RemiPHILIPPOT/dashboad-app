import { WidgetData } from "./types";

// Fonction pour générer des données d'exemple pour un jeu de données
const generateExampleDataSet = (): WidgetData[] => {
    const dataSet: WidgetData[] = [];

    for (let i = 0; i < 100; i++) {
        // Générer des données aléatoires
        const timestamp = new Date().toISOString();
        const value = Math.floor(Math.random() * 100);

        const dataEntry: WidgetData = {
            id: i + 1,
            timestamp,
            value,
        };

        dataSet.push(dataEntry);
    }

    return dataSet;
};

// Générer un ensemble de données d'exemple contenant une centaine de jeux de données
export const exampleDataSets: WidgetData[][] = Array.from({ length: 100 }, () =>
    generateExampleDataSet()
);
