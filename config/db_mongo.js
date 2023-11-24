const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_DB_URL);

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;