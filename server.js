const express = require('express');
const cors = require('cors');
const path = require("path");

// Create express app
const app = express();

// Enable cross-origin resource sharing
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('reponse from express.js');
})

app.use('/exampleApi', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.listen(8080, () => console.log('Running Node.js express...'));