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