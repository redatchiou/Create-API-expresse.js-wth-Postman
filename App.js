const objet=[
    {
        "id":1,
        "Titre":"Reminders of Him: ANovel",
        "prix":90.97,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":2,
        "Titre":"Ugly Love: A Nove",
        "prix":102.5,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/61QR7qoEYVL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":3,
        "Titre":"Where the Crawdads Sing",
        "prix":78.96,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":4,
        "Titre":"November 9: A Novel",
        "prix":123.55 ,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":5,
        "Titre":"The Return of the Gods",
        "prix":27.90 ,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":6,
        "Titre":"I Love You to the Moonand Back ",
        "prix":55.85,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":7,
        "Titre":"All Good People Here: ANovel",
        "prix":90.34,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":8,
        "Titre":"The Great Reset: And theWar for the World",
        "prix":100.4,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":9,
        "Titre":"Good Inside: A Guide to Becoming the Parent YouWant to Be",
        "prix":106.5,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
    {
        "id":10,
        "Titre":"The Butcher and TheWren: A Novel",
        "prix":34.78,
        "URL":"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL210_SR195,210_.jpg"
    },
]
const express = require('express');
const bodyParser= require('body-parser');
const { v4: uuidv4 } = require('uuid');
const joueurs = require('./equipes.json');
const app = express();
// import {GetLivre} from './reda.js'
const GetLivre = require('./reda.js');

// console.log(GetLivre)
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

//   retourne la liste de tous livres
  app.get('/catalogue', (req, res) => {
    if(objet==0){
        res.status(207).json({ message: 'Joueur non trouvé' });
    }else{
        res.json(objet);
    }
    
  });
// retourne le livre dont ID estégale a id passe en paramètre.
  app.get('/livres/:id', (req, res) => {
    const livres = objet.find((livre) => livre.id === parseInt(req.params.id));
    if (!livres) {
      res.status(404).json({ message: 'Joueur non trouvé' });
    } else {
      res.json(livres);
    }
  });


// 9 . d )
app.get('/livres/:id',GetLivre);