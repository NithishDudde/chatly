var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/1", (req, res) => {
    res.sendFile(path.join(__dirname, "signup.html"));
});

app.get("/2", (req, res) => {
    res.sendFile(path.join(__dirname, "forgot-password.html"));
});

app.get("/3", (req, res) => {
    res.sendFile(path.join(__dirname, "chat.html"));
});
app.post("/chat", (req, res) => {
    let userMessage = req.body.message.toLowerCase();
    let botResponse = responses[userMessage] || responses["default"];
    res.json({ reply: botResponse });
});

app.get("/4", (req, res) => {
    res.sendFile(path.join(__dirname, "about-us.html"));
});

app.get("/5", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-us.html"));
});

app.get("/6", (req, res) => {
    res.sendFile(path.join(__dirname, "logout.html"));
});

var PORT = 9250;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
