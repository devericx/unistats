const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/.well-known/acme-challenge/gdr1iwKFlqCYll_L5n3jLtiRLSr8G9nMvSEEq776XBs', (req, res) => {
  res.send('gdr1iwKFlqCYll_L5n3jLtiRLSr8G9nMvSEEq776XBs.nT1Djtm4_gDmWMaX8znAJp81RBcm4R9fWiv-IzQWt30');
});

app.use(express.static(`${__dirname}./../../`));
app.listen(PORT);
