# Dashboard Application

Ce projet est une application de tableau de bord permettant de visualiser et d'interagir avec des données d'activité industrielle. Cette documentation vise à fournir des informations détaillées sur l'architecture, les choix technologiques et les bonnes pratiques utilisées dans ce projet.

L'application est déployée via GitHub Pages à l'adresse suivante : [lien](https://remiphilippot.github.io/dashboad-app/).

## Architecture

L'architecture de cette application suit une structure modulaire et basée sur des composants réutilisables. Voici un aperçu de la structure des répertoires :

-   `components/`: Contient tous les composants réutilisables utilisés dans l'application.
-   `lib/`: Comprend les fichiers de logique métier, tels que les types de données et les fonctions d'API.
-   `pages/`: Contient les pages de l'application, qui sont des composants React correspondant à chaque route.

## Choix technologiques

Cette application est développée en utilisant les technologies suivantes :

-   **React**: Utilisé pour la construction de l'interface utilisateur (UI) et la gestion de l'état de l'application.
-   **Tailwind CSS**: Utilisé pour la gestion des styles et le développement d'une interface utilisateur responsive et esthétique.
-   **Chart.js**: Bibliothèque de visualisation de données utilisée pour créer des graphiques dynamiques dans le tableau de bord.

## Bonnes pratiques

Pour assurer la qualité et la maintenabilité du code, plusieurs bonnes pratiques sont suivies dans ce projet :

-   **Modularité**: Le code est divisé en composants réutilisables et bien définis, favorisant ainsi la modularité et la réutilisation du code.
-   **Typescript**: TypeScript est utilisé pour ajouter des types statiques au JavaScript, ce qui rend le code plus sûr et plus prévisible.
-   **Gestion de l'état**: L'état de l'application est géré de manière efficace en utilisant le hook `useState` de React et en suivant le principe de l'immutabilité des données.
-   **Documentation**: Une documentation détaillée est fournie pour expliquer l'architecture, les choix technologiques et les bonnes pratiques utilisées dans le projet.

## Utilisation

Pour exécuter l'application localement, suivez ces étapes :

1. Clonez ce dépôt sur votre machine locale.
2. Installez les dépendances en exécutant `npm install`.
3. Lancez l'application en exécutant `npm start`.
4. Accédez à `http://localhost:3000` dans votre navigateur pour voir l'application en action.
