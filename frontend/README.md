src/
├── assets/ # Images, icônes, ressources statiques (par exemple, cartes, pions, etc.)
├── components/ # Composants React réutilisables
│ ├── Board.js # Le plateau de jeu
│ ├── Card.js # Composants pour les cartes (Propriétés, Chance, etc.)
│ ├── Dice.js # Composant pour gérer les dés
│ ├── Player.js # Composant pour le joueur (affichage des infos du joueur)
│ ├── GameControls.js # Composant pour les contrôles du jeu (acheter, vendre, etc.)
│ └── PlayerList.js # Liste des joueurs (afficher les joueurs et leurs statuts)
├── pages/ # Pages principales du jeu
│ └── Home.js # Page d'accueil ou vue principale du jeu
├── styles/ # Fichiers CSS ou configuration Tailwind
│ ├── index.css # Styles globaux
│ └── game.css # Styles spécifiques au jeu (par exemple, plateaux, cartes)
├── utils/ # Fonctions utilitaires (logique métier, helpers)
│ └── gameLogic.js # Logique du jeu (gestion des tours, déplacement des joueurs)
├── data/ # Données statiques (cartes, propriétés, informations sur les cases)
│ └── gameData.js # Données de base pour les cartes, propriétés, et règles
└── game/ # Logique du jeu (gestion des tours, états, règles)
├── gameState.js # État du jeu (joueurs, positions, argent)
├── gameActions.js # Actions du jeu (achat, vente, paiement de taxes)
└── gameRules.js # Règles du jeu (déplacements, achats, taxes, etc.)
