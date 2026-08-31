const express = require('express');

const app = express();
const PORT = 3000;

app.get('/about', (req, res) => {
    res.send('This is Sabbir James');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});