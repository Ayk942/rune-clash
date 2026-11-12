# Rune Clash a déménagé

Le jeu est maintenant à **https://rune-clash.github.io/** (dépôt `rune-clash/rune-clash.github.io`).
Ce dépôt ne sert plus qu'à rediriger l'ancienne adresse `ayk942.github.io/rune-clash` :
- `index.html` et `404.html` envoient vers la nouvelle adresse en emportant la sauvegarde du joueur (`#import=…`) ;
- `site/index.html` envoie vers le nouveau site officiel ;
- `sw.js` remplace l'ancien service worker : l'appli déjà installée vide son cache et part vers la nouvelle adresse.
Ne pas supprimer ce dépôt tant que des joueurs utilisent l'ancienne adresse.
