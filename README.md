# Portfolio Razafindratsima Hajanirina

Portfolio personnel d'un développeur - **Séparation complète HTML/CSS/JS**

## 📦 Ce qui a été fait

✅ **Séparation des fichiers :**
- `index.html` - Structure HTML uniquement
- `css/style.css` - Tous les styles CSS
- `js/script.js` - Tout le JavaScript

✅ **Dossier images :**
- Chemin par défaut : `./images/[nom].jpg`
- Images à remplacer : profil.jpg, apercu1.jpg à apercu18.jpg
- Documentation incluse pour faciliter les modifications

✅ **Fonctionnalités :**
- Thème clair/sombre
- Filtrage des projets
- Galerie lightbox interactive
- Animations au scroll
- Responsive design
- Navigation au clavier

## 🚀 Démarrage rapide

1. **Ouvrir le projet**
   ```bash
   # Ouvrir index.html dans un navigateur
   # ou utiliser un serveur local si vous avez Python/Node
   ```

2. **Ajouter vos images**
   - Créer des images JPG avec les noms : `profil.jpg`, `apercu1.jpg`, etc.
   - Les placer dans le dossier `images/`
   - Voir `GUIDE_IMAGES.md` pour les détails

3. **Modifier le contenu**
   - Éditer `index.html` pour changer le texte et la structure
   - Éditer `css/style.css` pour personnaliser les couleurs et le design
   - Éditer `js/script.js` pour modifier les interactions

## 📁 Structure du projet

```
.
├── index.html                 # Page HTML principale
├── css/
│   └── style.css             # Tous les styles
├── js/
│   └── script.js             # Tout le JavaScript
├── images/                   # Dossier pour les images
│   ├── README.md
│   ├── profil.jpg            # À ajouter
│   ├── apercu1.jpg à apercu18.jpg  # À ajouter
│
├── README.md                 # Ce fichier
├── STRUCTURE.md              # Documentation détaillée
├── GUIDE_IMAGES.md           # Guide pour les images
```

## 🎨 Personnalisation rapide

### Changer la couleur primaire
Éditer `css/style.css` ligne ~18 :
```css
--primary:#7c5cff;        /* Changez cette valeur */
--primary-2:#00e0a4;      /* Couleur secondaire */
```

### Changer le nom du site
Éditer `index.html` ligne ~7 :
```html
<title>Votre Nom — Développeur</title>
```

### Modifier le contenu
Éditer les sections pertinentes dans `index.html` :
- Lignes 40-50 : Section hero (présentation)
- Lignes 61-100 : Section profil
- Lignes 108-180 : Section projets
- Etc.

## 📖 Documentation incluse

- **STRUCTURE.md** : Vue d'ensemble complète du projet
- **GUIDE_IMAGES.md** : Comment remplacer les images (détaillé)
- **images/README.md** : Instructions pour les images

## 🔧 Outils et technologies

- **HTML5** : Structure sémantique
- **CSS3** : Flexbox, Grid, variables CSS, animations
- **Vanilla JavaScript** : Sans framework, pur JS
- **Google Fonts** : Orbitron et Rajdhani

## 💡 Points importants

✨ Les chemins d'images utilisent des chemins relatifs :
```html
<img src="./images/profil.jpg" alt="..." />
```

✨ Tous les fichiers CSS sont dans **un seul fichier** :
```html
<link rel="stylesheet" href="css/style.css">
```

✨ Tout le JavaScript est dans **un seul fichier** :
```html
<script src="js/script.js"></script>
```

✨ **Aucune dépendance externe** (sauf polices Google)

## 🎯 Prochaines étapes

1. Remplacer les images par vos propres images
2. Mettre à jour le contenu textuel
3. Personnaliser les couleurs si désiré
4. Ajouter vos vrais projets
5. Modifier le lien de téléchargement du CV

## ❓ FAQ

**Q: Comment changer l'ordre des projets ?**
R: Modifier l'ordre des éléments `<article>` dans `index.html` section "Réalisations"

**Q: Comment ajouter un nouveau projet ?**
R: Dupliquer une `<article class="card project">`, ajouter 3 nouvelles images (apercu19, 20, 21), modifier le contenu et les chemins

**Q: Comment changer les filtres ?**
R: Éditer les boutons `filter-btn` dans `index.html` et modifier les attributs `data-tags` des articles

**Q: Pourquoi les images ne s'affichent pas ?**
R: Vérifier que :
1. Les fichiers existent dans le dossier `images/`
2. Les noms correspondent exactement
3. Le navigateur accède à un serveur local (ou ouvre le fichier directement)

## 📞 Support

Fichiers de documentation :
- STRUCTURE.md - Pour comprendre la structure complète
- GUIDE_IMAGES.md - Pour gérer les images
- images/README.md - Pour les détails des images

---

**Portfolio séparé et prêt à être personnalisé ! 🚀**
