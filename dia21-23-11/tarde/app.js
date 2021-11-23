const methodOverride = require("method-override");
const cors = require("cors");
const express = require("express");
//
const app = express();
const log = console.log;

let port = process.env.PORT || 3000;



app.use(cors()); // permite conectar con servidores distintas
app.use(methodOverride());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let suggestions = [
    {
        title: "Add tags for solutions",
        detail: "Easier to seach for solutions based on a specific stack",
        category: "Enhancement",
        vote: 112,
        comments: [{ algo1: "algo1", algo2: "algo2" }],
        user: "",
    }
];

app.get("/datos", (req, res) => {
    res.send(suggestions);
});



app.listen(port, () => {
    log("start server");
});
