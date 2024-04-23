# Utiliser l'image officielle de Node.js
FROM node:21-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tous les autres fichiers du projet
COPY . .

# Exposer le port sur lequel l'application s'exécutera
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "app.js"]
