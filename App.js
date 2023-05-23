
const express = require('express');
const app = express();
const moduleBook = require('./moduleBook')
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.listen(82);
// function generateNewId() {
//     let maxId = 0;
//     for (const Objets of tableauObjets) {
//       if (Objets.id > maxId) {
//         maxId = Objets.id;
//       }
//     }
//     return maxId + 1;
//   }

//   retourne la liste de tous livres
// app.get('/catalogue', (req, res) => {
//   res.status(207).json(tableauObjets);
// });
// // Route pour obtenir un livre par son ID
// app.get('/livres/:id', (req, res) => {
//   const id = req.params.id;
//   const livre = tableauObjets.find(objet => objet.id === parseInt(id));
//   if (livre) {
//   res.status(205).json(livre);
//   } else {
//   res.status(404).send("Aucun livre trouvé avec l'ID spécifié.");
//   }
//   });

// // Route pour enregistrer un nouveau livre
// app.post('/livre', (req, res) => {
//   const nouveauLivre = req.body;
//   nouveauLivre.id = generateNewId();
//   tableauObjets.push(nouveauLivre);
//   res.json(nouveauLivre);
// });

// // Route pour modifier les informations d'un livre
// app.put('/livre/:id', (req, res) => {
//   console.log(req.body);
//   const id = req.params.id;
//   const {Titre,prix,URL}=req.body
//   const livre= tableauObjets.find(livre=>livre.id==id);
//   if(livre){
//     if (Titre) {
//       livre.Titre = Titre;
//     }
//     if (prix) {
//       livre.prix = prix;
//     }
//     if (URL) {
//       livre.URL = URL;
//     }
//     res.send(livre);
//   }else {
//     res.status(404).send("Aucun livre trouvé avec l'ID spécifié.");
//   } 
//   }
// );
// // Route pour supprimer un livre par son ID
// app.delete('/livre/:id', (req, res) => {
//   const id = req.params.id;
//   const index = tableauObjets.findIndex(objet => objet.id === parseInt(id));
//   if (index !== -1) {
//     tableauObjets.splice(index, 1);
//     res.status(210).send(tableauObjets);
//   } else {
//     res.status(504).send("Aucun livre trouvé avec l'ID spécifié.");
//   }
// });

// 9 . d )
app.get('/catalogue',moduleBook.GetLivre);
app.get('/livre/:id',moduleBook.GetLivreid);
app.post('/livre',moduleBook.AddLivre);
app.put('/livre/:id',moduleBook.UpdateLivre);
app.delete('/livre/:id',moduleBook.DeleteLivre);