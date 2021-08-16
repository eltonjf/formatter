const express = require('express');
const fs = require('fs');

const app = express();

let text = '';
let ano = '';
let texto = [];

app.get('/arquivos', (req, res) => {

  fs.readFile('./arquivo.txt', 'utf-8', (err, data) => {
    if(err){
      console.error(err)
      return
    }
    text = data.split(',');

    text.map((letter) => {
      ano = letter.replace(/\D/g, '');
      if(ano.length == 4){
        texto.push(ano);
        texto.push(data.split(ano));
        console.log(texto);
        
      }
      
      
    })

    res.send(texto);
  })
}),

app.listen(3000)