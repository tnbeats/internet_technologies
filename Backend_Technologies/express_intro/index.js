const express = require("express");
const app = express();


app.use(express.json());

function gcd(a, b) {
    if (b == a) {
        return a;
    } else {
        return (b, a % b);
    }
}

app.post("/gcd", (req, res) => {
    const x = req.body.x;
    const y = req.body.y;

    if (Number.isInteger(x) && Number.isInteger(y)) {
        const result = gcd (x, y);
        res.json({ result });
    } else {
        res.status(400).json({ error: 'Invalid input. Please provide two integers.'});
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080')
});