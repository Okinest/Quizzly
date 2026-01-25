# Quizzly

Application de quiz interactive construite avec React et Bun.

## Prérequis

### Avec Bun (recommandé)
- [Bun](https://bun.sh) v1.3.5 ou supérieur

```bash
# Installation de Bun (macOS, Linux, WSL)
curl -fsSL https://bun.sh/install | bash
```

### Sans Bun
- [Node.js](https://nodejs.org) v18 ou supérieur
- npm v9 ou supérieur

## Paquets installés

### Dépendances principales
| Paquet | Version | Description |
|--------|---------|-------------|
| `react` | ^19 | Bibliothèque UI |
| `react-dom` | ^19 | Rendu DOM pour React |
| `react-router` | ^7.13.0 | Gestion du routage |
| `react-icons` | ^5.5.0 | Icônes pour React |
| `tailwindcss` | ^4.1.11 | Framework CSS utilitaire |
| `bun-plugin-tailwind` | ^0.1.2 | Plugin Tailwind pour Bun |
| `he` | ^1.2.0 | Décodeur d'entités HTML |

## Installation

### Avec Bun

```bash
bun install
```

### Sans Bun (npm)

```bash
npm install
```

## Démarrage

### Avec Bun

#### Mode développement (hot reload)
```bash
bun dev
```

#### Mode production
```bash
bun start
```

#### Build
```bash
bun run build
```

### Sans Bun (npm/Node.js)

> ⚠️ **Note** : Ce projet est optimisé pour Bun. Certaines fonctionnalités comme le hot reload natif ne fonctionneront pas avec Node.js.

#### Mode développement
```bash
npm run dev
```

#### Mode production
```bash
npm run start
```

#### Build
```bash
npm run build
```
