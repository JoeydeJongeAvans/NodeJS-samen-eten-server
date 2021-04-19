const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/api/info", (req, res) => {
    res.send(importData)
});

app.listen(port, () => {
    console.log(`Example app is listening on port http://localhost:${port}`);
})