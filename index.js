// const express = require('express')
// const app = express()
// const equipes= require('./equipes.json')
// app.listen(82,()=>{
//     console.log('Rest api via expresse')
// })
// app.get('/equipes',(req,res)=>{
//     res.send(equipes)
// })
// app.get('/',(req,res)=>{
//     res.send('Accuel')
// })
const express = require('express');
const bodyParser= require('body-parser');
const { v4: uuidv4 } = require('uuid');
const joueurs = require('./equipes.json');
const app = express();
app.listen(3000);
app.use(bodyParser.json())
app.use(express.json());
function generateNewId() {
  let maxId = 0;
  for (const joueur of joueurs) {
    if (joueur.id > maxId) {
      maxId = joueur.id;
    }
  }
  return maxId + 1;
}
// 1. Opérations CRUD pour l'entité joueur

// Afficher tous les joueurs
app.get('/', (req, res) => {
  res.send(joueurs);
});
app.get('/joueurs', (req, res) => {
  res.json(joueurs);
});

// Afficher un joueur spécifique
app.get('/joueurs/:poste', (req, res) => {
  // const joueur = joueurs.find((joueur) => joueur.id === parseInt(req.params.id));
  const joueur = joueurs.find((joueur) => joueur.poste === req.params.poste.toString());
  if (!joueur) {
    res.status(404).json({ message: 'Joueur non trouvé' });
  } else {
    res.json(joueur);
  }
});

// Ajouter un joueur

app.post('/joueurs/', (req, res) => {
 
  // const joueur = req.body;
  // joueur.id = uuidv4(); // Generate a new unique identifier
  // joueurs.push(joueur);
  // res.status(201).json(joueur);

  const joueur = req.body;
  
  joueur.id = generateNewId();
  joueurs.push(joueur);
  res.json(joueur);

});

// Mettre à jour un joueur
app.put('/joueurs/:id', (req, res) => {
  const id =req.params.id;
  const {idEquipe,nom,numero,poste} =req.body;
  const joueur= joueurs.find(joueur=>joueur.id==id);
  if(idEquipe){
    joueur.idEquipe=idEquipe;
  }
  if(nom){
    joueur.nom=nom;
  }
  if(numero){
    joueur.numero=numero;
  }
  if(poste){
    joueur.poste=poste;
  }
  res.send(joueurs);
});

// Supprimer un joueur
app.delete('/joueurs/:id', (req, res) => {
  const id=req.params.id;
  const filteredJoueurs=joueurs.filter(joueur=>joueur.id!=id);
  res.send(filteredJoueurs);
});

// 2. Afficher les joueurs d'une équipe via son id

app.get('/equipes/:id/joueurs', (req, res) => {
  const equipeId = parseInt(req.params.id);
  const joueursEquipe = joueurs.filter((joueur) => joueur.idEquipe === equipeId);
  res.json(joueursEquipe);
});

// 3. Afficher l'équipe d'un joueur donné via son id

app.get('/joueurs/:id/equipe', (req, res) => {
  const joueurId = parseInt(req.params.id);
  const joueur = joueurs.find((joueur) => joueur.id === joueurId);
  if (!joueur) {
    res.status(404).json({ message: 'Joueur non trouvé' });
  } else {
    // Supposons que les équipes sont stockées dans un tableau "equipes"
    const equipe = equipes.find((equipe) => equipe.id === joueur.idEquipe);
    if (!equipe) {
      res.status(404).json({ message: 'Équipe non trouvée' });
    } else {
      res.json(equipe);
    }
  }
});

// 4. Chercher un joueur à partir de son nom
app.get('/joueurs/rechercher', (req, res) => {
    const nomJoueur = req.query.nom;
    const joueur = joueurs.find((joueur) => joueur.nom.toLowerCase() === nomJoueur.toLowerCase());
    if (!joueur) {
      res.status(404).json({ message: 'Joueur non trouvé' });
    } else {
      res.json(joueur);
    }
  });