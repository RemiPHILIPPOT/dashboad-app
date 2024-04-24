import { WidgetData } from "./types";
// Fonction pour générer des données d'exemple pour un jeu de données
export const generateExampleDataSet = (): WidgetData[] => {
    const dataSet: WidgetData[] = [];
    const uniqueValues = new Set<number>();

    for (let i = 0; i < 100; i++) {
        let value: number;
        do {
            value = Math.floor(Math.random() * 100); // Générer une valeur aléatoire
        } while (uniqueValues.has(value)); // Vérifier si la valeur est déjà dans l'ensemble

        uniqueValues.add(value); // Ajouter la valeur à l'ensemble des valeurs uniques

        const timestamp = new Date().toISOString();

        const dataEntry: WidgetData = {
            id: i + 1,
            timestamp,
            value,
        };

        dataSet.push(dataEntry);
    }

    return dataSet;
};
