const express = require("express");
const dotenv = require("dotenv");
const { dbConnection } = require("./dbConfig/database.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
// using middlewares

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'https://circleup-project.netlify.app',
    credentials: true
}));

const PORT = process.env.PORT || 4000;
dbConnection();

const post = require("./routes/post");
const user = require("./routes/user");

// using routes
app.use("/api/v1", post);
app.use("/api/v1", user);

// serving static files for frontend
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });

app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});




