# Lancer le Projet

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **Node.js** pour le frontend.
- **Python**  pour le backend.
- **pip**     (le gestionnaire de paquets pour Python) pour installer les dépendances.
- **Django**  pour le backend.

## Cloner le projet

1. Ouvrez votre terminal.
2. Accédez au répertoire où vous souhaitez cloner le projet.
3. Exécutez la commande suivante pour cloner le dépôt :

   ```bash
   git clone https://github.com/Youbeu/bouclier_numerique_back
   ```

4. Accédez au répertoire cloné :

   ```bash
   cd bouclier_numerique_back
   ```

## Lancer le Backend (Django)
1. Créez un environnement virtuel (optionnel, mais recommandé) :

   ```bash
   python -m venv venv
   ```

2. Activez l'environnement virtuel :

   - Sur Windows :

     ```bash
     venv\Scripts\activate
     ```

   - Sur macOS/Linux :

     ```bash
     source venv/bin/activate
     ```

3. Installez les dépendances nécessaires :

   ```bash
   pip install -r requirements.txt
   ```

4. Configurez la base de données (si nécessaire) :

   - Créez la base de données et appliquez les migrations :

   ```bash
   python manage.py migrate
   ```

5. Lancez le serveur de développement :

   ```bash
   python manage.py runserver
   ```

   Le backend sera accessible à l'adresse `http://127.0.0.1:8000`.

## Lancer le Frontend (React)

1. Accédez au répertoire du frontend :

   ```bash
   git clone https://github.com/Youbeu/bouclier_numerique_front
   ```

2. Installez les dépendances nécessaires :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run start
   ```

   Le frontend sera accessible à l'adresse `http://localhost:3000`.

   Voici une section "Rôle de l'application" que vous pouvez ajouter à votre README, inspirée de votre projet *Le Bouclier Numérique* et des informations fournies :

---

## Rôle de l'Application

### Introduction
**Le Bouclier Numérique** est une application sécurisée de gestion des mots de passe, conçue pour aider les utilisateurs à stocker et gérer leurs informations sensibles de manière sécurisée. Dans un monde où la cybersécurité est cruciale, cette application vise à fournir une solution fiable et accessible à tous.

### Le Problème
De nombreuses personnes utilisent des mots de passe faibles ou réutilisent les mêmes mots de passe sur plusieurs sites, les rendant ainsi vulnérables aux cyberattaques. La gestion des mots de passe est souvent perçue comme une tâche ardue, et cette négligence peut avoir des conséquences graves sur la sécurité des données personnelles.

### Notre Solution
**Le Bouclier Numérique** offre une plateforme sécurisée utilisant des techniques avancées de chiffrement pour stocker et protéger vos mots de passe. Grâce à cette application, vous pouvez naviguer sur Internet en toute sérénité, sachant que vos informations sont en sécurité.

### Fonctionnalités Clés
- **Stockage sécurisé des mots de passe :** Vos mots de passe sont stockés dans un environnement chiffré, inaccessible aux tiers.
- **Génération automatique de mots de passe forts :** Créez facilement des mots de passe robustes et uniques pour chaque compte.
- **Authentification sécurisée des utilisateurs :** Assurez-vous que seules les personnes autorisées peuvent accéder à vos informations.
- **Mise à jour et suppression facile des informations :** Gérez vos mots de passe en toute simplicité, avec la possibilité de mettre à jour ou de supprimer des données à tout moment.

### Conclusion
Notre objectif est de permettre à chacun de gérer ses mots de passe de manière simple et sécurisée. Avec **Le Bouclier Numérique**, vous pouvez protéger vos informations et adopter de meilleures habitudes en matière de cybersécurité. Ensemble, faisons de la sécurité numérique une priorité pour tous.