require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const wishesRouter = require("./routes/wishesRouter");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

//routes
app.get("/", (req, res) => res.send("Running"));

app.use("/api/wishes", wishesRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(err => console.log(err));

