require("dotenv").config();
const express = require("express");
const prisma = require('./config/database');
const PORT = process.env.PORT || 5000;

const storiesRoutes = require("./routes/stories");
const chaptersRoutes = require("./routes/chapters");
const middlewareLogRequest = require("./middleware/logs");

const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

app.use("/stories", (req, res, next) => {
    req.prisma = prisma; 
    next();
}, storiesRoutes);

app.use("/chapters", (req, res, next) => {
    req.prisma = prisma; 
    next();
}, chaptersRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Server Error",
        error: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
