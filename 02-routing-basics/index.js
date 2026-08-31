const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users', (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    res.send(`User created: ${name}, ${email}`);

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});