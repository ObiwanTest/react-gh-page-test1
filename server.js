const express = require('express');
const cors = require('cors');
const path = require("path");

// Create express app
const app = express();

// Enable cross-origin resource sharing
app.use(cors());

app.use(express.static(path.join("build")));
app.use(express.static(path.join("build", "static")));
app.use(express.static("public"));

app.use('/exampleApi', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.use((req, res, next) => {
    res.sendFile(path.join("index.html"));
})

app.listen(8080, () => console.log('Running Node.js express...'));