const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/project2/data.json', (req, res) => {
    const formData = req.body;
    
    // Save form data to a file (data.json)
    fs.writeFile('data.json', JSON.stringify(formData, null, 2), (err) => {
        if (err) {
            res.status(500).send('Error saving data');
        } else {
            res.send('Form data saved successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
