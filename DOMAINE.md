# Passer Rune Clash sur rune-clash.com

Aujourd'hui le jeu est à `https://ayk942.github.io/rune-clash/` et le site à `…/rune-clash/site/`.
Après le changement : le jeu sera à **https://rune-clash.com/** et le site à **https://rune-clash.com/site/**.

Le code est déjà prêt : tous les liens entre le jeu et le site sont relatifs, rien à modifier dans les fichiers.

## Avant tout

- **Vérifie que le nom est libre** sur le site d'un registraire (OVHcloud ou Gandi, deux sociétés françaises).
  Mon test du 12 novembre 2026 laisse penser que `rune-clash.com` est libre, mais seul le registraire peut le confirmer.
  Attention : **`runeclash.com` (sans tiret) appartient déjà à quelqu'un** depuis mars 2025. C'est une raison de plus de vérifier, avant de dépenser de l'argent pour la marque, que personne n'utilise déjà « Rune Clash » (voir la fin).
- **C'est un parent qui achète** le nom de domaine : il faut être majeur et payer (en général 10 à 20 € par an pour un .com). Il garde l'accès au compte du registraire.
- Si `rune-clash.com` est pris : `runeclash.fr`, `runeclash.gg`, `rune-clash.fr`… marchent exactement pareil.

## Étape 1 : acheter le nom (avec un parent)

Chez le registraire, achète `rune-clash.com`. Ne prends **aucune option** (hébergement, e-mail…) : GitHub héberge déjà le jeu gratuitement.
Active le renouvellement automatique, sinon le nom peut être perdu dans un an.

## Étape 2 : relier le nom à GitHub (DNS)

Dans la zone DNS du nom (chez le registraire), ajoute :

| Type | Nom | Valeur |
|---|---|---|
| A | @ (vide) | 185.199.108.153 |
| A | @ (vide) | 185.199.109.153 |
| A | @ (vide) | 185.199.110.153 |
| A | @ (vide) | 185.199.111.153 |
| CNAME | www | ayk942.github.io. |

Supprime les autres lignes A ou CNAME « @ » et « www » que le registraire a mises par défaut (page de parking).
Ces adresses sont celles de GitHub Pages ; si GitHub les change un jour, sa documentation « Managing a custom domain for your GitHub Pages site » donne les nouvelles.

## Étape 3 : dire à GitHub d'utiliser ce nom

1. Dépôt `rune-clash` > **Settings** > **Pages** > **Custom domain** : écris `rune-clash.com`, puis **Save**.
   GitHub crée tout seul un fichier `CNAME` dans le dépôt. Ne le supprime jamais (si tu remplaces tout le dépôt par un nouveau zip, garde ce fichier).
2. Attends que la vérification passe au vert (de quelques minutes à 24 h), puis coche **Enforce HTTPS**.
3. Conseillé : dans les **Settings de ton compte GitHub** > **Pages**, « Add a domain » pour vérifier `rune-clash.com`. Ça empêche quelqu'un d'autre de l'utiliser sur GitHub.

L'ancienne adresse `ayk942.github.io/rune-clash/` renverra automatiquement vers `rune-clash.com`.

## Étape 4 : Firebase

Console Firebase > **Authentication** > **Settings** > **Authorized domains** > **Add domain** : `rune-clash.com`.
Si un jour tu as limité ta clé d'API à certains sites (Google Cloud > Identifiants), ajoute aussi `rune-clash.com/*`.

## Ce qui change pour les joueurs (important)

- **Avec un compte** : rien. Ils se reconnectent et retrouvent tout.
- **Sans compte** : la progression est gardée par le navigateur pour une adresse précise. Sur `rune-clash.com`, elle repart de zéro.
  Donc : fais le changement **le plus tôt possible** (avant d'avoir beaucoup de joueurs), et préviens quelques jours avant (TikTok, Discord) : « Créez un compte pour garder votre progression ».
- L'appli installée sur l'écran d'accueil pointe vers l'ancienne adresse : elle sera redirigée, mais le plus propre est de la réinstaller depuis `rune-clash.com`.

## Après le changement

- Dans `site/js/config.js`, mets ton adresse pro dans `legal.email` (et dans le réseau E-mail).
  Avec ton propre nom de domaine, tu peux avoir une adresse comme `contact@rune-clash.com` (option e-mail du registraire, payante, à voir avec un parent). Une adresse gratuite dédiée au jeu marche aussi.
- Mets à jour le lien dans tes bios TikTok, Discord, etc.

## Le nom « Rune Clash »

Avant de payer de la publicité, vérifie avec un parent sur **data.inpi.fr** (marques françaises) et **euipo.europa.eu/eSearch** (marques européennes) qu'aucune marque « Rune Clash » n'existe déjà pour des jeux vidéo. Le mot « Clash » est très utilisé dans les jeux (et défendu par certains grands éditeurs) : en cas de doute, mieux vaut changer de nom maintenant que dans un an.
