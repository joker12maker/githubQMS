# SMARTQ-TECH - Clone de Moviik.com

## 📋 Description

Ce projet est un clone front-end complet du site web [Moviik.com](https://www.moviik.com/), rebrandé sous le nom **SMARTQ-TECH**. Il reproduit fidèlement le design, les animations, et toutes les fonctionnalités du site original en utilisant React.js et Tailwind CSS.

## ✨ Fonctionnalités

### 🎨 Design et Interface
- **Clone pixel-perfect** du site Moviik.com
- **Rebranding complet** vers SMARTQ-TECH
- **Design responsive** pour tous les appareils
- **Animations fluides** et interactions modernes
- **Favicon personnalisé** SMARTQ-TECH

### 🏗️ Architecture
- **React 18** avec Vite pour des performances optimales
- **Tailwind CSS** pour un styling moderne et responsive
- **shadcn/ui** pour des composants UI de qualité
- **Lucide React** pour les icônes
- **Structure modulaire** avec composants réutilisables

### 📱 Sections Incluses
1. **Header** - Navigation sticky avec menu responsive
2. **Hero** - Section d'accueil avec dashboard animé
3. **Features** - 8 fonctionnalités avec icônes et animations
4. **Stats** - Statistiques avec compteurs animés
5. **Products** - Produits Customer Journey avec images
6. **Transform** - Section de transformation digitale
7. **Industries** - Navigation par onglets pour différents secteurs
8. **Experience** - Expérience digitale avec QR code
9. **Partners** - Intégrations avec plateformes de signalisation
10. **Testimonials** - Témoignages clients
11. **Brands** - Marques clientes avec logos
12. **CTA** - Appel à l'action final
13. **Footer** - Pied de page complet avec liens et newsletter

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation
```bash
# Cloner le projet
git clone <repository-url>
cd smartq-tech-clone

# Installer les dépendances
pnpm install
# ou
npm install

# Démarrer le serveur de développement
pnpm run dev
# ou
npm run dev
```

### Accès
Ouvrez votre navigateur et allez à `http://localhost:5173`

## 📁 Structure du Projet

```
smartq-tech-clone/
├── public/
│   ├── favicon.png          # Favicon SMARTQ-TECH
│   └── ...
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.jsx       # Navigation principale
│   │   ├── Hero.jsx         # Section héro
│   │   ├── Features.jsx     # Fonctionnalités
│   │   ├── Stats.jsx        # Statistiques animées
│   │   ├── Products.jsx     # Produits
│   │   ├── Transform.jsx    # Transformation
│   │   ├── Industries.jsx   # Industries avec onglets
│   │   ├── Experience.jsx   # Expérience digitale
│   │   ├── Partners.jsx     # Partenaires
│   │   ├── Testimonials.jsx # Témoignages
│   │   ├── Brands.jsx       # Marques clientes
│   │   ├── CTA.jsx          # Call-to-action
│   │   └── Footer.jsx       # Pied de page
│   ├── assets/              # Images et ressources
│   │   ├── css/             # Fichiers CSS originaux
│   │   ├── js/              # Fichiers JS originaux
│   │   └── *.webp           # Images du site
│   ├── App.jsx              # Composant principal
│   ├── App.css              # Styles et animations
│   └── main.jsx             # Point d'entrée
├── package.json             # Dépendances et scripts
└── README.md               # Ce fichier
```

## 🎨 Personnalisation

### Couleurs et Thème
Les couleurs principales sont définies dans `src/App.css` :
- **Vert principal** : `#22c55e` (green-500)
- **Vert secondaire** : `#10b981` (emerald-500)
- **Dégradés** : Utilisés pour les effets visuels

### Animations
Le projet inclut des animations CSS personnalisées :
- `fadeInUp`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `slideInDown`
- `float`, `glow`, `shimmer`
- Effets de hover et transitions fluides

### Composants
Chaque composant est documenté avec :
- Description de sa fonction
- Props utilisées
- Animations intégrées
- Responsive design

## 🛠️ Technologies Utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool et dev server
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Composants UI modernes
- **Lucide React** - Icônes SVG
- **CSS Animations** - Animations personnalisées

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile First** - Design optimisé mobile
- **Breakpoints Tailwind** - sm, md, lg, xl, 2xl
- **Navigation mobile** - Menu hamburger
- **Images adaptatives** - Optimisées pour tous écrans
- **Typographie responsive** - Tailles adaptées

## 🔧 Scripts Disponibles

```bash
# Développement
pnpm run dev

# Build de production
pnpm run build

# Prévisualisation du build
pnpm run preview

# Linting
pnpm run lint
```

## 🌟 Fonctionnalités Avancées

### Animations au Scroll
- Révélation progressive des éléments
- Compteurs animés pour les statistiques
- Effets de parallaxe subtils

### Interactions
- Hover effects sur les boutons et cartes
- Navigation par onglets dans Industries
- Menu mobile responsive
- Effets de glow et shimmer

### Performance
- Lazy loading des images
- Optimisation Vite
- CSS optimisé avec Tailwind
- Composants React optimisés

## 📄 Licence

Ce projet est un clone éducatif du site Moviik.com, rebrandé pour SMARTQ-TECH. Tous les droits du design original appartiennent à Moviik.

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche feature
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📞 Support

Pour toute question ou support :
- Ouvrez une issue sur GitHub
- Consultez la documentation des composants
- Vérifiez les animations CSS personnalisées

---

**Développé avec ❤️ pour SMARTQ-TECH**

