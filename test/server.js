const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let count = 0;

app.get('/hit', (req, res) => {
    count++;
    res.json({ count });
});

app.get('/count', (req, res) => {
    res.json({ count });
});

// 🔁 Add this reset endpoint
app.post('/reset', (req, res) => {
    count = 0;
    res.json({ message: "Counter reset", count });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Listening on port ${PORT}`);
});
