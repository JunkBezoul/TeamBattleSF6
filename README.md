# **Page de Combat en Équipe sur Street Fighter 6**

Ce projet est une page web interactive qui permet de créer et gérer deux équipes pour un tournoi. Il inclut des fonctionnalités comme l'ajout de joueurs, la sélection de personnages, la gestion des points, et la mise en place d'un background pour le tournoi.

## **Fonctionnalités principales**

### 1. **Création et gestion des équipes**
- Vous pouvez ajouter des joueurs à deux équipes différentes : **Équipe 1** et **Équipe 2**.
- Il est possible d'ajouter jusqu'à **60 joueurs au total** répartis entre les deux équipes.
- Pour chaque joueur, vous pouvez :
  - **Sélectionner un personnage** pour le joueur depuis une liste de personnages prédéfinis.
  - **Ajouter des points** pour chaque joueur grâce à un bouton compteur.
  - **Griser/dégriser** un joueur (pour montrer sa défaite).
  - **Supprimer** un joueur.

### 2. **Sélection de personnage**
- Chaque joueur peut se voir attribuer un personnage en cliquant sur l'avatar. Une liste de personnages apparaît, permettant de choisir le personnage de l'utilisateur.

### 3. **Gestion du logo de l'équipe**
- Un champ de téléchargement d'image permet d'ajouter un logo ou une image d'équipe. 
- Une fois le logo sélectionné, il s'affiche directement et remplace l'input de téléchargement.
- En cliquant sur le logo, il disparaît et permet de télécharger un nouveau logo.

### 4. **Mise en surbrillance**
- Le premier joueur de chaque équipe est automatiquement mis en surbrillance pour indiquer que c'est à lui de jouer.
- Si un joueur est supprimé ou mis a perdu, la surbrillance passe automatiquement au joueur suivant.

## **Comment utiliser cette page**

### 1. **Ajouter un joueur**
   - Cliquez sur le bouton **"Ajouter +"** sous l'équipe à laquelle vous souhaitez ajouter un joueur.
   - Un joueur sera ajouté automatiquement avec un avatar par défaut et le nom "Joueur X".

### 2. **Modifier le nom du joueur**
   - Cliquez sur le nom du joueur (ex. : "Joueur 1") et modifiez le directement.

### 3. **Sélectionner un personnage**
   - Cliquez sur le **?** d'un joueur pour afficher une liste de personnages.
   - Cliquez sur le nom d'un personnage pour l'attribuer au joueur.

### 4. **Utiliser les boutons**
   - Le joueur ajouté aura trois boutons :
     - **"-"** pour griser le joueur, indiquant qu'il a perdu son combat.
     - **"x"** pour supprimer le joueur de la liste.
     - **"0"** un bouton compteur pour incrémenter un score ou des points.

### 5. **Ajouter un Background**
   - Cliquez sur le **Importer une image** en bas à gauche de l'écran pour choisir une image comme background.
   - Une fois l'image sélectionnée, elle apparaîtra en fond de la page.
   - l'image mise en fond doit respecter un ratio de 16/9.

   