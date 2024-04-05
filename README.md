# Récupérer un token Strava

## Process

Pour commencer, vous devez créer un fichier `.env` à la racine de votre projet. Ce fichier doit contenir vos variables d'environnement nécessaires à l'exécution de l'application. Renseignez les deux variables d'environnement suivantes dans le fichier `.env` :

```sh
STRAVA_CLIENT_ID=client_id
STRAVA_CLIENT_SECRET=secret
```

Remplacez `client_id` et `secret` par votre ID client et secret client Strava que vous avez obtenus lors de la création de votre application Strava.

## Installation des dépendances

Avant de lancer l'application, vous devez installer les dépendances nécessaires. Ouvrez un terminal, naviguez jusqu'au répertoire de votre projet et exécutez la commande suivante :
```bash
npm install
```

Cette commande installera toutes les dépendances listées dans votre fichier package.json (express et dotenv)/

## Lancement de l'application
Pour démarrer l'application, exécutez la commande suivante dans le terminal :

```js
node app.js
```

Cela lancera votre serveur Express sur le port configuré (par défaut, le port 3000). Votre application est maintenant en écoute et prête à gérer les requêtes.

## Récupération du token d'accès Strava

Pour récupérer un token d'accès Strava, suivez les étapes suivantes :

Autoriser l'application : Ouvrez un navigateur web et accédez à l'URL http://localhost:3000/auth/strava. 
Cela vous redirigera vers la page d'autorisation de Strava où vous devrez vous connecter avec votre compte Strava et autoriser l'application que vous avez créée.

Obtenir le Token d'Accès : Après avoir autorisé l'application, Strava vous redirigera vers votre URI de redirection avec un code d'autorisation inclus dans l'URL. Votre serveur Express interceptera cette demande, échangera le code d'autorisation contre un token d'accès, et affichera le token d'accès sur la page.

Gardez à l'esprit que le token d'accès doit être traité comme une information sensible. Dans une application réelle, vous devriez le stocker de manière sécurisée et utiliser le token de rafraîchissement fourni par Strava pour obtenir de nouveaux tokens d'accès une fois que le token actuel expire.