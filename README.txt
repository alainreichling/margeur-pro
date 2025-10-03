# Margeur Pro — PWA

Ce dossier contient l’application **Margeur Pro** prête à héberger sur GitHub Pages (ou tout hébergement HTTPS).
- Icône : margeur minimaliste (4 lames) sur fond bleu
- Orientation : libre (portrait/paysage)
- Offline : oui (service worker)

## Déploiement GitHub Pages (pas à pas)
1. Sur GitHub, crée un dépôt **public** (ex.: `margeur-pro`).
2. Glisse/dépose **tous les fichiers** de ce dossier dans le dépôt puis **Commit**.
3. Dans **Settings → Pages**, choisis **Branch: main** et **/ (root)** puis **Save**.
4. Ton app sera visible sur `https://tonpseudo.github.io/margeur-pro/`.

## Installation Android (WebAPK)
1. Ouvre l’URL dans **Chrome Android**.
2. Menu ⋮ → **Ajouter à l’écran d’accueil** → **Installer**.
3. L’app s’installe comme une APK web (icône, plein écran, offline).

## Personnalisation
- Icône : remplace `icons/icon-192.png`, `icon-512.png`, `icon-maskable.png`.
- Nom : modifie `name`/`short_name` dans `manifest.webmanifest`.
