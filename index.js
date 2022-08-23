const express = require('express');
const app = express();
const port = 3000;
const quotesRouter = require('./routes/quotes');

app.get('/', (req, res) => {
    res.json({message: 'alive'});
})

app.use('/quotes', quotesRouter);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});