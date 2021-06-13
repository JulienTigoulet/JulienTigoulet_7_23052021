# JulienTigoulet_7_23052021
## Intranet Groupomania
Cette intranet à était construit en utilisant pour le frontend : " VueJs" et pour le backEnd: "nodeJs", il utilise une base de donnée Mysql
Pour pouvoir le faire fonctionner il vous faut télécharger le repositorie ci joint.



Créer un dossier .env dans le fichier backend pour setup une clef de token :
  * KEY_TOKEN=  <-- votre clef de token éviter les suites logique ainsi qu'une clef trop courte -->



 Pour mieux comprends le fonctionnement des key : https://www.npmjs.com/package/jsonwebtoken


Dans le fichier config veuillez ouvrir config.JSON et parametré votre connexion à votre serveur Mysql : 
 *     "password": <-- votre mots de passe de votre base de donnée Mysql -->
 *     "database": <-- le nom de votre base de donnée Mysql -->
 *     "host": "localhost"
Pour mieux comprendre le fonctionnement de ce fichier : https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor

# backend
 Il faut ouvrir le fichier backend avec un logiciel de code, et dans la console lancer : 
  * npm install  (installer tout les packages)
  * nodemon serve (Permet de démarrer le serveur côté Backend)

# Package backend :
 *    "bcrypt": "^5.0.1",
 *    "body-parser": "^1.19.0",
 *    "cors": "^2.8.5",
 *    "dotenv": "^10.0.0",
 *    "express": "^4.17.1",
 *    "express-rate-limit": "^5.2.6",
 *    "helmet": "^4.6.0",
 *    "jsonwebtoken": "^8.5.1",
 *    "maskdata": "^1.1.4",
 *    "multer": "^1.4.2",
 *    "mysql2": "^2.2.5",
 *    "sequelize": "^6.6.2"

# frontend
 Il faut ouvrir le fichier backend avec un logiciel de code, et dans la console lancer : 
  * npm install  (installer tout les packages)
  * npm run serve (Permet de démarrer le serveur côté frontend)

# Package Frontend : 
 *     "axios": "^0.21.1",
 *     "bootstrap": "^5.0.1",
 *     "bootstrap-vue": "^2.21.2",
 *     "core-js": "^3.6.5",
 *     "vue": "^2.6.12",
 *     "vue-router": "^3.2.0",
 *     "vuelidate": "^0.7.6"


Une fois les deux serveurs lancés vous pouvez rejoindre l'application web :   - Local:   http://localhost:8081/
