# Rune Clash 3D

Duels de héros en 3D : 99 personnages originaux, histoire, événements de la semaine, marché.

Le jeu s'installe comme une appli depuis le navigateur du téléphone et fonctionne hors ligne après la première ouverture.

## Jeu en ligne (comptes, amis, clubs, duels)
- `config.js` : la configuration Firebase (à remplir une fois, ne pas écraser ensuite).
- `database.rules.json` : les règles de sécurité à coller dans Firebase > Realtime Database > Règles (version 17.3 : jeu, boîte à conseils du site et anti-triche).

## Site officiel et informations légales
- `site/` : le site (mentions légales, confidentialité, conditions d'utilisation comprises). Le jeu y renvoie depuis l'inscription et les Paramètres.
- Avant la mise en ligne : remplis `site/js/config.js`, rubrique `legal` (nom d'un parent comme directeur de la publication, e-mail de contact).

## Nom de domaine
- `DOMAINE.md` : passer le jeu sur rune-clash.com, étape par étape.
