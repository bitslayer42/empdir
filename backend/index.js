const express = require('express');
const app = express();
const port = 3000;
// const cors = require('cors');
// app.use(cors({
//     origin: '*'
// }));
const empsRouter = require('./routes/emps');

app.get('/', (req, res) => {
    res.json({message: 'alive'});
})

app.use('/emps', empsRouter);

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});