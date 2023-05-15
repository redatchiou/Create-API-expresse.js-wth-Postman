// const tableauObjets=[
//     {
//         "id":1,
//         "Titre":"Reminders of Him: ANovel",
//         "prix":90.97,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":2,
//         "Titre":"Ugly Love: A Nove",
//         "prix":102.5,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":3,
//         "Titre":"Where the Crawdads Sing",
//         "prix":78.96,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":4,
//         "Titre":"November 9: A Novel",
//         "prix":123.55 ,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":5,
//         "Titre":"The Return of the Gods",
//         "prix":27.90 ,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":6,
//         "Titre":"I Love You to the Moonand Back ",
//         "prix":55.85,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":7,
//         "Titre":"All Good People Here: ANovel",
//         "prix":90.34,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":8,
//         "Titre":"The Great Reset: And theWar for the World",
//         "prix":100.4,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":9,
//         "Titre":"Good Inside: A Guide to Becoming the Parent YouWant to Be",
//         "prix":106.5,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
//     {
//         "id":10,
//         "Titre":"The Butcher and TheWren: A Novel",
//         "prix":34.78,
//         "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
//     },
// ]
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const moduleBook = require('./moduleBook')
const cors = require('cors');
app.listen(82);
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
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
app.post('/livre',moduleBook.AddLivre);
app.put('/livre/:id',moduleBook.UpdateLivre);
app.delete('/livre/:id',moduleBook.DeleteLivre);